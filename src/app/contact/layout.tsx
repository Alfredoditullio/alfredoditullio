import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact",
    description:
        "Get in touch with Alfredo Di Tullio — available for freelance web development, dental software consulting, and writing collaborations. Based in Barcelona, Spain.",
    alternates: { canonical: "https://www.alfredoditullio.com/contact" },
    openGraph: {
        title: "Contact Alfredo Di Tullio",
        description:
            "Available for freelance development, consulting and collaborations. Based in Barcelona.",
        url: "https://www.alfredoditullio.com/contact",
    },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return children;
}
