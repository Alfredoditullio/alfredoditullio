"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/i18n/context";
import { iaTexts as tx, iaChapters } from "@/i18n/translations/iaodontologos";

const AMAZON_URL =
    "https://www.amazon.com.au/Inteligencia-Artificial-para-odont%C3%B3logos-inteligencia/dp/B0HD5T5V8N/";

export default function IaOdontologos() {
    const { locale, t } = useLanguage();

    return (
        <div className="container page">
            <Link href="/books" className="back-link">
                <i className="fa-solid fa-arrow-left"></i> {t(tx, "back")}
            </Link>

            {/* Hero */}
            <Reveal as="section" className="hero books-hero">
                <div className="books-hero__text">
                    <span className="hero__eyebrow">{t(tx, "eyebrow")}</span>
                    <h1 className="hero__title">{t(tx, "title")}</h1>
                    <p className="hero__tagline">{t(tx, "subtitle")}</p>
                    <div className="hero__actions">
                        <a
                            href={AMAZON_URL}
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn--primary"
                        >
                            {t(tx, "btnAmazon")}{" "}
                            <i className="fa-solid fa-arrow-up-right-from-square"></i>
                        </a>
                        <Link href="/projects/dentalcore" className="btn">
                            {t(tx, "btnDentalcore")}
                        </Link>
                    </div>
                </div>

                <figure className="books-hero__figure">
                    <div
                        className="book-cover book-cover--placeholder"
                        role="img"
                        aria-label={t(tx, "title")}
                    >
                        <span className="book-cover__initials">
                            {t(tx, "coverInitials")}
                        </span>
                        <span className="book-cover__title">{t(tx, "title")}</span>
                        <span className="book-cover__author">Alfredo Di Tullio</span>
                    </div>
                    <figcaption className="books-hero__caption">
                        {t(tx, "coverCaption")}
                    </figcaption>
                </figure>
            </Reveal>

            {/* Meta strip */}
            <Reveal as="section" className="section">
                <div className="meta-strip">
                    <div className="meta-strip__item">
                        <span className="meta-strip__label">{t(tx, "metaAuthor")}</span>
                        <span className="meta-strip__value">{t(tx, "metaAuthorVal")}</span>
                    </div>
                    <div className="meta-strip__item">
                        <span className="meta-strip__label">{t(tx, "metaYear")}</span>
                        <span className="meta-strip__value">{t(tx, "metaYearVal")}</span>
                    </div>
                    <div className="meta-strip__item">
                        <span className="meta-strip__label">{t(tx, "metaLang")}</span>
                        <span className="meta-strip__value">{t(tx, "metaLangVal")}</span>
                    </div>
                    <div className="meta-strip__item">
                        <span className="meta-strip__label">{t(tx, "metaFormat")}</span>
                        <span className="meta-strip__value">{t(tx, "metaFormatVal")}</span>
                    </div>
                </div>
            </Reveal>

            {/* Article */}
            <article className="article">
                <Reveal>
                    <p className="article__lede">{t(tx, "lede")}</p>
                </Reveal>

                <Reveal>
                    <h2 className="article__heading">{t(tx, "s1Title")}</h2>
                    <p className="article__p">{t(tx, "s1p1")}</p>
                    <p className="article__p">{t(tx, "s1p2")}</p>
                </Reveal>

                <Reveal>
                    <h2 className="article__heading">{t(tx, "s2Title")}</h2>
                    <p className="article__p">{t(tx, "s2p1")}</p>
                    <p className="article__p">{t(tx, "s2p2")}</p>
                </Reveal>

                <Reveal>
                    <h2 className="article__heading">{t(tx, "s3Title")}</h2>
                    <p className="article__p">{t(tx, "s3p1")}</p>
                </Reveal>

                <Reveal>
                    <h2 className="article__heading">{t(tx, "s4Title")}</h2>
                    <p className="article__p">{t(tx, "s4Intro")}</p>
                    <ul className="article__chapters">
                        {iaChapters.map((ch) => (
                            <li key={ch.en} className="article__chapter">
                                {ch[locale]}
                            </li>
                        ))}
                    </ul>
                </Reveal>

                <Reveal>
                    <h2 className="article__heading">{t(tx, "s5Title")}</h2>
                    <p className="article__p">{t(tx, "s5p1")}</p>
                    <p className="article__p">
                        {t(tx, "s5p2")}{" "}
                        <a
                            href="https://www.dentalcore.app/"
                            target="_blank"
                            rel="noreferrer"
                            className="article__link"
                        >
                            dentalcore.app
                        </a>
                        .
                    </p>
                </Reveal>

                <Reveal>
                    <h2 className="article__heading">{t(tx, "s6Title")}</h2>
                    <p className="article__p">{t(tx, "s6p1")}</p>
                </Reveal>
            </article>

            {/* CTA */}
            <Reveal as="section" className="section">
                <div className="book-cta">
                    <h2 className="book-cta__title">{t(tx, "ctaTitle")}</h2>
                    <p className="book-cta__text">{t(tx, "ctaText")}</p>
                    <a
                        href={AMAZON_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn--primary btn--lg"
                    >
                        {t(tx, "ctaBtn")}{" "}
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                </div>
            </Reveal>
        </div>
    );
}
