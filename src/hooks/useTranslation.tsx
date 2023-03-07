import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import EnglishStrings from '../strings/en.json';
import PortugueseStrings from '../strings/pt.json';

type Translations = typeof EnglishStrings;

const translations: Record<string, Translations> = {
  en: EnglishStrings,
  pt: PortugueseStrings
};

export const useTranslation = (): Translations => {
  const { language } = useContext(LanguageContext);
  const strings = translations[language];

  if (!strings) {
    throw new Error(`Unsupported language: ${language}`);
  }

  return strings;
};
