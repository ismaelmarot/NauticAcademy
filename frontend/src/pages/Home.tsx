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

const LinksGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const LinkCategory = styled.div<{ $theme: any }>`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const LinkCategoryTitle = styled.div<{ $theme: any }>`
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${({ $theme }) => $theme.colors.textSecondary};
  padding: 0 4px;
`;

const LinkCard = styled.a<{ $theme: any }>`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 16px;
  background: ${({ $theme }) => $theme.colors.surface};
  border-radius: 14px;
  text-decoration: none;
  box-shadow: 0 1px 3px rgba(0,0,0,0.06);
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
    transform: translateY(-1px);
  }
`;

const LinkFavicon = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 8px;
  flex-shrink: 0;
`;

const LinkInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

const LinkTitle = styled.div<{ $theme: any }>`
  color: ${({ $theme }) => $theme.colors.text};
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 1px;
`;

const LinkDescription = styled.div<{ $theme: any }>`
  color: ${({ $theme }) => $theme.colors.textSecondary};
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const LinkArrow = styled.span<{ $theme: any }>`
  color: ${({ $theme }) => $theme.colors.textSecondary};
  font-size: 16px;
  flex-shrink: 0;
  transition: transform 0.2s;

  ${LinkCard}:hover & {
    transform: translateX(2px);
  }
`;

const METEO_DATA: { category: string; links: { name: string; description: string; url: string }[] }[] = [
  {
    category: 'Viento y pronóstico marítimo',
    links: [
      { name: 'Windy', description: 'Visual para viento, lluvia, olas, presión y tormentas.', url: 'https://www.windy.com' },
      { name: 'PredictWind', description: 'Usado en navegación oceánica y regatas.', url: 'https://www.predictwind.com' },
      { name: 'Meteoblue', description: 'Pronósticos hiper detallados y mapas.', url: 'https://www.meteoblue.com' },
      { name: 'Ventusky', description: 'Similar a Windy, muy bueno visualmente.', url: 'https://www.ventusky.com' }
    ]
  },
  {
    category: 'Mareas y corrientes',
    links: [
      { name: 'Tides4Fishing', description: 'Mareas, sol/luna, pesca y actividad marítima.', url: 'https://www.tides4fishing.com' },
      { name: 'Tide Forecast', description: 'Predicción de mareas global.', url: 'https://www.tide-forecast.com' },
      { name: 'NOAA Tides & Currents', description: 'Muy técnico y preciso.', url: 'https://tidesandcurrents.noaa.gov' }
    ]
  },
  {
    category: 'Olas y swell',
    links: [
      { name: 'Magicseaweed', description: 'Surf y swell marítimo.', url: 'https://www.magicseaweed.com' },
      { name: 'Surfline', description: 'Cámaras, swell y olas en vivo.', url: 'https://www.surfline.com' },
      { name: 'Stormsurf', description: 'Excelente para analizar swell oceánico.', url: 'https://www.stormsurf.com' }
    ]
  },
  {
    category: 'Radar y tormentas',
    links: [
      { name: 'RainViewer', description: 'Radar de lluvia en tiempo real.', url: 'https://www.rainviewer.com' },
      { name: 'LightningMaps', description: 'Rayos en tiempo real.', url: 'https://www.lightningmaps.org' },
      { name: 'Zoom Earth', description: 'Satélite en vivo + tormentas + huracanes.', url: 'https://www.zoom.earth' }
    ]
  }
];

const LINKS_DATA: { category: string; links: { name: string; description: string; url: string }[] }[] = [
  {
    category: 'Cartas y navegación',
    links: [
      { name: 'MarineTraffic', description: 'Barcos en tiempo real.', url: 'https://www.marinetraffic.com' },
      { name: 'Navionics', description: 'Cartografía náutica interactiva.', url: 'https://webapp.navionics.com' },
      { name: 'OpenSeaMap', description: 'Mapa náutico open source.', url: 'https://www.openseamap.org' }
    ]
  },
  {
    category: 'Cámaras y condiciones en vivo',
    links: [
      { name: 'Windy Webcams', description: 'Webcams integradas con clima.', url: 'https://www.windy.com/-Webcams/webcams' },
      { name: 'Insecam', description: 'Algunas cámaras portuarias públicas.', url: 'https://www.insecam.org' }
    ]
  }
];

const KnotsGrid = styled.div`
  display: grid;
  gap: 12px;
