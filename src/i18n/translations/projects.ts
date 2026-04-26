import type { Locale } from "../context";
type Dict = Record<string, Record<Locale, string>>;

export const projectsHero: Dict = {
    eyebrow: { en: "Projects", es: "Proyectos" },
    title1: { en: "Things I'm ", es: "Lo que estoy " },
    title2: { en: "building", es: "construyendo" },
    tagline: {
        en: "From clinical software for dentistry to financial education tools — I build robust, well-architected products where I see a real-world need I can solve.",
        es: "Desde software clínico para odontología hasta herramientas de educación financiera — construyo productos robustos y bien arquitectados donde veo una necesidad real que puedo resolver.",
    },
};

export const dcCard: Dict = {
    label: { en: "MVP · In production", es: "MVP · En producción" },
    title: { en: "DentalCore", es: "DentalCore" },
    text: {
        en: "A comprehensive clinical platform for dental practices — patient management, digital odontogram, periodontal charting, treatment plans, finance and patient portal — built on a robust core with selective AI assistance where it adds real clinical value. Already running at a clinic in Misiones, Argentina.",
        es: "Plataforma clínica integral para consultorios dentales — gestión de pacientes, odontograma digital, periodontograma, planes de tratamiento, finanzas y portal del paciente — construida sobre un núcleo robusto con asistencia de IA selectiva donde agrega valor clínico real. Ya en producción en una clínica en Misiones, Argentina.",
    },
    readMore: { en: "Read more", es: "Leer más" },
    role: { en: "CEO & Developer", es: "CEO y Desarrollador" },
};

export const camilaCard: Dict = {
    label: { en: "Live · Production", es: "Live · Producción" },
    title: { en: "Camila Chesani Odontología", es: "Camila Chesani Odontología" },
    text: {
        en: "A real-world deployment of DentalCore powering both the public clinic site and the internal practice management for Dr. Camila Chesani in El Dorado, Misiones. Online appointment booking, ten dental specialties and full integration with the clinical platform.",
        es: "Un despliegue real de DentalCore que alimenta tanto el sitio público de la clínica como la gestión interna para la Dra. Camila Chesani en El Dorado, Misiones. Turnos online, diez especialidades y full integración con la plataforma clínica.",
    },
    cta: { en: "Visit clinic site", es: "Visitar sitio" },
};

export const fgCard: Dict = {
    label: { en: "Live · External", es: "Live · Externo" },
    title: { en: "FG Capital", es: "FG Capital" },
    text: {
        en: "Financial education and investment platform aimed at Argentine residents looking to build literacy and make informed decisions about their money. A clean, content-driven Next.js site built and deployed on Vercel.",
        es: "Plataforma de educación financiera e inversiones pensada para residentes argentinos que buscan formarse y tomar decisiones informadas sobre su dinero. Un sitio Next.js limpio y orientado al contenido, deployado en Vercel.",
    },
    cta: { en: "Visit site", es: "Visitar sitio" },
    readMore: { en: "Read more", es: "Leer más" },
    role: { en: "CTO & Co-founder", es: "CTO y Co-fundador" },
};

export const odontolatamCard: Dict = {
    label: { en: "Live · Community", es: "Live · Comunidad" },
    title: { en: "OdontoLatam", es: "OdontoLatam" },
    text: {
        en: "The largest community of dentists in Latin America. 5,000+ active professionals across 15 countries sharing 10,000+ clinical cases, a medication compendium, pathology atlas, job board, marketplace, AI tools and weekly live sessions. Founded and led by me as CEO.",
        es: "La comunidad de odontólogos más grande de América Latina. 5.000+ profesionales activos en 15 países compartiendo 10.000+ casos clínicos, vademécum, atlas de patología, bolsa de trabajo, marketplace, herramientas de IA y sesiones en vivo semanales. Fundada y liderada por mí como CEO.",
    },
    cta: { en: "Visit community", es: "Visitar comunidad" },
    readMore: { en: "Read more", es: "Leer más" },
    role: { en: "CEO & Founder", es: "CEO y Fundador" },
    stat1label: { en: "Active dentists", es: "Odontólogos activos" },
    stat2label: { en: "Countries", es: "Países" },
    stat3label: { en: "Clinical cases", es: "Casos clínicos" },
    stat4label: { en: "Articles", es: "Artículos" },
};

export const carolinaCard: Dict = {
    label: { en: "Live · Production", es: "Live · Producción" },
    title: { en: "Carolina Salva Odontología", es: "Carolina Salva Odontología" },
    text: {
        en: "Modern, warm-toned landing page for Dr. Carolina Salva's dental practice in Berisso, Buenos Aires. Services, before/after cases, testimonials and WhatsApp booking — designed to reflect her focus on comfort, aesthetics and personalized care.",
        es: "Landing page moderna y cálida para el consultorio de la Dra. Carolina Salva en Berisso, Buenos Aires. Servicios, casos antes/después, testimonios y reserva por WhatsApp — diseñada para reflejar su enfoque en confort, estética y atención personalizada.",
    },
    cta: { en: "Visit site", es: "Visitar sitio" },
};
