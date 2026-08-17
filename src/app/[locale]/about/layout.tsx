import type { Metadata } from "next";
import { alternatesFor, isLocale, localizedUrl } from "@/i18n/routing";

const base: Metadata = {
    title: "About",
    description:
        "Alfredo Di Tullio — Argentinian dentist, full-stack developer, philosophy graduate, tourism technician, author of two books, and former Michelin-star cook. Based in Barcelona.",
    openGraph: {
        title: "About Alfredo Di Tullio",
        description:
            "Dentist, developer, writer — a multidisciplinary journey from Buenos Aires to Barcelona.",
        url: "https://www.alfredoditullio.com/about",
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
        alternates: alternatesFor("/about", locale),
        openGraph: base.openGraph
            ? { ...base.openGraph, url: localizedUrl("/about", locale) }
            : undefined,
    };
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return children;
}
