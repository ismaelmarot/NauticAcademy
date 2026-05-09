import styled from 'styled-components'

export const Container = styled.div<{ $theme: any }>`
  max-width: 600px;
  margin:0 auto;
  padding: 24px 16px;
`

export const BackButton = styled.button<{ $theme: any }>`
  background: none;
  border: none;
  color: ${({ $theme }) => $theme.colors.primary};
  font-size: 16px;
  cursor: pointer;
  padding: 8px 0;
  margin-bottom: 16px;
  margin-left: auto;
  display: table;

  &:hover {
    opacity: 0.8;
  }
`

export const Header = styled.div`
  margin-bottom: 24px;
`

export const Title = styled.h1<{ $theme: any }>`
  color: ${({ $theme }) => $theme.colors.text};
  font-size: 24px;
  margin-bottom: 8px;
`

export const Progress = styled.div<{ $theme: any }>`
  color: ${({ $theme }) => $theme.colors.textSecondary};
  font-size: 14px;
  margin-bottom: 16px;
`

export const ResultCard = styled.div<{ $theme: any }>`
  background: ${({ $theme }) => $theme.colors.surface};
  border-radius: ${({ $theme }) => $theme.radius.lg};
  border: 1px solid ${({ $theme }) => $theme.colors.border};
  padding: 32px;
  text-align: center;
  margin-top: 24px;
  animation: fadeIn 0.5s ease-in;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`

export const ResultTitle = styled.h2<{ $theme: any }>`
  color: ${({ $theme }) => $theme.colors.primary};
  margin-bottom: 16px;
`

export const ResultText = styled.p<{ $theme: any }>`
  color: ${({ $theme }) => $theme.colors.text};
  font-size: 18px;
  margin-bottom: 8px;
`

export const ResultMessage = styled.p<{ $theme: any }>`
  color: ${({ $theme }) => $theme.colors.textSecondary};
  font-size: 14px;
  margin-bottom: 24px;
`

export const Button = styled.button<{ $theme: any }>`
  padding: 14px 32px;
  border: none;
  border-radius: ${({ $theme }) => $theme.radius.sm};
  background: ${({ $theme }) => $theme.colors.primary};
  color: ${({ $theme }) => $theme.colors.background};
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin: 8px;

  &:hover {
    opacity: 0.9;
  }
`