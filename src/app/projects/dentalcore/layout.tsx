import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "DentalCore — Clinical Decision Support System for Dentistry in Latin America",
    description:
        "DentalCore is the first Clinical Decision Support System (CDSS) for dentistry in Latin America. Features AI-powered oral pathology diagnostics (100 coded pathologies), digital odontogram with 47 finding codes, 7 clinical engines, treatment planning, pharmacological interaction checker, and practice management. Created by dentist and developer Alfredo Di Tullio. Published research: DOI 10.5281/zenodo.20821942.",
    alternates: { canonical: "https://www.alfredoditullio.com/projects/dentalcore" },
    openGraph: {
        title: "DentalCore — First Dental CDSS for Latin America",
        description:
            "First Clinical Decision Support System for dentistry in Latin America. AI-powered oral pathology diagnostics, digital odontogram, treatment planning, and practice management. By Alfredo Di Tullio.",
        url: "https://www.alfredoditullio.com/projects/dentalcore",
    },
    keywords: [
        "DentalCore",
        "dental software",
        "clinical decision support system",
        "CDSS",
        "dental informatics",
        "odontogram digital",
        "dental AI",
        "oral pathology diagnostic",
        "practice management",
        "rule-based clinical decision support",
        "primary care dentistry",
        "Latin America",
        "digital health",
        "software dental",
        "Alfredo Di Tullio",
        "React",
        "TypeScript",
        "Supabase",
    ],
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "DentalCore",
    applicationCategory: "HealthApplication",
    applicationSubCategory: "Clinical Decision Support System",
    operatingSystem: "Web",
    url: "https://www.dentalcore.app",
    description:
        "First Clinical Decision Support System (CDSS) for dentistry in Latin America. World's first dental software with integrated oral pathology diagnostic motor. 7 clinical engines, 100 coded oral pathologies, free forever for early oral cancer detection.",
    keywords:
        "software dental, CDSS dental, sistema apoyo decision clinica odontologia, motor clinico, diagnostico patologia oral, cancer oral, deteccion temprana, software dental Argentina, software dental Mexico, software dental Latinoamerica, dental clinical decision support, dental practice management",
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
        sameAs: [
            "https://orcid.org/0009-0008-7398-9549",
            "https://www.linkedin.com/in/alfredo-di-tullio/",
        ],
        identifier: {
            "@type": "PropertyValue",
            propertyID: "ORCID",
            value: "0009-0008-7398-9549",
            url: "https://orcid.org/0009-0008-7398-9549",
        },
    },
    citation: {
        "@type": "ScholarlyArticle",
        name: "DentalCore: Design and Implementation of a Rule-Based Clinical Decision Support System (CDSS) for Primary-Care Dentistry in Latin America",
        url: "https://zenodo.org/records/20821942",
        identifier: "10.5281/zenodo.20821942",
        datePublished: "2026",
        author: { "@type": "Person", name: "Alfredo Di Tullio" },
        publisher: { "@type": "Organization", name: "Zenodo" },
        license: "https://creativecommons.org/licenses/by/4.0/",
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

export default function DentalCoreLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <noscript>
                <article>
                    <h1>DentalCore — First Clinical Decision Support System (CDSS) for Dentistry in Latin America</h1>
                    <p>
                        DentalCore is the first Clinical Decision Support System (CDSS) designed for
                        primary-care dentistry in Latin America. Created by Alfredo Di Tullio — dentist,
                        full-stack developer, and researcher (ORCID: 0009-0008-7398-9549).
                    </p>
                    <h2>What is DentalCore?</h2>
                    <p>
                        DentalCore is a comprehensive clinical platform that goes beyond traditional practice
                        management software. It features 7 clinical engines that actively assist dentists
                        during patient care: an oral pathology diagnostic motor with 100 coded pathologies
                        (the first of its kind in dental software worldwide), a pharmacological interaction
                        checker, a medical interconsultation motor covering 18 conditions across 9 dental
                        procedures, a pediatric dose calculator, and a treatment planning engine with 7 phases.
                    </p>
                    <h2>Key Features</h2>
                    <ul>
                        <li>Digital odontogram with 47 clinical finding codes</li>
                        <li>Oral pathology diagnostic motor — 100 coded pathologies</li>
                        <li>Free oral cancer early detection module</li>
                        <li>Pharmacological interaction checker</li>
                        <li>Medical interconsultation motor (18 conditions × 9 procedures)</li>
                        <li>Pediatric dose calculator</li>
                        <li>Treatment planning with 7-phase inference engine</li>
                        <li>AI-powered radiographic analysis with computer vision</li>
                        <li>Voice-to-text clinical notes in Spanish</li>
                        <li>WhatsApp bot with 9 automations</li>
                        <li>MercadoPago integrated payments</li>
                        <li>Patient portal with mobile-first access</li>
                        <li>Periodontal charting and endodontics modules</li>
                        <li>Epidemiological surveillance network for Latin America</li>
                    </ul>
                    <h2>Academic Research</h2>
                    <p>
                        Published paper: &quot;DentalCore: Design and Implementation of a Rule-Based Clinical
                        Decision Support System (CDSS) for Primary-Care Dentistry in Latin America&quot;
                        — Alfredo Di Tullio, 2026. DOI: 10.5281/zenodo.20821942. Published on Zenodo
                        under Creative Commons BY 4.0 license.
                    </p>
                    <h2>Available In</h2>
                    <p>Argentina, México, Colombia, Chile, Perú, Ecuador, Uruguay, Paraguay, Bolivia, Costa Rica, República Dominicana, Guatemala.</p>
                    <h2>Technology</h2>
                    <p>Built with React 19, TypeScript, Supabase (Auth, PostgreSQL, Storage, Edge Functions), Zustand, Google Gemini AI, and Vite.</p>
                    <p>Visit: <a href="https://www.dentalcore.app">dentalcore.app</a></p>
                </article>
            </noscript>
            {children}
        </>
    );
}
