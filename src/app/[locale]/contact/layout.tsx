import type { Metadata } from "next";
import { alternatesFor, isLocale, localizedUrl } from "@/i18n/routing";

const base: Metadata = {
    title: "Contact",
    description:
        "Get in touch with Alfredo Di Tullio — available for freelance web development, dental software consulting, and writing collaborations. Based in Barcelona, Spain.",
    openGraph: {
        title: "Contact Alfredo Di Tullio",
        description:
            "Available for freelance development, consulting and collaborations. Based in Barcelona.",
        url: "https://www.alfredoditullio.com/contact",
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
        alternates: alternatesFor("/contact", locale),
        openGraph: base.openGraph
            ? { ...base.openGraph, url: localizedUrl("/contact", locale) }
            : undefined,
    };
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return children;
}
