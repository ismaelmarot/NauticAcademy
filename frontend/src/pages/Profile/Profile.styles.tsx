import styled from 'styled-components'

export const Container = styled.div<{ $theme: any }>`
  max-width: 600px;
  margin: 0 auto;
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

  &:hover {
    opacity: 0.8;
  }
`

export const Title = styled.h1<{ $theme: any }>`
  color: ${({ $theme }) => $theme.colors.text};
  font-size: 28px;
  margin-bottom: 24px;
`

export const ProfileCard = styled.div<{ $theme: any }>`
  background: ${({ $theme }) => $theme.colors.surface};
  border-radius: ${({ $theme }) => $theme.radius.lg};
  border: 1px solid ${({ $theme }) => $theme.colors.border};
  padding: 24px;
  margin-bottom: 24px;
`

export const Avatar = styled.div<{ $theme: any }>`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: ${({ $theme }) => $theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ $theme }) => $theme.colors.background};
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 16px;
`

export const Name = styled.h2<{ $theme: any }>`
  color: ${({ $theme }) => $theme.colors.text};
  font-size: 20px;
  margin-bottom: 4px;
`

export const Nickname = styled.p<{ $theme: any }>`
  color: ${({ $theme }) => $theme.colors.textSecondary};
  font-size: 14px;
  margin-bottom: 16px;
`

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 24px;
`

export const StatCard = styled.div<{ $theme: any }>`
  background: ${({ $theme }) => $theme.colors.surface};
  border-radius: ${({ $theme }) => $theme.radius.md};
  border: 1px solid ${({ $theme }) => $theme.colors.border};
  padding: 16px;
  text-align: center;
`

export const StatValue = styled.div<{ $theme: any }>`
  color: ${({ $theme }) => $theme.colors.primary};
  font-size: 24px;
  font-weight: 700;
`

export const StatLabel = styled.div<{ $theme: any }>`
  color: ${({ $theme }) => $theme.colors.textSecondary};
  font-size: 12px;
  margin-top: 4px;
`

export const Section = styled.div`
  margin-bottom: 24px;
`

export const SectionTitle = styled.h3<{ $theme: any }>`
  color: ${({ $theme }) => $theme.colors.text};
  font-size: 18px;
  margin-bottom: 12px;
`

export const LogoutButton = styled.button<{ $theme: any }>`
  width: 100%;
  padding: 14px;
  border: 2px solid ${({ $theme }) => $theme.colors.error};
  border-radius: ${({ $theme }) => $theme.radius.sm};
  background: transparent;
  color: ${({ $theme }) => $theme.colors.error};
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 24px;

  &:hover {
    opacity: 0.8;
  }
`