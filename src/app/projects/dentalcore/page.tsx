"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/i18n/context";
import {
    dcHero, dcWhy, dcWhyItems, dcLatam, dcModules,
    dcAi, dcBehind,
} from "@/i18n/translations/dentalcore";

const stack = ["React 19","TypeScript","Vite 6","Tailwind CSS","Zustand","Supabase","Gemini 2.0 Flash","Replicate","Web Speech API","Playwright","Vitest","Edge Functions"];

const aiFeatures = [
    { titleEn: "Clinical summary", titleEs: "Resumen clínico", textEn: "Auto-generates intelligent summaries of the patient's clinical history, surfacing relevant findings for the current visit.", textEs: "Genera resúmenes inteligentes del historial clínico del paciente, destacando hallazgos relevantes para la visita actual." },
    { titleEn: "Diagnosis assistant", titleEs: "Asistente de diagnóstico", textEn: "Suggests differential diagnoses based on clinical findings, radiographic data and the patient's medical record.", textEs: "Sugiere diagnósticos diferenciales basados en hallazgos clínicos, datos radiográficos e historial médico." },
    { titleEn: "Treatment planning", titleEs: "Plan de tratamiento", textEn: "Proposes personalized treatment plans with prioritized interventions, estimated costs and phased scheduling.", textEs: "Propone planes de tratamiento personalizados con intervenciones priorizadas, costos estimados y cronograma por fases." },
    { titleEn: "Informed consent", titleEs: "Consentimiento informado", textEn: "Generates consent documents tailored to each procedure, adapted to Latin American regulatory frameworks.", textEs: "Genera documentos de consentimiento adaptados a cada procedimiento según los marcos regulatorios latinoamericanos." },
    { titleEn: "Voice notes", titleEs: "Notas por voz", textEn: "Dictate clinical notes hands-free in Spanish — AI structures and formats them into professional evolution records.", textEs: "Dictá notas clínicas sin manos en español — la IA las estructura y formatea en registros de evolución profesionales." },
    { titleEn: "Radiographic analysis", titleEs: "Análisis radiográfico", textEn: "Assists in interpreting radiographic findings, flags anomalies and suggests complementary studies.", textEs: "Asiste en la interpretación de hallazgos radiográficos, señala anomalías y sugiere estudios complementarios." },
    { titleEn: "Smile designer", titleEs: "Diseño de sonrisa", textEn: "Generative AI smile design for pre-treatment visualization — show patients the expected results before starting.", textEs: "Diseño de sonrisa con IA generativa para visualización pre-tratamiento — mostrá a los pacientes los resultados esperados." },
    { titleEn: "Pharmaceutical alerts", titleEs: "Alertas farmacológicas", textEn: "Cross-checks prescriptions against the patient's history for drug interactions, allergies and contraindications.", textEs: "Cruza prescripciones con el historial del paciente para detectar interacciones, alergias y contraindicaciones." },
];

const modules = [
    { nameEn: "Digital Odontogram", nameEs: "Odontograma Digital", detailEn: "47 clinical findings, 3-step workflow", detailEs: "47 hallazgos clínicos, flujo de 3 pasos" },
    { nameEn: "Periodontal Charting", nameEs: "Periodontograma", detailEn: "Full perio protocol and tracking", detailEs: "Protocolo periodontal completo" },
    { nameEn: "Endodontics", nameEs: "Endodoncia", detailEn: "Case management and follow-up", detailEs: "Gestión de casos y seguimiento" },
    { nameEn: "Oral Surgery", nameEs: "Cirugía", detailEn: "Surgical planning and records", detailEs: "Planificación quirúrgica" },
    { nameEn: "Orthodontics", nameEs: "Ortodoncia", detailEn: "Treatment tracking and progress", detailEs: "Seguimiento de tratamiento" },
    { nameEn: "Whitening", nameEs: "Blanqueamiento", detailEn: "Protocols, shade records and consent", detailEs: "Protocolos, registro y consentimiento" },
    { nameEn: "Aesthetics", nameEs: "Estética", detailEn: "Cosmetic treatment planning", detailEs: "Planificación de tratamientos estéticos" },
    { nameEn: "Patient Management", nameEs: "Gestión de Pacientes", detailEn: "Full records, alerts and health score", detailEs: "Fichas completas, alertas e índice de salud" },
    { nameEn: "Smart Scheduling", nameEs: "Agenda Inteligente", detailEn: "Drag-and-drop, WhatsApp reminders", detailEs: "Drag-and-drop, recordatorios por WhatsApp" },
    { nameEn: "Finance", nameEs: "Finanzas", detailEn: "Payments, insurance, cashbox", detailEs: "Pagos, obras sociales, caja" },
    { nameEn: "Patient Portal", nameEs: "Portal del Paciente", detailEn: "Mobile-first access and booking", detailEs: "Acceso mobile-first y turnos online" },
    { nameEn: "Marketing", nameEs: "Marketing", detailEn: "Campaigns, leads and segmentation", detailEs: "Campañas, leads y segmentación" },
];

