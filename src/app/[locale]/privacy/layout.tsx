import type { Metadata } from "next";
import { alternatesFor, isLocale, localizedUrl } from "@/i18n/routing";

const base: Metadata = {
    title: "Privacy Policy",
    description: "Privacy policy for alfredoditullio.com — how we handle your data.",
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
        alternates: alternatesFor("/privacy", locale),
        openGraph: base.openGraph
            ? { ...base.openGraph, url: localizedUrl("/privacy", locale) }
            : undefined,
    };
}

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
    return children;
}
