import type { Locale } from "../context";
type Dict = Record<string, Record<Locale, string>>;

export const aboutHero: Dict = {
    eyebrow: { en: "About", es: "Sobre mí" },
    title1: { en: "A curious mind at the ", es: "Una mente curiosa en la " },
    title2: { en: "intersection of fields", es: "intersección de disciplinas" },
    intro: {
        en: "I'm a dentist, developer and writer from La Plata, Argentina, currently based in Melbourne, Australia. I trained as a dentist at the National University of La Plata, hold a B.A. in Philosophy from Universidad TECH and a University Technician degree in Tourism from UNTREF. My journey also took me through Michelin-star kitchens across Denmark, Norway, Spain and Australia. I believe the most interesting work happens where disciplines meet.",
        es: "Soy odontólogo, desarrollador y escritor de La Plata, Argentina, actualmente viviendo en Melbourne, Australia. Me formé como odontólogo en la Universidad Nacional de La Plata, soy Licenciado en Filosofía por la Universidad TECH y Técnico Universitario en Turismo por la UNTREF. Mi camino también me llevó por cocinas con estrella Michelin en Dinamarca, Noruega, España y Australia. Creo que el trabajo más interesante pasa donde las disciplinas se cruzan.",
    },
};

export const aboutEducation: Dict = {
    eyebrow: { en: "Education", es: "Formación" },
};

export const aboutExperience: Dict = {
    eyebrow: { en: "Experience", es: "Experiencia" },
};

export const aboutOtc: Dict = {
    eyebrow: { en: "Off the clock", es: "Fuera del trabajo" },
    title: { en: "Beyond the CV", es: "Más allá del CV" },
};

export const aboutMeta: Dict = {
    age: { en: "Age", es: "Edad" },
    basedIn: { en: "Based in", es: "Ubicación" },
    email: { en: "Email", es: "Email" },
    languages: { en: "Languages", es: "Idiomas" },
    findMe: { en: "Find me on", es: "Encontrame en" },
};

export const educationItems: {
    year: string;
    title: Record<Locale, string>;
    org: string;
}[] = [
    { year: "2024", title: { en: "Full Stack Web Development", es: "Desarrollo Web Full Stack" }, org: "Universidad Nacional de Córdoba" },
    { year: "2024", title: { en: "University Technician in Tourism", es: "Técnico Universitario en Turismo" }, org: "Universidad Nacional de Tres de Febrero" },
    { year: "2023", title: { en: "B.A. in Philosophy", es: "Licenciado en Filosofía" }, org: "Universidad TECH" },
    { year: "2018", title: { en: "International Chef Diploma", es: "Diploma de Chef Internacional" }, org: "IGA, La Plata" },
    { year: "2013", title: { en: "Dentist (Odontólogo)", es: "Odontólogo" }, org: "Universidad Nacional de La Plata" },
];

export const experienceItems: {
    year: string;
    title: Record<Locale, string>;
    org: Record<Locale, string>;
}[] = [
    { year: "2024 – present", title: { en: "Web Designer & Developer", es: "Diseñador Web & Desarrollador" }, org: { en: "Independent — clinics and small businesses", es: "Independiente — clínicas y pequeños negocios" } },
    { year: "2024 – present", title: { en: "Marketing & Sales Funnels Consultant", es: "Consultor de Marketing y Embudos de Venta" }, org: { en: "Independent — strategy, copy and conversion", es: "Independiente — estrategia, copy y conversión" } },
    { year: "2018 – 2024", title: { en: "Chef", es: "Chef" }, org: { en: "Denmark · Norway · Spain · Australia — Michelin-star experience", es: "Dinamarca · Noruega · España · Australia — experiencia Michelin" } },
    { year: "2018 – 2020", title: { en: "General Dentist", es: "Odontólogo General" }, org: { en: "Argentina", es: "Argentina" } },
    { year: "2017 – 2020", title: { en: "Physiology Lecturer", es: "Docente de Fisiología" }, org: { en: "Universidad Nacional de La Plata", es: "Universidad Nacional de La Plata" } },
];

export const otcItems: {
    icon: string;
    title: Record<Locale, string>;
    text: Record<Locale, string>;
}[] = [
    { icon: "fa-solid fa-mountain-sun", title: { en: "Trekking", es: "Trekking" }, text: { en: "Made it to Everest Base Camp in 2023. Type 2 fun at its finest.", es: "Llegué al Campamento Base del Everest en 2023. Diversión tipo 2 en su máxima expresión." } },
    { icon: "fa-solid fa-guitar", title: { en: "Music", es: "Música" }, text: { en: "Self-taught guitar player. Also dabble in piano, bass and drums.", es: "Guitarrista autodidacta. También toco un poco de piano, bajo y batería." } },
    { icon: "fa-solid fa-tennis-ball", title: { en: "Tennis", es: "Tenis" }, text: { en: "Lifelong love. Casual player, competitive spirit.", es: "Un amor de toda la vida. Jugador casual, espíritu competitivo." } },
    { icon: "fa-solid fa-language", title: { en: "Languages", es: "Idiomas" }, text: { en: "ES · EN · FR · PT — currently learning Greek.", es: "ES · EN · FR · PT — actualmente aprendiendo griego." } },
    { icon: "fa-solid fa-paw", title: { en: "Dogs", es: "Perros" }, text: { en: "Pepperina, my Cocker Spaniel, runs the house. Unconditional team dog.", es: "Pepperina, mi Cocker Spaniel, manda en la casa. Equipo perros incondicional." } },
    { icon: "fa-solid fa-earth-americas", title: { en: "Travel", es: "Viajes" }, text: { en: "Lived in 5 countries so far. Always planning the next move.", es: "Viví en 5 países hasta ahora. Siempre planeando el próximo destino." } },
];

export const aboutPress: Dict = {
    eyebrow: { en: "Press", es: "Prensa" },
    lnLabel: { en: "La Nación · 2024", es: "La Nación · 2024" },
    lnTitle: {
        en: '"Argentina felt incomplete — I found what I was looking for on the other side of the world."',
        es: '"En Argentina algo le faltaba — halló el destino que buscaba en el mundo."',
    },
    lnText: {
        en: "A feature about my move from Argentina to Australia and what it taught me about time, work and meaning.",
        es: "Una nota sobre mi mudanza de Argentina a Australia y lo que me enseñó sobre el tiempo, el trabajo y el sentido.",
    },
    lnCta: { en: "Read the article", es: "Leer el artículo" },
};
