import type { Locale } from "../context";
type Dict = Record<string, Record<Locale, string>>;

export const dcHero: Dict = {
    label: { en: "First CDSS for dentistry · In production", es: "Primer CDSS para odontología · En producción" },
    summary: {
        en: "DentalCore is the first Clinical Decision Support System (CDSS) for dentistry in Latin America. It moves beyond traditional management software (PMS): seven clinical engines actively assist diagnosis, treatment planning, prescribing and risk assessment — including the world's first dental software with an integrated oral pathology diagnostic motor. Built from the chair, for the chair.",
        es: "DentalCore es el primer Sistema de Apoyo a la Decisión Clínica (CDSS) para odontología en América Latina. Va más allá del software de gestión tradicional (PMS): siete motores clínicos asisten activamente en el diagnóstico, planificación de tratamientos, prescripción y evaluación de riesgo — incluyendo el primer software dental del mundo con motor integrado de diagnóstico de patología oral. Diseñado desde el sillón, para el sillón.",
    },
    btnLive: { en: "Visit dentalcore.app", es: "Visitar dentalcore.app" },
    btnBlog: { en: "Read for solo dentists", es: "Leer para consultorios chicos" },
};

// NEW: CDSS positioning section
export const dcCdss: Dict = {
    eyebrow: { en: "A new category", es: "Una nueva categoría" },
    title: { en: "Not another PMS — a Clinical Decision Support System", es: "No es otro PMS — es un Sistema de Apoyo a la Decisión Clínica" },
    intro: {
        en: "Traditional dental software is a digital filing cabinet with a calendar (PMS): scheduling, billing, records. DentalCore is something different — a CDSS that applies coded clinical rules from international medical literature, alerts the clinician to risks, suggests protocols and integrates into the workflow at the moment of decision.",
        es: "El software dental tradicional es un archivador digital con calendario (PMS): agenda, facturación, fichas. DentalCore es otra cosa — un CDSS que aplica reglas clínicas codificadas de la literatura médica internacional, alerta al clínico sobre riesgos, sugiere protocolos y se integra al flujo de trabajo en el momento mismo de la decisión.",
    },
    pmsLabel: { en: "Traditional PMS", es: "PMS tradicional" },
    pmsText: {
        en: "Manages scheduling, patients, budgets, billing, inventory. Stores data. Decisions are 100% on the clinician's memory.",
        es: "Gestiona agenda, pacientes, presupuestos, facturación, inventario. Guarda datos. Las decisiones quedan 100% en la memoria del clínico.",
    },
    cdssLabel: { en: "DentalCore CDSS", es: "DentalCore CDSS" },
    cdssText: {
        en: "Everything a PMS does, plus seven clinical engines that analyze patient data in real time, raise alerts, suggest protocols and document everything for audit.",
        es: "Todo lo que hace un PMS, más siete motores clínicos que analizan los datos del paciente en tiempo real, levantan alertas, sugieren protocolos y documentan todo de forma auditable.",
    },
    quote: {
        en: "\"The system thinks with you. You validate and decide.\"",
        es: "«El sistema piensa con vos. Vos validás y decidís.»",
    },
};

