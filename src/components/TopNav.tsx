"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Logo from "./Logo";

const links = [
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/books", label: "Books" },
    { href: "/contact", label: "Contact" },
];

export default function TopNav() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    // Close menu on route change
    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    // Prevent body scroll when menu is open
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
        <nav className="topnav">
            <div className="container topnav__inner">
                <Link href="/" className="topnav__brand">
                    <Logo size={28} idSuffix="-nav" className="topnav__brand-mark" />
                    Alfredo Di Tullio
                </Link>

                {/* Desktop links */}
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

                {/* Hamburger button (mobile only) */}
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

            {/* Mobile menu overlay */}
            {open && (
                <div className="topnav__mobile">
                    <ul className="topnav__mobile-links">
                        {links.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={`topnav__mobile-link ${isActive(link.href) ? "topnav__mobile-link--active" : ""}`}
                                    onClick={() => setOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}
