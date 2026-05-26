import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "Privacy policy for alfredoditullio.com — how we handle your data.",
    alternates: { canonical: "https://www.alfredoditullio.com/privacy" },
    robots: { index: false, follow: true },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
    return children;
}
