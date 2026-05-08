import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useThemeLanguage } from '@/context/ThemeLanguageContext';
import { useAuth } from '@/context/AuthContext';
import { getProgress } from '@/api/progress';
import { chapters } from '@/content/structured';
import ProgressBar from '@/components/ProgressBar';

const Container = styled.div<{ $theme: any }>`
  max-width: 800px;
  margin: 0 auto;
  padding: ${({ $theme }) => $theme.spacing[24]} ${({ $theme }) => $theme.spacing[16]};
`;

const BackButton = styled.button<{ $theme: any }>`
  background: none;
  border: none;
  color: ${({ $theme }) => $theme.colors.secondary};
  font-family: ${({ $theme }) => $theme.typography.fontFamily.body};
  font-size: ${({ $theme }) => $theme.typography.fontSize.body};
  font-weight: ${({ $theme }) => $theme.typography.fontWeight.bold};
  cursor: pointer;
  padding: 8px 0;
  margin-bottom: ${({ $theme }) => $theme.spacing[16]};
  text-decoration: underline;
  text-underline-offset: 2px;

  &:hover {
    opacity: 0.8;
  }
`;

const Title = styled.h1<{ $theme: any }>`
  font-family: ${({ $theme }) => $theme.typography.fontFamily.headline};
  font-size: ${({ $theme }) => $theme.typography.fontSize.heading};
  line-height: ${({ $theme }) => $theme.typography.lineHeight.heading};
  letter-spacing: ${({ $theme }) => $theme.typography.letterSpacing.heading};
  color: ${({ $theme }) => $theme.colors.primary};
  margin-bottom: ${({ $theme }) => $theme.spacing[24]};
`;

const SectionList = styled.div`
  display: grid;
  gap: 12px;
`;

const SectionCard = styled.div<{ $theme: any }>`
  background: ${({ $theme }) => $theme.colors.surface};
  border-radius: ${({ $theme }) => $theme.radius.md};
  border: 1px solid ${({ $theme }) => $theme.colors.border};
  padding: ${({ $theme }) => $theme.spacing[16]};
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateX(4px);
  }
`;

const SectionTitle = styled.h3<{ $theme: any }>`
  color: ${({ $theme }) => $theme.colors.text};
  font-family: ${({ $theme }) => $theme.typography.fontFamily.body};
  font-size: ${({ $theme }) => $theme.typography.fontSize.headingSm};
  font-weight: ${({ $theme }) => $theme.typography.fontWeight.bold};
  letter-spacing: ${({ $theme }) => $theme.typography.letterSpacing.headingSm};
  margin-bottom: 4px;
`;

const SectionDesc = styled.p<{ $theme: any }>`
  color: ${({ $theme }) => $theme.colors.textBody};
  font-family: ${({ $theme }) => $theme.typography.fontFamily.body};
  font-size: ${({ $theme }) => $theme.typography.fontSize.caption};
  letter-spacing: ${({ $theme }) => $theme.typography.letterSpacing.caption};
`;

const ProgressInfo = styled.div<{ $theme: any }>`
  color: ${({ $theme }) => $theme.colors.textBody};
  font-family: ${({ $theme }) => $theme.typography.fontFamily.body};
  font-size: ${({ $theme }) => $theme.typography.fontSize.body};
  letter-spacing: ${({ $theme }) => $theme.typography.letterSpacing.body};
  margin-bottom: ${({ $theme }) => $theme.spacing[16]};
`;

const Chapter: React.FC = () => {
  const { theme } = useThemeLanguage();
  const { user } = useAuth();
  const navigate = useNavigate();
  const { chapterId } = useParams();

  const [chapter, setChapter] = useState<any>(null);
  const [completedTopics, setCompletedTopics] = useState<string[]>([]);

  useEffect(() => {
    const found = chapters.find(ch => ch.id === chapterId);
    if (found) {
      setChapter(found);
    }

    if (user) {
      getProgress().then(data => {
        setCompletedTopics(data.completedTopics || []);
      }).catch(err => {
        console.error('Error loading progress:', err);
      });
    }
  }, [chapterId, user]);

  if (!chapter) {
    return <Container $theme={theme}><p>Capítulo no encontrado</p></Container>;
  }

  const totalTopics = chapter.sections.reduce((acc: number, sec: any) => 
    acc + sec.topics.length, 0
  );

  const completedCount = chapter.sections.reduce((acc: number, sec: any) => {
    return acc + sec.topics.filter((t: any) => 
      completedTopics.includes(t.id)
    ).length;
  }, 0);

  return (
    <Container $theme={theme}>
      <BackButton $theme={theme} onClick={() => navigate('/')}>
        ← Volver
      </BackButton>
      <Title $theme={theme}>{chapter.title}</Title>
      <ProgressInfo $theme={theme}>
        {completedCount} / {totalTopics} temas completados
      </ProgressInfo>
      <SectionList>
        {chapter.sections.map((section: any) => {
          const sectionCompleted = section.topics.filter((t: any) => 
            completedTopics.includes(t.id)
          ).length;

          return (
            <SectionCard
              key={section.id}
              $theme={theme}
              onClick={() => navigate(`/chapter/${chapterId}/section/${section.id}`)}
            >
              <SectionTitle $theme={theme}>{section.title}</SectionTitle>
              <SectionDesc $theme={theme}>
                {section.topics.length} temas · {sectionCompleted}/{section.topics.length} completados
              </SectionDesc>
              <ProgressBar progress={section.topics.length > 0 ? (sectionCompleted / section.topics.length) * 100 : 0} />
            </SectionCard>
          );
        })}
      </SectionList>
    </Container>
  );
};

export default Chapter;
