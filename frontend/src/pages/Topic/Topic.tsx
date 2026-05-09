import React from 'react'
import { ContentRenderer, ProgressBar } from '@/components'
import { useTopic } from './useTopic'
import {
  Container,
  BackButton,
  Header,
  Title,
  Meta,
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

  if (!topic) {
    return (
      <Container $theme={theme}>
        <p>Tema no encontrado</p>
      </Container>
    )
  }

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

        <ProgressBar
          progress={completed ? 100 : 0}
        />
      </Header>

      <ContentRenderer
        content={topic.content}
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