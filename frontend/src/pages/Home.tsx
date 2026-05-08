import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '@/context/AuthContext';
import { useThemeLanguage } from '@/context/ThemeLanguageContext';
import XPBar from '@/components/XPBar';
import StreakBadge from '@/components/StreakBadge';
import ProgressBar from '@/components/ProgressBar';
import { getProgress } from '@/api/progress';
import { chapters } from '@/content/structured';
import { FiSettings } from 'react-icons/fi';

const Container = styled.div<{ $theme: any }>`
  max-width: 720px;
  margin: 0 auto;
  padding: 32px 24px;

  @media (max-width: 500px) {
    padding: 20px 16px;
  }
`;

const Header = styled.div<{ $theme: any }>`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 28px;
`;

const HeaderActions = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const IconButton = styled.button<{ $theme: any }>`
  width: 36px;
  height: 36px;
  border: none;
  background: ${({ $theme }) => $theme.colors.surface};
  color: ${({ $theme }) => $theme.colors.textSecondary};
  border-radius: 35px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  box-shadow: 0 1px 3px rgba(0,0,0,0.06);

  &:hover {
    background: ${({ $theme }) => $theme.colors.primary}15;
    color: ${({ $theme }) => $theme.colors.primary};
    transform: translateY(-1px);
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  }
`;

const Greeting = styled.h1<{ $theme: any }>`
  color: ${({ $theme }) => $theme.colors.text};
  font-size: 26px;
  font-weight: 700;
  letter-spacing: -0.3px;
  margin: 0 0 4px 0;
`;

const Subtitle = styled.p<{ $theme: any }>`
  color: ${({ $theme }) => $theme.colors.textSecondary};
  font-size: 14px;
  font-weight: 400;
  margin: 0;
`;

const StatsRow = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 28px;
  flex-wrap: wrap;

  @media (max-width: 500px) {
    flex-direction: column;
    gap: 8px;
  }
`;

const QuickActions = styled.div<{ $theme: any }>`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3px;
  margin: 0 auto 28px;
  padding: 3px;
  background: ${({ $theme }) => $theme.colors.surface};
  border-radius: 12px;
  width: fit-content;
  max-width: 100%;
  box-shadow: 0 1px 3px rgba(0,0,0,0.06);
  border-radius: 35px;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

const ActionButton = styled.button<{ $theme: any; $active: boolean }>`
  flex: 1;
  padding: 9px 20px;
  border: none;
  background: ${({ $theme, $active }) => $active ? $theme.colors.primary : 'transparent'};
  color: ${({ $theme, $active }) => $active ? 'white' : $theme.colors.textSecondary};
  border-radius: 35px;
  font-size: 13px;
  font-weight: ${({ $active }) => $active ? 600 : 500};
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  letter-spacing: 0.2px;

  &:hover {
    background: ${({ $theme, $active }) => $active ? $theme.colors.primary : ($theme.colors.primary + '12')};
    color: ${({ $theme, $active }) => $active ? 'white' : $theme.colors.primary};
  }

  @media (max-width: 500px) {
    flex: 1 1 auto;
    padding: 10px 12px;
    font-size: 12px;
  }
`;

const ChapterGrid = styled.div`
  display: grid;
  gap: 12px;

  @media (max-width: 500px) {
    gap: 10px;
  }
`;

const ChapterCard = styled.div<{ $theme: any }>`
  background: ${({ $theme }) => $theme.colors.surface};
  border-radius: 14px;
  padding: 20px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 1px 3px rgba(0,0,0,0.06);

  &:hover {
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 1px 3px rgba(0,0,0,0.06);
  }

  @media (max-width: 500px) {
    padding: 16px;
  }
`;

const ChapterTitle = styled.h3<{ $theme: any }>`
  color: ${({ $theme }) => $theme.colors.text};
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 3px 0;
  letter-spacing: -0.2px;
`;

const ChapterDesc = styled.p<{ $theme: any }>`
  color: ${({ $theme }) => $theme.colors.textSecondary};
  font-size: 13px;
  font-weight: 400;
  margin: 0 0 14px 0;
`;

const ProgressInfo = styled.div<{ $theme: any }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: ${({ $theme }) => $theme.colors.textSecondary};
  margin-bottom: 8px;
  font-weight: 500;
`;

const SectionHeader = styled.div<{ $theme: any }>`
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${({ $theme }) => $theme.colors.textSecondary};
  margin-bottom: 12px;
