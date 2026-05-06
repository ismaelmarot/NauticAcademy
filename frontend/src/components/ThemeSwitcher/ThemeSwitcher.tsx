import React from 'react';
import styled from 'styled-components';
import { useThemeLanguage } from '@/context/ThemeLanguageContext';
import { ThemeMode } from '@/styles/theme';

const SwitcherContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const ThemeButton = styled.button<{ $active: boolean; $theme: any }>`
  padding: 8px 16px;
  border: 2px solid ${({ $theme }) => $theme.colors.primary};
  background: ${({ $active, $theme }) => $active ? $theme.colors.primary : 'transparent'};
  color: ${({ $active, $theme }) => $active ? $theme.colors.background : $theme.colors.primary};
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

const ThemeSwitcher: React.FC = () => {
  const { themeMode, setThemeMode, t, theme } = useThemeLanguage();

  const modes: { value: ThemeMode; label: string }[] = [
    { value: 'light', label: t('light') },
    { value: 'dark', label: t('dark') },
    { value: 'system', label: t('system') }
  ];

  return (
    <SwitcherContainer>
      {modes.map(mode => (
        <ThemeButton
          key={mode.value}
          $active={themeMode === mode.value}
          $theme={theme}
          onClick={() => setThemeMode(mode.value)}
        >
          {mode.label}
        </ThemeButton>
      ))}
    </SwitcherContainer>
  );
};

export default ThemeSwitcher;
