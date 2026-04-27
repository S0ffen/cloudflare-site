import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./en.json";
import pl from "./pl.json";

const savedLanguage =
  typeof window !== "undefined" ? window.localStorage.getItem("language") : null;
const browserLanguage =
  typeof window !== "undefined" && window.navigator.language.startsWith("pl")
    ? "pl"
    : "en";
const initialLanguage =
  savedLanguage === "pl" || savedLanguage === "en"
    ? savedLanguage
    : browserLanguage;

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    pl: { translation: pl },
  },
  lng: initialLanguage,
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

i18n.on("languageChanged", (language) => {
  if (typeof window !== "undefined") {
    window.localStorage.setItem("language", language.startsWith("pl") ? "pl" : "en");
  }
});

export default i18n;
