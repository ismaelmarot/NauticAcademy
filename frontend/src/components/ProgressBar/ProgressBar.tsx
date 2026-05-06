import React from 'react';
import styled from 'styled-components';
import { useThemeLanguage } from '@/context/ThemeLanguageContext';

const BarContainer = styled.div<{ $theme: any }>`
  width: 100%;
  height: 8px;
  background: ${({ $theme }) => $theme.colors.border};
  border-radius: 4px;
  overflow: hidden;
`;

const BarFill = styled.div<{ $progress: number; $theme: any }>`
  height: 100%;
  width: ${({ $progress }) => Math.min(100, Math.max(0, $progress))}%;
  background: ${({ $theme }) => $theme.colors.primary};
  border-radius: 4px;
  transition: width 0.3s ease;
`;

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  const { theme } = useThemeLanguage();
  return (
    <BarContainer $theme={theme}>
      <BarFill $progress={progress} $theme={theme} />
    </BarContainer>
  );
};

export default ProgressBar;
