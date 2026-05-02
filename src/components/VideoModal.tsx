"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type Props = {
    open: boolean;
    onClose: () => void;
    youtubeId: string;
    title?: string;
};

export default function VideoModal({ open, onClose, youtubeId, title }: Props) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    useEffect(() => {
        if (!open) return;
        document.body.style.overflow = "hidden";
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", onKey);
        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", onKey);
        };
    }, [open, onClose]);

    if (!mounted || !open) return null;

    return createPortal(
        <div className="video-modal" role="dialog" aria-modal="true" aria-label={title}>
            <div className="video-modal__overlay" onClick={onClose} />
            <div className="video-modal__content">
                <button
                    type="button"
                    className="video-modal__close"
                    onClick={onClose}
                    aria-label="Close video"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
                <div className="video-modal__frame-wrap">
                    <iframe
                        src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
                        title={title || "YouTube video"}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="video-modal__frame"
                    />
                </div>
            </div>
        </div>,
        document.body
    );
}
