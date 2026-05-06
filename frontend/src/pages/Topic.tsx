import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useThemeLanguage } from '@/context/ThemeLanguageContext';
import { useAuth } from '@/context/AuthContext';
import ContentRenderer from '@/components/ContentRenderer';
import ProgressBar from '@/components/ProgressBar';
import { completeTopic } from '@/api/progress';
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

const Header = styled.div`
  margin-bottom: 24px;
`;

const Title = styled.h1<{ $theme: any }>`
  color: ${({ $theme }) => $theme.colors.text};
  font-size: 24px;
  margin-bottom: 8px;
`;

const Meta = styled.div<{ $theme: any }>`
  display: flex;
  gap: 16px;
  color: ${({ $theme }) => $theme.colors.textSecondary};
  font-size: 14px;
  margin-bottom: 16px;
`;

const CompleteButton = styled.button<{ $theme: any; $completed: boolean }>`
  width: 100%;
  padding: 14px;
  border: none;
  border-radius: 8px;
  background: ${({ $theme, $completed }) => $completed ? $theme.colors.success : $theme.colors.primary};
  color: ${({ $theme }) => $theme.colors.background};
  font-size: 16px;
  font-weight: 600;
  cursor: ${({ $completed }) => $completed ? 'default' : 'pointer'};
  margin-top: 24px;

  &:hover:not(:disabled) {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.7;
    cursor: default;
  }
`;

const Topic: React.FC = () => {
  const { theme } = useThemeLanguage();
  const { user } = useAuth();
  const navigate = useNavigate();
  const { topicId } = useParams();
  const location = useLocation();

  const [topic, setTopic] = useState<any>(null);
  const [allTopics, setAllTopics] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const [completed, setCompleted] = useState(false);
  const [completing, setCompleting] = useState(false);

  const chapterId = location.state?.chapterId || '';
  const sectionId = location.state?.sectionId || '';

  useEffect(() => {
    if (!topicId) return;

    let foundTopic: any = null;
    let topicsList: any[] = [];
    let topicIndex = -1;

    if (chapterId && sectionId) {
      const chapter = chapters.find(ch => ch.id === chapterId);
      const section = chapter?.sections.find(sec => sec.id === sectionId);
      if (section) {
        topicsList = section.topics;
        topicIndex = topicsList.findIndex(t => t.id === topicId);
        foundTopic = topicsList[topicIndex];
      }
    } else {
      for (const chapter of chapters) {
        for (const section of chapter.sections) {
          const index = section.topics.findIndex(t => t.id === topicId);
          if (index !== -1) {
            topicsList = section.topics;
            topicIndex = index;
            foundTopic = topicsList[index];
            break;
          }
        }
        if (foundTopic) break;
      }
    }

    if (foundTopic) {
      setTopic(foundTopic);
      setAllTopics(topicsList);
      setCurrentIndex(topicIndex);
    }
  }, [topicId, chapterId, sectionId]);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, [topicId]);

  const handleComplete = async () => {
    if (completed || !user || completing) return;
    setCompleting(true);
    try {
      await completeTopic(topic.id);
      setCompleted(true);

      if (currentIndex < allTopics.length - 1) {
        navigate(`/topic/${allTopics[currentIndex + 1].id}`, {
          state: { chapterId, sectionId }
        });
      } else {
        navigate(`/chapter/${chapterId}/section/${sectionId}`);
      }
    } catch (err) {
      console.error('Error completing topic:', err);
    } finally {
      setCompleting(false);
    }
  };

  if (!topic) {
    return <Container $theme={theme}><p>Tema no encontrado</p></Container>;
  }

  return (
    <Container $theme={theme}>
      <BackButton $theme={theme} onClick={() => navigate(`/chapter/${chapterId}/section/${sectionId}`)}>
        ← Volver
      </BackButton>
      <Header>
        <Title $theme={theme}>{topic.title}</Title>
        <Meta $theme={theme}>
          <span>{topic.readingTime} min lectura</span>
          {topic.audioTime && <span>{topic.audioTime} audio</span>}
        </Meta>
        <ProgressBar progress={completed ? 100 : 0} />
      </Header>
      <ContentRenderer content={topic.content} />
      <CompleteButton
        $theme={theme}
        $completed={completed}
        onClick={handleComplete}
        disabled={completed || completing}
      >
        {completed ? '✓ Completado' : 'Completar y continuar'}
      </CompleteButton>
    </Container>
  );
};

export default Topic;
