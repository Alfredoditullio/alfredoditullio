import type { Locale } from "../context";
type Dict = Record<string, Record<Locale, string>>;

export const fgHero: Dict = {
    label: { en: "Live · Platform", es: "Live · Plataforma" },
    summary: {
        en: "A financial education and investment platform built for Argentine residents. Gamified learning, investment simulators, portfolio tracking, tax tools and a growing community — all designed to make financial literacy accessible and actionable for everyday people.",
        es: "Plataforma de educación financiera e inversiones construida para residentes argentinos. Aprendizaje gamificado, simuladores de inversión, seguimiento de portfolio, herramientas fiscales y una comunidad en crecimiento — todo diseñado para hacer que la educación financiera sea accesible y práctica para la gente de a pie.",
    },
    btnLive: { en: "Visit fgcapital.vercel.app", es: "Visitar fgcapital.vercel.app" },
};

export const fgFeatures: Dict = {
    eyebrow: { en: "What FG Capital offers", es: "Qué ofrece FG Capital" },
    title: { en: "Financial tools for real people", es: "Herramientas financieras para gente real" },
    intro: {
        en: "Not another Wall Street app — this is built for Argentina's unique financial reality: inflation, CEDEARs, plazo fijo and the constant question of what to do with your money.",
        es: "No es otra app de Wall Street — está construida para la realidad financiera única de Argentina: inflación, CEDEARs, plazo fijo y la constante pregunta de qué hacer con tu plata.",
    },
};

export const fgFeatureItems: { title: Record<Locale, string>; text: Record<Locale, string> }[] = [
    {
        title: { en: "Gamified education", es: "Educación gamificada" },
        text: { en: "Learn investing through interactive modules, quizzes and progress tracking — no boring PDFs. Built so anyone can start from zero.", es: "Aprendé a invertir con módulos interactivos, quizzes y seguimiento de progreso — sin PDFs aburridos. Hecho para que cualquiera pueda arrancar de cero." },
    },
    {
        title: { en: "Investment simulator", es: "Simulador de inversión" },
        text: { en: "Practice with real market data without risking real money. Test strategies, compare instruments and build confidence before investing.", es: "Practicá con datos reales del mercado sin arriesgar plata real. Probá estrategias, compará instrumentos y ganá confianza antes de invertir." },
    },
    {
        title: { en: "Portfolio tracking", es: "Seguimiento de portfolio" },
        text: { en: "Track your investments across CEDEARs, bonds, plazo fijo and crypto in one dashboard with real-time Argentine market data.", es: "Seguí tus inversiones en CEDEARs, bonos, plazo fijo y crypto en un solo dashboard con datos del mercado argentino en tiempo real." },
    },
    {
        title: { en: "Tax tools", es: "Herramientas fiscales" },
        text: { en: "Calculate tax obligations on your investments. Built for Argentine tax law so you know exactly what you owe before it's due.", es: "Calculá las obligaciones impositivas de tus inversiones. Hecho para la ley impositiva argentina para que sepas exactamente cuánto debés antes de que venza." },
    },
];

export const fgBehind: Dict = {
    eyebrow: { en: "Behind the project", es: "Detrás del proyecto" },
    title: { en: "Why FG Capital exists", es: "Por qué existe FG Capital" },
    p1: {
        en: "Most financial education platforms are built for US or European markets. They don't account for inflation, local instruments like CEDEARs, or the regulatory landscape in Latin America. FG Capital was built to fill that gap — specifically for Argentina.",
        es: "La mayoría de las plataformas de educación financiera están hechas para mercados de EE.UU. o Europa. No contemplan la inflación, instrumentos locales como los CEDEARs, ni el panorama regulatorio de América Latina. FG Capital se construyó para llenar ese vacío — específicamente para Argentina.",
    },
    p2: {
        en: "The goal is simple: make it easy for anyone — not just finance people — to understand what to do with their money in a country where doing nothing means losing.",
        es: "El objetivo es simple: hacer que sea fácil para cualquiera — no solo para gente de finanzas — entender qué hacer con su plata en un país donde no hacer nada significa perder.",
    },
};
