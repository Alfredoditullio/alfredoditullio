import type { MetadataRoute } from "next";

const BASE = "https://www.alfredoditullio.com";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        { url: BASE, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
        { url: `${BASE}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
        { url: `${BASE}/projects`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
        { url: `${BASE}/projects/dentalcore`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
        { url: `${BASE}/books`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
        { url: `${BASE}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
        { url: `${BASE}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
        { url: `${BASE}/terms`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
        { url: `${BASE}/cookies`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
    ];
}
