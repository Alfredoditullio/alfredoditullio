"use client";

import Reveal from "@/components/Reveal";
import { useLanguage } from "@/i18n/context";
import { privacyTexts as tx } from "@/i18n/translations/legal";

export default function Privacy() {
    const { t } = useLanguage();
    return (
        <div className="container page">
            <Reveal as="section" className="hero">
                <span className="hero__eyebrow">{t(tx, "eyebrow")}</span>
                <h1 className="hero__title">{t(tx, "title")}</h1>
                <p className="hero__tagline">{t(tx, "subtitle")}</p>
            </Reveal>
            <article className="legal">
                <Reveal><h2>{t(tx, "h1")}</h2><p>{t(tx, "p1")} <a href="mailto:ditullioalfredo@gmail.com">ditullioalfredo@gmail.com</a>.</p></Reveal>
                <Reveal><h2>{t(tx, "h2")}</h2><p>{t(tx, "p2")}</p></Reveal>
                <Reveal><h2>{t(tx, "h3")}</h2><p>{t(tx, "p3")} <a href="/cookies">{t(tx, "cookieLink")}</a>.</p></Reveal>
                <Reveal><h2>{t(tx, "h4")}</h2><p>{t(tx, "p4")}</p></Reveal>
                <Reveal><h2>{t(tx, "h5")}</h2><p>{t(tx, "p5")}</p></Reveal>
                <Reveal><h2>{t(tx, "h6")}</h2><p>{t(tx, "p6")}</p></Reveal>
            </article>
        </div>
    );
}
