import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function Projects() {
    return (
        <div className="container page">
            <Reveal as="section" className="hero projects-hero">
                <div className="projects-hero__text">
                    <span className="hero__eyebrow">Projects</span>
                    <h1 className="hero__title">
                        Things I&apos;m <span className="gradient-text">building</span>
                    </h1>
                    <p className="hero__tagline">
                        From clinical software for dentistry to financial education tools — I
                        build robust, well-architected products where I see a real-world need
                        I can solve.
                    </p>
                </div>
                <div className="projects-hero__visual" aria-hidden="true">
                    <div className="projects-hero__blob"></div>
                    <img
                        src="/assets/img/portfolio/pc.webp"
                        alt=""
                        className="projects-hero__pc"
                    />
                </div>
            </Reveal>

            <section className="section projects-grid">
                {/* DentalCore */}
                <Reveal delay={1}>
                    <Link href="/projects/dentalcore" className="card project-card">
                        <div className="project-card__image-wrap">
                            <img
                                src="/assets/img/portfolio/dentalcore.webp"
                                alt="DentalCore app screenshot"
                                className="project-card__image"
                            />
                        </div>
                        <div className="project-card__body">
                            <span className="card__label">MVP · In production</span>
                            <h3 className="card__title">DentalCore</h3>
                            <p className="card__text">
                                A comprehensive clinical platform for dental practices —
                                patient management, digital odontogram, periodontal charting,
                                treatment plans, finance and patient portal — built on a
                                robust core with selective AI assistance where it adds real
                                clinical value. Already running at a clinic in Misiones,
                                Argentina.
                            </p>
                            <div className="card__meta">
                                <span className="tag">React 19</span>
                                <span className="tag">TypeScript</span>
                                <span className="tag">Supabase</span>
                                <span className="tag">Zustand</span>
                                <span className="tag">Gemini AI</span>
                            </div>
                            <span className="card__cta">
                                Read more <i className="fa-solid fa-arrow-right"></i>
                            </span>
                        </div>
                    </Link>
                </Reveal>

                {/* Camila Chesani Odontología — DentalCore live deployment */}
                <Reveal delay={2}>
                    <a
                        href="https://camila.dentalcore.app/"
                        target="_blank"
                        rel="noreferrer"
                        className="card project-card"
                    >
                        <div className="project-card__image-wrap">
                            <img
                                src="/assets/img/portfolio/camila.webp"
                                alt="Camila Chesani Odontología website"
                                className="project-card__image"
                            />
                        </div>
                        <div className="project-card__body">
                            <span className="card__label">Live · Production</span>
                            <h3 className="card__title">Camila Chesani Odontología</h3>
                            <p className="card__text">
                                A real-world deployment of DentalCore powering both the public
                                clinic site and the internal practice management for Dr.
                                Camila Chesani in El Dorado, Misiones. Online appointment
                                booking, ten dental specialties and full integration with the
                                clinical platform.
                            </p>
                            <div className="card__meta">
                                <span className="tag">DentalCore</span>
                                <span className="tag">Next.js</span>
                                <span className="tag">Production</span>
                                <span className="tag">El Dorado, Misiones</span>
                            </div>
                            <span className="card__cta">
                                Visit clinic site{" "}
                                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            </span>
                        </div>
                    </a>
                </Reveal>

                {/* FG Capital */}
                <Reveal delay={3}>
                    <a
                        href="https://fgcapital.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                        className="card project-card"
                    >
                        <div className="project-card__image-wrap">
                            <img
                                src="/assets/img/portfolio/fgcapital.webp"
                                alt="FG Capital website"
                                className="project-card__image"
                            />
                        </div>
                        <div className="project-card__body">
                            <span className="card__label">Live · External</span>
                            <h3 className="card__title">FG Capital</h3>
                            <p className="card__text">
                                Financial education and investment platform aimed at Argentine
                                residents looking to build literacy and make informed
                                decisions about their money. A clean, content-driven Next.js
                                site built and deployed on Vercel.
                            </p>
                            <div className="card__meta">
                                <span className="tag">Next.js</span>
                                <span className="tag">React</span>
                                <span className="tag">Vercel</span>
                                <span className="tag">Finance</span>
                            </div>
                            <span className="card__cta">
                                Visit site{" "}
                                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            </span>
                        </div>
                    </a>
                </Reveal>
            </section>
        </div>
    );
}
