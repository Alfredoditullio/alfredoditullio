"use client";

import { useRef, useState, ReactNode, MouseEvent } from "react";

type Props = {
    children: ReactNode;
    className?: string;
};

export default function TiltCard({ children, className = "" }: Props) {
    const ref = useRef<HTMLDivElement>(null);
    const [style, setStyle] = useState<React.CSSProperties>({});
    const [glare, setGlare] = useState<React.CSSProperties>({});

    const handleMove = (e: MouseEvent<HTMLDivElement>) => {
        const el = ref.current;
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width; // 0‒1
        const y = (e.clientY - rect.top) / rect.height; // 0‒1

        const tiltX = (y - 0.5) * -18; // degrees
        const tiltY = (x - 0.5) * 18;

        setStyle({
            transform: `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.04, 1.04, 1.04)`,
            transition: "transform 120ms ease-out",
        });

        setGlare({
            opacity: 0.28,
            background: `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(255,255,255,0.55), transparent 65%)`,
        });
    };

    const handleLeave = () => {
        setStyle({
            transform: "perspective(700px) rotateX(0) rotateY(0) scale3d(1,1,1)",
            transition: "transform 500ms cubic-bezier(0.22, 0.9, 0.3, 1)",
        });
        setGlare({ opacity: 0 });
    };

    return (
        <div
            ref={ref}
            className={`tilt-card ${className}`}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            style={style}
        >
            {children}
            <div className="tilt-card__glare" style={glare} aria-hidden="true" />
        </div>
    );
}
