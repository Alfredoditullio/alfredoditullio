import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "DentalCore — Clinical Decision Support for Dentistry",
    description:
        "DentalCore is a comprehensive clinical platform for dentistry featuring AI-powered diagnostics, digital odontogram, treatment planning, and practice management. Built with React 19, TypeScript, Supabase and Zustand.",
    alternates: { canonical: "https://www.alfredoditullio.com/projects/dentalcore" },
    openGraph: {
        title: "DentalCore — Clinical Decision Support for Dentistry",
        description:
            "AI-powered dental platform with digital odontogram, treatment planning, and practice management.",
        url: "https://www.alfredoditullio.com/projects/dentalcore",
    },
    keywords: [
        "DentalCore",
        "dental software",
        "clinical decision support",
        "odontogram",
        "dental AI",
        "practice management",
        "React",
        "TypeScript",
        "Supabase",
    ],
};

export default function DentalCoreLayout({ children }: { children: React.ReactNode }) {
    return children;
}
