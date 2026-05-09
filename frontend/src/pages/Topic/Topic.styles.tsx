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