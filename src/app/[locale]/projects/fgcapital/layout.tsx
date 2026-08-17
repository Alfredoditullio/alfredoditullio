import type { Metadata } from "next";
import { alternatesFor, isLocale, localizedUrl } from "@/i18n/routing";

const base: Metadata = {
    title: "FG Academia — Educational Platform",
    description:
        "FG Academia is an educational platform for financial and business training. Built by Alfredo Di Tullio with modern web technologies.",
    openGraph: {
        title: "FG Academia — Educational Platform",
        description: "Educational platform for financial and business training.",
        url: "https://www.alfredoditullio.com/projects/fgcapital",
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
        alternates: alternatesFor("/projects/fgcapital", locale),
        openGraph: base.openGraph
            ? { ...base.openGraph, url: localizedUrl("/projects/fgcapital", locale) }
            : undefined,
    };
}

export default function FGCapitalLayout({ children }: { children: React.ReactNode }) {
    return children;
}
