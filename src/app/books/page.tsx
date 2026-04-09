import Reveal from "@/components/Reveal";

export default function Books() {
    return (
        <div className="container page">
            <Reveal as="section" className="hero books-hero">
                <div className="books-hero__text">
                    <span className="hero__eyebrow">Books</span>
                    <h1 className="hero__title">
                        Things I&apos;ve <span className="gradient-text">written</span>
                    </h1>
                    <p className="hero__tagline">
                        Writing has always been a way for me to make sense of things — from
                        clinical experience to philosophy and travel.
                    </p>
                </div>
                <figure className="books-hero__figure">
                    <img
                        src="/assets/img/portfolio/presentacion.webp"
                        alt="Alfredo Di Tullio at the Horizontes Infinitos book launch"
                        className="books-hero__image"
                    />
                    <figcaption className="books-hero__caption">
                        Horizontes Infinitos · Book launch · 2025
                    </figcaption>
                </figure>
            </Reveal>

            {/* Book 2 — Horizontes Infinitos (latest) */}
            <section className="section">
                <Reveal>
                    <p className="section__eyebrow">Latest release</p>
                </Reveal>
                <Reveal delay={1}>
                    <article className="book-card">
                        <img
                            src="/assets/img/portfolio/horizontes-infinitos.webp"
                            alt="Horizontes Infinitos — book cover"
                            className="book-card__cover"
                        />
                        <div>
                            <p className="book-card__subtitle">Philosophy &amp; travel · 2025</p>
                            <h2 className="book-card__title">Horizontes Infinitos</h2>
                            <p className="book-card__text">
                                My second book, published by Letrame Grupo Editorial in January
                                2025. A collection of philosophical reflections shaped by years
                                of travel — an invitation to look beyond the obvious, find
                                meaning in unexpected places and embrace the infinite horizon
                                that opens up when you keep moving. Reviewed by{" "}
                                <em>Veu Catalana</em>.
                            </p>
                            <div className="hero__actions">
                                <a
                                    href="https://www.amazon.com/-/es/Alfredo-Tullio-ebook/dp/B0DNZY548J"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn--primary"
                                >
                                    Get it on Amazon{" "}
                                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                </a>
                                <a
                                    href="https://veucatalana.cat/horizontes-infinitos-filosofia-viajes-y-reflexion-en-la-nueva-obra-de-alfredo-di-tullio/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn"
                                >
                                    Read the review
                                </a>
                            </div>
                        </div>
                    </article>
                </Reveal>
            </section>

            {/* Book 1 — En búsqueda del sentido */}
            <section className="section">
                <Reveal>
                    <p className="section__eyebrow">First book</p>
                </Reveal>
                <Reveal delay={1}>
                    <article className="book-card">
                        <img
                            src="/assets/img/portada.png"
                            alt="En búsqueda del sentido — book cover"
                            className="book-card__cover"
                        />
                        <div>
                            <p className="book-card__subtitle">Philosophy · 2023</p>
                            <h2 className="book-card__title">En búsqueda del sentido</h2>
                            <p className="book-card__text">
                                A personal essay on meaning, work and the small decisions that
                                shape a life. Written after leaving dentistry behind to cook in
                                Michelin kitchens across Europe and Australia, it weaves
                                together philosophy, memoir and travel writing. Available on
                                Amazon Australia and mentioned in <em>La Nación</em>.
                            </p>
                            <a
                                href="https://www.amazon.com.au/b%C3%BAsqueda-del-sentido-encontrar-sinsentido/dp/B0CKX2PMGT"
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn--primary"
                            >
                                Get it on Amazon{" "}
                                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            </a>
                        </div>
                    </article>
                </Reveal>
            </section>
        </div>
    );
}
