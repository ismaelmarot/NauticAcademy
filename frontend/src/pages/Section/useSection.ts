import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useThemeLanguage, useAuth } from '@/context'
import { getProgress } from '@/api/progress'
import { chapters } from '@/content/structured'

export const useSection = () => {
  const { theme } = useThemeLanguage()

  const { user } = useAuth()

  const navigate = useNavigate()

  const { chapterId, sectionId } =
    useParams()

  const [section, setSection] =
    useState<any>(null)

  const [
    completedTopics,
    setCompletedTopics
  ] = useState<string[]>([])

  useEffect(() => {
    if (!chapterId || !sectionId) {
      return
    }

    const chapter = chapters.find(
      (ch) => ch.id === chapterId
    )

    const foundSection =
      chapter?.sections.find(
        (sec) => sec.id === sectionId
      )

    if (foundSection) {
      setSection(foundSection)
    }

    if (user) {
      getProgress()
        .then((data) => {
          setCompletedTopics(
            data.completedTopics || []
          )
        })
        .catch((err) => {
          console.error(
            'Error loading progress:',
            err
          )
        })
    }
  }, [chapterId, sectionId, user])

  const completedCount = section
    ? section.topics.filter((t: any) =>
        completedTopics.includes(t.id)
      ).length
    : 0

  const goBack = () => {
    navigate(`/chapter/${chapterId}`)
  }

  const goToTopic = (topicId: string) => {
    navigate(`/topic/${topicId}`, {
      state: {
        chapterId,
        sectionId
      }
    })
  }

  const goToQuiz = () => {
    navigate(
      `/quiz/${section.topics[0]?.id}`
    )
  }

  const goToPractice = () => {
    navigate('/practice')
  }

  return {
    theme,

    section,
    completedTopics,
    completedCount,

    goBack,
    goToTopic,
    goToQuiz,
    goToPractice
  }
}