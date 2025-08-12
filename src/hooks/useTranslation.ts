import { useEffect } from 'react';
import { useAppStore } from '../store/useAppStore';
import i18n, { Language, t } from '../i18n';

export const useTranslation = () => {
  const { currentLanguage, setLanguage } = useAppStore();

  useEffect(() => {
    i18n.setLanguage(currentLanguage);
  }, [currentLanguage]);

  const changeLanguage = (language: Language) => {
    i18n.setLanguage(language);
    setLanguage(language);
  };

  return {
    t,
    currentLanguage,
    changeLanguage,
  };
};