"use client";

import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/i18n/context";
import { disciplines } from "@/i18n/translations/disciplines";

export default function DisciplinesSlider() {
    const { locale } = useLanguage();
    const trackRef = useRef<HTMLDivElement>(null);
    const [trackWidth, setTrackWidth] = useState(0);
    const x = useMotionValue(0);
    const [paused, setPaused] = useState(false);
    const speed = 0.5; // px per frame

    // Duplicate items for seamless loop
    const items = [...disciplines, ...disciplines];

    useEffect(() => {
        const measure = () => {
            if (trackRef.current) {
                // Half the track = one full set of cards
                setTrackWidth(trackRef.current.scrollWidth / 2);
            }
        };
        measure();
        window.addEventListener("resize", measure);
        return () => window.removeEventListener("resize", measure);
    }, []);

    useAnimationFrame(() => {
        if (paused || trackWidth === 0) return;
        let newX = x.get() - speed;
        // When we've scrolled one full set, reset to 0
        if (Math.abs(newX) >= trackWidth) {
            newX = 0;
        }
        x.set(newX);
    });

    return (
        <div
            className="slider"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <motion.div className="slider__viewport">
                <motion.div
                    ref={trackRef}
                    drag="x"
                    dragConstraints={{ right: 0, left: -(trackWidth || 0) }}
                    dragElastic={0.1}
                    onDragStart={() => setPaused(true)}
                    onDragEnd={() => setPaused(false)}
                    style={{ x }}
                    className="slider__track"
                >
                    {items.map((d, idx) => (
                        <motion.div
                            key={`${d.id}-${idx}`}
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
