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

export const QuickActionsWrapper = styled.div<{ $theme: any }>`
    position: relative;
    margin: 0 auto ${({ $theme }) => $theme.spacing[28] || '28px'};

    &::before,
    &::after {
        content: '‹';
        position: absolute;
        left: 2px;
        top: 50%;
        transform: translateY(-50%);
        width: 26px;
        height: 26px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        font-weight: 700;
        color: ${({ $theme }) => $theme.colors.primary};
        background: ${({ $theme }) => $theme.colors.surface};
        border-radius: 50%;
        box-shadow: 0 2px 6px rgba(0,0,0,0.08);
        pointer-events: none;
        z-index: 1;
        opacity: 0.7;
    }

    &::after {
        content: '›';
        left: auto;
        right: 2px;
        animation: hintBounceRight 2s ease-in-out infinite;
    }

    &::before {
        animation: hintBounceLeft 2s ease-in-out infinite;
    }

    @keyframes hintBounceRight {
        0%, 100% { transform: translateY(-50%) translateX(0); }
        50% { transform: translateY(-50%) translateX(3px); }
    }

    @keyframes hintBounceLeft {
        0%, 100% { transform: translateY(-50%) translateX(0); }
        50% { transform: translateY(-50%) translateX(-3px); }
    }
`

export const QuickActions = styled.div<{ $theme: any }>`
    display: flex;
    gap: 3px;
    padding: 3px;
    background: ${({ $theme }) => $theme.colors.surface};
    border-radius: ${({ $theme }) => $theme.radius.lg};
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }
`

export const ActionButton = styled.button<{ $theme: any; $active: boolean }>`
    flex-shrink: 0;
    padding: 9px 20px;
    border: none;
    background: ${({ $theme, $active }) =>
        $active ? $theme.colors.primary : 'transparent'};
    color: ${({ $theme, $active }) =>
        $active ? 'white' : $theme.colors.textBody};
    border-radius: ${({ $theme }) => $theme.radius.lg};
    cursor: pointer;
    white-space: nowrap;

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

export const BuoyCategoryCard = styled.div<{ $theme: any }>`
    background: ${({ $theme }) => $theme.colors.surface};
    border-radius: ${({ $theme }) => $theme.radius.lg};
    border: 1px solid ${({ $theme }) => $theme.colors.border};
    padding: ${({ $theme }) => $theme.spacing[16]};
    margin-bottom: ${({ $theme }) => $theme.spacing[16]};

    @media (max-width: 500px) {
        padding: 12px;
    }
`

export const BuoyCategoryTitle = styled.div<{ $theme: any }>`
    font-family: ${({ $theme }) => $theme.typography.fontFamily.body};
    font-size: ${({ $theme }) => $theme.typography.fontSize.body};
    font-weight: ${({ $theme }) => $theme.typography.fontWeight.bold};
    color: ${({ $theme }) => $theme.colors.text};
    margin-bottom: ${({ $theme }) => $theme.spacing[12]};
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
`

export const BuoyCategoryBadge = styled.span<{ $theme: any }>`
    font-size: 11px;
    font-weight: ${({ $theme }) => $theme.typography.fontWeight.medium};
    color: ${({ $theme }) => $theme.colors.primary};
    background: ${({ $theme }) => $theme.colors.primaryLight};
    padding: 2px 10px;
    border-radius: ${({ $theme }) => $theme.radius.full};
    text-transform: none;
    letter-spacing: 0.3px;
`

export const BuoyGrid = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const BuoyCard = styled.div<{ $theme: any }>`
    display: flex;
    gap: 14px;
    align-items: flex-start;
    padding: ${({ $theme }) => $theme.spacing[12]};
    background: ${({ $theme }) => $theme.colors.background};
    border-radius: ${({ $theme }) => $theme.radius.md};
    transition: all 0.2s ease;

    &:hover {
        transform: translateY(-1px);
        box-shadow: 0 2px 8px rgba(0,0,0,0.06);
    }
`

export const BuoyImageWrapper = styled.button`
    width: 80px;
    height: 80px;
    flex-shrink: 0;
    border-radius: 8px;
    overflow: hidden;
    border: none;
    padding: 0;
    cursor: pointer;
    background: white;
    transition: opacity 0.2s;

    &:hover {
        opacity: 0.85;
    }

    @media (max-width: 500px) {
        width: 64px;
        height: 64px;
    }
`

export const BuoyImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
`

export const LightboxOverlay = styled.div<{ $theme: any }>`
    position: fixed;
    inset: 0;
    z-index: 1000;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    animation: fadeIn 0.2s ease;
    overflow-y: auto;

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    @media (max-width: 500px) {
        padding: 16px;
        align-items: flex-start;
        padding-top: 60px;
    }
`

