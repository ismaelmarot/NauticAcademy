import React from 'react';
import styled from 'styled-components';
import { useThemeLanguage } from '@/context/ThemeLanguageContext';

const Badge = styled.div<{ $theme: any }>`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: ${({ $theme }) => $theme.colors.surface};
  border-radius: 20px;
  color: ${({ $theme }) => $theme.colors.text};
  font-size: 14px;
  font-weight: 600;
`;

interface StreakBadgeProps {
  streak: number;
}

const StreakBadge: React.FC<StreakBadgeProps> = ({ streak }) => {
  const { theme, t } = useThemeLanguage();
  return (
    <Badge $theme={theme}>
      🔥 {streak} {t('streak')}
    </Badge>
  );
};

export default StreakBadge;
