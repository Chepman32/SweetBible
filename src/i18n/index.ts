import en from './locales/en.json';
import zh from './locales/zh.json';
import pt from './locales/pt.json';
import fr from './locales/fr.json';
import de from './locales/de.json';
import es from './locales/es.json';
import ru from './locales/ru.json';

export type Language = 'en' | 'zh' | 'pt' | 'fr' | 'de' | 'es' | 'ru';

export const languages: Record<Language, string> = {
  en: 'English',
  zh: '中文',
  pt: 'Português',
  fr: 'Français',
  de: 'Deutsch',
  es: 'Español',
  ru: 'Русский'
};

const translations = {
  en,
  zh,
  pt,
  fr,
  de,
  es,
  ru
};

let currentLanguage: Language = 'en';

export const setLanguage = (language: Language) => {
  currentLanguage = language;
};

export const getCurrentLanguage = (): Language => currentLanguage;

export const t = (key: string): string => {
  const keys = key.split('.');

  const resolve = (lang: Language): any => {
    let value: any = translations[lang];
    for (const k of keys) {
      value = value?.[k];
    }
    return value;
  };

  const localized = resolve(currentLanguage);
  if (typeof localized === 'string') return localized;

  const fallbackEn = resolve('en');
  if (typeof fallbackEn === 'string') return fallbackEn;

  return key;
};

export default {
  setLanguage,
  getCurrentLanguage,
  t,
  languages
};