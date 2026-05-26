import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects",
    description:
        "Software projects by Alfredo Di Tullio — DentalCore (clinical platform for dentistry), OdontoLatam (dental industry portal), and FG Academia (educational platform).",
    alternates: { canonical: "https://www.alfredoditullio.com/projects" },
    openGraph: {
        title: "Projects — Alfredo Di Tullio",
        description:
            "DentalCore, OdontoLatam, FG Academia — real-world software built with React, TypeScript and Supabase.",
        url: "https://www.alfredoditullio.com/projects",
    },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
    return children;
}
