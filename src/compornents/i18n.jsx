import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        'ようこそ React と react-i18next へ。': 'Welcome to React and react-i18next.',
        アバウト: 'About',
        "Hi,I'm Shu Tanoue": "Hi,I'm Shu Tanoue",
      },
    },
    ja: {
      translation: {
        'ようこそ React と react-i18next へ。': 'ようこそ React と react-i18next へ。',
        アバウト: 'アバウト',
        "Hi,I'm Shu Tanoue": "こんにちは、タノウエ シュウイチロウ",
    
      },
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});