import React from 'react'
import { ProgressBar } from '@/components'
import { useChapter } from './useChapter'
import {
  BackButton,
  Container,
  ProgressInfo,
  SectionCard,
  SectionDesc,
  SectionList,
  SectionTitle,
  Title
} from './Chapter.styles'

const Chapter: React.FC = () => {
  const {
    theme,
    navigate,
    chapterId,

    chapter,

    completedTopics,

    totalTopics,
    completedCount,
  } = useChapter()

  if (!chapter) {
    return (
      <Container $theme={theme}>
        <p>Capítulo no encontrado</p>
      </Container>
    )
  }

  return (
    <Container $theme={theme}>
      <BackButton
        $theme={theme}
        onClick={() => navigate('/')}
      >
        ← Volver
      </BackButton>

      <Title $theme={theme}>
        {chapter.title}
      </Title>

      <ProgressInfo $theme={theme}>
        {completedCount} / {totalTopics}
        temas completados
      </ProgressInfo>

      <SectionList>
        {chapter.sections.map((section: any) => {
          const sectionCompleted =
            section.topics.filter((t: any) =>
              completedTopics.includes(t.id)
            ).length

          return (
            <SectionCard
              key={section.id}
              $theme={theme}
              onClick={() =>
                navigate(
                  `/chapter/${chapterId}/section/${section.id}`
                )
              }
            >
              <SectionTitle $theme={theme}>
                {section.title}
              </SectionTitle>

              <SectionDesc $theme={theme}>
                {section.topics.length} temas ·{' '}
                {sectionCompleted}/
                {section.topics.length}
                completados
              </SectionDesc>

              <ProgressBar
                progress={
                  section.topics.length > 0
                    ? (
                        sectionCompleted /
                        section.topics.length
                      ) * 100
                    : 0
                }
              />
            </SectionCard>
          )
        })}
      </SectionList>
    </Container>
  )
}

export default Chapter