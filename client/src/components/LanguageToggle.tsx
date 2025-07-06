import React from 'react';
import { useLanguage } from '@/components/LanguageProvider';
import { trackButtonClick } from '@/lib/analytics';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'ar' : 'en';
    setLanguage(newLanguage);
    trackButtonClick(`language_toggle_${newLanguage}`, 'navigation');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 rtl:space-x-reverse px-3 py-1.5 rounded-lg bg-zai-accent/20 hover:bg-zai-accent/30 transition-colors text-white border border-zai-accent/40"
      aria-label={`Switch to ${language === 'en' ? 'Arabic' : 'English'}`}
    >
      <span className="text-sm font-medium">
        {language === 'en' ? 'العربية' : 'English'}
      </span>
      <div className="flex items-center space-x-1 rtl:space-x-reverse">
        <span className={`w-2 h-2 rounded-full ${language === 'en' ? 'bg-gray-400' : 'bg-zai-accent'}`}></span>
        <span className={`w-2 h-2 rounded-full ${language === 'ar' ? 'bg-gray-400' : 'bg-zai-accent'}`}></span>
      </div>
    </button>
  );
};

export default LanguageToggle;
