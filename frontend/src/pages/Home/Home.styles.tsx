import styled from 'styled-components'

export const Container = styled.div<{ $theme: any }>`
    max-width: 720px;
    margin: 0 auto;
    padding: ${({ $theme }) => $theme.spacing[32]} ${({ $theme }) => $theme.spacing[24]};

    @media (max-width: 500px) {
        padding: 20px ${({ $theme }) => $theme.spacing[16]};
    }
`

export const Header = styled.div<{ $theme: any }>`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: ${({ $theme }) => $theme.spacing[28] || '28px'};
`

export const HeaderActions = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
`

export const IconButton = styled.button<{ $theme: any }>`
    width: 36px;
    height: 36px;
    border: none;
    background: ${({ $theme }) => $theme.colors.surface};
    color: ${({ $theme }) => $theme.colors.textBody};
    border-radius: ${({ $theme }) => $theme.radius.md};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    transition: all 0.2s;

    &:hover {
        background: ${({ $theme }) => $theme.colors.primaryLight};
        color: ${({ $theme }) => $theme.colors.primary};
    }
`

export const Greeting = styled.h1<{ $theme: any }>`
    font-family: ${({ $theme }) => $theme.typography.fontFamily.headline};
    font-size: ${({ $theme }) => $theme.typography.fontSize.heading};
    line-height: ${({ $theme }) => $theme.typography.lineHeight.heading};
    letter-spacing: ${({ $theme }) => $theme.typography.letterSpacing.heading};
    color: ${({ $theme }) => $theme.colors.primary};
    margin: 0 0 4px 0;
`

export const Subtitle = styled.p<{ $theme: any }>`
    color: ${({ $theme }) => $theme.colors.textBody};
    font-family: ${({ $theme }) => $theme.typography.fontFamily.body};
    font-size: ${({ $theme }) => $theme.typography.fontSize.body};
    letter-spacing: ${({ $theme }) => $theme.typography.letterSpacing.body};
    margin: 0;
`

export const StatsRow = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 28px;
    flex-wrap: wrap;

    @media (max-width: 500px) {
        flex-direction: column;
        gap: 8px;
    }
`

export const QuickActions = styled.div<{ $theme: any }>`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 3px;
    margin: 0 auto ${({ $theme }) => $theme.spacing[28] || '28px'};
    padding: 3px;
    background: ${({ $theme }) => $theme.colors.surface};
    border-radius: ${({ $theme }) => $theme.radius.xxl};
    width: fit-content;
    max-width: 100%;

    @media (max-width: 500px) {
        width: 100%;
    }
`

export const ActionButton = styled.button<{ $theme: any; $active: boolean }>`
    flex: 1;
    padding: 9px 20px;
    border: none;
    background: ${({ $theme, $active }) =>
        $active ? $theme.colors.primary : 'transparent'};
    color: ${({ $theme, $active }) =>
        $active ? 'white' : $theme.colors.textBody};
    border-radius: ${({ $theme }) => $theme.radius.lg};
    cursor: pointer;

    transition: all 0.2s ease;

    &:hover {
        background: ${({ $theme, $active }) =>
        $active ? $theme.colors.primary : $theme.colors.primaryLight};

        color: ${({ $theme, $active }) =>
        $active ? 'white' : $theme.colors.primary};
    }
`

export const SectionHeader = styled.div<{ $theme: any }>`
    font-size: ${({ $theme }) => $theme.typography.fontSize.caption};
    font-weight: ${({ $theme }) => $theme.typography.fontWeight.bold};
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${({ $theme }) => $theme.colors.textBody};
    margin-bottom: ${({ $theme }) => $theme.spacing[12]};
    `

export const EmptyState = styled.div<{ $theme: any }>`
    text-align: center;
    padding: ${({ $theme }) => $theme.spacing[60] || '60px'} 20px;
    color: ${({ $theme }) => $theme.colors.textBody};
`

export const ChapterGrid = styled.div`
    display: grid;
    gap: 12px;

    @media (max-width: 500px) {
        gap: 10px;
    }
`

export const ChapterCard = styled.div<{ $theme: any }>`
    background: ${({ $theme }) => $theme.colors.surface};
    border-radius: ${({ $theme }) => $theme.radius.md};
    border: 1px solid ${({ $theme }) => $theme.colors.border};
    padding: 20px;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        opacity: 0.9;
        transform: translateY(-1px);
    }

    &:active {
        transform: translateY(0);
    }

    @media (max-width: 500px) {
        padding: ${({ $theme }) => $theme.spacing[16]};
    }
`

export const ChapterTitle = styled.h3<{ $theme: any }>`
    color: ${({ $theme }) => $theme.colors.text};
    font-family: ${({ $theme }) => $theme.typography.fontFamily.body};
    font-size: ${({ $theme }) => $theme.typography.fontSize.headingSm};
    font-weight: ${({ $theme }) => $theme.typography.fontWeight.bold};
    letter-spacing: ${({ $theme }) => $theme.typography.letterSpacing.headingSm};
    margin: 0 0 3px 0;
`

export const ChapterDesc = styled.p<{ $theme: any }>`
    color: ${({ $theme }) => $theme.colors.textBody};
    font-family: ${({ $theme }) => $theme.typography.fontFamily.body};
    font-size: ${({ $theme }) => $theme.typography.fontSize.caption};
    letter-spacing: ${({ $theme }) => $theme.typography.letterSpacing.caption};
    margin: 0 0 ${({ $theme }) => $theme.spacing[14] || '14px'} 0;
`

