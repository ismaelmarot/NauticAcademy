import React from 'react'
import { ChaptersSectionProps } from '@/types'
import { ProgressBar } from '@/components'
import {
    SectionHeader,
    ChapterGrid,
    ChapterCard,
    ChapterTitle,
    ChapterDesc,
    ProgressInfo,
} from '../../Home.styles'

export const ChaptersSection: React.FC<ChaptersSectionProps> = ({
    theme,
    chapters,
    completedTopics,
    navigate,
    getChapterProgress,
}) => {
    return (
        <>
        <SectionHeader $theme={theme}>
            Capítulos
        </SectionHeader>

        <ChapterGrid>
            {chapters.map((chapter: any) => {
            const progress =
                getChapterProgress(chapter)

            const totalSections =
                chapter.sections.length

            const completedSections =
                chapter.sections.filter((sec: any) => {
                const sectionTopics =
                    sec.topics.filter((t: any) =>
                    completedTopics.includes(t.id)
                    ).length

                return (
                    sectionTopics ===
                    sec.topics.length &&
                    sec.topics.length > 0
                )
                }).length

            const isLocked = false

            return (
                <ChapterCard
                key={chapter.id}
                $theme={theme}
                onClick={() =>
                    !isLocked &&
                    navigate(`/chapter/${chapter.id}`)
                }
                style={{
                    opacity: isLocked ? 0.5 : 1,
                    cursor: isLocked
                    ? 'not-allowed'
                    : 'pointer',
                }}
                >
                <ChapterTitle $theme={theme}>
                    {chapter.title}
                </ChapterTitle>

                <ChapterDesc $theme={theme}>
                    {totalSections} secciones
                </ChapterDesc>

                <ProgressInfo $theme={theme}>
                    <span>
                    {completedSections}/
                    {totalSections} secciones completas
                    </span>

                    <span>
                    {progress.completed}/
                    {progress.totalTopics} temas
                    </span>
                </ProgressInfo>

                <ProgressBar
                    progress={
                    progress.totalTopics > 0
                        ? (progress.completed /
                            progress.totalTopics) *
                        100
                        : 0
                    }
                />
                </ChapterCard>
            )
            })}
        </ChapterGrid>
        </>
    )
}