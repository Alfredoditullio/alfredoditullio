"use client";

import Reveal from "@/components/Reveal";
import { useLanguage } from "@/i18n/context";
import { booksTexts as tx } from "@/i18n/translations/books";

export default function Books() {
    const { t } = useLanguage();

    return (
        <div className="container page">
            <Reveal as="section" className="hero books-hero">
                <div className="books-hero__text">
                    <span className="hero__eyebrow">{t(tx, "eyebrow")}</span>
                    <h1 className="hero__title">
                        {t(tx, "title1")}<span className="gradient-text">{t(tx, "title2")}</span>
                    </h1>
                    <p className="hero__tagline">{t(tx, "tagline")}</p>
                </div>
                <figure className="books-hero__figure">
                    <img src="/assets/img/portfolio/presentacion.webp" alt="Book launch" className="books-hero__image" />
                    <figcaption className="books-hero__caption">Horizontes Infinitos · Book launch · 2025</figcaption>
                </figure>
            </Reveal>

            <section className="section">
                <Reveal><p className="section__eyebrow">{t(tx, "latestEyebrow")}</p></Reveal>
                <Reveal delay={1}>
                    <article className="book-card">
                        <img src="/assets/img/portfolio/horizontes-infinitos.webp" alt="Horizontes Infinitos" className="book-card__cover" />
                        <div>
                            <p className="book-card__subtitle">{t(tx, "hiSubtitle")}</p>
                            <h2 className="book-card__title">{t(tx, "hiTitle")}</h2>
                            <p className="book-card__text">{t(tx, "hiText")}</p>
                            <div className="hero__actions">
                                <a href="https://www.amazon.com/-/es/Alfredo-Tullio-ebook/dp/B0DNZY548J" target="_blank" rel="noreferrer" className="btn btn--primary">
                                    {t(tx, "hiBtnAmazon")} <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                </a>
                                <a href="https://veucatalana.cat/horizontes-infinitos-filosofia-viajes-y-reflexion-en-la-nueva-obra-de-alfredo-di-tullio/" target="_blank" rel="noreferrer" className="btn">
                                    {t(tx, "hiBtnReview")}
                                </a>
                            </div>
                        </div>
                    </article>
                </Reveal>
            </section>

            <section className="section">
                <Reveal><p className="section__eyebrow">{t(tx, "firstEyebrow")}</p></Reveal>
                <Reveal delay={1}>
                    <article className="book-card">
                        <img src="/assets/img/portada.png" alt="En búsqueda del sentido" className="book-card__cover" />
                        <div>
                            <p className="book-card__subtitle">{t(tx, "ebsSubtitle")}</p>
                            <h2 className="book-card__title">{t(tx, "ebsTitle")}</h2>
                            <p className="book-card__text">{t(tx, "ebsText")}</p>
                            <a href="https://www.amazon.com.au/b%C3%BAsqueda-del-sentido-encontrar-sinsentido/dp/B0CKX2PMGT" target="_blank" rel="noreferrer" className="btn btn--primary">
                                {t(tx, "ebsBtnAmazon")} <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            </a>
                        </div>
                    </article>
                </Reveal>
            </section>
        </div>
    );
}
