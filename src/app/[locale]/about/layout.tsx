import type { Metadata } from "next";
import { alternatesFor, isLocale, localizedUrl } from "@/i18n/routing";

const base: Metadata = {
    title: "About",
    description:
        "Alfredo Di Tullio — Argentinian dentist (M.N. 40.973), researcher and full-stack developer based in Melbourne, Australia. Founder and creator of DentalCore, author of «Inteligencia Artificial para Odontólogos», philosophy graduate and former Michelin-star cook.",
    openGraph: {
        title: "About Alfredo Di Tullio",
        description:
            "Dentist, researcher and developer — the multidisciplinary path behind DentalCore and «Inteligencia Artificial para Odontólogos».",
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
