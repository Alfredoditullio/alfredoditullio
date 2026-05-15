"use client";

import { useRef, useState, MouseEvent } from "react";
import Link from "next/link";

type Chip = { icon: string; label: string };

type Props = {
    photoSrc: string;
    photoAlt: string;
    name: string;
    role: string;
    chips: Chip[];
    ctaLabel: string;
    ctaHref: string;
};

export default function HeroCard({
    photoSrc,
    photoAlt,
    name,
    role,
    chips,
    ctaLabel,
    ctaHref,
}: Props) {
    const ref = useRef<HTMLDivElement>(null);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

    const handleMove = (e: MouseEvent<HTMLDivElement>) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width; // 0..1
        const y = (e.clientY - r.top) / r.height; // 0..1
        const tiltX = (y - 0.5) * -14; // deg
        const tiltY = (x - 0.5) * 14;
        setTilt({ x: tiltX, y: tiltY });
        setGlare({ x: x * 100, y: y * 100, opacity: 0.6 });
    };

    const handleLeave = () => {
        setTilt({ x: 0, y: 0 });
        setGlare({ x: 50, y: 50, opacity: 0 });
    };

    return (
        <div
            className="hero-card"
            ref={ref}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            style={{
                transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            }}
        >
            <div className="hero-card__photo-wrap">
                <img
                    src={photoSrc}
                    alt={photoAlt}
                    className="hero-card__photo"
                />
            </div>

            <article className="hero-card__body">
                <div className="hero-card__info">
                    <p className="hero-card__name">{name}</p>
                    <p className="hero-card__role">{role}</p>
                    <div className="hero-card__chips">
                        {chips.map((chip) => (
                            <span key={chip.label} className="hero-card__chip">
                                <i className={chip.icon}></i> {chip.label}
                            </span>
                        ))}
                    </div>
                </div>
                <Link href={ctaHref} className="hero-card__cta">
                    {ctaLabel}
                    <i className="fa-solid fa-arrow-right"></i>
                </Link>
            </article>

            <div
                className="hero-card__glare"
                style={{
                    background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.25) 25%, transparent 60%)`,
                    opacity: glare.opacity,
                }}
                aria-hidden="true"
            />
        </div>
    );
}
