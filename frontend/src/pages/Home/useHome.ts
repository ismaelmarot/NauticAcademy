import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAuth } from '@/context/AuthContext'
import { useThemeLanguage } from '@/context/ThemeLanguageContext'

import { ActiveView } from '@/types'

import { getProgress } from '@/api/progress'
import { chapters } from '@/content/structured'

const useHome = () => {
    const { theme, t } = useThemeLanguage()
    const { user } = useAuth()

    const navigate = useNavigate()

    const [activeView, setActiveView] =
        useState<ActiveView>('apuntes')

    const [completedTopics, setCompletedTopics] =
        useState<string[]>([])

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (!user) {
            setLoading(false)
            return
        }

        getProgress()
        .then((data) => {
            setCompletedTopics(data.completedTopics || [])
            setLoading(false)
        })
        .catch((err) => {
            console.error('Error loading progress:', err)
            setLoading(false)
        })
    }, [user])

    const getGreeting = () => {
        const hour = new Date().getHours()

        if (hour < 12) return t('goodMorning')
        if (hour < 18) return t('goodAfternoon')

        return t('goodEvening')
    }

    const getChapterProgress = (chapter: any) => {
        const totalTopics = chapter.sections.reduce(
        (acc: number, sec: any) => {
            return acc + sec.topics.length
        },
        0
        )

        const completed = chapter.sections.reduce(
            (acc: number, sec: any) => {
                return (
                acc +
                sec.topics.filter((t: any) =>
                    completedTopics.includes(t.id)
                ).length
                )
            },
            0
        )

        return {
            totalTopics,
            completed
        }
    }

    return {
        theme,
        t,
        user,
        navigate,
        chapters,

        loading,

        activeView,
        setActiveView,

        completedTopics,

        getGreeting,
        getChapterProgress
    }
}

export default useHome