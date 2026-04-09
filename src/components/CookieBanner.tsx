"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "adt_cookie_consent";

type Choice = "accepted" | "declined";

export default function CookieBanner() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;
        try {
            const saved = window.localStorage.getItem(STORAGE_KEY);
            if (!saved) {
                // Tiny delay so the banner doesn't fight the intro animation
                const t = window.setTimeout(() => setVisible(true), 1800);
                return () => window.clearTimeout(t);
            }
        } catch {
            setVisible(true);
        }
    }, []);

    const choose = (choice: Choice) => {
        try {
            window.localStorage.setItem(STORAGE_KEY, choice);
        } catch {
            /* ignore */
        }
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="cookie-banner" role="dialog" aria-live="polite">
            <div className="cookie-banner__inner">
                <div className="cookie-banner__icon" aria-hidden="true">
                    <i className="fa-solid fa-cookie-bite"></i>
                </div>
                <div className="cookie-banner__text">
                    <p className="cookie-banner__title">A quick note about cookies</p>
                    <p className="cookie-banner__body">
                        This site uses only the bare minimum cookies needed for it to
                        work. No analytics, no tracking, no ads. Read the{" "}
                        <Link href="/cookies">Cookie Policy</Link> for the full story.
                    </p>
                </div>
                <div className="cookie-banner__actions">
                    <button
                        type="button"
                        className="btn"
                        onClick={() => choose("declined")}
                    >
                        Decline
                    </button>
                    <button
                        type="button"
                        className="btn btn--primary"
                        onClick={() => choose("accepted")}
                    >
                        Accept
                    </button>
                </div>
            </div>
        </div>
    );
}
