"use client";

import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import PhotoCarousel from "@/components/PhotoCarousel";
import { useLanguage } from "@/i18n/context";
import {
    aboutHero, aboutEducation, aboutExperience, aboutOtc, aboutMeta,
    educationItems, experienceItems, otcItems,
} from "@/i18n/translations/about";

const hobbySlides = [
    { src: "/assets/img/portfolio/basecamp.webp", alt: "Everest Base Camp", label: "Everest Base Camp · 2023" },
    { src: "/assets/img/portfolio/music.webp", alt: "Playing music", label: "Music" },
    { src: "/assets/img/portfolio/tennis.webp", alt: "Playing tennis", label: "Tennis" },
    { src: "/assets/img/portfolio/pepperina.webp", alt: "Pepperina", label: "Pepperina" },
    { src: "/assets/img/portfolio/jordan.webp", alt: "Jordan", label: "Jordan" },
];

export default function About() {
    const { locale, t } = useLanguage();

    return (
        <div className="container page">
            <Reveal as="section" className="hero">
                <span className="hero__eyebrow">{t(aboutHero, "eyebrow")}</span>
                <h1 className="hero__title">
                    {t(aboutHero, "title1")}
                    <span className="gradient-text">{t(aboutHero, "title2")}</span>
                </h1>
            </Reveal>

            <div className="about__grid">
                <div>
                    <Reveal>
                        <p className="about__intro">{t(aboutHero, "intro")}</p>
                    </Reveal>

                    <section className="section">
                        <Reveal><p className="section__eyebrow">{t(aboutEducation, "eyebrow")}</p></Reveal>
                        <Reveal delay={1}>
                            <div className="timeline">
                                {educationItems.map((item) => (
                                    <div key={item.org} className="timeline__item">
                                        <div className="timeline__year">{item.year}</div>
                                        <div>
                                            <h3 className="timeline__title">{item.title[locale]}</h3>
                                            <p className="timeline__org">{item.org}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Reveal>
                    </section>

                    <section className="section">
                        <Reveal><p className="section__eyebrow">{t(aboutExperience, "eyebrow")}</p></Reveal>
                        <Reveal delay={1}>
                            <div className="timeline">
                                {experienceItems.map((item) => (
                                    <div key={item.title.en} className="timeline__item">
                                        <div className="timeline__year">{item.year}</div>
                                        <div>
                                            <h3 className="timeline__title">{item.title[locale]}</h3>
                                            <p className="timeline__org">{item.org[locale]}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Reveal>
                    </section>

                    <section className="section">
                        <Reveal>
                            <p className="section__eyebrow">{t(aboutOtc, "eyebrow")}</p>
                            <h2 className="section__title">{t(aboutOtc, "title")}</h2>
                        </Reveal>
                        <div className="otc-grid">
                            {otcItems.map((item, i) => (
                                <Reveal key={item.icon} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                                    <TiltCard className="otc-card">
                                        <div className="otc-card__icon"><i className={item.icon}></i></div>
                                        <h3 className="otc-card__title">{item.title[locale]}</h3>
                                        <p className="otc-card__text">{item.text[locale]}</p>
                                    </TiltCard>
                                </Reveal>
                            ))}
                        </div>
                    </section>
                </div>

                <Reveal as="aside" delay={1}>
                    <div className="about__sidebar">
                        <div className="about__photo-wrap">
                            <img src="/assets/img/portfolio/yo-clinic.webp" alt="Clinical practice" className="about__photo" />
                            <span className="about__photo-caption">Clinical practice · La Plata</span>
                        </div>
                        <div className="about__photo-wrap">
                            <img src="/assets/img/portfolio/chef.webp" alt="Michelin-star kitchen" className="about__photo" />
                            <span className="about__photo-caption">Kiin-kiin · Copenhagen</span>
                        </div>
                        <div className="meta-list">
                            <div className="meta-list__item">
                                <span className="meta-list__label">{t(aboutMeta, "age")}</span>
                                <span className="meta-list__value">33</span>
                            </div>
                            <div className="meta-list__item">
                                <span className="meta-list__label">{t(aboutMeta, "basedIn")}</span>
                                <span className="meta-list__value">Melbourne, Australia</span>
                            </div>
                            <div className="meta-list__item">
                                <span className="meta-list__label">{t(aboutMeta, "email")}</span>
                                <span className="meta-list__value">ditullioalfredo@gmail.com</span>
                            </div>
                            <div className="meta-list__item">
                                <span className="meta-list__label">{t(aboutMeta, "languages")}</span>
                                <span className="meta-list__value">ES · EN · FR · PT</span>
                            </div>
                        </div>
                        <div className="social-block">
                            <p className="social-block__label">{t(aboutMeta, "findMe")}</p>
                            <div className="social-block__row">
                                <a href="https://www.linkedin.com/in/alfredo-di-tullio/" target="_blank" rel="noreferrer" className="social-btn"><i className="fa-brands fa-linkedin-in"></i><span>LinkedIn</span></a>
                                <a href="https://www.instagram.com/alfred.ditu" target="_blank" rel="noreferrer" className="social-btn"><i className="fa-brands fa-instagram"></i><span>Instagram</span></a>
                                <a href="https://www.facebook.com/alfreditullio" target="_blank" rel="noreferrer" className="social-btn"><i className="fa-brands fa-facebook-f"></i><span>Facebook</span></a>
                            </div>
                        </div>
                        <PhotoCarousel slides={hobbySlides} />
                    </div>
                </Reveal>
            </div>
        </div>
    );
}
