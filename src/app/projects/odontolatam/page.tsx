"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/i18n/context";
import {
    olHero, olStats, olFeatures, olFeatureItems, olBehind,
} from "@/i18n/translations/odontolatam";

const stats = [
    { numKey: "s1num", labelKey: "s1label" },
    { numKey: "s2num", labelKey: "s2label" },
    { numKey: "s3num", labelKey: "s3label" },
    { numKey: "s4num", labelKey: "s4label" },
    { numKey: "s5num", labelKey: "s5label" },
];

export default function OdontoLatam() {
    const { locale, t } = useLanguage();

    return (
        <div className="container page">
            <Link href="/projects" className="back-link">
                <i className="fa-solid fa-arrow-left"></i>{" "}
                {locale === "es" ? "Proyectos" : "Projects"}
            </Link>

            <Reveal as="section" className="project-hero">
                <span className="project-hero__label">{t(olHero, "label")}</span>
                <h1 className="project-hero__title">
                    <span className="gradient-text">OdontoLatam</span>
                </h1>
                <p className="project-hero__summary">{t(olHero, "summary")}</p>
                <div className="hero__actions">
                    <a href="https://www.odontolatam.com" target="_blank" rel="noreferrer" className="btn btn--primary">
                        {t(olHero, "btnLive")} <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                </div>
            </Reveal>

            <Reveal as="section" className="section project-screenshot">
                <img src="/assets/img/portfolio/odontolatam.webp" alt="OdontoLatam platform" className="project-screenshot__img" />
            </Reveal>

            {/* Stats */}
            <section className="section">
                <Reveal>
                    <p className="section__eyebrow">{t(olStats, "eyebrow")}</p>
                    <h2 className="section__title">{t(olStats, "title")}</h2>
                </Reveal>
                <Reveal delay={1}>
                    <div className="stats-row">
                        {stats.map((s) => (
                            <div key={s.numKey} className="stat-card">
                                <span className="stat-card__num">{t(olStats, s.numKey)}</span>
                                <span className="stat-card__label">{t(olStats, s.labelKey)}</span>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </section>

            {/* Features */}
            <section className="section">
                <Reveal>
                    <p className="section__eyebrow">{t(olFeatures, "eyebrow")}</p>
                    <h2 className="section__title">{t(olFeatures, "title")}</h2>
                    <p className="section__intro">{t(olFeatures, "intro")}</p>
                </Reveal>
                <Reveal delay={1}>
                    <div className="feature-grid">
                        {olFeatureItems.map((f) => (
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
                    <p className="section__eyebrow">{t(olBehind, "eyebrow")}</p>
                    <h2 className="section__title">{t(olBehind, "title")}</h2>
                    <p className="about__intro" style={{ marginBottom: "1.25rem" }}>{t(olBehind, "p1")}</p>
                    <p className="about__intro">{t(olBehind, "p2")}</p>
                </Reveal>
            </section>
        </div>
    );
}
