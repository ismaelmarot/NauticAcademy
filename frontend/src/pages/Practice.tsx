import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useThemeLanguage } from '@/context/ThemeLanguageContext';
import SwipeCard from '@/components/SwipeCard';
import XPBar from '@/components/XPBar';
import { useAuth } from '@/context/AuthContext';

const Overlay = styled.div<{ $theme: any }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const Modal = styled.div<{ $theme: any }>`
  background: ${({ $theme }) => $theme.colors.surface};
  border-radius: 16px;
  padding: 32px;
  max-width: 400px;
  width: 90%;
  text-align: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
`;

const ModalTitle = styled.h2<{ $theme: any }>`
  color: ${({ $theme }) => $theme.colors.text};
  font-size: 20px;
  margin-bottom: 12px;
`;

const ModalText = styled.p<{ $theme: any }>`
  color: ${({ $theme }) => $theme.colors.textSecondary};
  font-size: 14px;
  margin-bottom: 24px;
  line-height: 1.5;
`;

const ModalButtons = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
`;

const CancelButton = styled.button<{ $theme: any }>`
  padding: 12px 24px;
  border: 2px solid ${({ $theme }) => $theme.colors.textSecondary};
  background: transparent;
  color: ${({ $theme }) => $theme.colors.textSecondary};
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${({ $theme }) => $theme.colors.textSecondary};
    color: white;
  }
`;

const ConfirmButton = styled.button<{ $theme: any }>`
  padding: 12px 24px;
  border: none;
  background: ${({ $theme }) => $theme.colors.error};
  color: white;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

const Container = styled.div<{ $theme: any }>`
  max-width: 500px;
  margin: 0 auto;
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 16px;
`;

const BackButton = styled.button<{ $theme: any }>`
  background: none;
  border: none;
  color: ${({ $theme }) => $theme.colors.primary};
  font-size: 16px;
  cursor: pointer;
  padding: 8px 0;
  align-self: flex-start;

  &:hover {
    opacity: 0.8;
  }
`;

const ExitButton = styled.button<{ $theme: any }>`
  background: transparent;
  border: 2px solid ${({ $theme }) => $theme.colors.textSecondary};
  color: ${({ $theme }) => $theme.colors.textSecondary};
  font-size: 14px;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.2s;

  &:hover {
    background: ${({ $theme }) => $theme.colors.textSecondary};
    color: white;
    opacity: 1;
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
  const [isProcessing, setIsProcessing] = useState(false);
  const [showExitModal, setShowExitModal] = useState(false);

  const items = [
    { id: 1, text: "La proa es la parte delantera del barco", isTrue: true },
    { id: 2, text: "La popa es la parte delantera del barco", isTrue: false },
    { id: 3, text: "El timón sirve para gobernar el barco", isTrue: true },
    { id: 4, text: "La quilla es la parte superior del barco", isTrue: false },
    { id: 5, text: "La manga es la anchura máxima del barco", isTrue: true }
  ];

  const handleSwipe = useCallback((userAnswer: boolean) => {
    if (isProcessing) return; // Prevent multiple calls
    setIsProcessing(true);

    const isCorrect = userAnswer === items[currentIndex].isTrue;
    if (isCorrect) {
      setCorrectCount(prev => prev + 1);
    }

    setTimeout(() => {
      setCurrentIndex(prev => {
        if (prev < items.length - 1) {
          setIsProcessing(false);
          return prev + 1;
        }
        // Quiz completed - navigate back to home after a delay
        setTimeout(() => {
          navigate('/');
        }, 2000);
        setIsProcessing(false);
        return prev;
      });
    }, 300);
  }, [items.length, isProcessing, currentIndex, items, navigate]);

  const handleExit = () => {
    if (currentIndex > 0 && currentIndex < items.length) {
      setShowExitModal(true);
    } else {
      navigate('/');
    }
  };

  return (
    <Container $theme={theme}>
      <HeaderRow>
        <BackButton $theme={theme} onClick={handleExit}>
          ← Volver
        </BackButton>
        <ExitButton $theme={theme} onClick={handleExit}>
          Salir
        </ExitButton>
      </HeaderRow>
      <Title $theme={theme}>{t('practice')}</Title>
      <Instruction $theme={theme}>
        {t('swipeRight')} | {t('swipeLeft')}
      </Instruction>
      {user && <XPBar xp={user.xp || 0} level={user.level || 1} />}
      {currentIndex < items.length ? (
        <>
          <SwipeCard
            key={items[currentIndex].id}
            content={items[currentIndex].text}
            onSwipe={handleSwipe}
          />
          <Score $theme={theme}>
            {correctCount} / {items.length}
          </Score>
          <div>
            <BackButton $theme={theme} onClick={() => setShowExitModal(true)} style={{ marginTop: 16 }}>
              Salir de la Práctica
            </BackButton>
          </div>
        </>
      ) : (
        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <p style={{ color: theme.colors.text, fontSize: 18, marginBottom: 16 }}>
            ¡Completado! {correctCount}/{items.length} correctas
          </p>
          <Score $theme={theme}>
            {correctCount} / {items.length}
          </Score>
          <BackButton $theme={theme} onClick={() => setShowExitModal(true)} style={{ marginTop: 16, border: `2px solid ${theme.colors.textSecondary}`, background: 'transparent', padding: '10px 24px' }}>
            Finalizar
          </BackButton>
        </div>
      )}

      {showExitModal && (
        <Overlay $theme={theme} onClick={() => setShowExitModal(false)}>
          <Modal $theme={theme} onClick={(e) => e.stopPropagation()}>
            <ModalTitle $theme={theme}>¿Salir de la Práctica?</ModalTitle>
            <ModalText $theme={theme}>
              Has respondido {correctCount} de {currentIndex + 1} preguntas.
              {currentIndex < items.length && 'Si sales ahora, no se guardará tu progreso.'}
            </ModalText>
            <ModalButtons>
              <CancelButton $theme={theme} onClick={() => setShowExitModal(false)}>
                Cancelar
              </CancelButton>
              <ConfirmButton $theme={theme} onClick={() => navigate('/')}>
                Salir
              </ConfirmButton>
            </ModalButtons>
          </Modal>
        </Overlay>
      )}
    </Container>
  );
};

export default Practice;