// NEW: Oral pathology motor section
export const dcPathology: Dict = {
    eyebrow: { en: "World first · Free forever", es: "Primera mundial · Gratis para siempre" },
    title: { en: "The first dental software with an oral pathology diagnostic motor", es: "El primer software dental con motor de diagnóstico de patología oral" },
    intro: {
        en: "Over 60% of oral cavity cancers are diagnosed at stage III or IV, when survival drops below 50%. When detected early, survival exceeds 80%. The bottleneck isn't will — it's tools. General dentists see these patients first but lack diagnostic support at the chair.",
        es: "Más del 60% de los cánceres de cavidad oral se diagnostican en estadio III o IV, cuando la sobrevida cae por debajo del 50%. Detectados a tiempo, la sobrevida supera el 80%. El cuello de botella no es la voluntad — son las herramientas. Los odontólogos generales ven a estos pacientes primero pero no tienen apoyo diagnóstico en el sillón.",
    },
    statNum: { en: "100", es: "100" },
    statLabel: { en: "oral pathologies coded", es: "patologías orales codificadas" },
    stat2num: { en: "<2 min", es: "<2 min" },
    stat2label: { en: "to a presumptive diagnosis", es: "para un diagnóstico presuntivo" },
    stat3num: { en: "$0", es: "$0" },
    stat3label: { en: "free forever — public health matters", es: "gratis para siempre — la salud pública importa" },
    sourcesTitle: { en: "Built on international reference literature", es: "Construido sobre literatura de referencia internacional" },
    source1: { en: "Bagán, Jiménez, Murillo — Medicina Bucal (4th ed.)", es: "Bagán, Jiménez, Murillo — Medicina Bucal (4ª ed.)" },
    source2: { en: "Neville, Damm, Allen, Chi — Oral and Maxillofacial Pathology (4th ed.)", es: "Neville, Damm, Allen, Chi — Oral and Maxillofacial Pathology (4ª ed.)" },
    source3: { en: "Sapp, Eversole, Wysocki — Patología Oral y Maxilofacial Contemporánea (2nd ed.)", es: "Sapp, Eversole, Wysocki — Patología Oral y Maxilofacial Contemporánea (2ª ed.)" },
    epidemiologyTitle: { en: "Epidemiological surveillance network", es: "Red de vigilancia epidemiológica" },
    epidemiologyText: {
        en: "Anonymized clinical data feeds the first structured epidemiological database of oral pathology in Latin America — a real-time heat map of lesion concentration by region. Personal data never leaves the system.",
        es: "Los datos clínicos anonimizados alimentan la primera base de datos epidemiológica estructurada de patología oral en América Latina — un mapa de calor en tiempo real de la concentración de lesiones por región. Los datos personales nunca salen del sistema.",
    },
};

// REPLACED: dcAi → dcEngines (7 clinical engines, not "AI features")
export const dcEngines: Dict = {
    eyebrow: { en: "Clinical intelligence", es: "Inteligencia clínica" },
    title: { en: "Seven clinical engines, not generative AI", es: "Siete motores clínicos, no IA generativa" },
    intro: {
        en: "Generative AI produces statistically probable answers — insufficient for clinical decisions. DentalCore's engines are deterministic: they apply coded medical rules to clinical variables and produce reproducible, auditable, justifiable results. AI is used only as a secondary validation layer, trained on confirmed cases.",
        es: "La IA generativa produce respuestas estadísticamente probables — insuficiente para decisiones clínicas. Los motores de DentalCore son determinísticos: aplican reglas médicas codificadas a variables clínicas y producen resultados reproducibles, auditables y justificables. La IA se usa solo como capa secundaria de validación, entrenada con casos confirmados.",
    },
};

