"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

type Props = {
    children: string;
    as?: "h1" | "h2" | "h3" | "span" | "p";
    className?: string;
    delayPerChar?: number;
};

export default function StaggerText({
    children,
    as = "h1",
    className = "",
    delayPerChar = 30,
}: Props) {
    const ref = useRef<HTMLElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.15 }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    const Tag = as as React.ElementType;

    return (
        <Tag
            ref={ref}
            className={`stagger-text ${visible ? "is-visible" : ""} ${className}`.trim()}
        >
            {children.split("").map((char, i) => (
                <span
                    key={i}
                    style={{
                        transitionDelay: visible ? `${i * delayPerChar}ms` : "0ms",
                    }}
                >
                    {char === " " ? " " : char}
                </span>
            ))}
        </Tag>
    );
}
