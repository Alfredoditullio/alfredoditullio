import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Use",
    description: "Terms of use for alfredoditullio.com.",
    alternates: { canonical: "https://www.alfredoditullio.com/terms" },
    robots: { index: false, follow: true },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
    return children;
}
