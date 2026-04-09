import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
    title: "DentalCore — Software dental para clínicas y consultorios | Dental Practice Management Software",
    description:
        "Software de gestión odontológica con odontograma digital, historia clínica, agenda inteligente, portal del paciente y asistencia de IA. Diseñado para consultorios y clínicas dentales en Argentina, México, Colombia, Chile y toda América Latina. Gratis para empezar.",
    keywords: [
        "software dental",
        "software odontológico",
        "dental practice management",
        "odontograma digital",
        "historia clínica dental",
        "gestión de consultorio dental",
        "software para dentistas",
        "dental software Latin America",
        "software dental Argentina",
        "software dental México",
        "software dental Colombia",
        "software dental Chile",
        "dental clinic software",
        "AI dental software",
        "patient management dentist",
        "DentalCore",
    ],
    openGraph: {
        title: "DentalCore — Dental Practice Management Software for Latin America",
        description:
            "Modern dental software with digital odontogram, smart scheduling, patient portal, and AI-assisted clinical tools. Free to start.",
        url: "https://www.dentalcore.app",
        type: "website",
    },
};

const stack = [
    "React 19",
    "TypeScript",
    "Vite 6",
    "Tailwind CSS",
    "Zustand",
    "Supabase",
    "Gemini 2.0 Flash",
    "Replicate",
    "Web Speech API",
    "Playwright",
    "Vitest",
    "Edge Functions",
];

const aiFeatures = [
    {
        title: "Clinical summary",
        text: "Auto-generates intelligent summaries of the patient's clinical history, surfacing relevant findings for the current visit.",
    },
    {
        title: "Diagnosis assistant",
        text: "Suggests differential diagnoses based on clinical findings, radiographic data and the patient's medical record.",
    },
    {
        title: "Treatment planning",
        text: "Proposes personalized treatment plans with prioritized interventions, estimated costs and phased scheduling.",
    },
    {
        title: "Informed consent drafting",
        text: "Generates consent documents tailored to each procedure, adapted to Latin American regulatory frameworks.",
    },
    {
        title: "Evolution notes via voice",
        text: "Dictate clinical notes hands-free in Spanish — AI structures and formats them into professional evolution records.",
    },
    {
        title: "Radiographic analysis",
        text: "Assists in interpreting radiographic findings, flags anomalies and suggests complementary studies.",
    },
    {
        title: "Smile designer",
        text: "Generative AI smile design for pre-treatment visualization — show patients the expected results before starting.",
    },
    {
        title: "Pharmaceutical alerts",
        text: "Cross-checks prescriptions against the patient's history for drug interactions, allergies and contraindications.",
    },
];

const modules = [
    { name: "Digital Odontogram", detail: "47 clinical findings, 3-step workflow" },
    { name: "Periodontal Charting", detail: "Full perio protocol and tracking" },
    { name: "Endodontics", detail: "Case management and follow-up" },
    { name: "Oral Surgery", detail: "Surgical planning and records" },
    { name: "Orthodontics", detail: "Treatment tracking and progress" },
    { name: "Whitening", detail: "Protocols, shade records and consent" },
    { name: "Aesthetics", detail: "Cosmetic treatment planning" },
    { name: "Patient Management", detail: "Full records, alerts and health score" },
    { name: "Smart Scheduling", detail: "Drag-and-drop, WhatsApp reminders" },
    { name: "Finance", detail: "Payments, insurance, cashbox" },
    { name: "Patient Portal", detail: "Mobile-first access and booking" },
    { name: "Marketing", detail: "Campaigns, leads and segmentation" },
];

const architecture = [
    {
        num: "01",
        title: "Frontend",
        text: "React 19 + TypeScript with 60+ routes and feature-based components.",
    },
    {
        num: "02",
        title: "State",
        text: "20 domain-specific Zustand stores unified through a single useStore() hook.",
    },
    {
        num: "03",
        title: "Repository",
        text: "Repository pattern with interfaces and a Supabase implementation that stays decoupled.",
    },
    {
        num: "04",
        title: "Backend",
        text: "Supabase with Postgres, multi-tenant RLS by clinic_id, and Edge Functions.",
    },
];

