export const locales = ["en", "fr", "de"] as const;
export type Locale = (typeof locales)[number];

export const translationKeys = {
  common: {
    getStarted: "common.getStarted",
    requestDemo: "common.requestDemo",
    upload: "common.upload",
    processing: "common.processing",
    completed: "common.completed"
  },
  landing: {
    heroTitle: "landing.hero.title",
    heroSubtitle: "landing.hero.subtitle",
    featuresTitle: "landing.features.title",
    pricingTitle: "landing.pricing.title"
  },
  dashboard: {
    homeTitle: "dashboard.home.title",
    kpiEnergy: "dashboard.kpi.energy",
    kpiCo2: "dashboard.kpi.co2",
    kpiRoi: "dashboard.kpi.roi",
    kpiSavings: "dashboard.kpi.savings"
  },
  settings: {
    language: "settings.language",
    profile: "settings.profile"
  }
} as const;

export const translations: Record<Locale, Record<string, string>> = {
  en: {},
  fr: {},
  de: {}
};
