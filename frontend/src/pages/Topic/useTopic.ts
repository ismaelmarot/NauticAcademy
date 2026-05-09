import { useEffect, useState } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { completeTopic } from '@/api/progress'
import { chapters } from '@/content/structured'
import { useThemeLanguage, useAuth } from '@/context'

export const useTopic = () => {
  const { theme } = useThemeLanguage()

  const { user } = useAuth()

  const navigate = useNavigate()

  const { topicId } = useParams()

  const location = useLocation()

  const [topic, setTopic] =
    useState<any>(null)

  const [allTopics, setAllTopics] =
    useState<any[]>([])

  const [currentIndex, setCurrentIndex] =
    useState<number>(-1)

  const [completed, setCompleted] =
    useState(false)

  const [completing, setCompleting] =
    useState(false)

  const chapterId =
    location.state?.chapterId || ''

  const sectionId =
    location.state?.sectionId || ''

  useEffect(() => {
    if (!topicId) {
      return
    }

    let foundTopic: any = null

    let topicsList: any[] = []

    let topicIndex = -1

    if (chapterId && sectionId) {
      const chapter = chapters.find(
        (ch) => ch.id === chapterId
      )

      const section =
        chapter?.sections.find(
          (sec) => sec.id === sectionId
        )

      if (section) {
        topicsList = section.topics

        topicIndex =
          topicsList.findIndex(
            (t) => t.id === topicId
          )

        foundTopic =
          topicsList[topicIndex]
      }
    } else {
      for (const chapter of chapters) {
        for (const section of chapter.sections) {
          const index =
            section.topics.findIndex(
              (t) => t.id === topicId
            )

          if (index !== -1) {
            topicsList = section.topics

            topicIndex = index

            foundTopic =
              topicsList[index]

            break
          }
        }

        if (foundTopic) {
          break
        }
      }
    }

    if (foundTopic) {
      setTopic(foundTopic)

      setAllTopics(topicsList)

      setCurrentIndex(topicIndex)
    }
  }, [topicId, chapterId, sectionId])

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 100)
  }, [topicId])

  const goBack = () => {
    navigate(
      `/chapter/${chapterId}/section/${sectionId}`
    )
  }

  const handleComplete = async () => {
    if (
      completed ||
      !user ||
      completing
    ) {
      return
    }

    setCompleting(true)

    try {
      await completeTopic(topic.id)

      setCompleted(true)

      if (
        currentIndex <
        allTopics.length - 1
      ) {
        navigate(
          `/topic/${
            allTopics[currentIndex + 1].id
          }`,
          {
            state: {
              chapterId,
              sectionId
            }
          }
        )
      } else {
        navigate(
          `/chapter/${chapterId}/section/${sectionId}`
        )
      }
    } catch (err) {
      console.error(
        'Error completing topic:',
        err
      )
    } finally {
      setCompleting(false)
    }
  }

  return {
    theme,

    topic,
    completed,
    completing,

    goBack,
    handleComplete
  }
}