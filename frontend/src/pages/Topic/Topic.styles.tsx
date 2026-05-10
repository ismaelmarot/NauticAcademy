import styled from 'styled-components'

export const Container = styled.div<{ $theme: any }>`
  max-width: 800px;
  margin: 0 auto;
  padding: ${({ $theme }) => $theme.spacing[24]} ${({ $theme }) => $theme.spacing[16]};
`

export const BackButton = styled.button<{ $theme: any }>`
  display: flex;
  align-items: center;
  gap: 6px;
  background: transparent;
  border: none;
  color: ${({ $theme }) => $theme.colors.primary};
  font-family: ${({ $theme }) => $theme.typography.fontFamily.body};
  font-size: ${({ $theme }) => $theme.typography.fontSize.body};
  font-weight: ${({ $theme }) => $theme.typography.fontWeight.medium};
  cursor: pointer;
  padding: 8px 12px;
  border-radius: ${({ $theme }) => $theme.radius.md};
  margin-bottom: ${({ $theme }) => $theme.spacing[16]};
  margin-left: auto;
  transition: all 0.2s;

  &:hover {
    background: ${({ $theme }) => $theme.colors.primaryLight};
  }
`

export const Header = styled.div`
  margin-bottom: 24px;
`

export const Title = styled.h1<{ $theme: any }>`
  font-family: ${({ $theme }) => $theme.typography.fontFamily.headline};
  font-size: ${({ $theme }) => $theme.typography.fontSize.heading};
  line-height: ${({ $theme }) => $theme.typography.lineHeight.heading};
  letter-spacing: ${({ $theme }) => $theme.typography.letterSpacing.heading};
  color: ${({ $theme }) => $theme.colors.primary};
  margin-bottom: 8px;
`

export const Meta = styled.div<{ $theme: any }>`
  display: flex;
  gap: ${({ $theme }) => $theme.spacing[16]};
  color: ${({ $theme }) => $theme.colors.textBody};
  font-family: ${({ $theme }) => $theme.typography.fontFamily.body};
  font-size: ${({ $theme }) => $theme.typography.fontSize.caption};
  letter-spacing: ${({ $theme }) => $theme.typography.letterSpacing.caption};
  margin-bottom: ${({ $theme }) => $theme.spacing[16]};
`

export const SpeechRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
`

export const SpeechButton = styled.button<{ $theme: any; $active: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border: 2px solid ${({ $theme, $active }) =>
    $active ? $theme.colors.primary : $theme.colors.border};
  border-radius: 9999px;
  background: ${({ $theme, $active }) =>
    $active ? $theme.colors.primaryLight : 'transparent'};
  color: ${({ $theme }) => $theme.colors.text};
  font-family: ${({ $theme }) => $theme.typography.fontFamily.body};
  font-size: ${({ $theme }) => $theme.typography.fontSize.caption};
  font-weight: ${({ $theme }) => $theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ $theme }) => $theme.colors.primary};
    background: ${({ $theme }) => $theme.colors.primaryLight};
  }

  &:active {
    transform: scale(0.97);
  }
`

export const SpeechStatus = styled.span<{ $theme: any }>`
  font-size: ${({ $theme }) => $theme.typography.fontSize.caption};
  color: ${({ $theme }) => $theme.colors.textBody};
  font-family: ${({ $theme }) => $theme.typography.fontFamily.body};
`

export const CompleteButton = styled.button<{ $theme: any; $completed: boolean }>`
  width: 100%;
  padding: 14px;
  border: none;
  border-radius: ${({ $theme }) => $theme.radius.md};
  background: ${({ $theme, $completed }) => $completed ? $theme.colors.success : $theme.button.primaryBg};
  color: ${({ $theme }) => $theme.button.primaryText};
  font-family: ${({ $theme }) => $theme.typography.fontFamily.body};
  font-size: ${({ $theme }) => $theme.typography.fontSize.body};
  font-weight: ${({ $theme }) => $theme.typography.fontWeight.bold};
  letter-spacing: ${({ $theme }) => $theme.typography.letterSpacing.body};
  box-shadow: ${({ $theme, $completed }) => $completed ? 'none' : $theme.button.primaryShadow};
  cursor: ${({ $completed }) => $completed ? 'default' : 'pointer'};
  margin-top: ${({ $theme }) => $theme.spacing[24]};
  transition: transform 0.1s, box-shadow 0.1s;

  &:active:not(:disabled) {
    transform: translateY(2px);
    box-shadow: ${({ $theme }) => $theme.button.primaryActiveShadow};
  }

  &:disabled {
    opacity: 0.7;
    cursor: default;
    box-shadow: none;
  }
`