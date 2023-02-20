import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEN from "../src/assets/locales/en/translation.json";
import translationIN from "../src/assets/locales/in/translation.json";
import translationZH from "../src/assets/locales/zh/translation.json";

const fallbackLng = ["in"];
const availableLanguages = ["in", "en", "zh"];

const resources = {
  in: {
    translation: translationIN
  },
  en: {
    translation: translationEN
  },
  zh: {
    translation: translationZH
  }
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng,

    detection: {
      checkWhitelist: true
    },

    debug: false,

    whitelist: availableLanguages,

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
