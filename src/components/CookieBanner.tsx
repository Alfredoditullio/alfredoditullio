"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "@/i18n/context";
import { cookieBanner as texts } from "@/i18n/translations/common";

const STORAGE_KEY = "adt_cookie_consent";
type Choice = "accepted" | "declined";

export default function CookieBanner() {
    const [visible, setVisible] = useState(false);
    const { t } = useLanguage();

    useEffect(() => {
        try {
            const saved = window.localStorage.getItem(STORAGE_KEY);
            if (!saved) {
                const timer = setTimeout(() => setVisible(true), 1800);
                return () => clearTimeout(timer);
            }
        } catch {
            setVisible(true);
        }
    }, []);

    const choose = (choice: Choice) => {
        try {
            window.localStorage.setItem(STORAGE_KEY, choice);
        } catch { /* ignore */ }
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
                    <p className="cookie-banner__title">{t(texts, "title")}</p>
                    <p className="cookie-banner__body">
                        {t(texts, "body")}{" "}
                        <Link href="/cookies">{t(texts, "policyLink")}</Link>{" "}
                        {t(texts, "forTheFullStory")}
                    </p>
                </div>
                <div className="cookie-banner__actions">
                    <button type="button" className="btn" onClick={() => choose("declined")}>
                        {t(texts, "decline")}
                    </button>
                    <button type="button" className="btn btn--primary" onClick={() => choose("accepted")}>
                        {t(texts, "accept")}
                    </button>
                </div>
            </div>
        </div>
    );
}
