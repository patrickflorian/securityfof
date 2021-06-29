import i18n from 'i18next';
import en from './src/locales/en.json';
import fr from './src/locales/fr.json';
import {initReactI18next, useTranslation} from 'react-i18next';

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: (cb) => cb('fr'),
  init: () => {},
  cacheUserLanguage: () => {},
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'fr',
    debug: true,
    resources: {
      en: {translation: en},
      fr: {translation: fr},
    },
    keySeparator: '.', // we do not use keys in form messages.welcome
  });

export default i18n;
