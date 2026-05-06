import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useThemeLanguage } from '@/context/ThemeLanguageContext';
import QuizCard from '@/components/QuizCard';
import XPBar from '@/components/XPBar';
import { useAuth } from '@/context/AuthContext';
import { submitQuizResult } from '@/api/progress';


const Container = styled.div<{ $theme: any }>`
  max-width: 600px;
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

const Progress = styled.div<{ $theme: any }>`
  color: ${({ $theme }) => $theme.colors.textSecondary};
  font-size: 14px;
  margin-bottom: 16px;
`;

const ResultCard = styled.div<{ $theme: any }>`
  background: ${({ $theme }) => $theme.colors.surface};
  border-radius: 16px;
  padding: 32px;
  text-align: center;
  margin-top: 24px;
`;

const ResultTitle = styled.h2<{ $theme: any }>`
  color: ${({ $theme }) => $theme.colors.primary};
  margin-bottom: 16px;
`;

const ResultText = styled.p<{ $theme: any }>`
  color: ${({ $theme }) => $theme.colors.text};
  font-size: 18px;
  margin-bottom: 24px;
`;

const Button = styled.button<{ $theme: any }>`
  padding: 14px 32px;
  border: none;
  border-radius: 8px;
  background: ${({ $theme }) => $theme.colors.primary};
  color: ${({ $theme }) => $theme.colors.background};
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

const Quiz: React.FC = () => {
  const { theme, t } = useThemeLanguage();
  const { user } = useAuth();
  const navigate = useNavigate();
  const { topicId } = useParams();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const questions = [
    {
      question: "¿Cuál es la parte más ancha del barco?",
      options: ["Proa", "Manga", "Popa", "Quilla"],
      correctAnswer: 1,
      explanation: "La manga es la distancia transversal máxima del barco."
    },
    {
      question: "¿Qué es la arboladura?",
      options: ["El casco", "Los mástiles y velas", "El timón", "La quilla"],
      correctAnswer: 1,
      explanation: "La arboladura comprende todos los mástiles, vergas, velas y aparejos."
    },
    {
      question: "¿Cuál es la función del timón?",
      options: ["Propulsar", "Gobernar", "Frenar", "Anclar"],
      correctAnswer: 1,
      explanation: "El timón sirve para gobernar el barco y cambiar su dirección."
    }
  ];

  const handleAnswer = (correct: boolean) => {
    if (correct) setScore(score + 1);

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setFinished(true);
        if (user) {
          submitQuizResult(topicId || 'quiz', score + (correct ? 1 : 0), questions.length);
        }
      }
    }, 1500);
  };

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
          question={questions[currentQuestion]}
          onAnswer={handleAnswer}
        />
      ) : (
        <ResultCard $theme={theme}>
          <ResultTitle $theme={theme}>{t('score')}</ResultTitle>
          <ResultText $theme={theme}>
            {score}/{questions.length}
          </ResultText>
          <Button $theme={theme} onClick={() => navigate('/')}>
            {t('back')}
          </Button>
        </ResultCard>
      )}
    </Container>
  );
};

export default Quiz;