const whyDentalCore = [
    {
        title: "Designed for solo dentists",
        text: "Most dental software is built for large clinics with IT departments. DentalCore is designed so a single dentist with one chair can master it in 48 hours — not 48 days.",
    },
    {
        title: "Free to start, scales when you grow",
        text: "The Starter plan includes all core functionality at no cost. No credit card, no trial limits. Pay only when you need advanced features or more users.",
    },
    {
        title: "Built by a dentist who codes",
        text: "Not by a software company guessing what clinicians need. Every workflow, every screen, every shortcut was designed by someone who has actually held the handpiece.",
    },
    {
        title: "WhatsApp-first patient communication",
        text: "Automated appointment reminders at 48h, 24h and 2h. Budget approvals, booking confirmations and follow-ups — all through the channel patients actually use.",
    },
];

const countries = [
    "Argentina",
    "México",
    "Colombia",
    "Chile",
    "Perú",
    "Ecuador",
    "Uruguay",
    "Paraguay",
    "Bolivia",
    "Costa Rica",
    "República Dominicana",
    "Guatemala",
];

// JSON-LD structured data for search engines and AI
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "DentalCore",
    applicationCategory: "HealthApplication",
    operatingSystem: "Web",
    url: "https://www.dentalcore.app",
    description:
        "Software de gestión integral para clínicas y consultorios dentales. Odontograma digital, historia clínica, agenda inteligente, portal del paciente y asistencia de IA. Para toda América Latina.",
    offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Free Starter plan — all core features included",
    },
    author: {
        "@type": "Person",
        name: "Alfredo Di Tullio",
        jobTitle: "Dentist & Software Developer",
        url: "https://alfredoditullio.com",
    },
    areaServed: {
        "@type": "Place",
        name: "Latin America",
    },
    inLanguage: ["es", "en"],
    featureList: [
        "Digital odontogram with 47 clinical findings",
        "Smart scheduling with WhatsApp reminders",
        "Patient portal with mobile-first access",
        "AI-assisted diagnosis and treatment planning",
        "Voice-to-text clinical notes in Spanish",
        "Periodontal charting",
        "Finance and insurance management",
        "Multi-tenant architecture with data isolation",
    ],
};

