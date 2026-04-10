"use client";

import { useLanguage, type Locale } from "@/i18n/context";
import { languagePopup } from "@/i18n/translations/common";

export default function LanguagePopup() {
    const { t, setLocale, showPopup, dismissPopup } = useLanguage();

    if (!showPopup) return null;

    const choose = (l: Locale) => {
        setLocale(l);
        dismissPopup();
    };

    return (
        <div className="lang-popup" role="dialog" aria-modal="true">
            <div className="lang-popup__overlay" onClick={dismissPopup} />
            <div className="lang-popup__card">
                <div className="lang-popup__icon">
                    <i className="fa-solid fa-globe"></i>
                </div>
                <h2 className="lang-popup__title">
                    {t(languagePopup, "title")}
                </h2>
                <p className="lang-popup__subtitle">
                    {t(languagePopup, "subtitle")}
                </p>
                <div className="lang-popup__buttons">
                    <button
                        type="button"
                        className="lang-popup__btn"
                        onClick={() => choose("en")}
                    >
                        <span className="lang-popup__flag">🇬🇧</span>
                        English
                    </button>
                    <button
                        type="button"
                        className="lang-popup__btn"
                        onClick={() => choose("es")}
                    >
                        <span className="lang-popup__flag">🇪🇸</span>
                        Español
                    </button>
                </div>
            </div>
        </div>
    );
}
