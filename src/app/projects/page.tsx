"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/i18n/context";
import {
    projectsHero,
    dcCard,
    odontolatamCard,
    fgCard,
    risusCard,
} from "@/i18n/translations/projects";

export default function Projects() {
    const { t } = useLanguage();

    return (
        <div className="container page">
            <Reveal as="section" className="hero projects-hero">
                <div className="projects-hero__text">
                    <span className="hero__eyebrow">{t(projectsHero, "eyebrow")}</span>
                    <h1 className="hero__title">
                        {t(projectsHero, "title1")}
                        <span className="gradient-text">{t(projectsHero, "title2")}</span>
                    </h1>
                    <p className="hero__tagline">{t(projectsHero, "tagline")}</p>
                </div>
                <div className="projects-hero__visual" aria-hidden="true">
                    <div className="projects-hero__blob"></div>
                    <img src="/assets/img/portfolio/pc.webp" alt="" className="projects-hero__pc" />
                </div>
            </Reveal>

            <section className="section projects-grid">
                {/* DentalCore */}
                <Reveal delay={1}>
                    <Link href="/projects/dentalcore" className="card project-card">
                        <div className="project-card__image-wrap">
                            <img src="/assets/img/portfolio/dentalcore.webp" alt="DentalCore" className="project-card__image" />
                        </div>
                        <div className="project-card__body">
                            <span className="card__label">{t(dcCard, "label")}</span>
                            <h3 className="card__title">{t(dcCard, "title")}</h3>
                            <p className="card__text">{t(dcCard, "text")}</p>
                            <div className="card__meta">
                                <span className="tag tag--accent">{t(dcCard, "role")}</span>
                                <span className="tag">React 19</span>
                                <span className="tag">TypeScript</span>
                                <span className="tag">Supabase</span>
                            </div>
                            <span className="card__cta">{t(dcCard, "readMore")} <i className="fa-solid fa-arrow-right"></i></span>
                        </div>
                    </Link>
                </Reveal>

                {/* OdontoLatam */}
                <Reveal delay={2}>
                    <Link href="/projects/odontolatam" className="card project-card">
                        <div className="project-card__image-wrap">
                            <img src="/assets/img/portfolio/odontolatam.webp" alt="OdontoLatam" className="project-card__image" />
                        </div>
                        <div className="project-card__body">
                            <span className="card__label">{t(odontolatamCard, "label")}</span>
                            <h3 className="card__title">{t(odontolatamCard, "title")}</h3>
                            <p className="card__text">{t(odontolatamCard, "text")}</p>
                            <div className="card__meta">
                                <span className="tag tag--accent">{t(odontolatamCard, "role")}</span>
                                <span className="tag">5,000+ dentists</span>
                                <span className="tag">15 countries</span>
                            </div>
                            <span className="card__cta">{t(odontolatamCard, "readMore")} <i className="fa-solid fa-arrow-right"></i></span>
                        </div>
                    </Link>
                </Reveal>

                {/* FG Academia */}
                <Reveal delay={3}>
                    <Link href="/projects/fgcapital" className="card project-card">
                        <div className="project-card__image-wrap">
                            <img src="/assets/img/portfolio/fgcapital.webp" alt="FG Academia" className="project-card__image" />
                        </div>
                        <div className="project-card__body">
                            <span className="card__label">{t(fgCard, "label")}</span>
                            <h3 className="card__title">{t(fgCard, "title")}</h3>
                            <p className="card__text">{t(fgCard, "text")}</p>
                            <div className="card__meta">
                                <span className="tag tag--accent">{t(fgCard, "role")}</span>
                                <span className="tag">Next.js</span>
                                <span className="tag">React</span>
                            </div>
                            <span className="card__cta">{t(fgCard, "readMore")} <i className="fa-solid fa-arrow-right"></i></span>
                        </div>
                    </Link>
                </Reveal>

                {/* Risus Dental */}
                <Reveal delay={4}>
                    <a href="https://risusdental.vercel.app" target="_blank" rel="noreferrer" className="card project-card">
                        <div className="project-card__image-wrap">
                            <img src="/assets/img/portfolio/risusdental.webp" alt="Risus Dental" className="project-card__image" />
                        </div>
                        <div className="project-card__body">
                            <span className="card__label">{t(risusCard, "label")}</span>
                            <h3 className="card__title">{t(risusCard, "title")}</h3>
                            <p className="card__text">{t(risusCard, "text")}</p>
                            <span className="card__cta">{t(risusCard, "cta")} <i className="fa-solid fa-arrow-up-right-from-square"></i></span>
                        </div>
                    </a>
                </Reveal>

                {/* Hidden from the UI on request — Camila Chesani, Carolina Salva
                    and Che Boludo. Their copy is still defined in
                    translations/projects.ts (camilaCard, carolinaCard, cheboludoCard)
                    if they ever need to be restored. */}
            </section>
        </div>
    );
}
