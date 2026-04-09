"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Logo from "./Logo";

const links = [
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/books", label: "Books" },
    { href: "/contact", label: "Contact" },
];

function MobileMenu({
    isActive,
    onClose,
}: {
    isActive: (href: string) => boolean;
    onClose: () => void;
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
                            href={link.href}
                            className={`mobile-menu__link ${isActive(link.href) ? "mobile-menu__link--active" : ""}`}
                            onClick={onClose}
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>,
        document.body
    );
}

export default function TopNav() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    useEffect(() => setOpen(false), [pathname]);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/";
        return pathname === href || pathname?.startsWith(href + "/");
    };

    return (
        <>
            <nav className="topnav">
                <div className="container topnav__inner">
                    <Link href="/" className="topnav__brand">
                        <Logo size={28} idSuffix="-nav" className="topnav__brand-mark" />
                        Alfredo Di Tullio
                    </Link>

                    <ul className="topnav__links topnav__links--desktop">
                        {links.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={`topnav__link ${isActive(link.href) ? "topnav__link--active" : ""}`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <button
                        type="button"
                        className="topnav__burger"
                        onClick={() => setOpen(!open)}
                        aria-label={open ? "Close menu" : "Open menu"}
                        aria-expanded={open}
                    >
                        <span className={`topnav__burger-line ${open ? "topnav__burger-line--open" : ""}`} />
                        <span className={`topnav__burger-line ${open ? "topnav__burger-line--open" : ""}`} />
                        <span className={`topnav__burger-line ${open ? "topnav__burger-line--open" : ""}`} />
                    </button>
                </div>
            </nav>

            {open && <MobileMenu isActive={isActive} onClose={() => setOpen(false)} />}
        </>
    );
}
