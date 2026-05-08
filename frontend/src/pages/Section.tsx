import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useThemeLanguage } from '@/context/ThemeLanguageContext';
import { useAuth } from '@/context/AuthContext';
import { getProgress } from '@/api/progress';
import { chapters } from '@/content/structured';

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

const ProgressInfo = styled.div<{ $theme: any }>`
  color: ${({ $theme }) => $theme.colors.textBody};
  font-family: ${({ $theme }) => $theme.typography.fontFamily.body};
  font-size: ${({ $theme }) => $theme.typography.fontSize.body};
  letter-spacing: ${({ $theme }) => $theme.typography.letterSpacing.body};
  margin-bottom: ${({ $theme }) => $theme.spacing[24]};
`;

const TopicList = styled.div`
  display: grid;
  gap: 12px;
`;

const TopicCard = styled.div<{ $theme: any; $completed: boolean }>`
  background: ${({ $theme }) => $theme.colors.surface};
  border-radius: ${({ $theme }) => $theme.radius.md};
  border: 1px solid ${({ $theme }) => $theme.colors.border};
  border-left: 4px solid ${({ $theme, $completed }) =>
    $completed ? $theme.colors.success : $theme.colors.primary};
  padding: ${({ $theme }) => $theme.spacing[16]};
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateX(4px);
  }
`;

const TopicTitle = styled.h3<{ $theme: any }>`
  color: ${({ $theme }) => $theme.colors.text};
  font-family: ${({ $theme }) => $theme.typography.fontFamily.body};
  font-size: ${({ $theme }) => $theme.typography.fontSize.body};
  font-weight: ${({ $theme }) => $theme.typography.fontWeight.bold};
  letter-spacing: ${({ $theme }) => $theme.typography.letterSpacing.body};
  margin-bottom: 4px;
`;

const TopicMeta = styled.p<{ $theme: any }>`
  color: ${({ $theme }) => $theme.colors.textBody};
  font-family: ${({ $theme }) => $theme.typography.fontFamily.body};
  font-size: ${({ $theme }) => $theme.typography.fontSize.caption};
  letter-spacing: ${({ $theme }) => $theme.typography.letterSpacing.caption};
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 16px;
`;

const ActionButton = styled.button<{ $theme: any }>`
  flex: 1;
  padding: ${({ $theme }) => $theme.spacing[12]};
  border: none;
  border-radius: ${({ $theme }) => $theme.radius.md};
  background: ${({ $theme }) => $theme.button.primaryBg};
  color: ${({ $theme }) => $theme.button.primaryText};
  font-family: ${({ $theme }) => $theme.typography.fontFamily.body};
  font-size: ${({ $theme }) => $theme.typography.fontSize.body};
  font-weight: ${({ $theme }) => $theme.typography.fontWeight.bold};
  letter-spacing: ${({ $theme }) => $theme.typography.letterSpacing.body};
  box-shadow: ${({ $theme }) => $theme.button.primaryShadow};
  cursor: pointer;
  transition: transform 0.1s, box-shadow 0.1s;

  &:hover {
    opacity: 0.95;
  }

  &:active {
    transform: translateY(2px);
    box-shadow: ${({ $theme }) => $theme.button.primaryActiveShadow};
  }
`;

const Section: React.FC = () => {
  const { theme } = useThemeLanguage();
  const { user } = useAuth();
  const navigate = useNavigate();
  const { chapterId, sectionId } = useParams();

  const [section, setSection] = useState<any>(null);
  const [completedTopics, setCompletedTopics] = useState<string[]>([]);

  useEffect(() => {
    if (!chapterId || !sectionId) return;

    const chapter = chapters.find(ch => ch.id === chapterId);
    const foundSection = chapter?.sections.find(sec => sec.id === sectionId);

    if (foundSection) {
      setSection(foundSection);
    }

    if (user) {
      getProgress().then(data => {
        setCompletedTopics(data.completedTopics || []);
      }).catch(err => {
        console.error('Error loading progress:', err);
      });
    }
  }, [chapterId, sectionId, user]);

  if (!section) {
    return <Container $theme={theme}><p>Sección no encontrada</p></Container>;
  }

  const completedCount = section.topics.filter((t: any) =>
    completedTopics.includes(t.id)
  ).length;

  return (
    <Container $theme={theme}>
      <BackButton $theme={theme} onClick={() => navigate(`/chapter/${chapterId}`)}>
        ← Volver
      </BackButton>
      <Title $theme={theme}>{section.title}</Title>
      <ProgressInfo $theme={theme}>
        {completedCount} / {section.topics.length} temas completados
      </ProgressInfo>
      <TopicList>
        {section.topics.map((topic: any) => {
          const isCompleted = completedTopics.includes(topic.id);
          return (
            <TopicCard
              key={topic.id}
              $theme={theme}
              $completed={isCompleted}
              onClick={() => navigate(`/topic/${topic.id}`, {
                state: { chapterId, sectionId }
              })}
            >
              <TopicTitle $theme={theme}>
                {topic.title}
              </TopicTitle>
              <TopicMeta $theme={theme}>
                {topic.readingTime} min lectura
              </TopicMeta>
            </TopicCard>
          );
        })}
      </TopicList>
      <ActionButtons>
        <ActionButton $theme={theme} onClick={() => navigate(`/quiz/${section.topics[0]?.id}`)}>
          Quiz
        </ActionButton>
        <ActionButton $theme={theme} onClick={() => navigate('/practice')}>
          Práctica
        </ActionButton>
      </ActionButtons>
    </Container>
  );
};

export default Section;
