"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/i18n/context";
import { projectsHero, dcCard, camilaCard, fgCard } from "@/i18n/translations/projects";

export default function Projects() {
    const { t } = useLanguage();

    return (
        <div className="container page">
            <Reveal as="section" className="hero projects-hero">
                <div className="projects-hero__text">
                    <span className="hero__eyebrow">{t(projectsHero, "eyebrow")}</span>
                    <h1 className="hero__title">
                        {t(projectsHero, "title1")}<span className="gradient-text">{t(projectsHero, "title2")}</span>
                    </h1>
                    <p className="hero__tagline">{t(projectsHero, "tagline")}</p>
                </div>
                <div className="projects-hero__visual" aria-hidden="true">
                    <div className="projects-hero__blob"></div>
                    <img src="/assets/img/portfolio/pc.webp" alt="" className="projects-hero__pc" />
                </div>
            </Reveal>

            <section className="section projects-grid">
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
                                <span className="tag">React 19</span>
                                <span className="tag">TypeScript</span>
                                <span className="tag">Supabase</span>
                                <span className="tag">Zustand</span>
                                <span className="tag">Gemini AI</span>
                            </div>
                            <span className="card__cta">{t(dcCard, "readMore")} <i className="fa-solid fa-arrow-right"></i></span>
                        </div>
                    </Link>
                </Reveal>

                <Reveal delay={2}>
                    <a href="https://camila.dentalcore.app/" target="_blank" rel="noreferrer" className="card project-card">
                        <div className="project-card__image-wrap">
                            <img src="/assets/img/portfolio/camila.webp" alt="Camila Chesani" className="project-card__image" />
                        </div>
                        <div className="project-card__body">
                            <span className="card__label">{t(camilaCard, "label")}</span>
                            <h3 className="card__title">{t(camilaCard, "title")}</h3>
                            <p className="card__text">{t(camilaCard, "text")}</p>
                            <div className="card__meta">
                                <span className="tag">DentalCore</span>
                                <span className="tag">Next.js</span>
                                <span className="tag">Production</span>
                            </div>
                            <span className="card__cta">{t(camilaCard, "cta")} <i className="fa-solid fa-arrow-up-right-from-square"></i></span>
                        </div>
                    </a>
                </Reveal>

                <Reveal delay={3}>
                    <a href="https://fgcapital.vercel.app/" target="_blank" rel="noreferrer" className="card project-card">
                        <div className="project-card__image-wrap">
                            <img src="/assets/img/portfolio/fgcapital.webp" alt="FG Capital" className="project-card__image" />
                        </div>
                        <div className="project-card__body">
                            <span className="card__label">{t(fgCard, "label")}</span>
                            <h3 className="card__title">{t(fgCard, "title")}</h3>
                            <p className="card__text">{t(fgCard, "text")}</p>
                            <div className="card__meta">
                                <span className="tag">Next.js</span>
                                <span className="tag">React</span>
                                <span className="tag">Vercel</span>
                            </div>
                            <span className="card__cta">{t(fgCard, "cta")} <i className="fa-solid fa-arrow-up-right-from-square"></i></span>
                        </div>
                    </a>
                </Reveal>
            </section>
        </div>
    );
}
