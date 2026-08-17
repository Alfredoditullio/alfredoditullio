import type { Metadata } from "next";
import { alternatesFor, isLocale, localizedUrl } from "@/i18n/routing";

const URL =
    "https://www.alfredoditullio.com/books/inteligencia-artificial-para-odontologos";
const AMAZON_URL =
    "https://www.amazon.com.au/Inteligencia-Artificial-para-odont%C3%B3logos-inteligencia/dp/B0HD5T5V8N/";

const description =
    "Inteligencia artificial para odontólogos (2026), de Alfredo Di Tullio — fundador de DentalCore. Una guía en español para comprender, usar y cuestionar la IA en el consultorio: escrita por un odontólogo para odontólogos.";

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Book",
            name: "Inteligencia artificial para odontólogos",
            alternateName:
                "Inteligencia artificial para odontólogos: una guía para comprender, usar y cuestionar la IA en el consultorio",
            author: {
                "@type": "Person",
                name: "Alfredo Di Tullio",
                url: "https://www.alfredoditullio.com/about",
            },
            inLanguage: "es",
            datePublished: "2026",
            bookFormat: "https://schema.org/Paperback",
            isbn: "",
            about: [
                "Artificial intelligence",
                "Dentistry",
                "Clinical decision support",
                "Health technology",
                "Odontología",
                "Inteligencia artificial en salud",
            ],
            description,
            url: URL,
            sameAs: AMAZON_URL,
            offers: {
                "@type": "Offer",
                url: AMAZON_URL,
                availability: "https://schema.org/InStock",
            },
        },
        {
            "@type": "Article",
            headline:
                "Inteligencia artificial para odontólogos: por qué escribí este libro",
            author: {
                "@type": "Person",
                name: "Alfredo Di Tullio",
                url: "https://www.alfredoditullio.com/about",
            },
            publisher: {
                "@type": "Person",
                name: "Alfredo Di Tullio",
            },
            inLanguage: "es",
            datePublished: "2026-08-09",
            mainEntityOfPage: URL,
            url: URL,
            description,
            about: {
                "@type": "SoftwareApplication",
                name: "DentalCore",
                applicationCategory: "HealthApplication",
                url: "https://www.dentalcore.app/",
            },
        },
    ],
};

const base: Metadata = {
    title: "Inteligencia artificial para odontólogos",
    description,
    keywords: [
        "inteligencia artificial odontología",
        "IA en odontología",
        "libro IA odontólogos",
        "inteligencia artificial odontología libro",
        "DentalCore",
        "software odontológico IA",
        "Alfredo Di Tullio",
    ],
    openGraph: {
        type: "article",
        title: "Inteligencia artificial para odontólogos — Alfredo Di Tullio",
        description,
        url: URL,
    },
    twitter: {
        card: "summary_large_image",
        title: "Inteligencia artificial para odontólogos — Alfredo Di Tullio",
        description,
    },
};

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale: raw } = await params;
    const locale = isLocale(raw) ? raw : "en";
    return {
        ...base,
        alternates: alternatesFor("/books/inteligencia-artificial-para-odontologos", locale),
        openGraph: base.openGraph
            ? { ...base.openGraph, url: localizedUrl("/books/inteligencia-artificial-para-odontologos", locale) }
            : undefined,
    };
}

export default function IaOdontologosLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {children}
        </>
    );
}
