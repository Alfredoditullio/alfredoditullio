import type { Locale } from "../context";
type Dict = Record<string, Record<Locale, string>>;

export const dcHero: Dict = {
    label: { en: "MVP · In production", es: "MVP · En producción" },
    summary: {
        en: "Dental practice management software for clinics and solo dentists across Latin America. Digital odontogram, clinical records, smart scheduling, patient portal, finance — and selective AI assistance where it genuinely saves clinicians time. Built from the ground up by a dentist who codes.",
        es: "Software de gestión para clínicas y consultorios dentales en toda América Latina. Odontograma digital, historias clínicas, agenda inteligente, portal del paciente, finanzas — con asistencia de IA selectiva donde realmente ahorra tiempo al profesional. Construido desde cero por un odontólogo que programa.",
    },
    btnLive: { en: "Visit dentalcore.app", es: "Visitar dentalcore.app" },
    btnBlog: { en: "Read for solo dentists", es: "Leer para consultorios chicos" },
};

export const dcWhy: Dict = {
    eyebrow: { en: "Why DentalCore", es: "Por qué DentalCore" },
    title: {
        en: "Software that understands how dentists actually work",
        es: "Software que entiende cómo trabajan los odontólogos de verdad",
    },
    intro: {
        en: "Most dental management software was designed by engineers who never held a handpiece. DentalCore was built by a practicing dentist — every screen, every shortcut, every workflow comes from real clinical experience.",
        es: "La mayoría del software dental fue diseñado por ingenieros que nunca agarraron una turbina. DentalCore fue construido por un odontólogo en ejercicio — cada pantalla, cada atajo, cada flujo de trabajo viene de la experiencia clínica real.",
    },
};

export const dcWhyItems: { title: Record<Locale, string>; text: Record<Locale, string> }[] = [
    {
        title: { en: "Designed for solo dentists", es: "Diseñado para consultorios de un sillón" },
        text: { en: "Most dental software is built for large clinics with IT departments. DentalCore is designed so a single dentist with one chair can master it in 48 hours — not 48 days.", es: "La mayoría del software dental está pensado para clínicas grandes con departamento de IT. DentalCore está diseñado para que un odontólogo con un solo sillón lo domine en 48 horas, no en 48 días." },
    },
    {
        title: { en: "Free to start, scales when you grow", es: "Gratis para empezar, escala cuando crecés" },
        text: { en: "The Starter plan includes all core functionality at no cost. No credit card, no trial limits. Pay only when you need advanced features or more users.", es: "El plan Starter incluye toda la funcionalidad principal sin costo. Sin tarjeta de crédito, sin límites de prueba. Pagás solo cuando necesitás funciones avanzadas o más usuarios." },
    },
    {
        title: { en: "Built by a dentist who codes", es: "Construido por un odontólogo que programa" },
        text: { en: "Not by a software company guessing what clinicians need. Every workflow, every screen, every shortcut was designed by someone who has actually held the handpiece.", es: "No por una empresa de software adivinando lo que necesitan los clínicos. Cada flujo de trabajo, cada pantalla, cada atajo fue diseñado por alguien que realmente tuvo la turbina en la mano." },
    },
    {
        title: { en: "WhatsApp-first patient communication", es: "Comunicación por WhatsApp con pacientes" },
        text: { en: "Automated appointment reminders at 48h, 24h and 2h. Budget approvals, booking confirmations and follow-ups — all through the channel patients actually use.", es: "Recordatorios automáticos de citas a 48h, 24h y 2h. Aprobación de presupuestos, confirmaciones de turnos y seguimientos — todo por el canal que los pacientes realmente usan." },
    },
];

export const dcLatam: Dict = {
    eyebrow: { en: "Coverage", es: "Cobertura" },
    title: { en: "Built for Latin America — from day one", es: "Construido para América Latina — desde el primer día" },
    intro: {
        en: "DentalCore is designed for the realities of dental practice in Latin America: Spanish-first interface, local regulatory compliance, WhatsApp-native patient communication, and pricing that makes sense for the region. Available across the continent.",
        es: "DentalCore está diseñado para las realidades del consultorio dental en América Latina: interfaz en español primero, cumplimiento regulatorio local, comunicación con pacientes nativa por WhatsApp, y precios que tienen sentido para la región. Disponible en todo el continente.",
    },
    available: { en: "Dental software available", es: "Software dental disponible" },
};

export const dcModules: Dict = {
    eyebrow: { en: "Clinical modules", es: "Módulos clínicos" },
    title: { en: "Everything a dental clinic needs in one platform", es: "Todo lo que necesita una clínica dental en una sola plataforma" },
    intro: {
        en: "Twelve specialized modules covering every area of dental practice — from the digital odontogram to marketing automation. No integrations needed, no third-party add-ons.",
        es: "Doce módulos especializados que cubren todas las áreas de la práctica dental — desde el odontograma digital hasta la automatización de marketing. Sin integraciones, sin complementos de terceros.",
    },
};

export const dcAi: Dict = {
    eyebrow: { en: "AI assistance", es: "Asistencia de IA" },
    title: { en: "AI where it helps — not for the sake of it", es: "IA donde ayuda — no por moda" },
    intro: {
        en: "DentalCore is not an \"AI app\". It's a clinical platform with a robust, well-tested core. AI is layered selectively — voice-to-text notes, smart diagnosis suggestions, automated consent drafting — only where it genuinely saves clinicians time.",
        es: "DentalCore no es una \"app de IA\". Es una plataforma clínica con un núcleo robusto y bien testeado. La IA se integra selectivamente — notas por voz, sugerencias de diagnóstico, redacción automática de consentimientos — solo donde genuinamente ahorra tiempo al profesional.",
    },
};

export const dcStack: Dict = {
    eyebrow: { en: "Tech stack", es: "Stack tecnológico" },
    title: { en: "Built with modern, proven tools", es: "Construido con herramientas modernas y probadas" },
};

export const dcArch: Dict = {
    eyebrow: { en: "Architecture", es: "Arquitectura" },
    title: { en: "How it's put together", es: "Cómo está construido" },
};

export const dcBehind: Dict = {
    eyebrow: { en: "Behind the project", es: "Detrás del proyecto" },
    title: { en: "Why I'm building this", es: "Por qué estoy construyendo esto" },
    p1: {
        en: "DentalCore grew out of the overlap between my training as a dentist (UNLP, 2013) and years of software engineering. After spending time in clinical practice across Argentina, I got tired of the limitations of existing dental management systems — clunky interfaces, zero automation, no patient communication tools — and decided to build something that actually understands how dentists work.",
        es: "DentalCore nació de la intersección entre mi formación como odontólogo (UNLP, 2013) y años de ingeniería de software. Después de tiempo en la práctica clínica en Argentina, me cansé de las limitaciones de los sistemas de gestión dental existentes — interfaces torpes, cero automatización, sin herramientas de comunicación con pacientes — y decidí construir algo que realmente entienda cómo trabajan los odontólogos.",
    },
    p2: {
        en: "The focus is on a robust, well-architected core that clinicians can trust day to day. AI is layered on top selectively, only where it genuinely saves time. And it's built for Latin America first — Spanish-native, WhatsApp-integrated, priced for the region.",
        es: "El foco está en un núcleo robusto y bien arquitectado en el que los clínicos puedan confiar día a día. La IA se agrega selectivamente, solo donde genuinamente ahorra tiempo. Y está construido para América Latina primero — nativo en español, integrado con WhatsApp, con precios para la región.",
    },
};