export default function DentalCore() {
    return (
        <div className="container page">
            {/* JSON-LD for SEO + AI */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <Link href="/projects" className="back-link">
                <i className="fa-solid fa-arrow-left"></i> Projects
            </Link>

            {/* Hero */}
            <Reveal as="section" className="project-hero">
                <span className="project-hero__label">MVP · In production</span>
                <h1 className="project-hero__title">
                    <span className="gradient-text">DentalCore</span>
                </h1>
                <p className="project-hero__summary">
                    Dental practice management software for clinics and solo dentists
                    across Latin America. Digital odontogram, clinical records, smart
                    scheduling, patient portal, finance — and selective AI assistance
                    where it genuinely saves clinicians time. Built from the ground up
                    by a dentist who codes.
                </p>
                <div className="hero__actions">
                    <a
                        href="https://www.dentalcore.app/"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn--primary"
                    >
                        Visit dentalcore.app{" "}
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                    <a
                        href="https://dentalcore.app/blog/dentalcore-para-consultorios-chicos"
                        target="_blank"
                        rel="noreferrer"
                        className="btn"
                    >
                        Read for solo dentists
                    </a>
                </div>
            </Reveal>

            {/* App screenshot */}
            <Reveal as="section" className="section project-screenshot">
                <img
                    src="/assets/img/portfolio/dentalcore.webp"
                    alt="DentalCore dental software interface — patient dashboard with clinical summary, odontogram and treatment plans"
                    className="project-screenshot__img"
                />
            </Reveal>

            {/* Why DentalCore */}
            <section className="section">
                <Reveal>
                    <p className="section__eyebrow">Why DentalCore</p>
                    <h2 className="section__title">
                        Software that understands how dentists actually work
                    </h2>
                    <p className="section__intro">
                        Most dental management software was designed by engineers who never
                        held a handpiece. DentalCore was built by a practicing dentist —
                        every screen, every shortcut, every workflow comes from real
                        clinical experience.
                    </p>
                </Reveal>
                <Reveal delay={1}>
                    <div className="feature-grid">
                        {whyDentalCore.map((f) => (
                            <div key={f.title} className="feature">
                                <h3 className="feature__title">{f.title}</h3>
                                <p className="feature__text">{f.text}</p>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </section>

            {/* Latin America */}
            <section className="section">
                <Reveal>
                    <p className="section__eyebrow">Coverage</p>
                    <h2 className="section__title">
                        Built for Latin America — from day one
                    </h2>
                    <p className="section__intro">
                        DentalCore is designed for the realities of dental practice in
                        Latin America: Spanish-first interface, local regulatory
                        compliance, WhatsApp-native patient communication, and pricing
                        that makes sense for the region. Available across the continent.
                    </p>
                </Reveal>
                <Reveal delay={1}>
                    <div className="modules-grid">
                        {countries.map((c) => (
                            <div key={c} className="module">
                                <h3 className="module__name">{c}</h3>
                                <p className="module__detail">
                                    Software dental disponible
                                </p>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </section>

            {/* Modules */}
            <section className="section">
                <Reveal>
                    <p className="section__eyebrow">Clinical modules</p>
                    <h2 className="section__title">
                        Everything a dental clinic needs in one platform
                    </h2>
                    <p className="section__intro">
                        Twelve specialized modules covering every area of dental
                        practice — from the digital odontogram to marketing automation.
                        No integrations needed, no third-party add-ons.
                    </p>
                </Reveal>
                <Reveal delay={1}>
                    <div className="modules-grid">
                        {modules.map((m) => (
                            <div key={m.name} className="module">
                                <h3 className="module__name">{m.name}</h3>
                                <p className="module__detail">{m.detail}</p>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </section>

            {/* AI */}
            <section className="section">
                <Reveal>
                    <p className="section__eyebrow">AI assistance</p>
                    <h2 className="section__title">
                        AI where it helps — not for the sake of it
                    </h2>
                    <p className="section__intro">
                        DentalCore is not an &ldquo;AI app&rdquo;. It&apos;s a clinical
                        platform with a robust, well-tested core. AI is layered
                        selectively — voice-to-text notes, smart diagnosis suggestions,
                        automated consent drafting — only where it genuinely saves
                        clinicians time.
                    </p>
                </Reveal>
                <Reveal delay={1}>
                    <div className="feature-grid">
                        {aiFeatures.map((f) => (
                            <div key={f.title} className="feature">
                                <h3 className="feature__title">{f.title}</h3>
                                <p className="feature__text">{f.text}</p>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </section>

            {/* Stack */}
            <section className="section">
                <Reveal>
                    <p className="section__eyebrow">Tech stack</p>
                    <h2 className="section__title">Built with modern, proven tools</h2>
                </Reveal>
                <Reveal delay={1}>
                    <div className="stack-grid">
                        {stack.map((s) => (
                            <div key={s} className="stack-item">
                                {s}
                            </div>
                        ))}
                    </div>
                </Reveal>
            </section>

            {/* Architecture */}
            <section className="section">
                <Reveal>
                    <p className="section__eyebrow">Architecture</p>
                    <h2 className="section__title">How it&apos;s put together</h2>
                </Reveal>
                <Reveal delay={1}>
                    <div className="architecture">
                        {architecture.map((a) => (
                            <div key={a.num} className="arch-step">
                                <p className="arch-step__num">{a.num}</p>
                                <h3 className="arch-step__title">{a.title}</h3>
                                <p className="arch-step__text">{a.text}</p>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </section>

            {/* About the project */}
            <section className="section">
                <Reveal>
                    <p className="section__eyebrow">Behind the project</p>
                    <h2 className="section__title">Why I&apos;m building this</h2>
                    <p className="about__intro" style={{ marginBottom: "1.25rem" }}>
                        DentalCore grew out of the overlap between my training as a
                        dentist (UNLP, 2013) and years of software engineering. After
                        spending time in clinical practice across Argentina, I got tired
                        of the limitations of existing dental management systems — clunky
                        interfaces, zero automation, no patient communication tools — and
                        decided to build something that actually understands how dentists
                        work.
                    </p>
                    <p className="about__intro">
                        The focus is on a robust, well-architected core that clinicians
                        can trust day to day. AI is layered on top selectively, only where
                        it genuinely saves time. And it&apos;s built for Latin America
                        first — Spanish-native, WhatsApp-integrated, priced for the
                        region.
                    </p>
                </Reveal>
            </section>
        </div>
    );
}
