"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/i18n/context";
import {
    projectsHero,
    dcCard,
    camilaCard,
    fgCard,
    carolinaCard,
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

            <section className="section">
                <div className="bento">
                    {/* DentalCore — wide featured tile (2x2) */}
                    <Reveal className="bento__slot bento__slot--wide">
                        <Link href="/projects/dentalcore" className="bento__tile">
                            <div className="bento__bg bento__bg--tint">
                                <img src="/assets/img/portfolio/dentalcore.webp" alt="" />
                            </div>
                            <span className="bento__featured-mark" aria-hidden="true">
                                <i className="fa-solid fa-star"></i> Featured
                            </span>
                            <div className="bento__content bento__content--light">
                                <span className="bento__label">{t(dcCard, "label")}</span>
                                <h2 className="bento__title bento__title--lg">{t(dcCard, "title")}</h2>
                                <p className="bento__text bento__text--lg">{t(dcCard, "text")}</p>
                                <div className="bento__tags">
                                    <span className="bento__tag">React 19</span>
                                    <span className="bento__tag">TypeScript</span>
                                    <span className="bento__tag">Supabase</span>
                                    <span className="bento__tag">Gemini AI</span>
                                </div>
                                <span className="bento__cta">
                                    {t(dcCard, "readMore")} <i className="fa-solid fa-arrow-right"></i>
                                </span>
                            </div>
                        </Link>
                    </Reveal>

                    {/* Camila — regular tile */}
                    <Reveal delay={1} className="bento__slot bento__slot--regular">
                        <a href="https://camila.dentalcore.app/" target="_blank" rel="noreferrer" className="bento__tile">
                            <div className="bento__bg bento__bg--tint">
                                <img src="/assets/img/portfolio/camila.webp" alt="" />
                            </div>
                            <div className="bento__content bento__content--light">
                                <span className="bento__label">{t(camilaCard, "label")}</span>
                                <h3 className="bento__title">{t(camilaCard, "title")}</h3>
                                <span className="bento__cta">
                                    {t(camilaCard, "cta")} <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                </span>
                            </div>
                        </a>
                    </Reveal>

                    {/* Carolina Salva — regular tile */}
                    <Reveal delay={2} className="bento__slot bento__slot--regular">
                        <a href="https://carolinasalvaodontologia.vercel.app" target="_blank" rel="noreferrer" className="bento__tile bento__tile--light">
                            <div className="bento__bg bento__bg--cream">
                                <img src="/assets/img/portfolio/carolina-salva.webp" alt="" className="bento__bg-contain" />
                            </div>
                            <div className="bento__content">
                                <span className="bento__label">{t(carolinaCard, "label")}</span>
                                <h3 className="bento__title">{t(carolinaCard, "title")}</h3>
                                <span className="bento__cta">
                                    {t(carolinaCard, "cta")} <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                </span>
                            </div>
                        </a>
                    </Reveal>

                    {/* FG Capital — full width bottom */}
                    <Reveal delay={3} className="bento__slot bento__slot--full">
                        <a href="https://fgcapital.vercel.app/" target="_blank" rel="noreferrer" className="bento__tile">
                            <div className="bento__bg bento__bg--tint">
                                <img src="/assets/img/portfolio/fgcapital.webp" alt="" />
                            </div>
                            <div className="bento__content bento__content--light">
                                <span className="bento__label">{t(fgCard, "label")}</span>
                                <h3 className="bento__title bento__title--md">{t(fgCard, "title")}</h3>
                                <p className="bento__text">{t(fgCard, "text")}</p>
                                <div className="bento__tags">
                                    <span className="bento__tag">Next.js</span>
                                    <span className="bento__tag">React</span>
                                    <span className="bento__tag">Vercel</span>
                                </div>
                                <span className="bento__cta">
                                    {t(fgCard, "cta")} <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                </span>
                            </div>
                        </a>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}
