import 'server-only';
import { Locale, i18n } from '@/i18n.config';

type Dictionary = {
  [key: string]: any;
}

type DictionaryPromise = () => Promise<Dictionary>;

const dictionaries: Record<Locale, DictionaryPromise> = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  ru: () => import('@/dictionaries/ru.json').then((module) => module.default),
  uk: () => import('@/dictionaries/uk.json').then((module) => module.default),
} as const;

export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
  if (!i18n.locales.includes(locale)) {
    console.warn(`Locale ${locale} not found, falling back to ${i18n.defaultLocale}`);
    return dictionaries[i18n.defaultLocale]();
  }

  try {
    return await dictionaries[locale]();
  } catch (error) {
    console.error(`Failed to load dictionary for locale ${locale}:`, error);
    
    return dictionaries[i18n.defaultLocale]();
  }
};

export const isValidLocale = (locale: string): locale is Locale => {
  return i18n.locales.includes(locale as Locale);
};