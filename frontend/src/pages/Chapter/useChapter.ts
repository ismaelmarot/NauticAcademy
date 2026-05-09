import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuth, useThemeLanguage } from '@/context'
import { getProgress } from '@/api'
import { chapters } from '@/content/structured'

export const useChapter = () => {
    const { theme } = useThemeLanguage()

    const { user } = useAuth()

    const navigate = useNavigate()

    const { chapterId } = useParams()

    const [chapter, setChapter] =
        useState<any>(null)

    const [completedTopics,
        setCompletedTopics] =
        useState<string[]>([])

    useEffect(() => {
        const found = chapters.find(
            (ch) => ch.id === chapterId
        )

        if (found) {
            setChapter(found)
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
    }, [chapterId, user])

    const totalTopics =
        chapter?.sections.reduce(
            (acc: number, sec: any) =>
                acc + sec.topics.length,
            0
        ) || 0

    const completedCount =
        chapter?.sections.reduce(
            (acc: number, sec: any) => {
                return (
                    acc +
                    sec.topics.filter((t: any) =>
                        completedTopics.includes(t.id)
                ).length
                )
            },
        0
        ) || 0

    return {
        theme,
        navigate,
        chapterId,

        chapter,

        completedTopics,

        totalTopics,
        completedCount,
    }
}