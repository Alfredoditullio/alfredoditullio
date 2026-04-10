import type { Locale } from "../context";

type Dict = Record<string, Record<Locale, string>>;

export const nav: Dict = {
    about: { en: "About", es: "Sobre mí" },
    projects: { en: "Projects", es: "Proyectos" },
    books: { en: "Books", es: "Libros" },
    contact: { en: "Contact", es: "Contacto" },
};

export const footer: Dict = {
    copyright: { en: "Alfredo Di Tullio", es: "Alfredo Di Tullio" },
    privacy: { en: "Privacy", es: "Privacidad" },
    terms: { en: "Terms", es: "Términos" },
    cookies: { en: "Cookies", es: "Cookies" },
};

export const cookieBanner: Dict = {
    title: {
        en: "A quick note about cookies",
        es: "Una nota sobre cookies",
    },
    body: {
        en: "This site uses only the bare minimum cookies needed for it to work. No analytics, no tracking, no ads. Read the",
        es: "Este sitio usa solo las cookies mínimas necesarias para funcionar. Sin analíticas, sin rastreo, sin publicidad. Leé la",
    },
    policyLink: {
        en: "Cookie Policy",
        es: "Política de Cookies",
    },
    forTheFullStory: {
        en: "for the full story.",
        es: "para más detalles.",
    },
    decline: { en: "Decline", es: "Rechazar" },
    accept: { en: "Accept", es: "Aceptar" },
};

export const languagePopup: Dict = {
    title: {
        en: "Choose your language",
        es: "Elegí tu idioma",
    },
    subtitle: {
        en: "You can change this anytime from the navigation bar.",
        es: "Podés cambiarlo en cualquier momento desde la barra de navegación.",
    },
    english: { en: "English", es: "English" },
    spanish: { en: "Español", es: "Español" },
};
