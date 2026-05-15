"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/i18n/context";
import {
    dcHero, dcCdss, dcPathology, dcEngines, dcEngineItems,
    dcEvidence, dcEvidenceItems, dcWhy, dcWhyItems,
    dcLatam, dcModules, dcBehind,
} from "@/i18n/translations/dentalcore";

const modules = [
    { nameEn: "Digital Odontogram", nameEs: "Odontograma Digital", detailEn: "47 clinical findings, 3-step workflow", detailEs: "47 hallazgos clínicos, flujo de 3 pasos" },
    { nameEn: "Periodontal Charting", nameEs: "Periodontograma", detailEn: "Full perio protocol and tracking", detailEs: "Protocolo periodontal completo" },
    { nameEn: "Endodontics", nameEs: "Endodoncia", detailEn: "Conductometry, case management", detailEs: "Conductometría y gestión de casos" },
    { nameEn: "Oral Surgery", nameEs: "Cirugía", detailEn: "3M classification, surgical planning", detailEs: "Clasificación 3M, planificación quirúrgica" },
    { nameEn: "Implantology", nameEs: "Implantología", detailEn: "Surgical planning and follow-up", detailEs: "Planificación quirúrgica y seguimiento" },
    { nameEn: "Orthodontics", nameEs: "Ortodoncia", detailEn: "Treatment tracking and progress", detailEs: "Seguimiento de tratamiento" },
    { nameEn: "Whitening", nameEs: "Blanqueamiento", detailEn: "Protocols, shade records and consent", detailEs: "Protocolos, registro y consentimiento" },
    { nameEn: "Aesthetics", nameEs: "Estética", detailEn: "Cosmetic treatment planning", detailEs: "Planificación de tratamientos estéticos" },
    { nameEn: "Patient Management", nameEs: "Gestión de Pacientes", detailEn: "Health score, alerts, full records", detailEs: "Health score, alertas, fichas completas" },
    { nameEn: "Smart Scheduling", nameEs: "Agenda Inteligente", detailEn: "Drag-and-drop, WhatsApp reminders", detailEs: "Drag-and-drop, recordatorios por WhatsApp" },
    { nameEn: "Finance & MercadoPago", nameEs: "Finanzas + MercadoPago", detailEn: "Payments, insurance, integrated POS", detailEs: "Pagos, obras sociales, POS integrado" },
    { nameEn: "Patient Portal", nameEs: "Portal del Paciente", detailEn: "Mobile-first access, signed consents", detailEs: "Acceso mobile-first, consentimientos firmados" },
    { nameEn: "WhatsApp Bot", nameEs: "Bot de WhatsApp", detailEn: "9 automations: confirmations, reminders, results", detailEs: "9 automatizaciones: confirmaciones, recordatorios, resultados" },
    { nameEn: "Voice Control", nameEs: "Control por voz", detailEn: "Hands-free clinical notes dictation", detailEs: "Dictado de notas clínicas sin manos" },
    { nameEn: "OdontoLatam Community", nameEs: "Comunidad OdontoLatam", detailEn: "Built-in professional community access", detailEs: "Acceso integrado a la comunidad profesional" },
];

const countries = ["Argentina", "México", "Colombia", "Chile", "Perú", "Ecuador", "Uruguay", "Paraguay", "Bolivia", "Costa Rica", "República Dominicana", "Guatemala"];