`;

const KnotCard = styled.div<{ $theme: any }>`
  padding: 16px;
  background: ${({ $theme }) => $theme.colors.surface};
  border-radius: 14px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.06);
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
    transform: translateY(-1px);
  }
`;

const KnotHeader = styled.div`
  display: flex;
  gap: 14px;
  align-items: flex-start;
`;

const KnotImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 10px;
  object-fit: cover;
  flex-shrink: 0;

  @media (max-width: 500px) {
    width: 64px;
    height: 64px;
  }
`;

const KnotInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

const KnotTitle = styled.div<{ $theme: any }>`
  color: ${({ $theme }) => $theme.colors.text};
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 4px;
`;

const KnotDescription = styled.div<{ $theme: any }>`
  color: ${({ $theme }) => $theme.colors.textSecondary};
  font-size: 13px;
  line-height: 1.5;
`;

const KnotPlayOverlay = styled.a<{ $theme: any }>`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,0.35);
  color: white;
  font-size: 28px;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s;
  border-radius: 10px;

  &:hover {
    background: rgba(0,0,0,0.5);
  }
`;

const KnotImageWrapper = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  flex-shrink: 0;
  border-radius: 10px;
  overflow: hidden;

  @media (max-width: 500px) {
    width: 64px;
    height: 64px;
  }
