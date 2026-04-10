import type { Locale } from "../context";
type Dict = Record<string, Record<Locale, string>>;

export const disciplines: {
    id: string;
    badge: Record<Locale, string>;
    title: Record<Locale, string>;
    description: Record<Locale, string>;
    icon: string;
    meta: string;
    accent: string;
}[] = [
    {
        id: "dentistry",
        badge: { en: "Healthcare", es: "Salud" },
        title: { en: "Dentistry", es: "Odontología" },
        description: {
            en: "Practicing dentist trained at the National University of La Plata. Years of clinical experience inform every product decision when I build software for the dental world.",
            es: "Odontólogo formado en la Universidad Nacional de La Plata. Años de experiencia clínica informan cada decisión de producto cuando construyo software para el mundo dental.",
        },
        icon: "fa-solid fa-tooth",
        meta: "UNLP · 2013",
        accent: "linear-gradient(135deg, #6366f1 0%, #818cf8 60%, #c7d2fe 100%)",
    },
    {
        id: "software",
        badge: { en: "Engineering", es: "Ingeniería" },
        title: { en: "Software development", es: "Desarrollo de software" },
        description: {
            en: "Full-stack engineering with React, TypeScript, Supabase and modern tooling. Focused on shipping robust, well-architected products that solve real-world problems.",
            es: "Ingeniería full-stack con React, TypeScript, Supabase y herramientas modernas. Enfocado en construir productos robustos y bien arquitectados que resuelvan problemas reales.",
        },
        icon: "fa-solid fa-code",
        meta: "Self-taught · since 2020",
        accent: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 60%, #a78bfa 100%)",
    },
    {
        id: "writing",
        badge: { en: "Words", es: "Letras" },
        title: { en: "Writing & philosophy", es: "Escritura y filosofía" },
        description: {
            en: "B.A. in Philosophy and author of two books — En búsqueda del sentido (2023) and Horizontes Infinitos (2025). I write about meaning, travel and how we make sense of our lives.",
            es: "Licenciado en Filosofía y autor de dos libros — En búsqueda del sentido (2023) y Horizontes Infinitos (2025). Escribo sobre sentido, viajes y cómo entendemos nuestras vidas.",
        },
        icon: "fa-solid fa-feather-pointed",
        meta: "Universidad TECH · 2023",
        accent: "linear-gradient(135deg, #8b5cf6 0%, #a855f7 50%, #d8b4fe 100%)",
    },
    {
        id: "tourism",
        badge: { en: "Voyage", es: "Viajes" },
        title: { en: "Travel & tourism", es: "Viajes y turismo" },
        description: {
            en: "University Technician in Tourism — I understand the industry from the inside thanks to my formal training. Years of traveling across Europe, Asia and Oceania add the lived experience that shapes how I write and build.",
            es: "Técnico Universitario en Turismo — entiendo la industria desde adentro gracias a mi formación. Años viajando por Europa, Asia y Oceanía aportan la experiencia vivida que da forma a mi escritura y mis proyectos.",
        },
        icon: "fa-solid fa-compass",
        meta: "UNTREF · 2024",
        accent: "linear-gradient(135deg, #ec4899 0%, #f472b6 50%, #fbcfe8 100%)",
    },
    {
        id: "gastronomy",
        badge: { en: "Craft", es: "Oficio" },
        title: { en: "Gastronomy & cooking", es: "Gastronomía y cocina" },
        description: {
            en: "International Chef Diploma. Six years cooking professionally in Denmark, Norway, Spain and Australia, including a stint at a Michelin-starred kitchen. Cooking taught me discipline, craft and how to ship under pressure.",
            es: "Diploma de Chef Internacional. Seis años cocinando profesionalmente en Dinamarca, Noruega, España y Australia, incluyendo un restaurante con estrella Michelin. La cocina me enseñó disciplina, oficio y cómo entregar bajo presión.",
        },
        icon: "fa-solid fa-utensils",
        meta: "IGA · 2018",
        accent: "linear-gradient(135deg, #f97316 0%, #fb923c 50%, #fed7aa 100%)",
    },
];
