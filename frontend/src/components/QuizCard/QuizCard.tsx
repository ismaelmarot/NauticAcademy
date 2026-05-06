import React, { useState } from 'react';
import styled from 'styled-components';
import { useThemeLanguage } from '@/context/ThemeLanguageContext';

const Card = styled.div<{ $theme: any }>`
  background: ${({ $theme }) => $theme.colors.surface};
  border-radius: 16px;
  padding: 24px;
  margin: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`;

const Question = styled.h3<{ $theme: any }>`
  color: ${({ $theme }) => $theme.colors.text};
  margin-bottom: 16px;
  font-size: 18px;
`;

const Option = styled.button<{ $theme: any; $selected: boolean; $correct: boolean; $showResult: boolean }>`
  width: 100%;
  padding: 12px 16px;
  margin: 8px 0;
  border: 2px solid ${({ $theme, $selected, $correct, $showResult }) => {
    if (!$showResult) return $selected ? $theme.colors.primary : $theme.colors.border;
    if ($correct) return $theme.colors.success;
    if ($selected) return $theme.colors.error;
    return $theme.colors.border;
  }};
  background: ${({ $theme, $selected, $correct, $showResult }) => {
    if (!$showResult) return $selected ? $theme.colors.primary + '20' : 'transparent';
    if ($correct) return $theme.colors.success + '20';
    if ($selected) return $theme.colors.error + '20';
    return 'transparent';
  }};
  color: ${({ $theme }) => $theme.colors.text};
  border-radius: 8px;
  cursor: ${({ $showResult }) => $showResult ? 'default' : 'pointer'};
  text-align: left;
  font-size: 15px;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    opacity: 0.8;
  }

  &:disabled {
    cursor: default;
  }
`;

const Explanation = styled.div<{ $theme: any }>`
  margin-top: 16px;
  padding: 12px;
  background: ${({ $theme }) => $theme.colors.background};
  border-radius: 8px;
  color: ${({ $theme }) => $theme.colors.textSecondary};
  font-size: 14px;
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
}

const QuizCard: React.FC<QuizCardProps> = ({ question, onAnswer }) => {
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
    <Card $theme={theme}>
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
        <Explanation $theme={theme}>
          <strong>{question.correctAnswer === selected ? '✓ Correcto' : '✗ Incorrecto'}</strong>
          <br />
          {question.explanation}
        </Explanation>
      )}
    </Card>
  );
};

export default QuizCard;
