"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Slide = {
    src: string;
    alt: string;
    label: string;
};

type Props = {
    slides: Slide[];
    interval?: number;
};

export default function PhotoCarousel({ slides, interval = 4000 }: Props) {
    const [current, setCurrent] = useState(0);
    const [paused, setPaused] = useState(false);

    const next = useCallback(() => {
        setCurrent((c) => (c + 1) % slides.length);
    }, [slides.length]);

    useEffect(() => {
        if (paused) return;
        const t = setInterval(next, interval);
        return () => clearInterval(t);
    }, [paused, next, interval]);

    return (
        <div
            className="carousel"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <div className="carousel__viewport">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        className="carousel__slide"
                        initial={{ opacity: 0, scale: 1.08, filter: "blur(6px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                        transition={{ duration: 0.6, ease: [0.22, 0.9, 0.3, 1] }}
                    >
                        <img
                            src={slides[current].src}
                            alt={slides[current].alt}
                            className="carousel__image"
                        />
                        <div className="carousel__label-wrap">
                            <span className="carousel__label">
                                {slides[current].label}
                            </span>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Dots */}
            <div className="carousel__dots">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        type="button"
                        className={`carousel__dot ${i === current ? "carousel__dot--active" : ""}`}
                        onClick={() => setCurrent(i)}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
