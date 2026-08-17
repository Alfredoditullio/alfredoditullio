import type { Metadata } from "next";
import Providers from "@/components/Providers";
import TopNav from "@/components/TopNav";
import IntroAnimation from "@/components/IntroAnimation";
import FluidBackground from "@/components/FluidBackground";
import CookieBanner from "@/components/CookieBanner";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
    BASE,
    alternatesFor,
    byLocale,
    isLocale,
    locales,
    localizedPath,
    type Locale,
} from "@/i18n/routing";
import "../globals.css";

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale: raw } = await params;
    if (!isLocale(raw)) return {};
    const locale: Locale = raw;

    const title = byLocale(
        locale,
        "Alfredo Di Tullio — Dentist, Researcher & Developer",
        "Alfredo Di Tullio — Odontólogo, Investigador y Desarrollador"
    );
    const description = byLocale(
        locale,
        "Dentist (M.N. 40.973), researcher and full-stack developer. Founder and creator of DentalCore, the first Clinical Decision Support System (CDSS) for dentistry in Latin America. Author of «Inteligencia Artificial para Odontólogos» and two books on philosophy and travel.",
        "Odontólogo (M.N. 40.973), investigador y desarrollador full-stack. Fundador y creador de DentalCore, el primer Sistema de Apoyo a la Decisión Clínica (CDSS) para odontología en América Latina. Autor de «Inteligencia Artificial para Odontólogos» y de dos libros sobre filosofía y viajes."
    );

    return {
        title: { default: title, template: "%s | Alfredo Di Tullio" },
        description,
        metadataBase: new URL(BASE),
        alternates: alternatesFor("/", locale),
        icons: {
            icon: [
                { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
                { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
            ],
            apple: [
                { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
            ],
        },
        openGraph: {
            type: "website",
            locale: locale === "es" ? "es_AR" : "en_US",
            alternateLocale: locale === "es" ? "en_US" : "es_AR",
            url: alternatesFor("/", locale)?.canonical as string,
            siteName: "Alfredo Di Tullio",
            title,
            description,
        },
        twitter: { card: "summary_large_image", title, description },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
    };
}

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebSite",
            "@id": `${BASE}/#website`,
            url: BASE,
            name: "Alfredo Di Tullio",
            description: "Personal portfolio — dentist, developer and writer",
            publisher: { "@id": `${BASE}/#person` },
            inLanguage: ["en", "es"],
        },
        {
            "@type": "Person",
            "@id": `${BASE}/#person`,
            name: "Alfredo Di Tullio",
            url: BASE,
            email: "info@alfredoditullio.com",
            jobTitle: ["Dentist", "Researcher", "Full-Stack Developer", "Writer"],
            description:
                "Argentinian dentist (UNLP, M.N. 40.973) and researcher in artificial intelligence applied to dentistry. Founder and creator of DentalCore, the first Clinical Decision Support System (CDSS) for dentistry in Latin America. Author of «Inteligencia Artificial para Odontólogos». Philosophy graduate, tourism technician, former Michelin-star cook.",
            alumniOf: [
                { "@type": "EducationalOrganization", name: "Universidad Nacional de La Plata" },
                { "@type": "EducationalOrganization", name: "Universidad TECH" },
                { "@type": "EducationalOrganization", name: "UNTREF" },
            ],
            knowsAbout: [
                "Artificial intelligence in dentistry",
                "Clinical decision support systems (CDSS)",
                "Deep learning",
                "Machine learning",
                "Health data interoperability (HL7 FHIR)",
                "Dental informatics",
                "Dentistry",
                "Oral pathology",
                "Full-Stack Development",
                "React",
                "TypeScript",
                "Supabase",
                "Philosophy",
                "Tourism",
                "Gastronomy",
                "Writing",
            ],
            memberOf: {
                "@type": "Organization",
                name: "Red de Científicos Argentinos en Australia (RCAA)",
                alternateName: "Network of Argentine Scientists in Australia",
            },
            hasCredential: [
                {
                    "@type": "EducationalOccupationalCredential",
                    credentialCategory: "Professional license",
                    name: "Matrícula Nacional de Odontólogo — M.N. 40.973",
                    recognizedBy: {
                        "@type": "Organization",
                        name: "Ministerio de Salud, Argentina",
                    },
                },
                {
                    "@type": "EducationalOccupationalCredential",
                    credentialCategory: "Master's degree (in progress)",
                    name: "Master's in Artificial Intelligence applied to Dentistry",
                },
            ],
            worksFor: { "@id": "https://dentalcore.app/#organization" },
            founder: { "@id": "https://dentalcore.app/#organization" },
            sameAs: [
                "https://dentalcore.app",
                "https://dentalcore.app/about#alfredo-di-tullio",
                "https://orcid.org/0009-0008-7398-9549",
                "https://zenodo.org/records/20821942",
                "https://www.linkedin.com/in/alfredo-di-tullio/",
                "https://www.instagram.com/alfred.ditu",
                "https://www.facebook.com/alfreditullio",
                "https://github.com/Alfredoditullio",
            ],
            identifier: {
                "@type": "PropertyValue",
                propertyID: "ORCID",
                value: "0009-0008-7398-9549",
                url: "https://orcid.org/0009-0008-7398-9549",
            },
        },
        {
            "@type": "Organization",
            "@id": "https://dentalcore.app/#organization",
            name: "DentalCore",
            url: "https://dentalcore.app",
            description:
                "The first Clinical Decision Support System (CDSS) for dentistry in Latin America.",
            founder: { "@id": `${BASE}/#person` },
        },
        {
            "@type": "Book",
            "@id": `${BASE}/books/inteligencia-artificial-para-odontologos#book`,
            name: "Inteligencia Artificial para Odontólogos",
            alternateName:
                "Inteligencia artificial para odontólogos: una guía para comprender, usar y cuestionar la IA en el consultorio",
            author: { "@id": `${BASE}/#person` },
            about: "Artificial intelligence in dentistry",
            url: `${BASE}/books/inteligencia-artificial-para-odontologos`,
            inLanguage: "es",
            datePublished: "2026",
            description:
                "A guide for dentists to understand, use and question artificial intelligence in the dental practice — written by a dentist, for dentists.",
            sameAs:
                "https://www.amazon.com.au/Inteligencia-Artificial-para-odont%C3%B3logos-inteligencia/dp/B0HD5T5V8N/",
        },
        {
            "@type": "ScholarlyArticle",
            "@id": "https://doi.org/10.5281/zenodo.20821942",
            name: "DentalCore: Design and Implementation of a Rule-Based Clinical Decision Support System (CDSS) for Primary-Care Dentistry in Latin America",
            author: { "@id": `${BASE}/#person` },
            about: { "@id": "https://dentalcore.app/#organization" },
            mentions: { "@id": "https://dentalcore.app/#organization" },
            datePublished: "2026-06-23",
            description:
                "A rule-based clinical decision support system for dentistry in resource-limited Latin American settings, featuring three inference engines for treatment planning, medical-risk assessment, and drug interaction checking.",
            url: "https://zenodo.org/records/20821942",
            identifier: {
                "@type": "PropertyValue",
                propertyID: "DOI",
                value: "10.5281/zenodo.20821942",
            },
            keywords: [
                "Clinical decision support systems",
                "dental informatics",
                "rule-based systems",
                "primary care",
                "Latin America",
                "digital health",
                "CDSS",
                "dentistry",
            ],
            license: "https://creativecommons.org/licenses/by/4.0/",
            publisher: { "@type": "Organization", name: "Zenodo" },
        },
    ],
};

