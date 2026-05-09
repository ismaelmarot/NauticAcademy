import { useState, useEffect, useCallback, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { submitQuizResult } from '@/api/progress'
import { chapters } from '@/content/structured'
import { useThemeLanguage, useAuth } from '@/context'

export const useQuiz = () => {
  const { theme, t } = useThemeLanguage()
  const { user, refreshUser } = useAuth()

  const navigate = useNavigate()
  const { topicId } = useParams()

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)
  const [questions, setQuestions] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  const scoreRef = useRef(0)

  useEffect(() => {
    scoreRef.current = score
  }, [score])

  useEffect(() => {
    const loadQuestions = () => {
      if (!topicId) {
        setLoading(false)
        return
      }

      for (const chapter of chapters) {
        for (const section of chapter.sections) {
          const topic = section.topics.find(
            (t) => t.id === topicId
          )

          if (
            topic &&
            topic.quiz &&
            topic.quiz.length > 0
          ) {
            setQuestions(topic.quiz)
            setLoading(false)
            return
          }
        }
      }

      setLoading(false)
    }

    loadQuestions()
  }, [topicId])

  const handleAnswer = useCallback(
    (correct: boolean) => {
      if (correct) {
        setScore((prev) => {
          const newScore = prev + 1
          scoreRef.current = newScore
          return newScore
        })
      }
    },
    []
  )

  const handleNext = useCallback(() => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1)
    } else {
      setFinished(true)

      if (user) {
        submitQuizResult(
          topicId || 'quiz',
          scoreRef.current,
          questions.length
        )
          .then(() => {
            refreshUser()
          })
          .catch((err) =>
            console.error(
              'Error submitting quiz:',
              err
            )
          )
      }
    }
  }, [
    currentQuestion,
    questions.length,
    user,
    topicId,
    refreshUser
  ])

  const restartQuiz = () => {
    setCurrentQuestion(0)
    setScore(0)
    setFinished(false)
  }

  const goBack = () => {
    navigate(-1)
  }

  const goHome = () => {
    navigate('/')
  }

  const getResultMessage = () => {
    const percentage =
      (score / questions.length) * 100

    if (percentage === 100) {
      return '¡Perfecto! Dominas este tema.'
    }

    if (percentage >= 80) {
      return '¡Excelente trabajo!'
    }

    if (percentage >= 60) {
      return 'Buen resultado, sigue practicando.'
    }

    if (percentage >= 40) {
      return 'Puedes mejorar con más estudio.'
    }

    return 'Te recomendamos repasar el contenido.'
  }

  return {
    theme,
    t,
    user,

    loading,
    questions,
    currentQuestion,
    score,
    finished,

    handleAnswer,
    handleNext,

    restartQuiz,
    goBack,
    goHome,

    getResultMessage
  }
}