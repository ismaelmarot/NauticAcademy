import React from 'react'
import { useSection } from './useSection'
import {
  Container,
  BackButton,
  Title,
  ProgressInfo,
  TopicList,
  TopicCard,
  TopicTitle,
  TopicMeta,
  ActionButtons,
  ActionButton
} from './Section.styles'

const Section: React.FC = () => {
  const {
    theme,

    section,
    completedTopics,
    completedCount,

    goBack,
    goToTopic,
    goToQuiz,
    goToPractice
  } = useSection()

  if (!section) {
    return (
      <Container $theme={theme}>
        <p>Sección no encontrada</p>
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

      <Title $theme={theme}>
        {section.title}
      </Title>

      <ProgressInfo $theme={theme}>
        {completedCount} /{' '}
        {section.topics.length} temas
        completados
      </ProgressInfo>

      <TopicList>
        {section.topics.map(
          (topic: any) => {
            const isCompleted =
              completedTopics.includes(
                topic.id
              )

            return (
              <TopicCard
                key={topic.id}
                $theme={theme}
                $completed={isCompleted}
                onClick={() =>
                  goToTopic(topic.id)
                }
              >
                <TopicTitle $theme={theme}>
                  {topic.title}
                </TopicTitle>

                <TopicMeta $theme={theme}>
                  {topic.readingTime} min
                  lectura
                </TopicMeta>
              </TopicCard>
            )
          }
        )}
      </TopicList>

      <ActionButtons>
        <ActionButton
          $theme={theme}
          onClick={goToQuiz}
        >
          Quiz
        </ActionButton>

        <ActionButton
          $theme={theme}
          onClick={goToPractice}
        >
          Práctica
        </ActionButton>
      </ActionButtons>
    </Container>
  )
}

export default Section