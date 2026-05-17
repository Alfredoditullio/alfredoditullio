"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
    { id: "hero", label: "Hero" },
    { id: "what-i-do", label: "What I do" },
    { id: "featured", label: "Featured" },
    { id: "press", label: "Press" },
];

export default function ScrollProgress() {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const sections = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
        if (sections.length === 0) return;

        const onScroll = () => {
            const scrollY = window.scrollY + window.innerHeight / 3;
            let current = 0;
            for (let i = 0; i < sections.length; i++) {
                if (scrollY >= sections[i].offsetTop) {
                    current = i;
                }
            }
            setActive(current);
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <nav className="scroll-progress" aria-label="Page sections">
            {SECTIONS.map((s, i) => (
                <button
                    key={s.id}
                    className={`scroll-progress__dot${i === active ? " is-active" : ""}`}
                    onClick={() => scrollTo(s.id)}
                    aria-label={s.label}
                    title={s.label}
                />
            ))}
        </nav>
    );
}
