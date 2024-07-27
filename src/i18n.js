import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Traducciones
const resources = {
  en: {
    translation: {
      "description": "Your English description here: {{description}}"
    }
  },
  es: {
    translation: {
      "description": "Tu descripción en español aquí: {{description}}"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "es", // Idioma por defecto
    fallbackLng: "en",
    interpolation: {
      escapeValue: false // React ya escapa por defecto
    }
  });

export default i18n;