`;

const EmptyState = styled.div<{ $theme: any }>`
  text-align: center;
  padding: 60px 20px;
  color: ${({ $theme }) => $theme.colors.textSecondary};
  font-size: 14px;
  font-weight: 400;
`;

const Home: React.FC = () => {
  const { theme, t } = useThemeLanguage();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [activeView, setActiveView] = useState<'apuntes' | 'nudos' | 'meteo' | 'links'>('apuntes');

  const [completedTopics, setCompletedTopics] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      getProgress()
        .then(data => {
          setCompletedTopics(data.completedTopics || []);
          setLoading(false);
        })
        .catch(err => {
          console.error('Error loading progress:', err);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [user]);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return t('goodMorning');
    if (hour < 18) return t('goodAfternoon');
    return t('goodEvening');
  };

  const getChapterProgress = (chapter: any) => {
    const totalTopics = chapter.sections.reduce((acc: number, sec: any) => 
      acc + sec.topics.length, 0
    );
    const completed = chapter.sections.reduce((acc: number, sec: any) => {
      return acc + sec.topics.filter((t: any) => 
        completedTopics.includes(t.id)
      ).length;
    }, 0);
    return { totalTopics, completed };
  };

  const getVisibleChapters = () => {
    return chapters;
  };

  if (loading) {
    return <Container $theme={theme}><p>Cargando...</p></Container>;
  }

  return (
    <Container $theme={theme}>
      <Header $theme={theme}>
        <div>
          <Greeting $theme={theme}>{getGreeting()}, {user?.firstName}!</Greeting>
          <Subtitle $theme={theme}>{t('keepLearning')}</Subtitle>
        </div>
        <HeaderActions>
          <IconButton $theme={theme} onClick={() => navigate('/profile')} title="Configuración">
            <FiSettings size={20} />
          </IconButton>
        </HeaderActions>
      </Header>

      <StatsRow>
        {user && <XPBar xp={user.xp || 0} level={user.level || 1} />}
        {user && <StreakBadge streak={user.streak || 0} />}
      </StatsRow>

      <QuickActions $theme={theme}>
        <ActionButton $theme={theme} $active={activeView === 'apuntes'} onClick={() => setActiveView('apuntes')}>
          Apuntes
        </ActionButton>
        <ActionButton $theme={theme} $active={activeView === 'nudos'} onClick={() => setActiveView('nudos')}>
          Nudos
        </ActionButton>
        <ActionButton $theme={theme} $active={activeView === 'meteo'} onClick={() => setActiveView('meteo')}>
          Meteo
        </ActionButton>
        <ActionButton $theme={theme} $active={activeView === 'links'} onClick={() => setActiveView('links')}>
          Links
        </ActionButton>
      </QuickActions>

      {activeView === 'apuntes' && (
        <>
          <SectionHeader $theme={theme}>Capítulos</SectionHeader>
          <ChapterGrid>
            {getVisibleChapters().map((chapter) => {
              const progress = getChapterProgress(chapter);
              const totalSections = chapter.sections.length;
              const completedSections = chapter.sections.filter((sec: any) => {
                const sectionTopics = sec.topics.filter((t: any) => 
                  completedTopics.includes(t.id)
                ).length;
                return sectionTopics === sec.topics.length && sec.topics.length > 0;
              }).length;

              const isLocked = false;

              return (
                <ChapterCard
                  key={chapter.id}
                  $theme={theme}
                  onClick={() => !isLocked && navigate(`/chapter/${chapter.id}`)}
                  style={{ opacity: isLocked ? 0.5 : 1, cursor: isLocked ? 'not-allowed' : 'pointer' }}
                >
                  <ChapterTitle $theme={theme}>
                    {chapter.title}
                  </ChapterTitle>
                  <ChapterDesc $theme={theme}>
                    {totalSections} secciones
                  </ChapterDesc>
                  <ProgressInfo $theme={theme}>
                    <span>{completedSections}/{totalSections} secciones completas</span>
                    <span>{progress.completed}/{progress.totalTopics} temas</span>
                  </ProgressInfo>
                  <ProgressBar progress={progress.totalTopics > 0 ? (progress.completed / progress.totalTopics) * 100 : 0} />
                </ChapterCard>
              );
            })}
          </ChapterGrid>
        </>
      )}

      {activeView !== 'apuntes' && (
        <EmptyState $theme={theme}>
          Próximamente disponible
        </EmptyState>
      )}
    </Container>
  );
};

export default Home;