const architecture = [
    { num: "01", titleEn: "Frontend", titleEs: "Frontend", textEn: "React 19 + TypeScript with 60+ routes and feature-based components.", textEs: "React 19 + TypeScript con 60+ rutas y componentes por feature." },
    { num: "02", titleEn: "State", titleEs: "Estado", textEn: "20 domain-specific Zustand stores unified through a single useStore() hook.", textEs: "20 stores de Zustand por dominio unificados en un solo hook useStore()." },
    { num: "03", titleEn: "Repository", titleEs: "Repositorio", textEn: "Repository pattern with interfaces and a Supabase implementation that stays decoupled.", textEs: "Patrón Repository con interfaces e implementación Supabase desacoplada." },
    { num: "04", titleEn: "Backend", titleEs: "Backend", textEn: "Supabase with Postgres, multi-tenant RLS by clinic_id, and Edge Functions.", textEs: "Supabase con Postgres, RLS multi-tenant por clinic_id, y Edge Functions." },
];

const countries = ["Argentina","México","Colombia","Chile","Perú","Ecuador","Uruguay","Paraguay","Bolivia","Costa Rica","República Dominicana","Guatemala"];

export default function DentalCore() {
    const { locale, t } = useLanguage();
    const l = locale;

    return (
        <div className="container page">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                "@context": "https://schema.org", "@type": "SoftwareApplication", name: "DentalCore",
                applicationCategory: "HealthApplication", operatingSystem: "Web", url: "https://www.dentalcore.app",
                description: "Software de gestión integral para clínicas y consultorios dentales.",
                offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
                author: { "@type": "Person", name: "Alfredo Di Tullio" },
                areaServed: { "@type": "Place", name: "Latin America" },
            })}} />

            <Link href="/projects" className="back-link"><i className="fa-solid fa-arrow-left"></i> {locale === "es" ? "Proyectos" : "Projects"}</Link>

            <Reveal as="section" className="project-hero">
                <span className="project-hero__label">{t(dcHero, "label")}</span>
                <h1 className="project-hero__title"><span className="gradient-text">DentalCore</span></h1>
                <p className="project-hero__summary">{t(dcHero, "summary")}</p>
                <div className="hero__actions">
                    <a href="https://www.dentalcore.app/" target="_blank" rel="noreferrer" className="btn btn--primary">{t(dcHero, "btnLive")} <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                    <a href="https://dentalcore.app/blog/dentalcore-para-consultorios-chicos" target="_blank" rel="noreferrer" className="btn">{t(dcHero, "btnBlog")}</a>
                </div>
            </Reveal>

            <Reveal as="section" className="section project-screenshot">
                <img src="/assets/img/portfolio/dentalcore.webp" alt="DentalCore" className="project-screenshot__img" />
            </Reveal>

            <section className="section">
                <Reveal>
                    <p className="section__eyebrow">{t(dcWhy, "eyebrow")}</p>
                    <h2 className="section__title">{t(dcWhy, "title")}</h2>
                    <p className="section__intro">{t(dcWhy, "intro")}</p>
                </Reveal>
                <Reveal delay={1}>
                    <div className="feature-grid">
                        {dcWhyItems.map((f) => (
                            <div key={f.title.en} className="feature">
                                <h3 className="feature__title">{f.title[l]}</h3>
                                <p className="feature__text">{f.text[l]}</p>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </section>

            <section className="section">
                <Reveal>
                    <p className="section__eyebrow">{t(dcLatam, "eyebrow")}</p>
                    <h2 className="section__title">{t(dcLatam, "title")}</h2>
                    <p className="section__intro">{t(dcLatam, "intro")}</p>
                </Reveal>
                <Reveal delay={1}>
                    <div className="modules-grid">
                        {countries.map((c) => (
                            <div key={c} className="module"><h3 className="module__name">{c}</h3><p className="module__detail">{t(dcLatam, "available")}</p></div>
                        ))}
                    </div>
                </Reveal>
            </section>

            <section className="section">
                <Reveal>
                    <p className="section__eyebrow">{t(dcModules, "eyebrow")}</p>
                    <h2 className="section__title">{t(dcModules, "title")}</h2>
                    <p className="section__intro">{t(dcModules, "intro")}</p>
                </Reveal>
                <Reveal delay={1}>
                    <div className="modules-grid">
                        {modules.map((m) => (
                            <div key={m.nameEn} className="module"><h3 className="module__name">{l === "es" ? m.nameEs : m.nameEn}</h3><p className="module__detail">{l === "es" ? m.detailEs : m.detailEn}</p></div>
                        ))}
                    </div>
                </Reveal>
            </section>

            <section className="section">
                <Reveal>
                    <p className="section__eyebrow">{t(dcAi, "eyebrow")}</p>
                    <h2 className="section__title">{t(dcAi, "title")}</h2>
                    <p className="section__intro">{t(dcAi, "intro")}</p>
                </Reveal>
                <Reveal delay={1}>
                    <div className="feature-grid">
                        {aiFeatures.map((f) => (
                            <div key={f.titleEn} className="feature"><h3 className="feature__title">{l === "es" ? f.titleEs : f.titleEn}</h3><p className="feature__text">{l === "es" ? f.textEs : f.textEn}</p></div>
                        ))}
                    </div>
                </Reveal>
            </section>

            <section className="section">
                <Reveal>
                    <p className="section__eyebrow">{t(dcBehind, "eyebrow")}</p>
                    <h2 className="section__title">{t(dcBehind, "title")}</h2>
                    <p className="about__intro" style={{ marginBottom: "1.25rem" }}>{t(dcBehind, "p1")}</p>
                    <p className="about__intro">{t(dcBehind, "p2")}</p>
                </Reveal>
            </section>
        </div>
    );
}
