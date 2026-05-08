import React from 'react';
import styled from 'styled-components';
import { useThemeLanguage } from '@/context/ThemeLanguageContext';

const SwitcherContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const LangButton = styled.button<{ $active: boolean; $theme: any }>`
  padding: 8px 16px;
  border: 2px solid ${({ $theme }) => $theme.colors.primary};
  background: ${({ $active, $theme }) => $active ? $theme.colors.primary : 'transparent'};
  color: ${({ $active, $theme }) => $active ? $theme.colors.background : $theme.colors.primary};
  border-radius: ${({ $theme }) => $theme.radius.sm};
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage, theme } = useThemeLanguage();

  return (
    <SwitcherContainer>
      <LangButton
        $active={language === 'es'}
        $theme={theme}
        onClick={() => setLanguage('es')}
      >
        ES
      </LangButton>
      <LangButton
        $active={language === 'en'}
        $theme={theme}
        onClick={() => setLanguage('en')}
      >
        EN
      </LangButton>
    </SwitcherContainer>
  );
};

export default LanguageSwitcher;
