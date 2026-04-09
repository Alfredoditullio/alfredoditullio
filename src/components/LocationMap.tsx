"use client";

import { useState, useRef } from "react";
import {
    motion,
    AnimatePresence,
    useMotionValue,
    useTransform,
    useSpring,
} from "framer-motion";

type Props = {
    location?: string;
    address?: string;
    coordinates?: string;
};

export default function LocationMap({
    location = "Melbourne, Australia",
    address = "Melbourne CBD, VIC 3004",
    coordinates = "37.8136° S, 144.9631° E",
}: Props) {
    const [isHovered, setIsHovered] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const mx = useMotionValue(0);
    const my = useMotionValue(0);
    const rx = useSpring(useTransform(my, [-50, 50], [6, -6]), {
        stiffness: 300,
        damping: 30,
    });
    const ry = useSpring(useTransform(mx, [-50, 50], [-6, 6]), {
        stiffness: 300,
        damping: 30,
    });

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return;
        const r = ref.current.getBoundingClientRect();
        mx.set(e.clientX - r.left - r.width / 2);
        my.set(e.clientY - r.top - r.height / 2);
    };

    const handleMouseLeave = () => {
        mx.set(0);
        my.set(0);
        setIsHovered(false);
    };

    const c = {
        bg: "#ffffff",
        bgMuted: "#fafafa",
        border: "#ececf0",
        fg: "#0a0a0a",
        fgMuted: "#6b6b6b",
        accent: "#6366f1",
        accentGlow: "rgba(99, 102, 241, 0.5)",
        road: "rgba(10, 10, 40, 0.22)",
        roadSec: "rgba(10, 10, 40, 0.1)",
        building: "rgba(10, 10, 40, 0.18)",
    };

    return (
        <motion.div
            ref={ref}
            style={{ perspective: 900, cursor: "pointer", userSelect: "none" }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            onClick={() => setIsExpanded(!isExpanded)}
        >
            <motion.div
                style={{
                    rotateX: rx,
                    rotateY: ry,
                    transformStyle: "preserve-3d",
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: 16,
                    background: c.bg,
                    border: `1px solid ${c.border}`,
                    boxShadow: isHovered
                        ? `0 20px 40px -12px ${c.accentGlow}`
                        : "0 4px 16px -4px rgba(15,15,40,0.08)",
                }}
                animate={{
                    width: "100%",
                    height: isExpanded ? 340 : 180,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 35 }}
            >
                {/* Expanded — real map embed */}
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            style={{
                                position: "absolute",
                                inset: 0,
                                overflow: "hidden",
                                borderRadius: "inherit",
                            }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                        >
                            <iframe
                                title="Melbourne CBD Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093743!2d144.9559283!3d-37.8172099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce840!2sMelbourne%20VIC%203004!5e0!3m2!1sen!2sau!4v1700000000000"
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    width: "100%",
                                    height: "100%",
                                    border: 0,
                                    pointerEvents: "auto",
                                }}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Content */}
                <div
                    style={{
                        position: "relative",
                        zIndex: 10,
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        padding: "1.25rem",
                    }}
                >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                        <motion.svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke={c.accent}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            animate={{
                                filter: isHovered
                                    ? `drop-shadow(0 0 8px ${c.accentGlow})`
                                    : `drop-shadow(0 0 4px rgba(99,102,241,0.3))`,
                                opacity: isExpanded ? 0 : 1,
                            }}
                        >
                            <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
                            <line x1="9" x2="9" y1="3" y2="18" />
                            <line x1="15" x2="15" y1="6" y2="21" />
                        </motion.svg>
                        <motion.div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 6,
                                padding: "4px 10px",
                                borderRadius: 999,
                                background: "rgba(99,102,241,0.08)",
                                fontSize: "0.625rem",
                                fontWeight: 700,
                                letterSpacing: "0.1em",
                                textTransform: "uppercase" as const,
                                color: c.fgMuted,
                            }}
                            animate={{ scale: isHovered ? 1.05 : 1 }}
                        >
                            <div
                                style={{
                                    width: 6,
                                    height: 6,
                                    borderRadius: "50%",
                                    background: c.accent,
                                }}
                            />
                            Live
                        </motion.div>
                    </div>

                    <div>
                        <motion.h3
                            style={{
                                fontSize: "0.9375rem",
                                fontWeight: 600,
                                color: c.fg,
                                marginBottom: 3,
                            }}
                            animate={{ x: isHovered ? 4 : 0 }}
                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        >
                            {location}
                        </motion.h3>
                        <p style={{
                            color: c.fgMuted,
                            fontSize: "0.8125rem",
                            marginBottom: 4,
                        }}>
                            {address}
                        </p>
                        <AnimatePresence>
                            {isExpanded && (
                                <motion.p
                                    style={{
                                        color: c.fgMuted,
                                        fontSize: "0.7rem",
                                        fontFamily: "monospace",
                                        marginBottom: 6,
                                    }}
                                    initial={{ opacity: 0, y: -10, height: 0 }}
                                    animate={{ opacity: 1, y: 0, height: "auto" }}
                                    exit={{ opacity: 0, y: -10, height: 0 }}
                                    transition={{ duration: 0.25 }}
                                >
                                    {coordinates}
                                </motion.p>
                            )}
                        </AnimatePresence>
                        <motion.div
                            style={{
                                height: 1,
                                background: `linear-gradient(to right, ${c.accent}, rgba(99,102,241,0.3), transparent)`,
                                transformOrigin: "left",
                            }}
                            animate={{
                                scaleX: isHovered || isExpanded ? 1 : 0.3,
                            }}
                            transition={{ duration: 0.4 }}
                        />
                    </div>
                </div>
            </motion.div>

            {/* Click hint */}
            <motion.p
                style={{
                    position: "absolute",
                    bottom: -22,
                    left: "50%",
                    transform: "translateX(-50%)",
                    fontSize: "0.625rem",
                    color: c.fgMuted,
                    whiteSpace: "nowrap",
                }}
                animate={{
                    opacity: isHovered && !isExpanded ? 1 : 0,
                    y: isHovered ? 0 : 4,
                }}
                transition={{ duration: 0.2 }}
            >
                Click to expand
            </motion.p>
        </motion.div>
    );
}
