import type { Metadata } from "next";
import TopNav from "@/components/TopNav";
import IntroAnimation from "@/components/IntroAnimation";
import CookieBanner from "@/components/CookieBanner";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
    title: "Alfredo Di Tullio — Portfolio",
    description:
        "Dentist, developer and writer. Building DentalCore, a comprehensive clinical platform for dentistry.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="stylesheet"
                    href="/assets/fonts/fontawesome-free-6.1.2-web/css/all.min.css"
                />
                <link rel="stylesheet" href="/assets/fonts/poppins/poppins.css" />
            </head>
            <body>
                <div className="bg-fx" aria-hidden="true">
                    <div className="bg-fx__blob bg-fx__blob--indigo"></div>
                    <div className="bg-fx__blob bg-fx__blob--violet"></div>
                    <div className="bg-fx__blob bg-fx__blob--pink"></div>
                </div>
                <IntroAnimation />
                <TopNav />
                <main>{children}</main>
                <footer className="footer">
                    <div className="container footer__inner">
                        <div className="footer__legal">
                            <span>© {new Date().getFullYear()} Alfredo Di Tullio</span>
                            <nav className="footer__links" aria-label="Legal">
                                <Link href="/privacy">Privacy</Link>
                                <Link href="/terms">Terms</Link>
                                <Link href="/cookies">Cookies</Link>
                            </nav>
                        </div>
                        <div className="footer__socials">
                            <a
                                href="https://www.linkedin.com/in/alfredo-di-tullio/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn"
                            >
                                <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                            <a
                                href="https://www.instagram.com/alfred.ditu"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Instagram"
                            >
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                            <a
                                href="https://www.facebook.com/alfreditullio"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Facebook"
                            >
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>
                            <Link href="/contact" aria-label="Contact">
                                <i className="fa-solid fa-envelope"></i>
                            </Link>
                        </div>
                    </div>
                </footer>
                <CookieBanner />
            </body>
        </html>
    );
}
