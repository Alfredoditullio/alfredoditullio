import type { Locale } from "../context";
type Dict = Record<string, Record<Locale, string>>;

export const hero: Dict = {
    eyebrow: { en: "Portfolio · 2025", es: "Portfolio · 2025" },
    name1: { en: "Alfredo ", es: "Alfredo " },
    name2: { en: "Di Tullio", es: "Di Tullio" },
    lead: {
        en: "I never learned how to pick just one thing.",
        es: "Nunca aprendí a elegir una sola cosa.",
    },
    tagline: {
        en: "Trained as a dentist in Argentina. Cooked in Michelin-star kitchens across Denmark, Norway, Spain and Australia. Philosophy graduate, tourism technician, author of two books. Today I build software and websites for whoever needs them — from",
        es: "Odontólogo formado en Argentina. Cociné en restaurantes con estrella Michelin en Dinamarca, Noruega, España y Australia. Licenciado en Filosofía, técnico en turismo, autor de dos libros. Hoy construyo software y sitios web para quien los necesite — desde",
    },
    taglineEnd: {
        en: "to a brand-new site for any business — and write about what happens when disciplines collide.",
        es: "hasta un sitio nuevo para cualquier negocio — y escribo sobre lo que pasa cuando las disciplinas chocan.",
    },
    btnProjects: { en: "View projects", es: "Ver proyectos" },
    btnAbout: { en: "About me", es: "Sobre mí" },
    chipDentist: { en: "Dentist", es: "Odontólogo" },
    chipDev: { en: "Full-stack dev", es: "Desarrollador" },
    chipAuthor: { en: "Author · 2 books", es: "Autor · 2 libros" },
    chipPhilosophy: { en: "Philosophy BA", es: "Lic. en Filosofía" },
};

export const whatIDo: Dict = {
    eyebrow: { en: "What I do", es: "Lo que hago" },
    title: { en: "A multidisciplinary practice", es: "Una práctica multidisciplinaria" },
};

export const featured: Dict = {
    eyebrow: { en: "Featured project", es: "Proyecto destacado" },
    title: { en: "DentalCore", es: "DentalCore" },
    intro: {
        en: "A comprehensive clinical platform for dental practices — patient management, digital odontogram, treatment plans, finance, patient portal — built on a robust, well-architected core with thoughtful AI features layered where they actually help.",
        es: "Una plataforma clínica integral para consultorios dentales — gestión de pacientes, odontograma digital, planes de tratamiento, finanzas, portal del paciente — construida sobre un núcleo robusto y bien arquitectado con funciones de IA donde realmente ayudan.",
    },
    cardLabel: { en: "MVP · In production", es: "MVP · En producción" },
    cardTitle: { en: "DentalCore", es: "DentalCore" },
    cardText: {
        en: "Patient management, digital odontogram, periodontal charting, treatment plans, finance and patient portal — built with React 19, TypeScript and Supabase, with selective AI assistance where it adds real clinical value.",
        es: "Gestión de pacientes, odontograma digital, periodontograma, planes de tratamiento, finanzas y portal del paciente — hecho con React 19, TypeScript y Supabase, con asistencia de IA selectiva donde agrega valor clínico real.",
    },
    readMore: { en: "Read more", es: "Leer más" },
};

export const press: Dict = {
    eyebrow: { en: "As featured in", es: "En los medios" },
    title: { en: "In the press", es: "Prensa" },
    veuName: { en: "Veu Catalana", es: "Veu Catalana" },
    veuQuote: {
        en: '"Horizontes Infinitos: philosophy, travel and reflection in Alfredo Di Tullio\'s new work."',
        es: '"Horizontes Infinitos: filosofía, viajes y reflexión en la nueva obra de Alfredo Di Tullio."',
    },
    veuCta: { en: "Read review", es: "Leer reseña" },
    lnName: { en: "La Nación", es: "La Nación" },
    lnQuote: {
        en: '"Argentina felt incomplete — I found what I was looking for on the other side of the world."',
        es: '"En Argentina algo le faltaba — halló el destino que buscaba en el mundo."',
    },
    lnCta: { en: "Read article", es: "Leer artículo" },
};
