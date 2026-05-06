import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '@/context/AuthContext';
import { useThemeLanguage } from '@/context/ThemeLanguageContext';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import XPBar from '@/components/XPBar';

const Container = styled.div<{ $theme: any }>`
  max-width: 600px;
  margin: 0 auto;
  padding: 24px 16px;
`;

const BackButton = styled.button<{ $theme: any }>`
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
`;

const Title = styled.h1<{ $theme: any }>`
  color: ${({ $theme }) => $theme.colors.text};
  font-size: 28px;
  margin-bottom: 24px;
`;

const ProfileCard = styled.div<{ $theme: any }>`
  background: ${({ $theme }) => $theme.colors.surface};
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 24px;
`;

const Avatar = styled.div<{ $theme: any }>`
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
`;

const Name = styled.h2<{ $theme: any }>`
  color: ${({ $theme }) => $theme.colors.text};
  font-size: 20px;
  margin-bottom: 4px;
`;

const Nickname = styled.p<{ $theme: any }>`
  color: ${({ $theme }) => $theme.colors.textSecondary};
  font-size: 14px;
  margin-bottom: 16px;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 24px;
`;

const StatCard = styled.div<{ $theme: any }>`
  background: ${({ $theme }) => $theme.colors.surface};
  border-radius: 12px;
  padding: 16px;
  text-align: center;
`;

const StatValue = styled.div<{ $theme: any }>`
  color: ${({ $theme }) => $theme.colors.primary};
  font-size: 24px;
  font-weight: 700;
`;

const StatLabel = styled.div<{ $theme: any }>`
  color: ${({ $theme }) => $theme.colors.textSecondary};
  font-size: 12px;
  margin-top: 4px;
`;

const Section = styled.div`
  margin-bottom: 24px;
`;

const SectionTitle = styled.h3<{ $theme: any }>`
  color: ${({ $theme }) => $theme.colors.text};
  font-size: 18px;
  margin-bottom: 12px;
`;

const LogoutButton = styled.button<{ $theme: any }>`
  width: 100%;
  padding: 14px;
  border: 2px solid ${({ $theme }) => $theme.colors.error};
  border-radius: 8px;
  background: transparent;
  color: ${({ $theme }) => $theme.colors.error};
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 24px;

  &:hover {
    opacity: 0.8;
  }
`;

const Profile: React.FC = () => {
  const { theme, t } = useThemeLanguage();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <Container $theme={theme}>
      <BackButton $theme={theme} onClick={() => navigate('/')}>
        ← Volver
      </BackButton>
      <Title $theme={theme}>Configuración</Title>

      <ProfileCard $theme={theme}>
        <Avatar $theme={theme}>
          {(user.firstName?.[0] || 'U').toUpperCase()}
        </Avatar>
        <Name $theme={theme}>{user.firstName} {user.lastName}</Name>
        {user.nickname && <Nickname $theme={theme}>@{user.nickname}</Nickname>}
        <XPBar xp={user.xp || 0} level={user.level || 1} />
      </ProfileCard>

      <StatsGrid>
        <StatCard $theme={theme}>
          <StatValue $theme={theme}>{user.xp || 0}</StatValue>
          <StatLabel $theme={theme}>{t('xp')}</StatLabel>
        </StatCard>
        <StatCard $theme={theme}>
          <StatValue $theme={theme}>{user.level || 1}</StatValue>
          <StatLabel $theme={theme}>{t('level')}</StatLabel>
        </StatCard>
      </StatsGrid>

      <Section>
        <SectionTitle $theme={theme}>Tema</SectionTitle>
        <ThemeSwitcher />
      </Section>

      <Section>
        <SectionTitle $theme={theme}>Idioma</SectionTitle>
        <LanguageSwitcher />
      </Section>

      <LogoutButton $theme={theme} onClick={logout}>
        {t('logout')}
      </LogoutButton>
    </Container>
  );
};

export default Profile;