export const dcEngineItems: { title: Record<Locale, string>; text: Record<Locale, string> }[] = [
    {
        title: { en: "1. Oral pathology motor", es: "1. Motor de patología oral" },
        text: { en: "Evaluates 100 coded oral pathologies. Generates primary diagnosis, ranked differentials, management protocol and biopsy indication in under 2 minutes.", es: "Evalúa 100 patologías orales codificadas. Genera diagnóstico principal, diferenciales rankeados, protocolo de manejo e indicación de biopsia en menos de 2 minutos." },
    },
    {
        title: { en: "2. Medical interconsultation motor", es: "2. Motor de interconsulta médica" },
        text: { en: "Cross-references 18 medical conditions × 9 procedures × 4 severity levels. Blocks risky procedures and auto-generates the physician request PDF.", es: "Cruza 18 condiciones médicas × 9 procedimientos × 4 niveles de gravedad. Bloquea procedimientos de riesgo y genera automáticamente el PDF de derivación al médico." },
    },
    {
        title: { en: "3. Treatment planning motor", es: "3. Motor de planificación de tratamientos" },
        text: { en: "Generates 7-phase treatment plans. Auto-calculates costs, suggests premium / intermediate / economy options.", es: "Genera planes de tratamiento de 7 fases. Calcula costos automáticamente y sugiere opciones premium / intermedia / económica." },
    },
    {
        title: { en: "4. Pediatric dose calculator", es: "4. Calculador de dosis pediátricas" },
        text: { en: "Weight and age-based dosing. Validates contraindications and prints a signed prescription ready for the family.", es: "Cálculo por peso y edad. Valida contraindicaciones e imprime la receta firmada lista para la familia." },
    },
    {
        title: { en: "5. Radiographic analysis", es: "5. Análisis radiográfico" },
        text: { en: "Computer vision layer that identifies caries, bone loss and periapical lesions in panoramic and periapical X-rays.", es: "Capa de visión por computadora que identifica caries, pérdida ósea y lesiones periapicales en radiografías panorámicas y periapicales." },
    },
    {
        title: { en: "6. Specialty wizards", es: "6. Asistentes por especialidad" },
        text: { en: "Endodontics with conductometry, oral surgery with 3M classification, removable prosthodontics design wizard, periodontal protocols.", es: "Endodoncia con conductometría, cirugía oral con clasificación 3M, asistente de diseño de PPR, protocolos periodontales." },
    },
    {
        title: { en: "7. Pharmacological interaction checker", es: "7. Verificador de interacciones farmacológicas" },
        text: { en: "Cross-checks 18+ dental drugs against the patient's medication list. Flags interactions like warfarin + ibuprofen → bleeding risk.", es: "Cruza 18+ fármacos dentales con la medicación del paciente. Marca interacciones como warfarina + ibuprofeno → riesgo de sangrado." },
    },
    {
        title: { en: "+ Patient health score", es: "+ Health score del paciente" },
        text: { en: "Aggregates risk variables to flag high-risk patients requiring priority follow-up. Prevents incidents before they happen.", es: "Agrega variables de riesgo para señalar pacientes de alto riesgo que requieren seguimiento prioritario. Previene incidentes antes de que ocurran." },
    },
];

// NEW: Evidence section
export const dcEvidence: Dict = {
    eyebrow: { en: "Evidence-based", es: "Basado en evidencia" },
    title: { en: "Why CDSS works", es: "Por qué los CDSS funcionan" },
    intro: {
        en: "Clinical Decision Support Systems are not new in medicine — they've existed for over 20 years and the evidence is overwhelming. DentalCore brings that proven category to dentistry for the first time.",
        es: "Los Sistemas de Apoyo a la Decisión Clínica no son nuevos en medicina — existen hace más de 20 años y la evidencia es abrumadora. DentalCore trae esa categoría probada a la odontología por primera vez.",
    },
};

export const dcEvidenceItems: { stat: string; text: Record<Locale, string>; source: string }[] = [
    {
        stat: "64%",
        text: { en: "improvement in clinician performance with CDSS support", es: "de mejora en el desempeño clínico con apoyo de CDSS" },
        source: "Garg et al., JAMA 2005",
    },
    {
        stat: "78%",
        text: { en: "reduction in prescription errors with pharmacological alerts", es: "de reducción en errores de prescripción con alertas farmacológicas" },
        source: "Sutton et al., npj Digital Medicine 2020",
    },
    {
        stat: "20+",
        text: { en: "years of CDSS in medicine — first time available in dentistry", es: "años de CDSS en medicina — por primera vez disponible en odontología" },
        source: "Bates et al., JAMA 2003",
    },
];

export const dcLatam: Dict = {
    eyebrow: { en: "Coverage", es: "Cobertura" },
    title: { en: "Built for Latin America — from day one", es: "Construido para América Latina — desde el primer día" },
    intro: {
        en: "DentalCore is designed for the realities of dental practice in Latin America: Spanish-first interface, local regulatory compliance, WhatsApp-native patient communication, MercadoPago integration, and pricing that makes sense for the region.",
        es: "DentalCore está diseñado para las realidades del consultorio dental en América Latina: interfaz en español primero, cumplimiento regulatorio local, comunicación con pacientes nativa por WhatsApp, integración con MercadoPago, y precios que tienen sentido para la región.",
    },
    available: { en: "Software dental disponible", es: "Software dental disponible" },
};

