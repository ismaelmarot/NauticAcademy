import styled from 'styled-components'

export const Overlay = styled.div<{ $theme: any }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`

export const Modal = styled.div<{ $theme: any }>`
  background: ${({ $theme }) => $theme.colors.surface};
  border-radius: ${({ $theme }) => $theme.radius.md};
  padding: ${({ $theme }) => $theme.spacing[32]};
  max-width: 400px;
  width: 90%;
  text-align: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
`

export const ModalTitle = styled.h2<{ $theme: any }>`
  color: ${({ $theme }) => $theme.colors.text};
  font-family: ${({ $theme }) => $theme.typography.fontFamily.body};
  font-size: ${({ $theme }) => $theme.typography.fontSize.headingSm};
  font-weight: ${({ $theme }) => $theme.typography.fontWeight.bold};
  letter-spacing: ${({ $theme }) => $theme.typography.letterSpacing.headingSm};
  margin-bottom: ${({ $theme }) => $theme.spacing[12]};
`

export const ModalText = styled.p<{ $theme: any }>`
  color: ${({ $theme }) => $theme.colors.textBody};
  font-family: ${({ $theme }) => $theme.typography.fontFamily.body};
  font-size: ${({ $theme }) => $theme.typography.fontSize.caption};
  letter-spacing: ${({ $theme }) => $theme.typography.letterSpacing.caption};
  margin-bottom: ${({ $theme }) => $theme.spacing[24]};
  line-height: 1.5;
`

export const ModalButtons = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
`

export const CancelButton = styled.button<{ $theme: any }>`
  padding: ${({ $theme }) => $theme.spacing[12]} ${({ $theme }) => $theme.spacing[24]};
  border: 2px solid ${({ $theme }) => $theme.colors.border};
  background: transparent;
  color: ${({ $theme }) => $theme.colors.text};
  border-radius: ${({ $theme }) => $theme.radius.md};
  font-family: ${({ $theme }) => $theme.typography.fontFamily.body};
  font-size: ${({ $theme }) => $theme.typography.fontSize.body};
  font-weight: ${({ $theme }) => $theme.typography.fontWeight.bold};
  letter-spacing: ${({ $theme }) => $theme.typography.letterSpacing.body};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${({ $theme }) => $theme.colors.border};
  }
`

export const ConfirmButton = styled.button<{ $theme: any }>`
  padding: ${({ $theme }) => $theme.spacing[12]} ${({ $theme }) => $theme.spacing[24]};
  border: none;
  background: ${({ $theme }) => $theme.colors.error};
  color: white;
  border-radius: ${({ $theme }) => $theme.radius.md};
  font-family: ${({ $theme }) => $theme.typography.fontFamily.body};
  font-size: ${({ $theme }) => $theme.typography.fontSize.body};
  font-weight: ${({ $theme }) => $theme.typography.fontWeight.bold};
  letter-spacing: ${({ $theme }) => $theme.typography.letterSpacing.body};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    opacity: 0.9;
  }
`

export const Container = styled.div<{ $theme: any }>`
  max-width: 500px;
  margin: 0 auto;
  padding: ${({ $theme }) => $theme.spacing[24]} ${({ $theme }) => $theme.spacing[16]};
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`

export const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 16px;
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
  align-self: flex-start;
  text-decoration: underline;
  text-underline-offset: 2px;

  &:hover {
    opacity: 0.8;
  }
`

export const ExitButton = styled.button<{ $theme: any }>`
  background: transparent;
  border: 2px solid ${({ $theme }) => $theme.colors.border};
  color: ${({ $theme }) => $theme.colors.text};
  font-family: ${({ $theme }) => $theme.typography.fontFamily.body};
  font-size: ${({ $theme }) => $theme.typography.fontSize.caption};
  font-weight: ${({ $theme }) => $theme.typography.fontWeight.medium};
  cursor: pointer;
  padding: 8px ${({ $theme }) => $theme.spacing[16]};
  border-radius: ${({ $theme }) => $theme.radius.md};
  transition: all 0.2s;

  &:hover {
    background: ${({ $theme }) => $theme.colors.border};
  }
`

export const Title = styled.h1<{ $theme: any }>`
  font-family: ${({ $theme }) => $theme.typography.fontFamily.headline};
  font-size: ${({ $theme }) => $theme.typography.fontSize.heading};
  line-height: ${({ $theme }) => $theme.typography.lineHeight.heading};
  letter-spacing: ${({ $theme }) => $theme.typography.letterSpacing.heading};
  color: ${({ $theme }) => $theme.colors.primary};
  margin-bottom: 8px;
`

export const Instruction = styled.p<{ $theme: any }>`
  color: ${({ $theme }) => $theme.colors.textBody};
  font-family: ${({ $theme }) => $theme.typography.fontFamily.body};
  font-size: ${({ $theme }) => $theme.typography.fontSize.caption};
  letter-spacing: ${({ $theme }) => $theme.typography.letterSpacing.caption};
  margin-bottom: ${({ $theme }) => $theme.spacing[24]};
  text-align: center;
`

export const Score = styled.div<{ $theme: any }>`
  color: ${({ $theme }) => $theme.colors.primary};
  font-family: ${({ $theme }) => $theme.typography.fontFamily.body};
  font-size: ${({ $theme }) => $theme.typography.fontSize.body};
  font-weight: ${({ $theme }) => $theme.typography.fontWeight.bold};
  letter-spacing: ${({ $theme }) => $theme.typography.letterSpacing.body};
  margin-top: ${({ $theme }) => $theme.spacing[16]};
`