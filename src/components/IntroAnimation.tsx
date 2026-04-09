"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";

const ROWS = 4;
const COLS = 4;
const SHARDS = ROWS * COLS;
const STORAGE_KEY = "adt_intro_shown";

type Phase = "zoom" | "shatter" | "done";

export default function IntroAnimation() {
    const [phase, setPhase] = useState<Phase | null>(null);

    useEffect(() => {
        // Skip if user has already seen it this session
        if (typeof window === "undefined") return;

        const seen = sessionStorage.getItem(STORAGE_KEY);
        if (seen) {
            setPhase("done");
            return;
        }

        // Respect reduced motion
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduced) {
            sessionStorage.setItem(STORAGE_KEY, "1");
            setPhase("done");
            return;
        }

        setPhase("zoom");

        const t1 = window.setTimeout(() => setPhase("shatter"), 1100);
        const t2 = window.setTimeout(() => {
            setPhase("done");
            sessionStorage.setItem(STORAGE_KEY, "1");
        }, 2050);

        return () => {
            window.clearTimeout(t1);
            window.clearTimeout(t2);
        };
    }, []);

    if (phase === null || phase === "done") return null;

    // Build shards: each is a 25%×25% slice of the same logo,
    // positioned over the center, flying outward radially.
    const shards = Array.from({ length: SHARDS }).map((_, i) => {
        const r = Math.floor(i / COLS);
        const c = i % COLS;

        // Inset cuts: top right bottom left in %
        const top = r * (100 / ROWS);
        const right = (COLS - 1 - c) * (100 / COLS);
        const bottom = (ROWS - 1 - r) * (100 / ROWS);
        const left = c * (100 / COLS);

        // Direction from center
        const dx = c - (COLS - 1) / 2; // -1.5..1.5
        const dy = r - (ROWS - 1) / 2;
        const dist = 280; // fly distance in px
        const tx = `${(dx * dist) / 1.5}px`;
        const ty = `${(dy * dist) / 1.5 - 60}px`; // slight upward bias
        const rot = `${(dx + dy) * 35 + (i % 2 === 0 ? 18 : -22)}deg`;

        return (
            <div
                key={i}
                className="intro__shard"
                style={
                    {
                        clipPath: `inset(${top}% ${right}% ${bottom}% ${left}%)`,
                        WebkitClipPath: `inset(${top}% ${right}% ${bottom}% ${left}%)`,
                        // CSS custom props consumed by the keyframes
                        ["--tx" as string]: tx,
                        ["--ty" as string]: ty,
                        ["--tr" as string]: rot,
                        ["--delay" as string]: `${(i % 5) * 25}ms`,
                    } as React.CSSProperties
                }
            >
                <Logo size={240} idSuffix={`-shard-${i}`} />
            </div>
        );
    });

    return (
        <div
            className={`intro intro--${phase}`}
            aria-hidden="true"
            data-phase={phase}
        >
            <div className="intro__stage">
                {phase === "zoom" && (
                    <div className="intro__logo">
                        <Logo size={240} idSuffix="-main" />
                    </div>
                )}
                {phase === "shatter" && shards}
            </div>
        </div>
    );
}
