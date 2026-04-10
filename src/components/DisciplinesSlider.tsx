"use client";

import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/i18n/context";
import { disciplines } from "@/i18n/translations/disciplines";

export default function DisciplinesSlider() {
    const { locale } = useLanguage();
    const containerRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);
    const x = useMotionValue(0);

    useEffect(() => {
        const measure = () => {
            if (containerRef.current) {
                setWidth(
                    containerRef.current.scrollWidth -
                        containerRef.current.offsetWidth
                );
            }
        };
        measure();
        window.addEventListener("resize", measure);
        return () => window.removeEventListener("resize", measure);
    }, []);

    const scrollTo = (direction: "left" | "right") => {
        const currentX = x.get();
        const containerWidth = containerRef.current?.offsetWidth || 0;
        const scrollAmount = containerWidth * 0.8;
        let newX =
            direction === "left"
                ? currentX + scrollAmount
                : currentX - scrollAmount;
        newX = Math.max(Math.min(newX, 0), -width);
        animate(x, newX, {
            type: "spring",
            stiffness: 300,
            damping: 30,
            mass: 1,
        });
    };

    return (
        <div className="slider">
            <button
                type="button"
                onClick={() => scrollTo("left")}
                className="slider__nav slider__nav--left"
                aria-label="Scroll left"
            >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
            <button
                type="button"
                onClick={() => scrollTo("right")}
                className="slider__nav slider__nav--right"
                aria-label="Scroll right"
            >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>

            <motion.div
                ref={containerRef}
                className="slider__viewport"
                whileTap={{ cursor: "grabbing" }}
            >
                <motion.div
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    dragElastic={0.1}
                    style={{ x }}
                    className="slider__track"
                >
                    {disciplines.map((d) => (
                        <motion.div
                            key={d.id}
                            className="slider__card"
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div
                                className="slider__card-header"
                                style={{ background: d.accent }}
                            >
                                <span className="slider__badge">
                                    {d.badge[locale]}
                                </span>
                                <i
                                    className={`${d.icon} slider__card-icon`}
                                    aria-hidden="true"
                                ></i>
                            </div>
                            <div className="slider__card-body">
                                <h3 className="slider__card-title">
                                    {d.title[locale]}
                                </h3>
                                <p className="slider__card-text">
                                    {d.description[locale]}
                                </p>
                                <div className="slider__card-meta">
                                    <span className="slider__meta-label">
                                        {d.meta}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
}
