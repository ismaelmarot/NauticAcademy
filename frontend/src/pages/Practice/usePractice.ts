import { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { UsePracticeProps } from '@/interfaces'

export const usePractice = ({ items }: UsePracticeProps) => {
  const navigate = useNavigate()

  const [currentIndex, setCurrentIndex] = useState(0)
  const [correctCount, setCorrectCount] = useState(0)
  const [isProcessing, setIsProcessing] = useState(false)
  const [showExitModal, setShowExitModal] = useState(false)

  const currentItem = items[currentIndex]

  const handleSwipe = useCallback(
    (userAnswer: boolean) => {
      if (isProcessing || !currentItem) return

      setIsProcessing(true)

      const isCorrect = userAnswer === currentItem.isTrue

      if (isCorrect) {
        setCorrectCount((prev) => prev + 1)
      }

      setTimeout(() => {
        setCurrentIndex((prev) => {
          if (prev < items.length - 1) {
            setIsProcessing(false)
            return prev + 1
          }

          setTimeout(() => {
            navigate('/')
          }, 2000)

          setIsProcessing(false)

          return prev + 1
        })
      }, 300)
    },
    [currentItem, isProcessing, items.length, navigate]
  )

  const handleExit = useCallback(() => {
    if (currentIndex > 0 && currentIndex < items.length) {
      setShowExitModal(true)
    } else {
      navigate('/')
    }
  }, [currentIndex, items.length, navigate])

  const closeModal = () => {
    setShowExitModal(false)
  }

  const confirmExit = () => {
    navigate('/')
  }

  return {
    currentIndex,
    correctCount,
    isProcessing,
    showExitModal,
    currentItem,
    isFinished: currentIndex >= items.length,

    handleSwipe,
    handleExit,
    closeModal,
    confirmExit,
    setShowExitModal
  }
}