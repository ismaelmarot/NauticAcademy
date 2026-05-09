import React from 'react'
import { ThemeSwitcher, LanguageSwitcher, XPBar } from '@/components'
import { useProfile } from './useProfile'
import {
  Avatar,
  BackButton,
  Container,
  LogoutButton,
  Name,
  Nickname,
  ProfileCard,
  Section,
  SectionTitle,
  StatCard,
  StatLabel,
  StatsGrid,
  StatValue,
  Title
} from './Profile.styles'

const Profile: React.FC = () => {
  const {
    theme,
    t,
    user,
    initials,

    goBack,
    goToLogin,
    handleLogout
  } = useProfile()

  if (!user) {
    goToLogin()
    return null
  }

  return (
    <Container $theme={theme}>
      <BackButton
        $theme={theme}
        onClick={goBack}
      >
        ← Volver
      </BackButton>

      <Title $theme={theme}>
        Configuración
      </Title>

      <ProfileCard $theme={theme}>
        <Avatar $theme={theme}>
          {initials}
        </Avatar>

        <Name $theme={theme}>
          {user.firstName} {user.lastName}
        </Name>

        {user.nickname && (
          <Nickname $theme={theme}>
            @{user.nickname}
          </Nickname>
        )}

        <XPBar
          xp={user.xp || 0}
          level={user.level || 1}
        />
      </ProfileCard>

      <StatsGrid>
        <StatCard $theme={theme}>
          <StatValue $theme={theme}>
            {user.xp || 0}
          </StatValue>

          <StatLabel $theme={theme}>
            {t('xp')}
          </StatLabel>
        </StatCard>

        <StatCard $theme={theme}>
          <StatValue $theme={theme}>
            {user.level || 1}
          </StatValue>

          <StatLabel $theme={theme}>
            {t('level')}
          </StatLabel>
        </StatCard>
      </StatsGrid>

      <Section>
        <SectionTitle $theme={theme}>
          Tema
        </SectionTitle>

        <ThemeSwitcher />
      </Section>

      <Section>
        <SectionTitle $theme={theme}>
          Idioma
        </SectionTitle>

        <LanguageSwitcher />
      </Section>

      <LogoutButton
        $theme={theme}
        onClick={handleLogout}
      >
        {t('logout')}
      </LogoutButton>
    </Container>
  )
}

export default Profile