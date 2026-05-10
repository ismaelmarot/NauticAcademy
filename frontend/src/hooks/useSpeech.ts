import { useState, useCallback, useRef, useEffect } from 'react'

interface SpeechState {
  isSupported: boolean
  isSpeaking: boolean
  isPaused: boolean
  currentIndex: number
  isReading: boolean
}

export const useSpeech = () => {
  const [state, setState] = useState<SpeechState>({
    isSupported: typeof window !== 'undefined' && 'speechSynthesis' in window,
    isSpeaking: false,
    isPaused: false,
    currentIndex: -1,
    isReading: false,
  })

  const textsRef = useRef<string[]>([])
  const indexRef = useRef(-1)
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null)
  const voiceRef = useRef<SpeechSynthesisVoice | null>(null)
  const stoppedRef = useRef(false)

  useEffect(() => {
    if (!state.isSupported) return

    const loadVoices = () => {
      const voices = speechSynthesis.getVoices()
      const spanishVoice =
        voices.find((v) => v.lang.startsWith('es-AR')) ||
        voices.find((v) => v.lang.startsWith('es')) ||
        voices.find((v) => v.lang.startsWith('es-ES'))
      if (spanishVoice) {
        voiceRef.current = spanishVoice
      }
    }

    loadVoices()
    speechSynthesis.addEventListener('voiceschanged', loadVoices)
    return () => {
      speechSynthesis.removeEventListener('voiceschanged', loadVoices)
      speechSynthesis.cancel()
    }
  }, [state.isSupported])

  const speakNext = useCallback(() => {
    if (stoppedRef.current) return

    const nextIndex = indexRef.current + 1
    if (nextIndex >= textsRef.current.length) {
      setState((prev) => ({
        ...prev,
        isSpeaking: false,
        isPaused: false,
        currentIndex: -1,
        isReading: false,
      }))
      return
    }

    indexRef.current = nextIndex
    setState((prev) => ({
      ...prev,
      currentIndex: nextIndex,
      isPaused: false,
      isSpeaking: true,
      isReading: true,
    }))

    const text = textsRef.current[nextIndex]
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = 'es-AR'
    utterance.rate = 0.92
    utterance.pitch = 1.0
    utterance.volume = 1.0

    if (voiceRef.current) {
      utterance.voice = voiceRef.current
    }

    utterance.onend = () => {
      speakNext()
    }

    utterance.onerror = () => {
      speakNext()
    }

    utteranceRef.current = utterance
    speechSynthesis.speak(utterance)
  }, [])

  const speak = useCallback(
    (texts: string[]) => {
      if (!state.isSupported) return

      speechSynthesis.cancel()
      textsRef.current = texts
      indexRef.current = -1
      stoppedRef.current = false

      speakNext()
    },
    [state.isSupported, speakNext]
  )

  const pause = useCallback(() => {
    if (state.isSpeaking && !state.isPaused) {
      speechSynthesis.pause()
      setState((prev) => ({ ...prev, isPaused: true }))
    }
  }, [state.isSpeaking, state.isPaused])

  const resume = useCallback(() => {
    if (state.isSpeaking && state.isPaused) {
      speechSynthesis.resume()
      setState((prev) => ({ ...prev, isPaused: false }))
    }
  }, [state.isSpeaking, state.isPaused])

  const stop = useCallback(() => {
    stoppedRef.current = true
    speechSynthesis.cancel()
    textsRef.current = []
    indexRef.current = -1
    setState((prev) => ({
      ...prev,
      isSpeaking: false,
      isPaused: false,
      currentIndex: -1,
      isReading: false,
    }))
  }, [])

  const toggleRead = useCallback(
    (texts: string[]) => {
      if (state.isSpeaking && state.isPaused) {
        resume()
      } else if (state.isSpeaking) {
        pause()
      } else if (state.isReading) {
        stop()
      } else {
        speak(texts)
      }
    },
    [state.isSpeaking, state.isPaused, state.isReading, resume, pause, stop, speak]
  )

  return {
    ...state,
    speak,
    pause,
    resume,
    stop,
    toggleRead,
  }
}
