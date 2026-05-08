import React from 'react'
import { ICONS } from '@/constants'
import { XPBar, StreakBadge } from '@/components'
import { ChaptersSection, KnotsSection, LinksSection, MeteoSection } from './sections'
import useHome from './useHome'
import {
  Container,
  Header,
  HeaderActions,
  IconButton,
  Greeting,
  Subtitle,
  StatsRow,
  QuickActions,
  ActionButton,
  EmptyState,
} from './Home.styles'

const Home: React.FC = () => {
  const {
    theme,
    t,
    user,
    navigate,
    loading,
    activeView,
    setActiveView,
    chapters,
    completedTopics,
    getGreeting,
    getChapterProgress,
  } = useHome()

  if (loading) {
    return (
      <Container $theme={theme}>
        <p>Cargando...</p>
      </Container>
    )
  }

  return (
    <Container $theme={theme}>
      <Header $theme={theme}>
        <div>
          <Greeting $theme={theme}>
            {getGreeting()}, {user?.firstName}!
          </Greeting>
          <Subtitle $theme={theme}>
            {t('keepLearning')}
          </Subtitle>
        </div>
        <HeaderActions>
          <IconButton
            $theme={theme}
            onClick={() => navigate('/profile')}
            title="Configuración"
          >
            <ICONS.settings size={20} />
          </IconButton>
        </HeaderActions>
      </Header>

      <StatsRow>
        {user && <XPBar xp={user.xp || 0} level={user.level || 1} />}
        {user && <StreakBadge streak={user.streak || 0} />}
      </StatsRow>

      <QuickActions $theme={theme}>
        <ActionButton
          $theme={theme}
          $active={activeView === 'apuntes'}
          onClick={() => setActiveView('apuntes')}
        >
          Apuntes
        </ActionButton>
        <ActionButton
          $theme={theme}
          $active={activeView === 'nudos'}
          onClick={() => setActiveView('nudos')}
        >
          Nudos
        </ActionButton>
        <ActionButton
          $theme={theme}
          $active={activeView === 'meteo'}
          onClick={() => setActiveView('meteo')}
        >
          Meteo
        </ActionButton>
        <ActionButton
          $theme={theme}
          $active={activeView === 'links'}
          onClick={() => setActiveView('links')}
        >
          Links
        </ActionButton>
      </QuickActions>

      {activeView === 'apuntes' && (
        <ChaptersSection
          theme={theme}
          chapters={chapters}
          completedTopics={completedTopics}
          navigate={navigate}
          getChapterProgress={getChapterProgress}
        />
      )}

      {activeView === 'nudos' && (
        <KnotsSection theme={theme} />
      )}

      {activeView === 'meteo' && (
        <MeteoSection theme={theme} />
      )}

      {activeView === 'links' && (
        <LinksSection theme={theme} />
      )}

      {activeView !== 'apuntes' && activeView !== 'nudos' && activeView !== 'meteo' && activeView !== 'links' && (
        <EmptyState $theme={theme}>
          Próximamente disponible
        </EmptyState>
      )}
    </Container>
  )
}

export default Home