export default function DentalCore() {
    const { locale, t } = useLanguage();
    const l = locale;

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "DentalCore",
        applicationCategory: "HealthApplication",
        applicationSubCategory: "Clinical Decision Support System",
        operatingSystem: "Web",
        url: "https://www.dentalcore.app",
        description: "First Clinical Decision Support System (CDSS) for dentistry in Latin America. World's first dental software with integrated oral pathology diagnostic motor. 7 clinical engines, 100 coded oral pathologies, free forever for early oral cancer detection.",
        keywords: "software dental, CDSS dental, sistema apoyo decision clinica odontologia, motor clinico, diagnostico patologia oral, cancer oral, deteccion temprana, software dental Argentina, software dental Mexico, software dental Latinoamerica, dental clinical decision support, dental practice management",
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
            description: "Free forever — full oral pathology diagnostic motor included, no credit card",
        },
        author: {
            "@type": "Person",
            name: "Alfredo Di Tullio",
            jobTitle: "Dentist, CEO & Founder",
            url: "https://www.alfredoditullio.com",
        },
        areaServed: { "@type": "Place", name: "Latin America" },
        inLanguage: ["es", "en"],
        featureList: [
            "First dental Clinical Decision Support System (CDSS)",
            "Oral pathology diagnostic motor — 100 coded pathologies",
            "Free forever oral cancer early detection module",
            "Medical interconsultation motor (18 conditions × 9 procedures)",
            "Pharmacological interaction checker",
            "Pediatric dose calculator",
            "Treatment planning motor with 7 phases",
            "Radiographic analysis with computer vision",
            "Voice-to-text clinical notes in Spanish",
            "WhatsApp bot with 9 automations",
            "MercadoPago integrated payments",
            "Real-time epidemiological surveillance network for Latin America",
        ],
    };

    return (
        <div className="container page">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <Link href="/projects" className="back-link">
                <i className="fa-solid fa-arrow-left"></i>{" "}
                {l === "es" ? "Proyectos" : "Projects"}
            </Link>

            {/* Hero */}
            <Reveal as="section" className="project-hero">
                <span className="project-hero__label">{t(dcHero, "label")}</span>
                <h1 className="project-hero__title"><span className="gradient-text">DentalCore</span></h1>
                <p className="project-hero__summary">{t(dcHero, "summary")}</p>
                <div className="hero__actions">
                    <a href="https://www.dentalcore.app/" target="_blank" rel="noreferrer" className="btn btn--primary">
                        {t(dcHero, "btnLive")} <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                    <a href="https://dentalcore.app/blog/dentalcore-para-consultorios-chicos" target="_blank" rel="noreferrer" className="btn">
                        {t(dcHero, "btnBlog")}
                    </a>
                </div>
            </Reveal>

            <Reveal as="section" className="section project-screenshot">
                <img src="/assets/img/portfolio/dentalcore.webp" alt="DentalCore — Clinical Decision Support System for dentistry" className="project-screenshot__img" />
            </Reveal>

            {/* CDSS positioning */}
            <section className="section">
                <Reveal>
                    <p className="section__eyebrow">{t(dcCdss, "eyebrow")}</p>
                    <h2 className="section__title">{t(dcCdss, "title")}</h2>
                    <p className="section__intro">{t(dcCdss, "intro")}</p>
                </Reveal>
                <Reveal delay={1}>
                    <div className="comparison">
                        <div className="comparison__col comparison__col--neutral">
                            <span className="comparison__label">{t(dcCdss, "pmsLabel")}</span>
                            <p className="comparison__text">{t(dcCdss, "pmsText")}</p>
                        </div>
                        <div className="comparison__col comparison__col--accent">
                            <span className="comparison__label">{t(dcCdss, "cdssLabel")}</span>
                            <p className="comparison__text">{t(dcCdss, "cdssText")}</p>
                        </div>
                    </div>
                </Reveal>
                <Reveal delay={2}>
                    <p className="pull-quote">{t(dcCdss, "quote")}</p>
                </Reveal>
            </section>

            {/* Oral pathology motor — featured */}
            <section className="section">
                <Reveal>
                    <p className="section__eyebrow">{t(dcPathology, "eyebrow")}</p>
                    <h2 className="section__title">{t(dcPathology, "title")}</h2>
                    <p className="section__intro">{t(dcPathology, "intro")}</p>
                </Reveal>
                <Reveal delay={1}>
                    <div className="stats-row">
                        <div className="stat-card">
                            <span className="stat-card__num">{t(dcPathology, "statNum")}</span>
                            <span className="stat-card__label">{t(dcPathology, "statLabel")}</span>
                        </div>
                        <div className="stat-card">
                            <span className="stat-card__num">{t(dcPathology, "stat2num")}</span>
                            <span className="stat-card__label">{t(dcPathology, "stat2label")}</span>
                        </div>
                        <div className="stat-card">
                            <span className="stat-card__num">{t(dcPathology, "stat3num")}</span>
                            <span className="stat-card__label">{t(dcPathology, "stat3label")}</span>
                        </div>
                    </div>
                </Reveal>
                <Reveal delay={2}>
                    <div className="sources">
                        <h3 className="sources__title">{t(dcPathology, "sourcesTitle")}</h3>
                        <ul className="sources__list">
                            <li>{t(dcPathology, "source1")}</li>
                            <li>{t(dcPathology, "source2")}</li>
                            <li>{t(dcPathology, "source3")}</li>
                        </ul>
                    </div>
                </Reveal>
                <Reveal delay={3}>
                    <div className="callout">
                        <h3 className="callout__title">
                            <i className="fa-solid fa-globe-americas"></i>{" "}
                            {t(dcPathology, "epidemiologyTitle")}
                        </h3>
                        <p>{t(dcPathology, "epidemiologyText")}</p>
                    </div>
                </Reveal>
            </section>

            {/* 7 clinical engines */}
            <section className="section">
                <Reveal>
                    <p className="section__eyebrow">{t(dcEngines, "eyebrow")}</p>
                    <h2 className="section__title">{t(dcEngines, "title")}</h2>
                    <p className="section__intro">{t(dcEngines, "intro")}</p>
                </Reveal>
                <Reveal delay={1}>
                    <div className="feature-grid">
                        {dcEngineItems.map((f) => (
                            <div key={f.title.en} className="feature">
                                <h3 className="feature__title">{f.title[l]}</h3>
                                <p className="feature__text">{f.text[l]}</p>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </section>

            {/* Evidence */}
            <section className="section">
                <Reveal>
                    <p className="section__eyebrow">{t(dcEvidence, "eyebrow")}</p>
                    <h2 className="section__title">{t(dcEvidence, "title")}</h2>
                    <p className="section__intro">{t(dcEvidence, "intro")}</p>
                </Reveal>
                <Reveal delay={1}>
                    <div className="stats-row">
                        {dcEvidenceItems.map((e) => (
                            <div key={e.stat} className="stat-card stat-card--with-source">
                                <span className="stat-card__num">{e.stat}</span>
                                <span className="stat-card__label">{e.text[l]}</span>
                                <span className="stat-card__source">{e.source}</span>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </section>

            {/* Why DentalCore */}
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

            {/* Latin America coverage */}
            <section className="section">
                <Reveal>
                    <p className="section__eyebrow">{t(dcLatam, "eyebrow")}</p>
                    <h2 className="section__title">{t(dcLatam, "title")}</h2>
                    <p className="section__intro">{t(dcLatam, "intro")}</p>
                </Reveal>
                <Reveal delay={1}>
                    <div className="modules-grid">
                        {countries.map((c) => (
                            <div key={c} className="module">
                                <h3 className="module__name">{c}</h3>
                                <p className="module__detail">{t(dcLatam, "available")}</p>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </section>

            {/* Modules */}
            <section className="section">
                <Reveal>
                    <p className="section__eyebrow">{t(dcModules, "eyebrow")}</p>
                    <h2 className="section__title">{t(dcModules, "title")}</h2>
                    <p className="section__intro">{t(dcModules, "intro")}</p>
                </Reveal>
                <Reveal delay={1}>
                    <div className="modules-grid">
                        {modules.map((m) => (
                            <div key={m.nameEn} className="module">
                                <h3 className="module__name">{l === "es" ? m.nameEs : m.nameEn}</h3>
                                <p className="module__detail">{l === "es" ? m.detailEs : m.detailEn}</p>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </section>

            {/* Behind the project */}
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
