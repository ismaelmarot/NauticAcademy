import React from 'react'
import { ICONS } from '@/constants'
import { XPBar, StreakBadge } from '@/components'
import { ChaptersSection, KnotsSection, LinksSection, MeteoSection, BuoysSection, QCodeSection, VhfSection } from './sections'
import useHome from './useHome'
import {
  Container,
  Header,
  HeaderActions,
  IconButton,
  Greeting,
  Subtitle,
  StatsRow,
  QuickActionsWrapper,
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

      <QuickActionsWrapper $theme={theme}>
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
        <ActionButton
          $theme={theme}
          $active={activeView === 'boyas'}
          onClick={() => setActiveView('boyas')}
        >
          Boyas
        </ActionButton>
        <ActionButton
          $theme={theme}
          $active={activeView === 'qcode'}
          onClick={() => setActiveView('qcode')}
        >
          Código Q
        </ActionButton>
        <ActionButton
          $theme={theme}
          $active={activeView === 'vhf'}
          onClick={() => setActiveView('vhf')}
        >
          VHF
        </ActionButton>
      </QuickActions>
      </QuickActionsWrapper>

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

      {activeView === 'boyas' && (
        <BuoysSection theme={theme} />
      )}

      {activeView === 'qcode' && (
        <QCodeSection theme={theme} />
      )}

      {activeView === 'vhf' && (
        <VhfSection theme={theme} />
      )}

      {activeView !== 'apuntes' && activeView !== 'nudos' && activeView !== 'meteo' && activeView !== 'links' && activeView !== 'boyas' && activeView !== 'qcode' && activeView !== 'vhf' && (
        <EmptyState $theme={theme}>
          Próximamente disponible
        </EmptyState>
      )}
    </Container>
  )
}

export default Home