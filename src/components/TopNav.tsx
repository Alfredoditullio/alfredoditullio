"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Logo from "./Logo";
import { useLanguage } from "@/i18n/context";
import { localizedPath, stripLocale } from "@/i18n/routing";
import { nav } from "@/i18n/translations/common";

const links = [
    { href: "/about", key: "about" },
    { href: "/projects", key: "projects" },
    { href: "/books", key: "books" },
    { href: "/contact", key: "contact" },
];

function MobileMenu({
    isActive,
    onClose,
    t,
    locale,
    toggleLocale,
    href,
}: {
    isActive: (href: string) => boolean;
    onClose: () => void;
    t: (dict: Record<string, Record<string, string>>, key: string) => string;
    locale: string;
    toggleLocale: () => void;
    href: (bare: string) => string;
}) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return createPortal(
        <div className="mobile-menu">
            <ul className="mobile-menu__links">
                {links.map((link) => (
                    <li key={link.href}>
                        <Link
                            href={href(link.href)}
                            className={`mobile-menu__link ${isActive(link.href) ? "mobile-menu__link--active" : ""}`}
                            onClick={onClose}
                        >
                            {t(nav, link.key)}
                        </Link>
                    </li>
                ))}
                <li>
                    <button
                        type="button"
                        className="mobile-menu__link mobile-menu__lang"
                        onClick={() => {
                            toggleLocale();
                            onClose();
                        }}
                    >
                        {locale === "en" ? "🇪🇸 Español" : "🇬🇧 English"}
                    </button>
                </li>
            </ul>
        </div>,
        document.body
    );
}

export default function TopNav() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const { locale, setLocale, t } = useLanguage();

    useEffect(() => setOpen(false), [pathname]);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    const bare = stripLocale(pathname ?? "/");
    const href = (barePath: string) => localizedPath(barePath, locale);

    const isActive = (target: string) => {
        if (target === "/") return bare === "/";
        return bare === target || bare.startsWith(target + "/");
    };

    const toggleLocale = () => setLocale(locale === "en" ? "es" : "en");

    return (
        <>
            <nav className="topnav">
                <div className="container topnav__inner">
                    <Link href={href("/")} className="topnav__brand">
                        <Logo
                            size={28}
                            idSuffix="-nav"
                            className="topnav__brand-mark"
                        />
                        Alfredo Di Tullio
                    </Link>

                    <ul className="topnav__links topnav__links--desktop">
                        {links.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={href(link.href)}
                                    className={`topnav__link ${isActive(link.href) ? "topnav__link--active" : ""}`}
                                >
                                    {t(nav, link.key)}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <button
                                type="button"
                                className="topnav__lang"
                                onClick={toggleLocale}
                                aria-label="Switch language"
                            >
                                {locale === "en" ? "ES" : "EN"}
                            </button>
                        </li>
                    </ul>

                    <button
                        type="button"
                        className="topnav__burger"
                        onClick={() => setOpen(!open)}
                        aria-label={open ? "Close menu" : "Open menu"}
                        aria-expanded={open}
                    >
                        <span
                            className={`topnav__burger-line ${open ? "topnav__burger-line--open" : ""}`}
                        />
                        <span
                            className={`topnav__burger-line ${open ? "topnav__burger-line--open" : ""}`}
                        />
                        <span
                            className={`topnav__burger-line ${open ? "topnav__burger-line--open" : ""}`}
                        />
                    </button>
                </div>
            </nav>

            {open && (
                <MobileMenu
                    isActive={isActive}
                    onClose={() => setOpen(false)}
                    t={t}
                    locale={locale}
                    toggleLocale={toggleLocale}
                    href={href}
                />
            )}
        </>
    );
}
