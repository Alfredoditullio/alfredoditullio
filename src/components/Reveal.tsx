"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

type Props = {
    children: ReactNode;
    delay?: 0 | 1 | 2 | 3 | 4;
    as?: "div" | "section" | "article" | "header" | "aside";
    className?: string;
};

export default function Reveal({
    children,
    delay = 0,
    as = "div",
    className = "",
}: Props) {
    const ref = useRef<HTMLDivElement>(null);
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

    const Tag = as as "div";
    const classes = `reveal ${visible ? "is-visible" : ""} ${className}`.trim();

    return (
        <Tag
            ref={ref as React.Ref<HTMLDivElement>}
            className={classes}
            data-delay={delay || undefined}
        >
            {children}
        </Tag>
    );
}