export const ProgressInfo = styled.div<{ $theme: any }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: ${({ $theme }) => $theme.typography.fontFamily.body};
    font-size: ${({ $theme }) => $theme.typography.fontSize.caption};
    color: ${({ $theme }) => $theme.colors.textBody};
    margin-bottom: 8px;
    font-weight: ${({ $theme }) => $theme.typography.fontWeight.medium};
`

export const LinksGrid = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const LinkCategory = styled.div<{ $theme: any }>`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const LinkCategoryTitle = styled.div<{ $theme: any }>`
    font-family: ${({ $theme }) => $theme.typography.fontFamily.body};
    font-size: ${({ $theme }) => $theme.typography.fontSize.caption};
    font-weight: ${({ $theme }) => $theme.typography.fontWeight.bold};
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${({ $theme }) => $theme.colors.textBody};
    padding: 0 4px;
`

export const LinkCard = styled.a<{ $theme: any }>`
    display: flex;
    align-items: center;
    gap: ${({ $theme }) => $theme.spacing[14] || '14px'};
    padding: ${({ $theme }) => $theme.spacing[14] || '14px'} ${({ $theme }) => $theme.spacing[16]};
    background: ${({ $theme }) => $theme.colors.surface};
    border-radius: ${({ $theme }) => $theme.radius.md};
    border: 1px solid ${({ $theme }) => $theme.colors.border};
    text-decoration: none;
    transition: all 0.2s ease;
    cursor: pointer;

    &:hover {
        opacity: 0.9;
        transform: translateY(-1px);
    }
`

export const LinkFavicon = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 8px;
    flex-shrink: 0;
`

export const LinkInfo = styled.div`
    flex: 1;
    min-width: 0;
`

export const LinkTitle = styled.div<{ $theme: any }>`
    color: ${({ $theme }) => $theme.colors.text};
    font-family: ${({ $theme }) => $theme.typography.fontFamily.body};
    font-size: ${({ $theme }) => $theme.typography.fontSize.body};
    font-weight: ${({ $theme }) => $theme.typography.fontWeight.bold};
    letter-spacing: ${({ $theme }) => $theme.typography.letterSpacing.body};
    margin-bottom: 1px;
`

export const LinkDescription = styled.div<{ $theme: any }>`
    color: ${({ $theme }) => $theme.colors.textBody};
    font-family: ${({ $theme }) => $theme.typography.fontFamily.body};
    font-size: ${({ $theme }) => $theme.typography.fontSize.caption};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const LinkArrow = styled.span<{ $theme: any }>`
    color: ${({ $theme }) => $theme.colors.textBody};
    font-size: 16px;
    flex-shrink: 0;
    transition: transform 0.2s;

    ${LinkCard}:hover & {
        transform: translateX(2px);
    }
`

export const KnotsGrid = styled.div`
    display: grid;
    gap: 12px;
`

export const KnotCard = styled.div<{ $theme: any }>`
    padding: ${({ $theme }) => $theme.spacing[16]};
    background: ${({ $theme }) => $theme.colors.surface};
    border-radius: ${({ $theme }) => $theme.radius.md};
    border: 1px solid ${({ $theme }) => $theme.colors.border};
    transition: all 0.2s ease;

    &:hover {
        opacity: 0.9;
        transform: translateY(-1px);
    }
`

export const KnotHeader = styled.div`
    display: flex;
    gap: 14px;
    align-items: flex-start;
`

export const KnotImage = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 8px;
    object-fit: cover;
    flex-shrink: 0;

    @media (max-width: 500px) {
        width: 64px;
        height: 64px;
    }
`

export const KnotInfo = styled.div`
    flex: 1;
    min-width: 0;
`

export const KnotTitle = styled.div<{ $theme: any }>`
    color: ${({ $theme }) => $theme.colors.text};
    font-family: ${({ $theme }) => $theme.typography.fontFamily.body};
    font-size: ${({ $theme }) => $theme.typography.fontSize.body};
    font-weight: ${({ $theme }) => $theme.typography.fontWeight.bold};
    letter-spacing: ${({ $theme }) => $theme.typography.letterSpacing.body};
    margin-bottom: 4px;
`

export const KnotDescription = styled.div<{ $theme: any }>`
    color: ${({ $theme }) => $theme.colors.textBody};
    font-family: ${({ $theme }) => $theme.typography.fontFamily.body};
    font-size: ${({ $theme }) => $theme.typography.fontSize.caption};
    letter-spacing: ${({ $theme }) => $theme.typography.letterSpacing.caption};
    line-height: 1.5;
`

export const KnotPlayOverlay = styled.a<{ $theme: any }>`
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,0.35);
    color: white;
    font-size: 28px;
    font-weight: ${({ $theme }) => $theme.typography.fontWeight.bold};
    text-decoration: none;
    transition: background 0.2s;
    border-radius: ${({ $theme }) => $theme.radius.sm};

    &:hover {
        background: rgba(0,0,0,0.5);
    }
`

export const KnotImageWrapper = styled.div`
    position: relative;
    width: 80px;
    height: 80px;
    flex-shrink: 0;
    border-radius: 8px;
    overflow: hidden;

    @media (max-width: 500px) {
        width: 64px;
        height: 64px;
    }
`