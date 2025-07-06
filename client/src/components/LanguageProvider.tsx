import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, Language, TranslationKey } from '@/lib/translations';
import { getLanguageFromUrl, updateUrlWithLanguage } from '@/lib/languageUtils';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
  dir: string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('preferred-language', lang);
    updateUrlWithLanguage(lang);
  };

  // Load language from URL, then localStorage, then default to 'en'
  useEffect(() => {
    const urlLang = getLanguageFromUrl();
    
    if (urlLang) {
      setLanguage(urlLang);
      localStorage.setItem('preferred-language', urlLang);
    } else {
      const savedLanguage = localStorage.getItem('preferred-language') as Language;
      if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ar')) {
        setLanguage(savedLanguage);
        updateUrlWithLanguage(savedLanguage);
      } else {
        // Default to English and add to URL
        updateUrlWithLanguage('en');
      }
    }
  }, []);

  const t = (key: TranslationKey): string => {
    return translations[language][key] || translations.en[key];
  };

  const dir = translations[language].dir;

  useEffect(() => {
    document.documentElement.setAttribute('dir', dir);
    document.documentElement.setAttribute('lang', language);
  }, [language, dir]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};
