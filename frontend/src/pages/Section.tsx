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
  font-size: 24px;
  margin-bottom: 24px;
`;

const ProgressInfo = styled.div<{ $theme: any }>`
  color: ${({ $theme }) => $theme.colors.textSecondary};
  font-size: 14px;
  margin-bottom: 24px;
`;

const TopicList = styled.div`
  display: grid;
  gap: 12px;
`;

const TopicCard = styled.div<{ $theme: any; $completed: boolean }>`
  background: ${({ $theme }) => $theme.colors.surface};
  border-radius: 12px;
  padding: 16px;
  cursor: pointer;
  transition: transform 0.2s;
  border-left: 4px solid ${({ $theme, $completed }) => 
    $completed ? $theme.colors.success : $theme.colors.primary};

  &:hover {
    transform: translateX(4px);
  }
`;

const TopicTitle = styled.h3<{ $theme: any }>`
  color: ${({ $theme }) => $theme.colors.text};
  font-size: 16px;
  margin-bottom: 4px;
`;

const TopicMeta = styled.p<{ $theme: any }>`
  color: ${({ $theme }) => $theme.colors.textSecondary};
  font-size: 13px;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 16px;
`;

const ActionButton = styled.button<{ $theme: any }>`
  flex: 1;
  padding: 12px;
  border: none;
  border-radius: 8px;
  background: ${({ $theme }) => $theme.colors.primary};
  color: ${({ $theme }) => $theme.colors.background};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
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
