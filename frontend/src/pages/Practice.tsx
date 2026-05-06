import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useThemeLanguage } from '@/context/ThemeLanguageContext';
import SwipeCard from '@/components/SwipeCard';
import XPBar from '@/components/XPBar';
import { useAuth } from '@/context/AuthContext';

const Container = styled.div<{ $theme: any }>`
  max-width: 500px;
  margin: 0 auto;
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80vh;
`;

const BackButton = styled.button<{ $theme: any }>`
  background: none;
  border: none;
  color: ${({ $theme }) => $theme.colors.primary};
  font-size: 16px;
  cursor: pointer;
  padding: 8px 0;
  margin-bottom: 16px;
  align-self: flex-start;

  &:hover {
    opacity: 0.8;
  }
`;

const Title = styled.h1<{ $theme: any }>`
  color: ${({ $theme }) => $theme.colors.text};
  font-size: 24px;
  margin-bottom: 8px;
`;

const Instruction = styled.p<{ $theme: any }>`
  color: ${({ $theme }) => $theme.colors.textSecondary};
  font-size: 14px;
  margin-bottom: 24px;
  text-align: center;
`;

const Score = styled.div<{ $theme: any }>`
  color: ${({ $theme }) => $theme.colors.text};
  font-size: 16px;
  font-weight: 600;
  margin-top: 16px;
`;

const Practice: React.FC = () => {
  const { theme, t } = useThemeLanguage();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);

  const items = [
    { id: 1, text: "La proa es la parte delantera del barco" },
    { id: 2, text: "La popa es la parte delantera del barco" },
    { id: 3, text: "El timón sirve para gobernar el barco" },
    { id: 4, text: "La quilla es la parte superior del barco" },
    { id: 5, text: "La manga es la anchura máxima del barco" }
  ];

  const handleSwipe = (correct: boolean) => {
    if (correct) setCorrectCount(correctCount + 1);

    setTimeout(() => {
      if (currentIndex < items.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    }, 300);
  };

  return (
    <Container $theme={theme}>
      <BackButton $theme={theme} onClick={() => navigate('/')}>
        ← Volver
      </BackButton>
      <Title $theme={theme}>{t('practice')}</Title>
      <Instruction $theme={theme}>
        {t('swipeRight')} | {t('swipeLeft')}
      </Instruction>
      {user && <XPBar xp={user.xp || 0} level={user.level || 1} />}
      {currentIndex < items.length ? (
        <SwipeCard
          key={items[currentIndex].id}
          content={items[currentIndex].text}
          onSwipe={handleSwipe}
        />
      ) : (
        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <p style={{ color: theme.colors.text, fontSize: 18, marginBottom: 16 }}>
            ¡Completado! {correctCount}/{items.length} correctas
          </p>
        </div>
      )}
      <Score $theme={theme}>
        {correctCount} / {currentIndex + 1}
      </Score>
    </Container>
  );
};

export default Practice;
