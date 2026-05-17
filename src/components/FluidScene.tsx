"use client";

import { useEffect, useRef } from "react";

interface Trail {
    x: number;
    y: number;
    vx: number;
    vy: number;
    age: number;
    maxAge: number;
    radius: number;
    hue: number;
}

export default function FluidScene() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const trails = useRef<Trail[]>([]);
    const pointer = useRef({ x: -100, y: -100, px: -100, py: -100 });
    const raf = useRef(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d", { alpha: true })!;
        const brandHues = [245, 255, 270, 290, 330];

        const resize = () => {
            const dpr = Math.min(window.devicePixelRatio, 2);
            canvas.width = canvas.clientWidth * dpr;
            canvas.height = canvas.clientHeight * dpr;
            ctx.scale(dpr, dpr);
        };
        resize();
        window.addEventListener("resize", resize);

        const onMove = (e: PointerEvent) => {
            pointer.current.px = pointer.current.x;
            pointer.current.py = pointer.current.y;
            pointer.current.x = e.clientX;
            pointer.current.y = e.clientY;

            const dx = pointer.current.x - pointer.current.px;
            const dy = pointer.current.y - pointer.current.py;
            const speed = Math.sqrt(dx * dx + dy * dy);

            if (speed > 2) {
                const count = Math.min(Math.floor(speed / 4), 5);
                for (let i = 0; i < count; i++) {
                    trails.current.push({
                        x: pointer.current.x + (Math.random() - 0.5) * 20,
                        y: pointer.current.y + (Math.random() - 0.5) * 20,
                        vx: dx * 0.15 + (Math.random() - 0.5) * 2,
                        vy: dy * 0.15 + (Math.random() - 0.5) * 2,
                        age: 0,
                        maxAge: 60 + Math.random() * 80,
                        radius: 30 + Math.random() * 60 + speed * 0.8,
                        hue: brandHues[Math.floor(Math.random() * brandHues.length)],
                    });
                }
            }
        };

        window.addEventListener("pointermove", onMove);

        const animate = () => {
            const w = canvas.clientWidth;
            const h = canvas.clientHeight;

            ctx.clearRect(0, 0, w, h);

            for (let i = trails.current.length - 1; i >= 0; i--) {
                const t = trails.current[i];
                t.age++;
                t.x += t.vx;
                t.y += t.vy;
                t.vx *= 0.96;
                t.vy *= 0.96;

                if (t.age > t.maxAge) {
                    trails.current.splice(i, 1);
                    continue;
                }

                const life = 1 - t.age / t.maxAge;
                const alpha = life * life * 0.12;
                const radius = t.radius * (0.5 + life * 0.5);

                const gradient = ctx.createRadialGradient(
                    t.x, t.y, 0,
                    t.x, t.y, radius
                );
                gradient.addColorStop(0, `hsla(${t.hue}, 80%, 60%, ${alpha})`);
                gradient.addColorStop(0.4, `hsla(${t.hue}, 75%, 55%, ${alpha * 0.6})`);
                gradient.addColorStop(1, `hsla(${t.hue}, 70%, 50%, 0)`);

                ctx.beginPath();
                ctx.arc(t.x, t.y, radius, 0, Math.PI * 2);
                ctx.fillStyle = gradient;
                ctx.fill();
            }

            if (trails.current.length > 150) {
                trails.current.splice(0, trails.current.length - 150);
            }

            raf.current = requestAnimationFrame(animate);
        };

        raf.current = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(raf.current);
            window.removeEventListener("resize", resize);
            window.removeEventListener("pointermove", onMove);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{ width: "100%", height: "100%", display: "block" }}
        />
    );
}
