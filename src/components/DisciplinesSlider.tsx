"use client";

import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Discipline = {
    id: string;
    badge: string;
    title: string;
    description: string;
    icon: string;
    meta: string;
    accent: string;
};

const disciplines: Discipline[] = [
    {
        id: "dentistry",
        badge: "Healthcare",
        title: "Dentistry",
        description:
            "Practicing dentist trained at the National University of La Plata. Years of clinical experience inform every product decision when I build software for the dental world.",
        icon: "fa-solid fa-tooth",
        meta: "UNLP · 2013",
        accent:
            "linear-gradient(135deg, #6366f1 0%, #818cf8 60%, #c7d2fe 100%)",
    },
    {
        id: "software",
        badge: "Engineering",
        title: "Software development",
        description:
            "Full-stack engineering with React, TypeScript, Supabase and modern tooling. Focused on shipping robust, well-architected products that solve real-world problems.",
        icon: "fa-solid fa-code",
        meta: "Self-taught · since 2020",
        accent:
            "linear-gradient(135deg, #4f46e5 0%, #7c3aed 60%, #a78bfa 100%)",
    },
    {
        id: "writing",
        badge: "Words",
        title: "Writing & philosophy",
        description:
            "B.A. in Philosophy and author of two books — En búsqueda del sentido (2023) and Horizontes Infinitos (2025). I write about meaning, travel and how we make sense of our lives.",
        icon: "fa-solid fa-feather-pointed",
        meta: "Universidad TECH · 2023",
        accent:
            "linear-gradient(135deg, #8b5cf6 0%, #a855f7 50%, #d8b4fe 100%)",
    },
    {
        id: "tourism",
        badge: "Voyage",
        title: "Travel & tourism",
        description:
            "University Technician in Tourism — I understand the industry from the inside thanks to my formal training. Years of traveling across Europe, Asia and Oceania add the lived experience that shapes how I write and build.",
        icon: "fa-solid fa-compass",
        meta: "UNTREF · 2024",
        accent:
            "linear-gradient(135deg, #ec4899 0%, #f472b6 50%, #fbcfe8 100%)",
    },
    {
        id: "gastronomy",
        badge: "Craft",
        title: "Gastronomy & cooking",
        description:
            "International Chef Diploma. Six years cooking professionally in Denmark, Norway, Spain and Australia, including a stint at a Michelin-starred kitchen. Cooking taught me discipline, craft and how to ship under pressure.",
        icon: "fa-solid fa-utensils",
        meta: "IGA · 2018",
        accent:
            "linear-gradient(135deg, #f97316 0%, #fb923c 50%, #fed7aa 100%)",
    },
];

export default function DisciplinesSlider() {
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
            direction === "left" ? currentX + scrollAmount : currentX - scrollAmount;
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
                <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
            </button>
            <button
                type="button"
                onClick={() => scrollTo("right")}
                className="slider__nav slider__nav--right"
                aria-label="Scroll right"
            >
                <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
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
                                <span className="slider__badge">{d.badge}</span>
                                <i
                                    className={`${d.icon} slider__card-icon`}
                                    aria-hidden="true"
                                ></i>
                            </div>
                            <div className="slider__card-body">
                                <h3 className="slider__card-title">{d.title}</h3>
                                <p className="slider__card-text">{d.description}</p>
                                <div className="slider__card-meta">
                                    <span className="slider__meta-label">{d.meta}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
}
