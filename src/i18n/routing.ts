import type { Metadata } from "next";

export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];

/** English is served without a prefix so existing URLs never change. */
export const defaultLocale: Locale = "en";

export const BASE = "https://www.alfredoditullio.com";

/** hreflang codes. Spanish targets Argentina/LATAM, the key audience. */
const hreflang: Record<Locale, string> = { en: "en", es: "es-AR" };

export function isLocale(value: string): value is Locale {
    return (locales as readonly string[]).includes(value);
}

/**
 * Strip the locale prefix from a pathname, returning the canonical
 * "bare" path: "/es/about" -> "/about", "/es" -> "/", "/about" -> "/about".
 */
export function stripLocale(pathname: string): string {
    for (const l of locales) {
        if (l === defaultLocale) continue;
        if (pathname === `/${l}`) return "/";
        if (pathname.startsWith(`/${l}/`)) return pathname.slice(l.length + 1);
    }
    return pathname || "/";
}

/**
 * Build the public URL path for a bare path in a given locale.
 * ("/about", "es") -> "/es/about" · ("/about", "en") -> "/about"
 */
export function localizedPath(barePath: string, locale: Locale): string {
    const clean = barePath === "" ? "/" : barePath;
    if (locale === defaultLocale) return clean;
    return clean === "/" ? `/${locale}` : `/${locale}${clean}`;
}

/** Absolute URL for a bare path in a given locale. */
export function localizedUrl(barePath: string, locale: Locale): string {
    const path = localizedPath(barePath, locale);
    return path === "/" ? BASE : `${BASE}${path}`;
}

/**
 * Canonical + hreflang alternates for a page. Every page declares the full
 * set of language versions plus x-default, pointing at the English URL.
 */
export function alternatesFor(
    barePath: string,
    locale: Locale
): Metadata["alternates"] {
    const languages: Record<string, string> = {};
    for (const l of locales) {
        languages[hreflang[l]] = localizedUrl(barePath, l);
    }
    languages["x-default"] = localizedUrl(barePath, defaultLocale);

    return {
        canonical: localizedUrl(barePath, locale),
        languages,
    };
}

/** Pick one of two strings by locale — for metadata copy. */
export function byLocale(
    locale: Locale,
    en: string,
    es: string
): string {
    return locale === "es" ? es : en;
}

/** Every bare path on the site, used by the sitemap. */
export const routes: { path: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }[] = [
    { path: "/", priority: 1, changeFrequency: "monthly" },
    { path: "/about", priority: 0.9, changeFrequency: "monthly" },
    { path: "/projects", priority: 0.9, changeFrequency: "monthly" },
    { path: "/projects/dentalcore", priority: 0.8, changeFrequency: "weekly" },
    { path: "/projects/odontolatam", priority: 0.7, changeFrequency: "monthly" },
    { path: "/projects/fgcapital", priority: 0.6, changeFrequency: "monthly" },
    { path: "/books", priority: 0.7, changeFrequency: "monthly" },
    { path: "/books/inteligencia-artificial-para-odontologos", priority: 0.8, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
    { path: "/privacy", priority: 0.2, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.2, changeFrequency: "yearly" },
    { path: "/cookies", priority: 0.2, changeFrequency: "yearly" },
];
