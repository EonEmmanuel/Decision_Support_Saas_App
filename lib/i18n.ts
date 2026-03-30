export const locales = ["en", "fr", "de"] as const;
export type Locale = (typeof locales)[number];

export const dictionary: Record<Locale, Record<string, string>> = {
  en: {
    "common.getStarted": "Get Started",
    "common.login": "Login",
    "dashboard.title": "Dashboard",
    "settings.language": "Language"
  },
  fr: {
    "common.getStarted": "Commencer",
    "common.login": "Connexion",
    "dashboard.title": "Tableau de bord",
    "settings.language": "Langue"
  },
  de: {
    "common.getStarted": "Loslegen",
    "common.login": "Anmelden",
    "dashboard.title": "Dashboard",
    "settings.language": "Sprache"
  }
};

export function t(locale: Locale, key: string) {
  return dictionary[locale][key] ?? key;
}
