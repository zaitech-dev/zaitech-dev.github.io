export type Language = 'en' | 'ar';

/**
 * Get the current language from URL parameters
 */
export const getLanguageFromUrl = (): Language | null => {
  const urlParams = new URLSearchParams(window.location.search);
  const urlLang = urlParams.get('lang') as Language;
  
  if (urlLang && (urlLang === 'en' || urlLang === 'ar')) {
    return urlLang;
  }
  
  return null;
};

/**
 * Update the URL with the current language without causing a page reload
 */
export const updateUrlWithLanguage = (language: Language): void => {
  const url = new URL(window.location.href);
  url.searchParams.set('lang', language);
  window.history.replaceState({}, '', url.toString());
};
