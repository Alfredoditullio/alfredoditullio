import type { Metadata } from "next";
import Providers from "@/components/Providers";
import TopNav from "@/components/TopNav";
import IntroAnimation from "@/components/IntroAnimation";
import FluidBackground from "@/components/FluidBackground";
import CookieBanner from "@/components/CookieBanner";
import Link from "next/link";
import "./globals.css";

const BASE = "https://www.alfredoditullio.com";

export const metadata: Metadata = {
    title: {
        default: "Alfredo Di Tullio — Dentist, Developer & Writer",
        template: "%s | Alfredo Di Tullio",
    },
    description:
        "Dentist, full-stack developer and writer. Building DentalCore, a comprehensive clinical platform for dentistry. Author of two books on philosophy and travel.",
    metadataBase: new URL(BASE),
    alternates: {
        canonical: BASE,
    },
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
        locale: "en_US",
        url: BASE,
        siteName: "Alfredo Di Tullio",
        title: "Alfredo Di Tullio — Dentist, Developer & Writer",
        description:
            "Dentist, full-stack developer and writer. Building DentalCore, a comprehensive clinical platform for dentistry.",
    },
    twitter: {
        card: "summary_large_image",
        title: "Alfredo Di Tullio — Dentist, Developer & Writer",
        description:
            "Dentist, full-stack developer and writer. Building DentalCore, a comprehensive clinical platform for dentistry.",
    },
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
            jobTitle: ["Dentist", "Full-Stack Developer", "Writer"],
            description:
                "Argentinian dentist (UNLP), full-stack developer building DentalCore, philosophy graduate, tourism technician, author of two books, former Michelin-star cook.",
            alumniOf: [
                { "@type": "EducationalOrganization", name: "Universidad Nacional de La Plata" },
                { "@type": "EducationalOrganization", name: "Universidad TECH" },
                { "@type": "EducationalOrganization", name: "UNTREF" },
            ],
            knowsAbout: [
                "Dentistry",
                "Full-Stack Development",
                "React",
                "TypeScript",
                "Supabase",
                "Philosophy",
                "Tourism",
                "Gastronomy",
                "Writing",
            ],
            sameAs: [
                "https://www.linkedin.com/in/alfredo-di-tullio/",
                "https://www.instagram.com/alfred.ditu",
                "https://www.facebook.com/alfreditullio",
                "https://github.com/Alfredoditullio",
                "https://orcid.org/0009-0008-7398-9549",
                "https://zenodo.org/records/20821942",
            ],
            identifier: {
                "@type": "PropertyValue",
                propertyID: "ORCID",
                value: "0009-0008-7398-9549",
                url: "https://orcid.org/0009-0008-7398-9549",
            },
        },
        {
            "@type": "ScholarlyArticle",
            "@id": "https://doi.org/10.5281/zenodo.20821942",
            name: "DentalCore: Design and Implementation of a Rule-Based Clinical Decision Support System (CDSS) for Primary-Care Dentistry in Latin America",
            author: { "@id": `${BASE}/#person` },
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

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
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
                <Providers>
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
                                    <Link href="/privacy">Privacy</Link>
                                    <Link href="/terms">Terms</Link>
                                    <Link href="/cookies">Cookies</Link>
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
                                <Link href="/contact" aria-label="Contact">
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