export const LightboxCard = styled.div<{ $theme: any }>`
    max-width: 440px;
    width: 100%;
    background: ${({ $theme }) => $theme.colors.surface};
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
    animation: cardIn 0.25s ease;

    @keyframes cardIn {
        from { transform: translateY(20px) scale(0.96); opacity: 0; }
        to { transform: translateY(0) scale(1); opacity: 1; }
    }
`

export const LightboxImageWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 32px;
    background: #f8f9fb;
    border-bottom: 1px solid #eef0f4;
    min-height: 240px;

    @media (max-width: 500px) {
        padding: 24px;
        min-height: 180px;
    }
`

export const LightboxImage = styled.img`
    max-width: 100%;
    max-height: 280px;
    width: auto;
    height: auto;
    object-fit: contain;
    filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.08));

    @media (max-width: 500px) {
        max-height: 200px;
    }
`

export const LightboxBody = styled.div<{ $theme: any }>`
    padding: 24px;

    @media (max-width: 500px) {
        padding: 20px 16px;
    }
`

export const LightboxCategory = styled.span<{ $theme: any }>`
    display: inline-block;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    color: ${({ $theme }) => $theme.colors.primary};
    background: ${({ $theme }) => $theme.colors.primaryLight};
    padding: 3px 10px;
    border-radius: 6px;
    margin-bottom: 10px;
`

export const LightboxTitle = styled.div<{ $theme: any }>`
    color: ${({ $theme }) => $theme.colors.text};
    font-family: ${({ $theme }) => $theme.typography.fontFamily.body};
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0.3px;
    line-height: 1.3;
    margin-bottom: 16px;
`

export const LightboxDivider = styled.div<{ $theme: any }>`
    height: 1px;
    background: ${({ $theme }) => $theme.colors.border};
    margin-bottom: 16px;
`

export const LightboxDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const LightboxDetailRow = styled.div`
    display: flex;
    align-items: baseline;
    gap: 8px;
`

export const LightboxDetailLabel = styled.div<{ $theme: any }>`
    font-size: 12px;
    font-weight: 700;
    color: ${({ $theme }) => $theme.colors.textSecondary};
    text-transform: uppercase;
    letter-spacing: 0.8px;
    min-width: 110px;
    flex-shrink: 0;

    @media (max-width: 500px) {
        min-width: 90px;
        font-size: 11px;
    }
`

export const LightboxDetailValue = styled.div<{ $theme: any }>`
    font-size: 14px;
    color: ${({ $theme }) => $theme.colors.text};
    line-height: 1.4;
`

export const LightboxClose = styled.button`
    position: absolute;
    top: 12px;
    right: 12px;
    width: 32px;
    height: 32px;
    border: none;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.06);
    color: #666;
    font-size: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
    z-index: 2;

    &:hover {
        background: rgba(0, 0, 0, 0.12);
        color: #222;
    }
`

export const BuoyInfo = styled.div`
    flex: 1;
    min-width: 0;
`

export const BuoyName = styled.div<{ $theme: any }>`
    color: ${({ $theme }) => $theme.colors.text};
    font-family: ${({ $theme }) => $theme.typography.fontFamily.body};
    font-size: ${({ $theme }) => $theme.typography.fontSize.body};
    font-weight: ${({ $theme }) => $theme.typography.fontWeight.bold};
    letter-spacing: ${({ $theme }) => $theme.typography.letterSpacing.body};
    margin-bottom: 6px;
`

export const BuoyDetail = styled.div<{ $theme: any }>`
    color: ${({ $theme }) => $theme.colors.textBody};
    font-family: ${({ $theme }) => $theme.typography.fontFamily.body};
    font-size: ${({ $theme }) => $theme.typography.fontSize.caption};
    letter-spacing: ${({ $theme }) => $theme.typography.letterSpacing.caption};
    line-height: 1.6;
`

export const BuoyDetailLabel = styled.span`
    font-weight: 600;
`

export const QCodeSearch = styled.input<{ $theme: any }>`
    width: 100%;
    padding: 10px 16px;
    margin-bottom: ${({ $theme }) => $theme.spacing[16]};
    border: 1px solid ${({ $theme }) => $theme.colors.border};
    border-radius: ${({ $theme }) => $theme.radius.md};
    background: ${({ $theme }) => $theme.colors.surface};
    color: ${({ $theme }) => $theme.colors.text};
    font-family: ${({ $theme }) => $theme.typography.fontFamily.body};
    font-size: 14px;
    outline: none;
    transition: border-color 0.2s;
    box-sizing: border-box;

    &::placeholder {
        color: ${({ $theme }) => $theme.colors.textDisabled};
    }

    &:focus {
        border-color: ${({ $theme }) => $theme.colors.primary};
    }
