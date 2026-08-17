import type { Metadata } from "next";
import { alternatesFor, isLocale, localizedUrl } from "@/i18n/routing";

const base: Metadata = {
    title: "Terms of Use",
    description: "Terms of use for alfredoditullio.com.",
    robots: { index: false, follow: true },
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
        alternates: alternatesFor("/terms", locale),
        openGraph: base.openGraph
            ? { ...base.openGraph, url: localizedUrl("/terms", locale) }
            : undefined,
    };
}

export default function TermsLayout({ children }: { children: React.ReactNode }) {
    return children;
}
