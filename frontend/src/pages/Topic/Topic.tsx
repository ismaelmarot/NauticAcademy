import React, { useMemo, useCallback } from 'react'
import { FiPlay, FiPause, FiSquare } from 'react-icons/fi'
import { ContentRenderer, ProgressBar } from '@/components'
import { useTopic } from './useTopic'
import { useSpeech } from '@/hooks/useSpeech'
import {
  Container,
  BackButton,
  Header,
  Title,
  Meta,
  SpeechRow,
  SpeechButton,
  SpeechStatus,
  CompleteButton
} from './Topic.styles'

const Topic: React.FC = () => {
  const {
    theme,

    topic,
    completed,
    completing,

    goBack,
    handleComplete
  } = useTopic()

  const speech = useSpeech()

  const speechTexts = useMemo(() => {
    if (!topic) return []
    const texts: string[] = []
    for (const block of topic.content) {
      if (block.type === 'image') continue
      if (block.type === 'list' && block.items) {
        for (const item of block.items) {
          texts.push(item)
        }
      } else if (block.text) {
        texts.push(block.text)
      }
    }
    return texts
  }, [topic])

  const handleToggleSpeech = useCallback(() => {
    speech.toggleRead(speechTexts)
  }, [speech, speechTexts])

  if (!topic) {
    return (
      <Container $theme={theme}>
        <p>Tema no encontrado</p>
      </Container>
    )
  }

  const speakIcon = speech.isPaused
    ? <FiPause size={16} />
    : speech.isSpeaking
      ? <FiSquare size={16} />
      : <FiPlay size={16} />

  const speakLabel = speech.isPaused
    ? 'Reanudar'
    : speech.isSpeaking
      ? 'Detener'
      : 'Escuchar'

  const speakActive = speech.isSpeaking || speech.isPaused

  return (
    <Container $theme={theme}>
      <BackButton
        $theme={theme}
        onClick={goBack}
      >
        ← Volver
      </BackButton>

      <Header>
        <Title $theme={theme}>
          {topic.title}
        </Title>

        <Meta $theme={theme}>
          <span>
            {topic.readingTime} min lectura
          </span>

          {topic.audioTime && (
            <span>
              {topic.audioTime} audio
            </span>
          )}
        </Meta>

        <SpeechRow>
          <SpeechButton
            $theme={theme}
            $active={speakActive}
            onClick={handleToggleSpeech}
            title={speakLabel}
          >
            {speakIcon}
            {speakLabel}
          </SpeechButton>

          {speech.isReading && (
            <SpeechStatus $theme={theme}>
              {speech.isPaused ? 'En pausa' : 'Leyendo...'}
            </SpeechStatus>
          )}
        </SpeechRow>

        <ProgressBar
          progress={completed ? 100 : 0}
        />
      </Header>

      <ContentRenderer
        content={topic.content}
        activeIndex={speech.currentIndex}
      />

      <CompleteButton
        $theme={theme}
        $completed={completed}
        onClick={handleComplete}
        disabled={
          completed || completing
        }
      >
        {completed
          ? '✓ Completado'
          : 'Completar y continuar'}
      </CompleteButton>
    </Container>
  )
}

export default Topic