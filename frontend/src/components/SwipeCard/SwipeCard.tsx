import React, { useState } from 'react';
import styled from 'styled-components';
import { useSwipeable } from 'react-swipeable';
import { useThemeLanguage } from '@/context/ThemeLanguageContext';

const CardContainer = styled.div<{ $theme: any; $offsetX: number; $isDragging: boolean }>`
  background: ${(props: any) => props.$theme && props.$theme.colors ? props.$theme.colors.surface : '#FFFFFF'};
  border-radius: 16px;
  padding: 24px;
  margin: 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  transform: translateX(${({ $offsetX }) => $offsetX}px) rotate(${({ $offsetX }) => $offsetX * 0.05}deg);
  transition: ${({ $isDragging }) => $isDragging ? 'none' : 'transform 0.3s ease'};
  cursor: ${($isDragging: any) => $isDragging ? 'grabbing' : 'grab'};
  user-select: none;
  max-width: 400px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CardText = styled.p<{ $theme: any }>`
  color: ${(props: any) => props.$theme && props.$theme.colors ? props.$theme.colors.text : '#000000'};
  font-size: 18px;
  text-align: center;
  margin-bottom: 16px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 16px;
`;

const ActionButton = styled.button<{ $theme: any; $correct: boolean }>`
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  background: ${(props: any) => 
    props.$theme && props.$theme.colors ? 
      (props.$correct ? props.$theme.colors.success : props.$theme.colors.error) : 
      (props.$correct ? '#4CAF50' : '#FF5252')};
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

interface SwipeCardProps {
  content: string;
  onSwipe: (correct: boolean) => void;
}

const SwipeCard: React.FC<SwipeCardProps> = ({ content, onSwipe }) => {
  const { theme } = useThemeLanguage();
  const [offsetX, setOffsetX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handlers = useSwipeable({
    onSwiping: (e) => {
      setOffsetX(e.deltaX);
      setIsDragging(true);
    },
    onSwiped: (e) => {
      if (Math.abs(e.deltaX) > 50) {
        const userAnswer = e.deltaX > 0;
        onSwipe(userAnswer);
      }
      setOffsetX(0);
      setIsDragging(false);
    },
    trackMouse: true
  });

  return (
    <div {...handlers}>
      <CardContainer
        $theme={theme}
        $offsetX={offsetX}
        $isDragging={isDragging}
      >
        <CardText $theme={theme}>{content}</CardText>
        <ButtonContainer>
          <ActionButton $theme={theme} $correct={false} onClick={() => {
            if (!isProcessing) {
              setIsProcessing(true);
              onSwipe(false);
              setTimeout(() => setIsProcessing(false), 500);
            }
          }}>
            ✗
          </ActionButton>
          <ActionButton $theme={theme} $correct={true} onClick={() => {
            if (!isProcessing) {
              setIsProcessing(true);
              onSwipe(true);
              setTimeout(() => setIsProcessing(false), 500);
            }
          }}>
            ✓
          </ActionButton>
        </ButtonContainer>
      </CardContainer>
    </div>
  );
};

export default SwipeCard;
