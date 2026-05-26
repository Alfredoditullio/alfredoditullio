import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "FG Academia — Educational Platform",
    description:
        "FG Academia is an educational platform for financial and business training. Built by Alfredo Di Tullio with modern web technologies.",
    alternates: { canonical: "https://www.alfredoditullio.com/projects/fgcapital" },
    openGraph: {
        title: "FG Academia — Educational Platform",
        description: "Educational platform for financial and business training.",
        url: "https://www.alfredoditullio.com/projects/fgcapital",
    },
};

export default function FGCapitalLayout({ children }: { children: React.ReactNode }) {
    return children;
}
