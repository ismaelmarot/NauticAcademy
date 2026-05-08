import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useThemeLanguage } from '@/context/ThemeLanguageContext';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const pulse = keyframes`
  0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.4); }
  50% { transform: scale(1.02); box-shadow: 0 0 0 10px rgba(76, 175, 80, 0); }
  100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(76, 175, 80, 0); }
`;

const shake = keyframes`
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-4px); }
  20%, 40%, 60%, 80% { transform: translateX(4px); }
`;

const Card = styled.div<{ $theme: any; $correct?: boolean; $showResult?: boolean }>`
  background: ${({ $theme, $correct, $showResult }) => 
    $showResult 
      ? ($correct ? $theme.colors.success + '08' : $theme.colors.error + '08')
      : $theme.colors.surface};
  border-radius: ${({ $theme }) => $theme.radius.lg};
  padding: 24px;
  margin: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  animation: ${css`${slideIn} 0.3s ease-in`};
  border: 2px solid ${({ $theme, $correct, $showResult }) => 
    $showResult 
      ? ($correct ? $theme.colors.success + '40' : $theme.colors.error + '40')
      : 'transparent'};
  transition: all 0.3s ease;
`;

const Question = styled.h3<{ $theme: any }>`
  color: ${({ $theme }) => $theme.colors.text};
  margin-bottom: 16px;
  font-size: 18px;
`;

const Option = styled.button<{ $theme: any; $selected: boolean; $correct: boolean; $showResult: boolean }>`
  width: 100%;
  padding: 16px;
  margin: 10px 0;
  border: 3px solid ${({ $theme, $selected, $correct, $showResult }) => {
    if (!$showResult) return $selected ? $theme.colors.primary : $theme.colors.border;
    if ($correct) return $theme.colors.success;
    if ($selected) return $theme.colors.error;
    return $theme.colors.border;
  }};
  background: ${({ $theme, $selected, $correct, $showResult }) => {
    if (!$showResult) return $selected ? $theme.colors.primary + '30' : 'transparent';
    if ($correct) return $theme.colors.success + '20';
    if ($selected) return $theme.colors.error + '20';
    return 'transparent';
  }};
  color: ${({ $theme }) => $theme.colors.text};
  border-radius: ${({ $theme }) => $theme.radius.md};
  cursor: ${({ $showResult }) => $showResult ? 'default' : 'pointer'};
  text-align: left;
  font-size: 15px;
  font-weight: ${({ $selected }) => $selected ? '600' : '400'};
  transition: all 0.3s ease;
  animation: ${({ $showResult, $correct, $selected }) => {
    if ($showResult && $correct) return css`${pulse} 0.6s ease`;
    if ($showResult && $selected && !$correct) return css`${shake} 0.5s ease`;
    return 'none';
  }};

  &:hover:not(:disabled) {
    opacity: 0.9;
    transform: translateX(6px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }

  &:disabled {
    cursor: default;
    opacity: ${({ $showResult, $correct }) => $showResult && !$correct ? '0.65' : '1'};
  }
`;

const ResultBanner = styled.div<{ $theme: any; $correct: boolean }>`
  margin-top: 20px;
  padding: 20px;
  background: ${({ $theme, $correct }) => 
    $correct ? 'linear-gradient(135deg, ' + $theme.colors.success + '15, ' + $theme.colors.success + '25)' : 
                'linear-gradient(135deg, ' + $theme.colors.error + '15, ' + $theme.colors.error + '25)'};
  border: 3px solid ${({ $theme, $correct }) => 
    $correct ? $theme.colors.success : $theme.colors.error};
  border-radius: ${({ $theme }) => $theme.radius.md};
  animation: ${css`${fadeIn} 0.4s ease-in`};
  box-shadow: 0 4px 12px ${({ $correct }) => 
    $correct ? 'rgba(76, 175, 80, 0.2)' : 'rgba(244, 67, 54, 0.2)'};
`;

const ResultTitle = styled.p<{ $theme: any; $correct: boolean }>`
  color: ${({ $theme, $correct }) => 
    $correct ? $theme.colors.success : $theme.colors.error};
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  text-shadow: 0 1px 2px rgba(0,0,0,0.1);
`;

const Explanation = styled.p<{ $theme: any }>`
  color: ${({ $theme }) => $theme.colors.text};
  font-size: 15px;
  line-height: 1.6;
  font-weight: 500;
`;

const NextButton = styled.button<{ $theme: any }>`
  width: 100%;
  padding: 16px;
  margin-top: 20px;
  border: none;
  border-radius: ${({ $theme }) => $theme.radius.md};
  background: linear-gradient(135deg, ${({ $theme }) => $theme.colors.primary}, ${({ $theme }) => $theme.colors.primary + 'CC'});
  color: white;
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);

  &:hover {
    opacity: 0.95;
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(0,0,0,0.2);
  }

  &:active {
    transform: translateY(-1px);
  }
`;

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface QuizCardProps {
  question: QuizQuestion;
  onAnswer: (correct: boolean) => void;
  onNext: () => void;
  showNext: boolean;
}

const QuizCard: React.FC<QuizCardProps> = ({ question, onAnswer, onNext, showNext }) => {
  const { theme } = useThemeLanguage();
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (index: number) => {
    if (showResult) return;
    setSelected(index);
    setShowResult(true);
    onAnswer(index === question.correctAnswer);
  };

  return (
    <Card $theme={theme} $correct={question.correctAnswer === selected} $showResult={showResult}>
      <Question $theme={theme}>{question.question}</Question>
      {question.options.map((option, index) => (
        <Option
          key={index}
          $theme={theme}
          $selected={selected === index}
          $correct={index === question.correctAnswer}
          $showResult={showResult}
          onClick={() => handleSelect(index)}
          disabled={showResult}
        >
          {option}
        </Option>
      ))}
      {showResult && (
        <ResultBanner $theme={theme} $correct={question.correctAnswer === selected}>
          <ResultTitle $theme={theme} $correct={question.correctAnswer === selected}>
            {question.correctAnswer === selected ? '✓ ¡Correcto!' : '✗ Incorrecto'}
          </ResultTitle>
          <Explanation $theme={theme}>
            {question.explanation}
          </Explanation>
        </ResultBanner>
      )}
      {showNext && (
        <NextButton $theme={theme} onClick={onNext}>
          Siguiente →
        </NextButton>
      )}
    </Card>
  );
};

export default QuizCard;
