"use client";

import Reveal from "@/components/Reveal";
import { useLanguage } from "@/i18n/context";
import { termsTexts as tx, privacyTexts } from "@/i18n/translations/legal";

export default function Terms() {
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
                <Reveal><h2>{t(tx, "h2")}</h2><p>{t(tx, "p2a")}</p><p>{t(tx, "p2b")}</p></Reveal>
                <Reveal><h2>{t(tx, "h3")}</h2><p>{t(tx, "p3")}</p></Reveal>
                <Reveal><h2>{t(tx, "h4")}</h2><p>{t(tx, "p4")}</p></Reveal>
                <Reveal><h2>{t(tx, "h5")}</h2><p>{t(tx, "p5")}</p></Reveal>
                <Reveal><h2>{t(tx, "h6")}</h2><p>{t(tx, "p6")} <a href="mailto:ditullioalfredo@gmail.com">ditullioalfredo@gmail.com</a>.</p></Reveal>
            </article>
        </div>
    );
}
