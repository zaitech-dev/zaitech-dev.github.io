import { en } from './en';
import { ar } from './ar';

export const translations = {
  en,
  ar,
} as const;

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;

// Type-safe translation function type
export type TranslationFunction = (key: TranslationKey) => any;
