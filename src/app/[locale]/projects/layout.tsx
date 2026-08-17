import type { Metadata } from "next";
import { alternatesFor, isLocale, localizedUrl } from "@/i18n/routing";

const base: Metadata = {
    title: "Projects",
    description:
        "Software projects by Alfredo Di Tullio — DentalCore (clinical platform for dentistry), OdontoLatam (dental industry portal), and FG Academia (educational platform).",
    openGraph: {
        title: "Projects — Alfredo Di Tullio",
        description:
            "DentalCore, OdontoLatam, FG Academia — real-world software built with React, TypeScript and Supabase.",
        url: "https://www.alfredoditullio.com/projects",
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
        alternates: alternatesFor("/projects", locale),
        openGraph: base.openGraph
            ? { ...base.openGraph, url: localizedUrl("/projects", locale) }
            : undefined,
    };
}

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
    return children;
}
