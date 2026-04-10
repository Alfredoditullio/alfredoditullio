"use client";

import Reveal from "@/components/Reveal";
import LocationMap from "@/components/LocationMap";
import { useLanguage } from "@/i18n/context";
import { contactTexts as tx } from "@/i18n/translations/contact";

type Item = {
    label: string;
    value: string;
    href: string;
    icon: string;
    external?: boolean;
};

const items: Item[] = [
    { label: "Email", value: "ditullioalfredo@gmail.com", href: "mailto:ditullioalfredo@gmail.com", icon: "fa-solid fa-envelope" },
    { label: "WhatsApp", value: "Send me a message", href: "https://wa.me/61404809925", icon: "fa-brands fa-whatsapp", external: true },
    { label: "LinkedIn", value: "alfredo-di-tullio", href: "https://www.linkedin.com/in/alfredo-di-tullio/", icon: "fa-brands fa-linkedin-in", external: true },
    { label: "Instagram", value: "@alfred.ditu", href: "https://www.instagram.com/alfred.ditu", icon: "fa-brands fa-instagram", external: true },
    { label: "Facebook", value: "alfreditullio", href: "https://www.facebook.com/alfreditullio", icon: "fa-brands fa-facebook-f", external: true },
];

export default function Contact() {
    const { t } = useLanguage();

    return (
        <div className="container page">
            <Reveal as="section" className="hero contact-hero">
                <div className="contact-hero__text">
                    <span className="hero__eyebrow">{t(tx, "eyebrow")}</span>
                    <h1 className="hero__title">
                        {t(tx, "title1")}<span className="gradient-text">{t(tx, "title2")}</span>
                    </h1>
                    <p className="hero__tagline">{t(tx, "tagline")}</p>
                </div>

                <div className="contact-hero__photo-area">
                    <div className="contact-hero__blob"></div>
                    <img src="/assets/img/portfolio/everest.webp" alt="Everest Base Camp" className="contact-hero__photo" />
                    <div className="contact-hero__quote-wrap">
                        <p className="contact-hero__quote">
                            <span className="highlight">{t(tx, "highlightA")}</span>
                            {t(tx, "quoteMiddle")}
                            <span className="highlight">{t(tx, "highlightB")}</span>
                            {t(tx, "quoteEnd")}
                        </p>
                        <span className="contact-hero__caption">Everest Base Camp · 5,364m · 2023</span>
                    </div>
                </div>
            </Reveal>

            <section className="section contact-bottom">
                <div className="contact-bottom__cards">
                    <p className="section__eyebrow">{t(tx, "getInTouch")}</p>
                    {items.map((item, i) => (
                        <Reveal key={item.label} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                            <a href={item.href} target={item.external ? "_blank" : undefined} rel="noreferrer" className="contact-item">
                                <span className="contact-item__icon" aria-hidden="true"><i className={item.icon}></i></span>
                                <span className="contact-item__text">
                                    <span className="contact-item__label">{item.label}</span>
                                    <span className="contact-item__value">{item.value}</span>
                                </span>
                                <span className="contact-item__arrow" aria-hidden="true"><i className="fa-solid fa-arrow-right"></i></span>
                            </a>
                        </Reveal>
                    ))}
                </div>

                <div className="contact-bottom__map">
                    <Reveal delay={2}>
                        <LocationMap location="Melbourne, Australia" coordinates="37.8136° S, 144.9631° E" />
                    </Reveal>
                    <Reveal delay={3}>
                        <div className="contact-bottom__note">
                            <strong>{t(tx, "timezone")}</strong>
                            {t(tx, "timezoneText")}
                        </div>
                    </Reveal>
                    <Reveal delay={4}>
                        <div className="contact-bottom__note">
                            <strong>{t(tx, "responseTime")}</strong>
                            {t(tx, "responseTimeText")}
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}
