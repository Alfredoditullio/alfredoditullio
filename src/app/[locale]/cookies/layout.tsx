import type { Metadata } from "next";
import { alternatesFor, isLocale, localizedUrl } from "@/i18n/routing";

const base: Metadata = {
    title: "Cookie Policy",
    description: "Cookie policy for alfredoditullio.com.",
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
        alternates: alternatesFor("/cookies", locale),
        openGraph: base.openGraph
            ? { ...base.openGraph, url: localizedUrl("/cookies", locale) }
            : undefined,
    };
}

export default function CookiesLayout({ children }: { children: React.ReactNode }) {
    return children;
}
