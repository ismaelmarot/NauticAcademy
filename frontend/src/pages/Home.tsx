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
  max-width: 800px;
  margin: 0 auto;
  padding: 24px 20px;

  @media (max-width: 500px) {
    padding: 16px 14px;
  }
`;

const Header = styled.div<{ $theme: any }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const HeaderActions = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const IconButton = styled.button<{ $theme: any }>`
  background: none;
  border: 2px solid ${({ $theme }) => $theme.colors.primary};
  color: ${({ $theme }) => $theme.colors.primary};
  width: 40px;
  height: 40px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

const Greeting = styled.h1<{ $theme: any }>`
  color: ${({ $theme }) => $theme.colors.text};
  font-size: 24px;
  margin-bottom: 4px;
`;

const Subtitle = styled.p<{ $theme: any }>`
  color: ${({ $theme }) => $theme.colors.textSecondary};
  font-size: 14px;
`;

const StatsRow = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
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
  gap: 4px;
  margin: 0 auto 24px;
  padding: 4px;
  border: 2px solid ${({ $theme }) => $theme.colors.primary}44;
  background: ${({ $theme }) => $theme.colors.surface}80;
  border-radius: 100px;
  width: fit-content;
  max-width: 100%;
  backdrop-filter: blur(8px);

  @media (max-width: 500px) {
    border-radius: 16px;
    width: 100%;
    padding: 6px;
  }
`;

const ActionButton = styled.button<{ $theme: any; $active: boolean }>`
  flex: 1;
  padding: 10px 22px;
  border: none;
  background: ${({ $theme, $active }) => $active ? $theme.colors.primary : 'transparent'};
  color: ${({ $theme, $active }) => $active ? 'white' : $theme.colors.primary};
  border-radius: 100px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;
  white-space: nowrap;

  &:hover {
    opacity: 0.85;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 500px) {
    flex: 1 1 auto;
    padding: 12px 14px;
    font-size: 13px;
    min-width: 0;
  }
`;

const ChapterGrid = styled.div`
  display: grid;
  gap: 14px;
  margin-top: 4px;

  @media (max-width: 500px) {
    gap: 10px;
  }
`;

const ChapterCard = styled.div<{ $theme: any }>`
  background: ${({ $theme }) => $theme.colors.surface};
  border-radius: 16px;
  padding: 20px;
  cursor: pointer;
  transition: all 0.25s ease;
  border: 1px solid ${({ $theme }) => $theme.colors.textSecondary}22;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.1);
    border-color: ${({ $theme }) => $theme.colors.primary}44;
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 500px) {
    padding: 16px;
  }
`;

const ChapterTitle = styled.h3<{ $theme: any }>`
  color: ${({ $theme }) => $theme.colors.primary};
  margin-bottom: 8px;
  font-size: 18px;
`;

const ChapterDesc = styled.p<{ $theme: any }>`
  color: ${({ $theme }) => $theme.colors.textSecondary};
  font-size: 14px;
  margin-bottom: 12px;
`;

const ProgressInfo = styled.div<{ $theme: any }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  color: ${({ $theme }) => $theme.colors.textSecondary};
  margin-bottom: 8px;
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
      )}

      {activeView === 'nudos' && (
        <p style={{ color: theme.colors.textSecondary, textAlign: 'center', marginTop: 40 }}>
          Próximamente...
        </p>
      )}

      {activeView === 'meteo' && (
        <p style={{ color: theme.colors.textSecondary, textAlign: 'center', marginTop: 40 }}>
          Próximamente...
        </p>
      )}

      {activeView === 'links' && (
        <p style={{ color: theme.colors.textSecondary, textAlign: 'center', marginTop: 40 }}>
          Próximamente...
        </p>
      )}
    </Container>
  );
};

export default Home;
