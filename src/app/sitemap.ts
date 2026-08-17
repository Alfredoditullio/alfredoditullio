import type { MetadataRoute } from "next";
import { locales, localizedUrl, routes } from "@/i18n/routing";

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();

    // Every route is listed once per locale, each entry declaring the full
    // set of language alternates so search engines pair them correctly.
    return routes.flatMap(({ path, priority, changeFrequency }) =>
        locales.map((locale) => ({
            url: localizedUrl(path, locale),
            lastModified,
            changeFrequency,
            priority,
            alternates: {
                languages: {
                    en: localizedUrl(path, "en"),
                    "es-AR": localizedUrl(path, "es"),
                },
            },
        }))
    );
}