export default async function RootLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}>) {
    const { locale: raw } = await params;
    if (!isLocale(raw)) notFound();
    const locale: Locale = raw;

    return (
        <html lang={locale === "es" ? "es-AR" : "en"}>
            <head>
                <link
                    rel="stylesheet"
                    href="/assets/fonts/fontawesome-free-6.1.2-web/css/all.min.css"
                />
                <link rel="stylesheet" href="/assets/fonts/poppins/poppins.css" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body>
                <Providers locale={locale}>
                    <div className="bg-fx" aria-hidden="true">
                        <div className="bg-fx__blob bg-fx__blob--indigo"></div>
                        <div className="bg-fx__blob bg-fx__blob--violet"></div>
                        <div className="bg-fx__blob bg-fx__blob--pink"></div>
                    </div>
                    <IntroAnimation />
                    <FluidBackground />
                    <TopNav />
                    <main>{children}</main>
                    <footer className="footer">
                        <div className="container footer__inner">
                            <div className="footer__legal">
                                <span>
                                    © {new Date().getFullYear()} Alfredo Di Tullio
                                </span>
                                <nav className="footer__links" aria-label="Legal">
                                    <Link href={localizedPath("/privacy", locale)}>
                                        {locale === "es" ? "Privacidad" : "Privacy"}
                                    </Link>
                                    <Link href={localizedPath("/terms", locale)}>
                                        {locale === "es" ? "Términos" : "Terms"}
                                    </Link>
                                    <Link href={localizedPath("/cookies", locale)}>
                                        Cookies
                                    </Link>
                                </nav>
                            </div>
                            <div className="footer__socials">
                                <a
                                    href="https://www.linkedin.com/in/alfredo-di-tullio/"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="LinkedIn"
                                >
                                    <i className="fa-brands fa-linkedin-in"></i>
                                </a>
                                <a
                                    href="https://www.instagram.com/alfred.ditu"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Instagram"
                                >
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                                <a
                                    href="https://www.facebook.com/alfreditullio"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Facebook"
                                >
                                    <i className="fa-brands fa-facebook-f"></i>
                                </a>
                                <Link
                                    href={localizedPath("/contact", locale)}
                                    aria-label="Contact"
                                >
                                    <i className="fa-solid fa-envelope"></i>
                                </Link>
                            </div>
                        </div>
                    </footer>
                    <CookieBanner />
                </Providers>
            </body>
        </html>
    );
}