export const dcModules: Dict = {
    eyebrow: { en: "Clinical modules", es: "Módulos clínicos" },
    title: { en: "Everything a dental clinic needs in one platform", es: "Todo lo que necesita una clínica dental en una sola plataforma" },
    intro: {
        en: "Fifteen specialized modules covering every area of dental practice — from the digital odontogram to marketing automation. No integrations needed, no third-party add-ons.",
        es: "Quince módulos especializados que cubren todas las áreas de la práctica dental — desde el odontograma digital hasta la automatización de marketing. Sin integraciones, sin complementos de terceros.",
    },
};

export const dcWhy: Dict = {
    eyebrow: { en: "Why DentalCore", es: "Por qué DentalCore" },
    title: { en: "Software that understands how dentists actually work", es: "Software que entiende cómo trabajan los odontólogos de verdad" },
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
        text: { en: "The Starter plan includes all core functionality — including the full oral pathology motor — at no cost. No credit card, no trial limits.", es: "El plan Starter incluye toda la funcionalidad principal — incluyendo el motor completo de patología oral — sin costo. Sin tarjeta de crédito, sin límites de prueba." },
    },
    {
        title: { en: "Built by a dentist who codes", es: "Construido por un odontólogo que programa" },
        text: { en: "Not by a software company guessing what clinicians need. Every workflow, every screen, every shortcut was designed by someone who has actually held the handpiece.", es: "No por una empresa de software adivinando lo que necesitan los clínicos. Cada flujo de trabajo, cada pantalla, cada atajo fue diseñado por alguien que realmente tuvo la turbina en la mano." },
    },
    {
        title: { en: "WhatsApp-first patient communication", es: "Comunicación por WhatsApp con pacientes" },
        text: { en: "Nine WhatsApp automations: appointment confirmation, reminders at 48h/24h/2h, results, post-op follow-up. Through the channel patients actually use.", es: "Nueve automatizaciones por WhatsApp: confirmación de turnos, recordatorios a 48h/24h/2h, resultados, seguimiento postoperatorio. Por el canal que los pacientes realmente usan." },
    },
];

export const dcBehind: Dict = {
    eyebrow: { en: "Behind the project", es: "Detrás del proyecto" },
    title: { en: "Why I'm building this", es: "Por qué estoy construyendo esto" },
    p1: {
        en: "DentalCore grew out of the overlap between my training as a dentist (UNLP, 2013) and years of software engineering. After spending time in clinical practice across Argentina, I got tired of dental software that was either a glorified Excel sheet or a Frankenstein of US-centric features that ignored Latin American reality.",
        es: "DentalCore nació de la intersección entre mi formación como odontólogo (UNLP, 2013) y años de ingeniería de software. Después de tiempo en la práctica clínica en Argentina, me cansé del software dental que era o un Excel glorificado o un Frankenstein de features pensadas para EE.UU. que ignoraban la realidad latinoamericana.",
    },
    p2: {
        en: "But the real shift came from a clinical question: why do dentists, who see oral cancer patients first, have zero diagnostic support at the chair? That question reframed the whole project. DentalCore isn't trying to be \"the best PMS\" — it's creating the category of CDSS for dentistry, with the oral pathology motor free forever because early detection is a public health issue, not a feature to monetize.",
        es: "Pero el cambio real vino de una pregunta clínica: ¿por qué los odontólogos, que ven primero a los pacientes con cáncer oral, no tienen ningún apoyo diagnóstico en el sillón? Esa pregunta reformuló todo el proyecto. DentalCore no busca ser «el mejor PMS» — está creando la categoría de CDSS para odontología, con el motor de patología oral gratis para siempre porque la detección temprana es una cuestión de salud pública, no un feature a monetizar.",
    },
};
