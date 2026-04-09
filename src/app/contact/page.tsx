import Reveal from "@/components/Reveal";
import LocationMap from "@/components/LocationMap";

type Item = {
    label: string;
    value: string;
    href: string;
    icon: string;
    external?: boolean;
};

const items: Item[] = [
    {
        label: "Email",
        value: "ditullioalfredo@gmail.com",
        href: "mailto:ditullioalfredo@gmail.com",
        icon: "fa-solid fa-envelope",
    },
    {
        label: "WhatsApp",
        value: "Send me a message",
        href: "https://wa.me/61404809925",
        icon: "fa-brands fa-whatsapp",
        external: true,
    },
    {
        label: "LinkedIn",
        value: "alfredo-di-tullio",
        href: "https://www.linkedin.com/in/alfredo-di-tullio/",
        icon: "fa-brands fa-linkedin-in",
        external: true,
    },
    {
        label: "Instagram",
        value: "@alfred.ditu",
        href: "https://www.instagram.com/alfred.ditu",
        icon: "fa-brands fa-instagram",
        external: true,
    },
    {
        label: "Facebook",
        value: "alfreditullio",
        href: "https://www.facebook.com/alfreditullio",
        icon: "fa-brands fa-facebook-f",
        external: true,
    },
];

export default function Contact() {
    return (
        <div className="container page">
            {/* Hero — text left, floating photo right */}
            <Reveal as="section" className="hero contact-hero">
                <div className="contact-hero__text">
                    <span className="hero__eyebrow">Let&apos;s work together</span>
                    <h1 className="hero__title">
                        Let&apos;s <span className="gradient-text">talk</span>
                    </h1>
                    <p className="hero__tagline">
                        Need a website, a product built from scratch, marketing funnels
                        that actually convert, or software for a dental practice? Whether
                        it&apos;s a small landing page or a full custom platform — drop me
                        a line and we&apos;ll figure it out together.
                    </p>
                </div>

                <div className="contact-hero__photo-area">
                    <div className="contact-hero__blob"></div>
                    <img
                        src="/assets/img/portfolio/everest.webp"
                        alt="Alfredo Di Tullio at Everest Base Camp"
                        className="contact-hero__photo"
                    />
                    <div className="contact-hero__quote-wrap">
                        <p className="contact-hero__quote">
                            <span className="highlight">I dreamed of reaching
                            Everest</span> — and I did it.{" "}
                            <span className="highlight">Now let me help you</span> turn
                            your vision into something real.
                        </p>
                        <span className="contact-hero__caption">
                            Everest Base Camp · 5,364m · 2023
                        </span>
                    </div>
                </div>
            </Reveal>

            {/* Cards left + Map right */}
            <section className="section contact-bottom">
                <div className="contact-bottom__cards">
                    <p className="section__eyebrow">Get in touch</p>
                    {items.map((item, i) => {
                        const delay = ((i % 4) + 1) as 1 | 2 | 3 | 4;
                        return (
                            <Reveal key={item.label} delay={delay}>
                                <a
                                    href={item.href}
                                    target={item.external ? "_blank" : undefined}
                                    rel="noreferrer"
                                    className="contact-item"
                                >
                                    <span className="contact-item__icon" aria-hidden="true">
                                        <i className={item.icon}></i>
                                    </span>
                                    <span className="contact-item__text">
                                        <span className="contact-item__label">
                                            {item.label}
                                        </span>
                                        <span className="contact-item__value">
                                            {item.value}
                                        </span>
                                    </span>
                                    <span className="contact-item__arrow" aria-hidden="true">
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </span>
                                </a>
                            </Reveal>
                        );
                    })}
                </div>

                <div className="contact-bottom__map">
                    <Reveal delay={2}>
                        <LocationMap
                            location="Melbourne, Australia"
                            coordinates="37.8136° S, 144.9631° E"
                        />
                    </Reveal>
                    <Reveal delay={3}>
                        <div className="contact-bottom__note">
                            <strong>Timezone</strong>
                            AEST (UTC+10) — but I work with clients worldwide.
                            Flexible hours, async-friendly.
                        </div>
                    </Reveal>
                    <Reveal delay={4}>
                        <div className="contact-bottom__note">
                            <strong>Response time</strong>
                            I usually reply within 24 hours. For urgent projects,
                            WhatsApp is the fastest way to reach me.
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}
