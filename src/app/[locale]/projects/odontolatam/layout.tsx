import type { Metadata } from "next";
import { alternatesFor, isLocale, localizedUrl } from "@/i18n/routing";

const base: Metadata = {
    title: "OdontoLatam — Dental Industry Portal",
    description:
        "OdontoLatam is a dental industry portal connecting professionals, clinics and suppliers across Latin America. Built by Alfredo Di Tullio.",
    openGraph: {
        title: "OdontoLatam — Dental Industry Portal",
        description:
            "Connecting dental professionals, clinics and suppliers across Latin America.",
        url: "https://www.alfredoditullio.com/projects/odontolatam",
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
        alternates: alternatesFor("/projects/odontolatam", locale),
        openGraph: base.openGraph
            ? { ...base.openGraph, url: localizedUrl("/projects/odontolatam", locale) }
            : undefined,
    };
}

export default function OdontoLatamLayout({ children }: { children: React.ReactNode }) {
    return children;
}
