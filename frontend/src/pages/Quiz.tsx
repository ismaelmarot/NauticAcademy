import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useThemeLanguage } from '@/context/ThemeLanguageContext';
import QuizCard from '@/components/QuizCard';
import XPBar from '@/components/XPBar';
import { useAuth } from '@/context/AuthContext';
import { submitQuizResult } from '@/api/progress';
import { chapters } from '@/content/structured';


const Container = styled.div<{ $theme: any }>`
  max-width: 600px;
  margin:0 auto;
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

const Progress = styled.div<{ $theme: any }>`
  color: ${({ $theme }) => $theme.colors.textSecondary};
  font-size: 14px;
  margin-bottom: 16px;
`;

const ResultCard = styled.div<{ $theme: any }>`
  background: ${({ $theme }) => $theme.colors.surface};
  border-radius: ${({ $theme }) => $theme.radius.lg};
  border: 1px solid ${({ $theme }) => $theme.colors.border};
  padding: 32px;
  text-align: center;
  margin-top: 24px;
  animation: fadeIn 0.5s ease-in;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const ResultTitle = styled.h2<{ $theme: any }>`
  color: ${({ $theme }) => $theme.colors.primary};
  margin-bottom: 16px;
`;

const ResultText = styled.p<{ $theme: any }>`
  color: ${({ $theme }) => $theme.colors.text};
  font-size: 18px;
  margin-bottom: 8px;
`;

const ResultMessage = styled.p<{ $theme: any }>`
  color: ${({ $theme }) => $theme.colors.textSecondary};
  font-size: 14px;
  margin-bottom: 24px;
`;

const Button = styled.button<{ $theme: any }>`
  padding: 14px 32px;
  border: none;
  border-radius: ${({ $theme }) => $theme.radius.sm};
  background: ${({ $theme }) => $theme.colors.primary};
  color: ${({ $theme }) => $theme.colors.background};
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin: 8px;

  &:hover {
    opacity: 0.9;
  }
`;

const Quiz: React.FC = () => {
  const { theme, t } = useThemeLanguage();
  const { user, refreshUser } = useAuth();
  const navigate = useNavigate();
  const { topicId } = useParams();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [questions, setQuestions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const scoreRef = useRef(0);

  // Sync score state with ref for display
  useEffect(() => {
    scoreRef.current = score;
  }, [score]);

  useEffect(() => {
    const loadQuestions = () => {
      if (!topicId) {
        setLoading(false);
        return;
      }

      for (const chapter of chapters) {
        for (const section of chapter.sections) {
          const topic = section.topics.find(t => t.id === topicId);
          if (topic && topic.quiz && topic.quiz.length > 0) {
            setQuestions(topic.quiz);
            setLoading(false);
            return;
          }
        }
      }
      setLoading(false);
    };

    loadQuestions();
  }, [topicId]);

  const handleAnswer = useCallback((correct: boolean) => {
    if (correct) {
      setScore(prev => {
        const newScore = prev + 1;
        scoreRef.current = newScore;
        return newScore;
      });
    }
  }, []);

  const handleNext = useCallback(() => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setFinished(true);
      if (user) {
        submitQuizResult(topicId || 'quiz', scoreRef.current, questions.length)
          .then(() => {
            refreshUser();
          })
          .catch(err => console.error('Error submitting quiz:', err));
      }
    }
  }, [currentQuestion, questions.length, user, topicId, refreshUser]);

  const getResultMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage === 100) return '¡Perfecto! Dominas este tema.';
    if (percentage >= 80) return '¡Excelente trabajo!';
    if (percentage >= 60) return 'Buen resultado, sigue practicando.';
    if (percentage >= 40) return 'Puedes mejorar con más estudio.';
    return 'Te recomendamos repasar el contenido.';
  };

  if (loading) {
    return (
      <Container $theme={theme}>
        <p>Cargando...</p>
      </Container>
    );
  }

  if (questions.length === 0) {
    return (
      <Container $theme={theme}>
        <BackButton $theme={theme} onClick={() => navigate(-1)}>
          ← Volver
        </BackButton>
        <p>No hay preguntas disponibles para este tema.</p>
      </Container>
    );
  }

  return (
    <Container $theme={theme}>
      <BackButton $theme={theme} onClick={() => navigate(-1)}>
        ← Volver
      </BackButton>
      <Header>
        <Title $theme={theme}>{t('quiz')}</Title>
        <Progress $theme={theme}>
          {t('question')} {currentQuestion + 1} {t('of')} {questions.length}
        </Progress>
        {user && <XPBar xp={user.xp || 0} level={user.level || 1} />}
      </Header>

      {!finished ? (
        <QuizCard
          key={currentQuestion}
          question={questions[currentQuestion]}
          onAnswer={handleAnswer}
          onNext={handleNext}
          showNext={true}
        />
      ) : (
        <ResultCard $theme={theme}>
          <ResultTitle $theme={theme}>{t('score')}</ResultTitle>
          <ResultText $theme={theme}>
            {score}/{questions.length}
          </ResultText>
          <ResultMessage $theme={theme}>
            {getResultMessage()}
          </ResultMessage>
          <div>
            <Button $theme={theme} onClick={() => {
              setCurrentQuestion(0);
              setScore(0);
              setFinished(false);
            }}>
              Reintentar
            </Button>
            <Button $theme={theme} onClick={() => navigate('/')}>
              {t('back')}
            </Button>
          </div>
        </ResultCard>
      )}
    </Container>
  );
};

export default Quiz;
