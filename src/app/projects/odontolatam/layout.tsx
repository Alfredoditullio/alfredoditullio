import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "OdontoLatam — Dental Industry Portal",
    description:
        "OdontoLatam is a dental industry portal connecting professionals, clinics and suppliers across Latin America. Built by Alfredo Di Tullio.",
    alternates: { canonical: "https://www.alfredoditullio.com/projects/odontolatam" },
    openGraph: {
        title: "OdontoLatam — Dental Industry Portal",
        description:
            "Connecting dental professionals, clinics and suppliers across Latin America.",
        url: "https://www.alfredoditullio.com/projects/odontolatam",
    },
};

export default function OdontoLatamLayout({ children }: { children: React.ReactNode }) {
    return children;
}
