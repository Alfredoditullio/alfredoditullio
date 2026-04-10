"use client";

import Reveal from "@/components/Reveal";
import { useLanguage } from "@/i18n/context";
import { cookiesTexts as tx, privacyTexts } from "@/i18n/translations/legal";

export default function Cookies() {
    const { t } = useLanguage();
    return (
        <div className="container page">
            <Reveal as="section" className="hero">
                <span className="hero__eyebrow">{t(privacyTexts, "eyebrow")}</span>
                <h1 className="hero__title">{t(tx, "title")}</h1>
                <p className="hero__tagline">{t(tx, "subtitle")}</p>
            </Reveal>
            <article className="legal">
                <Reveal><h2>{t(tx, "h1")}</h2><p>{t(tx, "p1")}</p></Reveal>
                <Reveal><h2>{t(tx, "h2")}</h2><p>{t(tx, "p2")}</p></Reveal>
                <Reveal>
                    <h2>{t(tx, "h3")}</h2>
                    <ul>
                        <li><strong>Strictly necessary</strong> — {t(tx, "strictly")}</li>
                        <li><strong>Analytics</strong> — {t(tx, "analytics")}</li>
                        <li><strong>Advertising</strong> — {t(tx, "advertising")}</li>
                        <li><strong>Third-party</strong> — {t(tx, "thirdParty")}</li>
                    </ul>
                </Reveal>
                <Reveal><h2>{t(tx, "h4")}</h2><p>{t(tx, "p4")}</p></Reveal>
                <Reveal><h2>{t(tx, "h5")}</h2><p>{t(tx, "p5")}</p></Reveal>
                <Reveal><h2>{t(tx, "h6")}</h2><p>{t(tx, "p6")} <a href="mailto:ditullioalfredo@gmail.com">ditullioalfredo@gmail.com</a>.</p></Reveal>
            </article>
        </div>
    );
}