`

export const QCodeCategoryCard = styled.div<{ $theme: any }>`
    background: ${({ $theme }) => $theme.colors.surface};
    border-radius: ${({ $theme }) => $theme.radius.lg};
    border: 1px solid ${({ $theme }) => $theme.colors.border};
    padding: ${({ $theme }) => $theme.spacing[16]};
    margin-bottom: ${({ $theme }) => $theme.spacing[16]};
`

export const QCodeCategoryTitle = styled.div<{ $theme: any }>`
    font-family: ${({ $theme }) => $theme.typography.fontFamily.body};
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${({ $theme }) => $theme.colors.textSecondary};
    margin-bottom: 12px;
`

export const QCodeGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6px;

    @media (max-width: 500px) {
        grid-template-columns: 1fr;
    }
`

export const QCodeItem = styled.div<{ $theme: any }>`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 10px;
    border-radius: ${({ $theme }) => $theme.radius.sm};
    transition: background 0.15s;
    cursor: default;

    &:hover {
        background: ${({ $theme }) => $theme.colors.background};
    }
`

export const QCodeCode = styled.div`
    font-family: 'Nunito', -apple-system, BlinkMacSystemFont, sans-serif;
    font-size: 16px;
    font-weight: 700;
    color: #0784ff;
    background: #eef4fd;
    padding: 4px 12px;
    border-radius: 6px;
    min-width: 56px;
    text-align: center;
    flex-shrink: 0;
    letter-spacing: 0.8px;
`

export const QCodeDesc = styled.div<{ $theme: any }>`
    font-family: ${({ $theme }) => $theme.typography.fontFamily.body};
    font-size: 13px;
    color: ${({ $theme }) => $theme.colors.textBody};
    line-height: 1.35;
`

export const VhfSearch = styled.input<{ $theme: any }>`
    width: 100%;
    padding: 10px 16px;
    margin-bottom: ${({ $theme }) => $theme.spacing[16]};
    border: 1px solid ${({ $theme }) => $theme.colors.border};
    border-radius: ${({ $theme }) => $theme.radius.md};
    background: ${({ $theme }) => $theme.colors.surface};
    color: ${({ $theme }) => $theme.colors.text};
    font-family: ${({ $theme }) => $theme.typography.fontFamily.body};
    font-size: 14px;
    outline: none;
    transition: border-color 0.2s;
    box-sizing: border-box;

    &::placeholder {
        color: ${({ $theme }) => $theme.colors.textDisabled};
    }

    &:focus {
        border-color: ${({ $theme }) => $theme.colors.primary};
    }
`

export const VhfCategoryCard = styled.div<{ $theme: any }>`
    background: ${({ $theme }) => $theme.colors.surface};
    border-radius: ${({ $theme }) => $theme.radius.lg};
    border: 1px solid ${({ $theme }) => $theme.colors.border};
    padding: ${({ $theme }) => $theme.spacing[16]};
    margin-bottom: ${({ $theme }) => $theme.spacing[16]};
`

export const VhfCategoryTitle = styled.div<{ $theme: any }>`
    font-family: ${({ $theme }) => $theme.typography.fontFamily.body};
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${({ $theme }) => $theme.colors.textSecondary};
    margin-bottom: 12px;
`

export const VhfGrid = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const VhfItem = styled.div<{ $theme: any }>`
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 12px 14px;
    border-radius: ${({ $theme }) => $theme.radius.md};
    border: 1px solid ${({ $theme }) => $theme.colors.border};
    background: ${({ $theme }) => $theme.colors.background};
    transition: all 0.15s;

    &:hover {
        border-color: ${({ $theme }) => $theme.colors.primaryLight};
        transform: translateY(-1px);
    }
`

export const VhfItemHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

export const VhfChannel = styled.div`
    font-family: 'Nunito', -apple-system, BlinkMacSystemFont, sans-serif;
    font-size: 16px;
    font-weight: 800;
    color: #e8503a;
    background: #fef0ed;
    padding: 3px 12px;
    border-radius: 6px;
    min-width: 56px;
    text-align: center;
    flex-shrink: 0;
    letter-spacing: 0.3px;
`

export const VhfFrequency = styled.span`
    font-family: 'SF Mono', 'Fira Code', 'Courier New', monospace;
    font-size: 13px;
    color: #6b728c;
    letter-spacing: 0.3px;
`

export const VhfDesc = styled.div<{ $theme: any }>`
    font-family: ${({ $theme }) => $theme.typography.fontFamily.body};
    font-size: 13px;
    color: ${({ $theme }) => $theme.colors.textBody};
    line-height: 1.4;
`