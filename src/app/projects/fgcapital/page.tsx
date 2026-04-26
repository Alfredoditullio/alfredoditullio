"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/i18n/context";
import {
    fgHero, fgFeatures, fgFeatureItems, fgBehind,
} from "@/i18n/translations/fgcapital";

export default function FGCapital() {
    const { locale, t } = useLanguage();

    return (
        <div className="container page">
            <Link href="/projects" className="back-link">
                <i className="fa-solid fa-arrow-left"></i>{" "}
                {locale === "es" ? "Proyectos" : "Projects"}
            </Link>

            <Reveal as="section" className="project-hero">
                <span className="project-hero__label">{t(fgHero, "label")}</span>
                <h1 className="project-hero__title">
                    <span className="gradient-text">FG Capital</span>
                </h1>
                <p className="project-hero__summary">{t(fgHero, "summary")}</p>
                <div className="hero__actions">
                    <a href="https://fgcapital.vercel.app/" target="_blank" rel="noreferrer" className="btn btn--primary">
                        {t(fgHero, "btnLive")} <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                </div>
            </Reveal>

            <Reveal as="section" className="section project-screenshot">
                <img src="/assets/img/portfolio/fgcapital.webp" alt="FG Capital platform" className="project-screenshot__img" />
            </Reveal>

            {/* Features */}
            <section className="section">
                <Reveal>
                    <p className="section__eyebrow">{t(fgFeatures, "eyebrow")}</p>
                    <h2 className="section__title">{t(fgFeatures, "title")}</h2>
                    <p className="section__intro">{t(fgFeatures, "intro")}</p>
                </Reveal>
                <Reveal delay={1}>
                    <div className="feature-grid">
                        {fgFeatureItems.map((f) => (
                            <div key={f.title.en} className="feature">
                                <h3 className="feature__title">{f.title[locale]}</h3>
                                <p className="feature__text">{f.text[locale]}</p>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </section>

            {/* Behind the project */}
            <section className="section">
                <Reveal>
                    <p className="section__eyebrow">{t(fgBehind, "eyebrow")}</p>
                    <h2 className="section__title">{t(fgBehind, "title")}</h2>
                    <p className="about__intro" style={{ marginBottom: "1.25rem" }}>{t(fgBehind, "p1")}</p>
                    <p className="about__intro">{t(fgBehind, "p2")}</p>
                </Reveal>
            </section>
        </div>
    );
}
