import { useState, useEffect, useCallback } from 'react';
import { Language, getTranslation } from './translations';

const getBrowserLanguage = (): Language => {
  if (typeof window === 'undefined') return 'es';
  const lang = navigator.language.split('-')[0];
  return lang === 'en' ? 'en' : 'es';
};

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('nautic-language');
    if (saved === 'en' || saved === 'es') return saved;
    return getBrowserLanguage();
  });

  useEffect(() => {
    localStorage.setItem('nautic-language', language);
  }, [language]);

  const t = useCallback(
    (key: keyof typeof getTranslation) => getTranslation(language, key),
    [language]
  );

  return { language, setLanguage, t };
};
