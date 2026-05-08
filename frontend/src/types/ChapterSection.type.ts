export type ChaptersSectionProps = {
    theme: any
    chapters: any[]
    completedTopics: string[]
    navigate: (path: string) => void
    getChapterProgress: (chapter: any) => {
        totalTopics: number
        completed: number
    }
}