`;

const KNOTS_DATA = [
  {
    id: 'llano',
    name: 'Nudo Llano',
    description: 'Une dos cabos del mismo grosor. Ideal para atar cosas sin gran esfuerzo.',
    image: '/images/content/timonel/knots/nudo_llano.png',
    url: 'https://knots3d.com/en/square-knot'
  },
  {
    id: 'vuelta-escota',
    name: 'Nudo Vuelta de Escota',
    description: 'Une cabos de distinto grosor. Rápido de hacer y deshacer.',
    image: '/images/content/timonel/knots/nudo_vuelta_de_escota.png',
    url: 'https://knots3d.com/en/sheet-bend-knot'
  },
  {
    id: 'ocho',
    name: 'Nudo Ocho',
    description: 'Nudo de tope que impide que el cabo se salga de donde está enhebrado.',
    image: '/images/content/timonel/knots/nudo_ocho.png',
    url: 'https://knots3d.com/en/figure-eight-knot'
  },
  {
    id: 'fraile',
    name: 'Nudo de Fraile',
    description: 'Nudo de tope múltiple para terminar chicotes o crear un mango de tracción.',
    image: '/images/content/timonel/knots/nudo_fraile.png',
    url: 'https://knots3d.com/en/triple-overhand-knot'
  },
  {
    id: 'ballestrinque',
    name: 'Nudo Ballestrinque',
    description: 'Afirma un cabo a un poste, argolla o barra. Ajustable y fácil de desarmar.',
    image: '/images/content/timonel/knots/nudo_ballestrinque.png',
    url: 'https://knots3d.com/en/clove-hitch-knot'
  },
  {
    id: 'margarita',
    name: 'Nudo Margarita',
    description: 'Acorta un cabo o hace un arreglo de emergencia en un cabo dañado.',
    image: '/images/content/timonel/knots/nudo_margarita.png',
    url: 'https://knots3d.com/en/sheepshank-knot'
  },
  {
    id: 'corredizo',
    name: 'Nudo Corredizo',
    description: 'Lazo simple que se ajusta al tirar. Ideal para enlazar objetos.',
    image: '/images/content/timonel/knots/nudo_corredizo.png',
    url: 'https://knots3d.com/en/simple-overhand-noose-knot'
  },
  {
    id: 'as-de-guia',
    name: 'Nudo As de Guía',
    description: 'Lazo fijo que no se desliza ni se afloja. Esencial para navegantes.',
    image: '/images/content/timonel/knots/nudo_as_de_guia.png',
    url: 'https://knots3d.com/en/bowline-knot'
  },
  {
    id: 'vuelta-cornamuza',
    name: 'Nudo Vuelta de Cornamusa',
    description: 'Fija un cabo a una cornamusa o bita de forma rápida y segura.',
    image: '/images/content/timonel/knots/nudo_vuelta_de_cornamuza.png',
    url: 'https://knots3d.com/en/cleat-hitch-knot'
  }
];

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

      {activeView === 'nudos' && (
        <>
          <SectionHeader $theme={theme}>Nudos</SectionHeader>
          <KnotsGrid>
            {KNOTS_DATA.map((knot) => (
              <KnotCard key={knot.id} $theme={theme}>
                <KnotHeader>
                  <KnotImageWrapper>
                    <KnotImage src={knot.image} alt={knot.name} />
                    <KnotPlayOverlay $theme={theme} href={knot.url} target="_blank" rel="noopener noreferrer">
                      ▶
                    </KnotPlayOverlay>
                  </KnotImageWrapper>
                  <KnotInfo>
                    <KnotTitle $theme={theme}>{knot.name}</KnotTitle>
                    <KnotDescription $theme={theme}>{knot.description}</KnotDescription>
                  </KnotInfo>
                </KnotHeader>
              </KnotCard>
            ))}
          </KnotsGrid>
        </>
      )}

      {activeView === 'meteo' && (
        <>
          <LinksGrid>
            {METEO_DATA.map((cat) => (
              <LinkCategory key={cat.category} $theme={theme}>
                <LinkCategoryTitle $theme={theme}>{cat.category}</LinkCategoryTitle>
                {cat.links.map((link) => (
                  <LinkCard key={link.name} $theme={theme} href={link.url} target="_blank" rel="noopener noreferrer">
                    <LinkFavicon src={`https://www.google.com/s2/favicons?domain=${new URL(link.url).hostname}&sz=64`} alt={link.name} />
                    <LinkInfo>
                      <LinkTitle $theme={theme}>{link.name}</LinkTitle>
                      <LinkDescription $theme={theme}>{link.description}</LinkDescription>
                    </LinkInfo>
                    <LinkArrow $theme={theme}>→</LinkArrow>
                  </LinkCard>
                ))}
              </LinkCategory>
            ))}
          </LinksGrid>
        </>
      )}

      {activeView === 'links' && (
        <>
          <LinksGrid>
            {LINKS_DATA.map((cat) => (
              <LinkCategory key={cat.category} $theme={theme}>
                <LinkCategoryTitle $theme={theme}>{cat.category}</LinkCategoryTitle>
                {cat.links.map((link) => (
                  <LinkCard key={link.name} $theme={theme} href={link.url} target="_blank" rel="noopener noreferrer">
                    <LinkFavicon src={`https://www.google.com/s2/favicons?domain=${new URL(link.url).hostname}&sz=64`} alt={link.name} />
                    <LinkInfo>
                      <LinkTitle $theme={theme}>{link.name}</LinkTitle>
                      <LinkDescription $theme={theme}>{link.description}</LinkDescription>
                    </LinkInfo>
                    <LinkArrow $theme={theme}>→</LinkArrow>
                  </LinkCard>
                ))}
              </LinkCategory>
            ))}
          </LinksGrid>
        </>
      )}

      {activeView !== 'apuntes' && activeView !== 'nudos' && activeView !== 'meteo' && activeView !== 'links' && (
        <EmptyState $theme={theme}>
          Próximamente disponible
        </EmptyState>
      )}
    </Container>
  );
};

export default Home;
