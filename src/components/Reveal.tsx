"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

type Variant = "default" | "blur" | "left" | "right" | "scale";

type Props = {
    children?: ReactNode;
    delay?: 0 | 1 | 2 | 3 | 4;
    as?: "div" | "section" | "article" | "header" | "aside" | "hr";
    className?: string;
    variant?: Variant;
    id?: string;
    /** For stagger-text: wraps each character in a span with staggered delay */
    stagger?: boolean;
};

const variantClass: Record<Variant, string> = {
    default: "reveal",
    blur: "reveal reveal--blur",
    left: "reveal reveal--left",
    right: "reveal reveal--right",
    scale: "reveal reveal--scale",
};

export default function Reveal({
    children,
    delay = 0,
    as = "div",
    className = "",
    variant = "default",
    id,
    stagger = false,
}: Props) {
    const ref = useRef<HTMLElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        if (typeof IntersectionObserver === "undefined") {
            setVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisible(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    const Tag = as as React.ElementType;
    const base = variantClass[variant];
    const staggerClass = stagger ? " stagger-text" : "";
    const classes = `${base}${staggerClass} ${visible ? "is-visible" : ""} ${className}`.trim();

    return (
        <Tag
            ref={ref}
            className={classes}
            data-delay={delay || undefined}
            id={id}
        >
            {children}
        </Tag>
    );
}
