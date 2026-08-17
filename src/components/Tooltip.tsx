"use client";

import { useState, useRef, useCallback, ReactNode } from "react";

type Props = {
    children: ReactNode;
    content: string;
};

export default function Tooltip({ children, content }: Props) {
    const [coords, setCoords] = useState<{ x: number; y: number } | null>(null);
    const triggerRef = useRef<HTMLSpanElement>(null);
    const tooltipRef = useRef<HTMLSpanElement>(null);

    const show = useCallback(() => {
        if (!triggerRef.current) return;
        // We set coords to {0,0} first to render the tooltip, then measure
        setCoords({ x: 0, y: 0 });
    }, []);

    const hide = useCallback(() => {
        setCoords(null);
    }, []);

    const measureAndPosition = useCallback((el: HTMLSpanElement | null) => {
        tooltipRef.current = el;
        if (!el || !triggerRef.current) return;

        const tr = triggerRef.current.getBoundingClientRect();
        const tt = el.getBoundingClientRect();

        let x = tr.right + 8;
        let y = tr.top + tr.height / 2 - tt.height / 2;

        if (x + tt.width > window.innerWidth - 12) {
            x = tr.left - tt.width - 8;
        }
        if (y < 8) y = 8;
        if (y + tt.height > window.innerHeight - 8) {
            y = window.innerHeight - tt.height - 8;
        }

        setCoords({ x, y });
    }, []);

    return (
        <>
            <span
                ref={triggerRef}
                className="tooltip-trigger"
                onMouseEnter={show}
                onMouseLeave={hide}
            >
                {children}
            </span>
            {coords && (
                <span
                    ref={measureAndPosition}
                    className="tooltip"
                    style={{
                        position: "fixed",
                        left: `${coords.x}px`,
                        top: `${coords.y}px`,
                    }}
                    role="tooltip"
                >
                    {content}
                </span>
            )}
        </>
    );
}
