import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ThemeMode, getTheme, Theme } from '@/styles/theme';
import { Language } from '@/i18n/translations';
import { getTranslation } from '@/i18n/translations';

export type { Theme };

interface ThemeLanguageContextType {
  theme: Theme;
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const ThemeLanguageContext = createContext<ThemeLanguageContextType | undefined>(undefined);

export const ThemeLanguageProvider = ({ children }: { children: ReactNode }) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('nautic-theme');
    if (saved === 'light' || saved === 'dark' || saved === 'system') return saved;
    return 'system';
  });

  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('nautic-language');
    if (saved === 'en' || saved === 'es') return saved;
    const browserLang = navigator.language.split('-')[0];
    return browserLang === 'en' ? 'en' : 'es';
  });

  const [theme, setTheme] = useState<Theme>(() => getTheme(themeMode));

  useEffect(() => {
    localStorage.setItem('nautic-theme', themeMode);
    setTheme(getTheme(themeMode));
  }, [themeMode]);

  useEffect(() => {
    localStorage.setItem('nautic-language', language);
  }, [language]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (themeMode === 'system') {
        setTheme(getTheme('system'));
      }
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [themeMode]);

  useEffect(() => {
    document.body.style.backgroundColor = theme.colors.background;
    document.body.style.color = theme.colors.text;
  }, [theme]);

  const t = (key: string): string => {
    return getTranslation(language, key as any) || key;
  };

  return (
    <ThemeLanguageContext.Provider value={{ theme, themeMode, setThemeMode, language, setLanguage, t }}>
      {children}
    </ThemeLanguageContext.Provider>
  );
};

export const useThemeLanguage = () => {
  const context = useContext(ThemeLanguageContext);
  if (!context) throw new Error('useThemeLanguage must be used within ThemeLanguageProvider');
  return context;
};
