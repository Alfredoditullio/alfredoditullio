import Link from "next/link";
import Reveal from "@/components/Reveal";
import DisciplinesSlider from "@/components/DisciplinesSlider";

export default function Home() {
    return (
        <div className="container page">
            {/* Hero */}
            <Reveal as="section" className="hero hero--split">
                <div className="hero__text">
                    <span className="hero__eyebrow">Portfolio · 2025</span>
                    <h1 className="hero__title">
                        Alfredo <span className="gradient-text">Di Tullio</span>
                    </h1>
                    <p className="hero__tagline">
                        <strong className="hero__lead-line">
                            I never learned how to pick just one thing.
                        </strong>
                        Trained as a dentist in Argentina. Cooked in Michelin-star
                        kitchens across Denmark, Norway, Spain and Australia. Philosophy
                        graduate, tourism technician, author of two books. Today I build
                        software and websites for whoever needs them — from{" "}
                        <strong style={{ color: "var(--fg)", fontWeight: 600 }}>
                            DentalCore
                        </strong>{" "}
                        to a brand-new site for any business — and write about what
                        happens when disciplines collide.
                    </p>
                    <div className="hero__actions">
                        <Link href="/projects" className="btn btn--primary">
                            View projects <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                        <Link href="/about" className="btn">
                            About me
                        </Link>
                    </div>
                </div>

                <div className="hero__portrait">
                    <div className="hero__portrait-blob"></div>
                    <div className="hero__portrait-frame">
                        <img
                            src="/assets/img/portfolio/nueva.webp"
                            alt="Alfredo Di Tullio"
                            className="hero__portrait-img"
                        />
                    </div>

                    <span className="hero__chip hero__chip--1">
                        <i className="fa-solid fa-tooth"></i> Dentist
                    </span>
                    <span className="hero__chip hero__chip--2">
                        <i className="fa-solid fa-code"></i> Full-stack dev
                    </span>
                    <span className="hero__chip hero__chip--3">
                        <i className="fa-solid fa-feather-pointed"></i> Author · 2 books
                    </span>
                    <span className="hero__chip hero__chip--4">
                        <i className="fa-solid fa-book-open"></i> Philosophy BA
                    </span>
                </div>
            </Reveal>

            <hr className="divider" />

            {/* What I do */}
            <section className="section">
                <Reveal>
                    <p className="section__eyebrow">What I do</p>
                    <h2 className="section__title">A multidisciplinary practice</h2>
                </Reveal>
                <Reveal delay={1}>
                    <DisciplinesSlider />
                </Reveal>
            </section>

            <hr className="divider" />

            {/* Featured project */}
            <section className="section">
                <Reveal>
                    <p className="section__eyebrow">Featured project</p>
                    <h2 className="section__title">
                        <span className="gradient-text">DentalCore</span>
                    </h2>
                    <p className="section__intro">
                        A comprehensive clinical platform for dental practices — patient
                        management, digital odontogram, treatment plans, finance, patient
                        portal — built on a robust, well-architected core with thoughtful AI
                        features layered where they actually help.
                    </p>
                </Reveal>
                <Reveal delay={1}>
                    <Link href="/projects/dentalcore" className="card">
                        <span className="card__label">MVP · In production</span>
                        <h3 className="card__title">DentalCore</h3>
                        <p className="card__text">
                            Patient management, digital odontogram, periodontal charting,
                            treatment plans, finance and patient portal — built with React 19,
                            TypeScript and Supabase, with selective AI assistance where it
                            adds real clinical value.
                        </p>
                        <div className="card__meta">
                            <span className="tag">React 19</span>
                            <span className="tag">TypeScript</span>
                            <span className="tag">Supabase</span>
                            <span className="tag">Zustand</span>
                        </div>
                        <span className="card__cta">
                            Read more <i className="fa-solid fa-arrow-right"></i>
                        </span>
                    </Link>
                </Reveal>
            </section>

            <hr className="divider" />

            {/* As featured in */}
            <section className="section">
                <Reveal>
                    <p className="section__eyebrow">As featured in</p>
                    <h2 className="section__title">In the press</h2>
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
                                    alt="Alfredo Di Tullio at the Horizontes Infinitos book launch"
                                    className="press-tile__image"
                                />
                            </div>
                            <div className="press-tile__body">
                                <div className="press-tile__outlet">
                                    <span className="press-tile__name">Veu Catalana</span>
                                    <span className="press-tile__year">2025</span>
                                </div>
                                <p className="press-tile__quote">
                                    &ldquo;Horizontes Infinitos: philosophy, travel and
                                    reflection in Alfredo Di Tullio&apos;s new work.&rdquo;
                                </p>
                                <span className="press-tile__cta">
                                    Read review{" "}
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
                                    alt="La Nación feature on Alfredo Di Tullio"
                                    className="press-tile__image"
                                />
                            </div>
                            <div className="press-tile__body">
                                <div className="press-tile__outlet">
                                    <span className="press-tile__name">La Nación</span>
                                    <span className="press-tile__year">2024</span>
                                </div>
                                <p className="press-tile__quote">
                                    &ldquo;Argentina felt incomplete — I found what I was
                                    looking for on the other side of the world.&rdquo;
                                </p>
                                <span className="press-tile__cta">
                                    Read article{" "}
                                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                </span>
                            </div>
                        </a>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}
