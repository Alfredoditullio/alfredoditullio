import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cookie Policy",
    description: "Cookie policy for alfredoditullio.com.",
    alternates: { canonical: "https://www.alfredoditullio.com/cookies" },
    robots: { index: false, follow: true },
};

export default function CookiesLayout({ children }: { children: React.ReactNode }) {
    return children;
}
