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

export const SectionList = styled.div`
  display: grid;
  gap: 12px;
`

export const SectionCard = styled.div<{ $theme: any }>`
  background: ${({ $theme }) => $theme.colors.surface};
  border-radius: ${({ $theme }) => $theme.radius.md};
  border: 1px solid ${({ $theme }) => $theme.colors.border};
  padding: ${({ $theme }) => $theme.spacing[16]};
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateX(4px);
  }
`

export const SectionTitle = styled.h3<{ $theme: any }>`
  color: ${({ $theme }) => $theme.colors.text};
  font-family: ${({ $theme }) => $theme.typography.fontFamily.body};
  font-size: ${({ $theme }) => $theme.typography.fontSize.headingSm};
  font-weight: ${({ $theme }) => $theme.typography.fontWeight.bold};
  letter-spacing: ${({ $theme }) => $theme.typography.letterSpacing.headingSm};
  margin-bottom: 4px;
`

export const SectionDesc = styled.p<{ $theme: any }>`
  color: ${({ $theme }) => $theme.colors.textBody};
  font-family: ${({ $theme }) => $theme.typography.fontFamily.body};
  font-size: ${({ $theme }) => $theme.typography.fontSize.caption};
  letter-spacing: ${({ $theme }) => $theme.typography.letterSpacing.caption};
`

export const ProgressInfo = styled.div<{ $theme: any }>`
  color: ${({ $theme }) => $theme.colors.textBody};
  font-family: ${({ $theme }) => $theme.typography.fontFamily.body};
  font-size: ${({ $theme }) => $theme.typography.fontSize.body};
  letter-spacing: ${({ $theme }) => $theme.typography.letterSpacing.body};
  margin-bottom: ${({ $theme }) => $theme.spacing[16]};
`