import React from 'react';
import styled from 'styled-components';
import { useThemeLanguage } from '@/context/ThemeLanguageContext';

const Container = styled.div<{ $theme: any }>`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 16px;
  background: ${({ $theme }) => $theme.colors.surface};
  border-radius: 12px;
`;

const XPInfo = styled.div<{ $theme: any }>`
  color: ${({ $theme }) => $theme.colors.text};
  font-size: 14px;
  font-weight: 600;
`;

const XPBarContainer = styled.div<{ $theme: any }>`
  flex: 1;
  height: 8px;
  background: ${({ $theme }) => $theme.colors.border};
  border-radius: 4px;
  overflow: hidden;
`;

const XPBarFill = styled.div<{ $progress: number; $theme: any }>`
  height: 100%;
  width: ${({ $progress }) => Math.min(100, Math.max(0, $progress))}%;
  background: linear-gradient(90deg, ${({ $theme }) => $theme.colors.primary}, ${({ $theme }) => $theme.colors.secondary});
  border-radius: 4px;
  transition: width 0.3s ease;
`;

interface XPBarProps {
  xp: number;
  level: number;
}

const XPBar: React.FC<XPBarProps> = ({ xp, level }) => {
  const { theme, t } = useThemeLanguage();
  const currentLevelXP = (level - 1) * 100;
  const progress = ((xp - currentLevelXP) / 100) * 100;

  return (
    <Container $theme={theme}>
      <XPInfo $theme={theme}>
        {t('level')} {level}
      </XPInfo>
      <XPBarContainer $theme={theme}>
        <XPBarFill $progress={progress} $theme={theme} />
      </XPBarContainer>
      <XPInfo $theme={theme}>{xp} {t('xp')}</XPInfo>
    </Container>
  );
};

export default XPBar;
