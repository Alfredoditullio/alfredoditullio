import type { Locale } from "../context";
type Dict = Record<string, Record<Locale, string>>;

export const olHero: Dict = {
    label: { en: "Live · Community", es: "Live · Comunidad" },
    summary: {
        en: "The largest online community of dentists in Latin America. A professional hub where over 5,000 dental practitioners across 15 countries share clinical cases, access educational resources, connect with peers and grow their careers — all in one platform. Founded and led by me as CEO.",
        es: "La comunidad online de odontólogos más grande de América Latina. Un hub profesional donde más de 5.000 profesionales dentales de 15 países comparten casos clínicos, acceden a recursos educativos, se conectan con colegas y hacen crecer sus carreras — todo en una plataforma. Fundada y liderada por mí como CEO.",
    },
    btnLive: { en: "Visit odontolatam.com", es: "Visitar odontolatam.com" },
};

export const olStats: Dict = {
    eyebrow: { en: "Community in numbers", es: "La comunidad en números" },
    title: { en: "Growing every day", es: "Creciendo cada día" },
    s1num: { en: "5,000+", es: "5.000+" },
    s1label: { en: "Active dentists", es: "Odontólogos activos" },
    s2num: { en: "15", es: "15" },
    s2label: { en: "Countries", es: "Países" },
    s3num: { en: "10,000+", es: "10.000+" },
    s3label: { en: "Clinical cases shared", es: "Casos clínicos compartidos" },
    s4num: { en: "500+", es: "500+" },
    s4label: { en: "Published articles", es: "Artículos publicados" },
    s5num: { en: "4.9/5", es: "4.9/5" },
    s5label: { en: "Member rating", es: "Valoración de miembros" },
};

export const olFeatures: Dict = {
    eyebrow: { en: "What OdontoLatam offers", es: "Qué ofrece OdontoLatam" },
    title: { en: "Everything a dentist needs in one place", es: "Todo lo que un odontólogo necesita en un solo lugar" },
    intro: {
        en: "More than a community — a complete professional ecosystem for dental practitioners across the region.",
        es: "Más que una comunidad — un ecosistema profesional completo para odontólogos de toda la región.",
    },
};

export const olFeatureItems: { title: Record<Locale, string>; text: Record<Locale, string> }[] = [
    {
        title: { en: "Clinical cases", es: "Casos clínicos" },
        text: { en: "Share and discuss real cases with specialists across Latin America. Get peer feedback and learn from 10,000+ documented procedures.", es: "Compartí y discutí casos reales con especialistas de toda América Latina. Recibí feedback de colegas y aprendé de 10.000+ procedimientos documentados." },
    },
    {
        title: { en: "Medication compendium", es: "Vademécum dental" },
        text: { en: "Complete dental medication database with dosing, interactions and contraindications — always up to date and accessible from anywhere.", es: "Base de datos completa de medicamentos dentales con dosificación, interacciones y contraindicaciones — siempre actualizada y accesible desde cualquier lugar." },
    },
    {
        title: { en: "Pathology atlas", es: "Atlas de patología" },
        text: { en: "Visual reference library of oral pathologies with clinical images, diagnostic criteria and treatment protocols.", es: "Biblioteca visual de referencia de patologías orales con imágenes clínicas, criterios diagnósticos y protocolos de tratamiento." },
    },
    {
        title: { en: "Professional directory", es: "Directorio profesional" },
        text: { en: "Find and connect with dentists by specialty and location. Build your professional network across 15 countries.", es: "Encontrá y conectá con odontólogos por especialidad y ubicación. Construí tu red profesional en 15 países." },
    },
    {
        title: { en: "OdontoLatam Live", es: "OdontoLatam Live" },
        text: { en: "Weekly live sessions with specialists covering clinical techniques, case discussions and industry trends.", es: "Sesiones en vivo semanales con especialistas cubriendo técnicas clínicas, discusión de casos y tendencias de la industria." },
    },
    {
        title: { en: "Job board & marketplace", es: "Bolsa de trabajo y marketplace" },
        text: { en: "Find dental job opportunities across the region and buy or sell professional instruments and materials.", es: "Encontrá oportunidades laborales dentales en toda la región y comprá o vendé instrumentos y materiales profesionales." },
    },
];

export const olBehind: Dict = {
    eyebrow: { en: "Behind the project", es: "Detrás del proyecto" },
    title: { en: "Why I built OdontoLatam", es: "Por qué construí OdontoLatam" },
    p1: {
        en: "As a dentist, I saw how isolated many practitioners were — especially solo dentists in smaller cities across Latin America. There was no single platform where they could share cases, find reliable clinical resources, or simply connect with peers who understood their daily challenges.",
        es: "Como odontólogo, vi lo aislados que estaban muchos profesionales — especialmente odontólogos solos en ciudades más chicas de América Latina. No existía una plataforma única donde pudieran compartir casos, encontrar recursos clínicos confiables, o simplemente conectar con colegas que entendieran sus desafíos diarios.",
    },
    p2: {
        en: "OdontoLatam was built to fix that. Today it connects over 5,000 dentists across 15 countries, and it keeps growing. It's not just a community — it's becoming the professional infrastructure that Latin American dentistry was missing.",
        es: "OdontoLatam se construyó para solucionar eso. Hoy conecta a más de 5.000 odontólogos en 15 países, y sigue creciendo. No es solo una comunidad — se está convirtiendo en la infraestructura profesional que la odontología latinoamericana necesitaba.",
    },
};
