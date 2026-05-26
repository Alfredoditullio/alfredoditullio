import type { Metadata } from "next";

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
        {
            "@type": "Book",
            position: 1,
            name: "En búsqueda del sentido",
            author: { "@type": "Person", name: "Alfredo Di Tullio" },
            datePublished: "2023",
            description:
                "A philosophical exploration of meaning, identity and purpose through the lens of travel and lived experience.",
            inLanguage: "es",
            url: "https://www.alfredoditullio.com/books",
        },
        {
            "@type": "Book",
            position: 2,
            name: "Horizontes Infinitos",
            author: { "@type": "Person", name: "Alfredo Di Tullio" },
            datePublished: "2025",
            description:
                "Philosophy, travel and reflection — a journey through infinite horizons of thought and geography.",
            inLanguage: "es",
            url: "https://www.alfredoditullio.com/books",
        },
    ],
};

export const metadata: Metadata = {
    title: "Books",
    description:
        "Books by Alfredo Di Tullio — En búsqueda del sentido (2023) and Horizontes Infinitos (2025). Philosophy, travel and reflection.",
    alternates: { canonical: "https://www.alfredoditullio.com/books" },
    openGraph: {
        title: "Books by Alfredo Di Tullio",
        description:
            "En búsqueda del sentido (2023) & Horizontes Infinitos (2025) — philosophy, travel and meaning.",
        url: "https://www.alfredoditullio.com/books",
    },
};

export default function BooksLayout({ children }: { children: React.ReactNode }) {
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
