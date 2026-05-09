import styled from 'styled-components'

export const Container = styled.div<{ $theme: any }>`
  max-width: 800px;
  margin: 0 auto;
  padding: ${({ $theme }) => $theme.spacing[24]} ${({ $theme }) => $theme.spacing[16]};
`

export const BackButton = styled.button<{ $theme: any }>`
  background: none;
  border: none;
  color: ${({ $theme }) => $theme.colors.secondary};
  font-family: ${({ $theme }) => $theme.typography.fontFamily.body};
  font-size: ${({ $theme }) => $theme.typography.fontSize.body};
  font-weight: ${({ $theme }) => $theme.typography.fontWeight.bold};
  cursor: pointer;
  padding: 8px 0;
  margin-bottom: ${({ $theme }) => $theme.spacing[16]};
  margin-left: auto;
  display: table;
  text-decoration: underline;
  text-underline-offset: 2px;

  &:hover {
    opacity: 0.8;
  }
`

export const Title = styled.h1<{ $theme: any }>`
  font-family: ${({ $theme }) => $theme.typography.fontFamily.headline};
  font-size: ${({ $theme }) => $theme.typography.fontSize.heading};
  line-height: ${({ $theme }) => $theme.typography.lineHeight.heading};
  letter-spacing: ${({ $theme }) => $theme.typography.letterSpacing.heading};
  color: ${({ $theme }) => $theme.colors.primary};
  margin-bottom: ${({ $theme }) => $theme.spacing[24]};
`

export const ProgressInfo = styled.div<{ $theme: any }>`
  color: ${({ $theme }) => $theme.colors.textBody};
  font-family: ${({ $theme }) => $theme.typography.fontFamily.body};
  font-size: ${({ $theme }) => $theme.typography.fontSize.body};
  letter-spacing: ${({ $theme }) => $theme.typography.letterSpacing.body};
  margin-bottom: ${({ $theme }) => $theme.spacing[24]};
`

export const TopicList = styled.div`
  display: grid;
  gap: 12px;
`

export const TopicCard = styled.div<{ $theme: any; $completed: boolean }>`
  background: ${({ $theme }) => $theme.colors.surface};
  border-radius: ${({ $theme }) => $theme.radius.md};
  border: 1px solid ${({ $theme }) => $theme.colors.border};
  border-left: 4px solid ${({ $theme, $completed }) =>
    $completed ? $theme.colors.success : $theme.colors.primary};
  padding: ${({ $theme }) => $theme.spacing[16]};
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateX(4px);
  }
`

export const TopicTitle = styled.h3<{ $theme: any }>`
  color: ${({ $theme }) => $theme.colors.text};
  font-family: ${({ $theme }) => $theme.typography.fontFamily.body};
  font-size: ${({ $theme }) => $theme.typography.fontSize.body};
  font-weight: ${({ $theme }) => $theme.typography.fontWeight.bold};
  letter-spacing: ${({ $theme }) => $theme.typography.letterSpacing.body};
  margin-bottom: 4px;
`

export const TopicMeta = styled.p<{ $theme: any }>`
  color: ${({ $theme }) => $theme.colors.textBody};
  font-family: ${({ $theme }) => $theme.typography.fontFamily.body};
  font-size: ${({ $theme }) => $theme.typography.fontSize.caption};
  letter-spacing: ${({ $theme }) => $theme.typography.letterSpacing.caption};
`

export const ActionButtons = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 16px;
`

export const ActionButton = styled.button<{ $theme: any }>`
  flex: 1;
  padding: ${({ $theme }) => $theme.spacing[12]};
  border: none;
  border-radius: ${({ $theme }) => $theme.radius.md};
  background: ${({ $theme }) => $theme.button.primaryBg};
  color: ${({ $theme }) => $theme.button.primaryText};
  font-family: ${({ $theme }) => $theme.typography.fontFamily.body};
  font-size: ${({ $theme }) => $theme.typography.fontSize.body};
  font-weight: ${({ $theme }) => $theme.typography.fontWeight.bold};
  letter-spacing: ${({ $theme }) => $theme.typography.letterSpacing.body};
  box-shadow: ${({ $theme }) => $theme.button.primaryShadow};
  cursor: pointer;
  transition: transform 0.1s, box-shadow 0.1s;

  &:hover {
    opacity: 0.95;
  }

  &:active {
    transform: translateY(2px);
    box-shadow: ${({ $theme }) => $theme.button.primaryActiveShadow};
  }
`