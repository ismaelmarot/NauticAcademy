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

const Header = styled.div`
  margin-bottom: 24px;
`;

const Title = styled.h1<{ $theme: any }>`
  font-family: ${({ $theme }) => $theme.typography.fontFamily.headline};
  font-size: ${({ $theme }) => $theme.typography.fontSize.heading};
  line-height: ${({ $theme }) => $theme.typography.lineHeight.heading};
  letter-spacing: ${({ $theme }) => $theme.typography.letterSpacing.heading};
  color: ${({ $theme }) => $theme.colors.primary};
  margin-bottom: 8px;
`;

const Meta = styled.div<{ $theme: any }>`
  display: flex;
  gap: ${({ $theme }) => $theme.spacing[16]};
  color: ${({ $theme }) => $theme.colors.textBody};
  font-family: ${({ $theme }) => $theme.typography.fontFamily.body};
  font-size: ${({ $theme }) => $theme.typography.fontSize.caption};
  letter-spacing: ${({ $theme }) => $theme.typography.letterSpacing.caption};
  margin-bottom: ${({ $theme }) => $theme.spacing[16]};
`;

const CompleteButton = styled.button<{ $theme: any; $completed: boolean }>`
  width: 100%;
  padding: 14px;
  border: none;
  border-radius: ${({ $theme }) => $theme.radius.md};
  background: ${({ $theme, $completed }) => $completed ? $theme.colors.success : $theme.button.primaryBg};
  color: ${({ $theme }) => $theme.button.primaryText};
  font-family: ${({ $theme }) => $theme.typography.fontFamily.body};
  font-size: ${({ $theme }) => $theme.typography.fontSize.body};
  font-weight: ${({ $theme }) => $theme.typography.fontWeight.bold};
  letter-spacing: ${({ $theme }) => $theme.typography.letterSpacing.body};
  box-shadow: ${({ $theme, $completed }) => $completed ? 'none' : $theme.button.primaryShadow};
  cursor: ${({ $completed }) => $completed ? 'default' : 'pointer'};
  margin-top: ${({ $theme }) => $theme.spacing[24]};
  transition: transform 0.1s, box-shadow 0.1s;

  &:active:not(:disabled) {
    transform: translateY(2px);
    box-shadow: ${({ $theme }) => $theme.button.primaryActiveShadow};
  }

  &:disabled {
    opacity: 0.7;
    cursor: default;
    box-shadow: none;
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
