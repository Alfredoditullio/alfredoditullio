import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
    description:
        "Alfredo Di Tullio — Argentinian dentist, full-stack developer, philosophy graduate, tourism technician, author of two books, and former Michelin-star cook. Based in Barcelona.",
    alternates: { canonical: "https://www.alfredoditullio.com/about" },
    openGraph: {
        title: "About Alfredo Di Tullio",
        description:
            "Dentist, developer, writer — a multidisciplinary journey from Buenos Aires to Barcelona.",
        url: "https://www.alfredoditullio.com/about",
    },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return children;
}
