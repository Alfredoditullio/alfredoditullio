"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import DisciplinesSlider from "@/components/DisciplinesSlider";
import VideoModal from "@/components/VideoModal";
import HeroCard from "@/components/HeroCard";
import { useLanguage } from "@/i18n/context";
import { hero, whatIDo, featured, press } from "@/i18n/translations/home";

export default function Home() {
    const { t } = useLanguage();
    const [videoOpen, setVideoOpen] = useState(false);

    return (
        <div className="container page">
            {/* Hero */}
            <Reveal as="section" className="hero hero--split">
                <div className="hero__text">
                    <span className="hero__eyebrow">{t(hero, "eyebrow")}</span>
                    <h1 className="hero__title">
                        {t(hero, "name1")}
                        <span className="gradient-text">{t(hero, "name2")}</span>
                    </h1>
                    <p className="hero__tagline">
                        <strong className="hero__lead-line">
                            {t(hero, "lead")}
                        </strong>
                        {t(hero, "tagline")}{" "}
                        <strong style={{ color: "var(--fg)", fontWeight: 600 }}>
                            DentalCore
                        </strong>{" "}
                        {t(hero, "taglineEnd")}
                    </p>
                    <div className="hero__actions">
                        <Link href="/projects" className="btn btn--primary">
                            {t(hero, "btnProjects")}{" "}
                            <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                        <Link href="/about" className="btn">
                            {t(hero, "btnAbout")}
                        </Link>
                    </div>
                </div>

                <div className="hero__card-wrap">
                    <div className="hero__portrait-blob"></div>
                    <HeroCard
                        photoSrc="/assets/img/portfolio/nueva.webp"
                        photoAlt="Alfredo Di Tullio"
                        name={t(hero, "cardName")}
                        role={t(hero, "cardRole")}
                        chips={[
                            { icon: "fa-solid fa-tooth", label: t(hero, "chipDentist") },
                            { icon: "fa-solid fa-code", label: t(hero, "chipDev") },
                            { icon: "fa-solid fa-feather-pointed", label: t(hero, "chipAuthor") },
                            { icon: "fa-solid fa-book-open", label: t(hero, "chipPhilosophy") },
                        ]}
                        ctaLabel={t(hero, "cardCta")}
                        ctaHref="/contact"
                    />
                </div>
            </Reveal>

            <hr className="divider" />

            {/* What I do */}
            <section className="section">
                <Reveal>
                    <p className="section__eyebrow">{t(whatIDo, "eyebrow")}</p>
                    <h2 className="section__title">{t(whatIDo, "title")}</h2>
                </Reveal>
                <Reveal delay={1}>
                    <DisciplinesSlider />
                </Reveal>
            </section>

            <hr className="divider" />

            {/* Featured project */}
            <section className="section">
                <Reveal>
                    <p className="section__eyebrow">
                        {t(featured, "eyebrow")}
                    </p>
                    <h2 className="section__title">
                        <span className="gradient-text">
                            {t(featured, "title")}
                        </span>
                    </h2>
                    <p className="section__intro">{t(featured, "intro")}</p>
                </Reveal>
                <Reveal delay={1}>
                    <Link href="/projects/dentalcore" className="card">
                        <span className="card__label">
                            {t(featured, "cardLabel")}
                        </span>
                        <h3 className="card__title">
                            {t(featured, "cardTitle")}
                        </h3>
                        <p className="card__text">{t(featured, "cardText")}</p>
                        <div className="card__meta">
                            <span className="tag">React 19</span>
                            <span className="tag">TypeScript</span>
                            <span className="tag">Supabase</span>
                            <span className="tag">Zustand</span>
                        </div>
                        <span className="card__cta">
                            {t(featured, "readMore")}{" "}
                            <i className="fa-solid fa-arrow-right"></i>
                        </span>
                    </Link>
                </Reveal>
            </section>

            <hr className="divider" />

            {/* Press */}
            <section className="section">
                <Reveal>
                    <p className="section__eyebrow">{t(press, "eyebrow")}</p>
                    <h2 className="section__title">{t(press, "title")}</h2>
                </Reveal>
                <div className="press-grid">
                    <Reveal delay={1}>
                        <a
                            href="https://veucatalana.cat/horizontes-infinitos-filosofia-viajes-y-reflexion-en-la-nueva-obra-de-alfredo-di-tullio/"
                            target="_blank"
                            rel="noreferrer"
                            className="press-tile"
                        >
                            <div className="press-tile__image-wrap">
                                <img
                                    src="/assets/img/portfolio/presentacion.webp"
                                    alt="Horizontes Infinitos book launch"
                                    className="press-tile__image"
                                />
                            </div>
                            <div className="press-tile__body">
                                <div className="press-tile__outlet">
                                    <span className="press-tile__name">
                                        {t(press, "veuName")}
                                    </span>
                                    <span className="press-tile__year">
                                        2025
                                    </span>
                                </div>
                                <p className="press-tile__quote">
                                    {t(press, "veuQuote")}
                                </p>
                                <span className="press-tile__cta">
                                    {t(press, "veuCta")}{" "}
                                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                </span>
                            </div>
                        </a>
                    </Reveal>
                    <Reveal delay={2}>
                        <a
                            href="https://www.lanacion.com.ar/lifestyle/en-argentina-algo-le-faltaba-y-hallo-el-destino-que-buscaba-en-el-mundo-este-paraiso-me-dio-tiempo-nid08052024/"
                            target="_blank"
                            rel="noreferrer"
                            className="press-tile"
                        >
                            <div className="press-tile__image-wrap">
                                <img
                                    src="/assets/img/lanacion-thumb.jpg"
                                    alt="La Nación feature"
                                    className="press-tile__image"
                                />
                            </div>
                            <div className="press-tile__body">
                                <div className="press-tile__outlet">
                                    <span className="press-tile__name">
                                        {t(press, "lnName")}
                                    </span>
                                    <span className="press-tile__year">
                                        2024
                                    </span>
                                </div>
                                <p className="press-tile__quote">
                                    {t(press, "lnQuote")}
                                </p>
                                <span className="press-tile__cta">
                                    {t(press, "lnCta")}{" "}
                                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                </span>
                            </div>
                        </a>
                    </Reveal>
                    <Reveal delay={3}>
                        <div
                            role="button"
                            tabIndex={0}
                            onClick={() => setVideoOpen(true)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                    e.preventDefault();
                                    setVideoOpen(true);
                                }
                            }}
                            className="press-tile press-tile--video"
                            aria-label="Watch LN+ interview"
                        >
                            <div className="press-tile__image-wrap">
                                <img
                                    src="/assets/img/portfolio/lanacion-noruega.webp"
                                    alt="LN+ interview from Norway"
                                    className="press-tile__image"
                                />
                                <div className="press-tile__play" aria-hidden="true">
                                    <span className="press-tile__play-btn">
                                        <i className="fa-solid fa-play"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="press-tile__body">
                                <div className="press-tile__outlet">
                                    <span className="press-tile__name">
                                        {t(press, "lnplusName")}
                                    </span>
                                    <span className="press-tile__year">
                                        2024
                                    </span>
                                </div>
                                <p className="press-tile__quote">
                                    {t(press, "lnplusQuote")}
                                </p>
                                <span className="press-tile__cta">
                                    {t(press, "lnplusCta")}{" "}
                                    <i className="fa-solid fa-play"></i>
                                </span>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            <VideoModal
                open={videoOpen}
                onClose={() => setVideoOpen(false)}
                youtubeId="cuXup5NzDe8"
                title="LN+ — Argentinos en el mundo: Bodø, Noruega"
            />
        </div>
    );
}
