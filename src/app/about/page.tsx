import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import PhotoCarousel from "@/components/PhotoCarousel";

const education = [
    {
        year: "2024",
        title: "Full Stack Web Development",
        org: "Universidad Nacional de Córdoba",
    },
    {
        year: "2024",
        title: "University Technician in Tourism",
        org: "Universidad Nacional de Tres de Febrero",
    },
    {
        year: "2023",
        title: "B.A. in Philosophy",
        org: "Universidad TECH",
    },
    {
        year: "2018",
        title: "International Chef Diploma",
        org: "IGA, La Plata",
    },
    {
        year: "2013",
        title: "Dentist (Odontólogo)",
        org: "Universidad Nacional de La Plata",
    },
];

const experience = [
    {
        year: "2024 – present",
        title: "Web Designer & Developer",
        org: "Independent — clinics and small businesses",
    },
    {
        year: "2024 – present",
        title: "Marketing & Sales Funnels Consultant",
        org: "Independent — strategy, copy and conversion",
    },
    {
        year: "2018 – 2024",
        title: "Chef",
        org: "Denmark · Norway · Spain · Australia — Michelin-star experience",
    },
    {
        year: "2018 – 2020",
        title: "General Dentist",
        org: "Argentina",
    },
    {
        year: "2017 – 2020",
        title: "Physiology Lecturer",
        org: "Universidad Nacional de La Plata",
    },
];

const offTheClock = [
    {
        icon: "fa-solid fa-mountain-sun",
        title: "Trekking",
        text: "Made it to Everest Base Camp in 2023. Type 2 fun at its finest.",
    },
    {
        icon: "fa-solid fa-guitar",
        title: "Music",
        text: "Self-taught guitar player. Also dabble in piano, bass and drums.",
    },
    {
        icon: "fa-solid fa-tennis-ball",
        title: "Tennis",
        text: "Lifelong love. Casual player, competitive spirit.",
    },
    {
        icon: "fa-solid fa-language",
        title: "Languages",
        text: "ES · EN · FR · PT — currently learning Greek.",
    },
    {
        icon: "fa-solid fa-paw",
        title: "Dogs",
        text: "Pepperina, my Cocker Spaniel, runs the house. Unconditional team dog.",
    },
    {
        icon: "fa-solid fa-earth-americas",
        title: "Travel",
        text: "Lived in 5 countries so far. Always planning the next move.",
    },
];

export default function About() {
    return (
        <div className="container page">
            <Reveal as="section" className="hero" >
                <span className="hero__eyebrow">About</span>
                <h1 className="hero__title">
                    A curious mind at the{" "}
                    <span className="gradient-text">intersection of fields</span>
                </h1>
            </Reveal>

            <div className="about__grid">
                <div>
                    <Reveal>
                        <p className="about__intro">
                            I&apos;m a dentist, developer and writer from La Plata,
                            Argentina, currently based in Melbourne, Australia. I trained
                            as a dentist at the National University of La Plata, hold a
                            B.A. in Philosophy from Universidad TECH and a University
                            Technician degree in Tourism from UNTREF. My journey also took
                            me through Michelin-star kitchens across Denmark, Norway, Spain
                            and Australia. I believe the most interesting work happens
                            where disciplines meet.
                        </p>
                    </Reveal>

                    <section className="section">
                        <Reveal>
                            <p className="section__eyebrow">Education</p>
                        </Reveal>
                        <Reveal delay={1}>
                            <div className="timeline">
                                {education.map((item) => (
                                    <div key={item.title} className="timeline__item">
                                        <div className="timeline__year">{item.year}</div>
                                        <div>
                                            <h3 className="timeline__title">{item.title}</h3>
                                            <p className="timeline__org">{item.org}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Reveal>
                    </section>

                    <section className="section">
                        <Reveal>
                            <p className="section__eyebrow">Experience</p>
                        </Reveal>
                        <Reveal delay={1}>
                            <div className="timeline">
                                {experience.map((item) => (
                                    <div key={item.title} className="timeline__item">
                                        <div className="timeline__year">{item.year}</div>
                                        <div>
                                            <h3 className="timeline__title">{item.title}</h3>
                                            <p className="timeline__org">{item.org}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Reveal>
                    </section>

                    <section className="section">
                        <Reveal>
                            <p className="section__eyebrow">Off the clock</p>
                            <h2 className="section__title">Beyond the CV</h2>
                        </Reveal>
                        <div className="otc-grid">
                            {offTheClock.map((item, i) => (
                                <Reveal
                                    key={item.title}
                                    delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
                                >
                                    <TiltCard className="otc-card">
                                        <div className="otc-card__icon">
                                            <i className={item.icon}></i>
                                        </div>
                                        <h3 className="otc-card__title">{item.title}</h3>
                                        <p className="otc-card__text">{item.text}</p>
                                    </TiltCard>
                                </Reveal>
                            ))}
                        </div>
                    </section>

                </div>

                <Reveal as="aside" delay={1}>
                    <div className="about__sidebar">
                        <div className="about__photo-wrap">
                            <img
                                src="/assets/img/portfolio/yo-clinic.webp"
                                alt="Alfredo Di Tullio at his dental practice"
                                className="about__photo"
                            />
                            <span className="about__photo-caption">
                                Clinical practice · La Plata
                            </span>
                        </div>
                        <div className="about__photo-wrap">
                            <img
                                src="/assets/img/portfolio/chef.webp"
                                alt="Alfredo Di Tullio in a Michelin-star kitchen"
                                className="about__photo"
                            />
                            <span className="about__photo-caption">
                                Kiin-kiin · Copenhagen
                            </span>
                        </div>
                        <div className="meta-list">
                            <div className="meta-list__item">
                                <span className="meta-list__label">Age</span>
                                <span className="meta-list__value">33</span>
                            </div>
                            <div className="meta-list__item">
                                <span className="meta-list__label">Based in</span>
                                <span className="meta-list__value">Melbourne, Australia</span>
                            </div>
                            <div className="meta-list__item">
                                <span className="meta-list__label">Email</span>
                                <span className="meta-list__value">
                                    ditullioalfredo@gmail.com
                                </span>
                            </div>
                            <div className="meta-list__item">
                                <span className="meta-list__label">Languages</span>
                                <span className="meta-list__value">ES · EN · FR · PT</span>
                            </div>
                        </div>

                        <div className="social-block">
                            <p className="social-block__label">Find me on</p>
                            <div className="social-block__row">
                                <a
                                    href="https://www.linkedin.com/in/alfredo-di-tullio/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="social-btn"
                                    aria-label="LinkedIn"
                                >
                                    <i className="fa-brands fa-linkedin-in"></i>
                                    <span>LinkedIn</span>
                                </a>
                                <a
                                    href="https://www.instagram.com/alfred.ditu"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="social-btn"
                                    aria-label="Instagram"
                                >
                                    <i className="fa-brands fa-instagram"></i>
                                    <span>Instagram</span>
                                </a>
                                <a
                                    href="https://www.facebook.com/alfreditullio"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="social-btn"
                                    aria-label="Facebook"
                                >
                                    <i className="fa-brands fa-facebook-f"></i>
                                    <span>Facebook</span>
                                </a>
                            </div>
                        </div>

                        <PhotoCarousel
                            slides={[
                                {
                                    src: "/assets/img/portfolio/basecamp.webp",
                                    alt: "Trekking to Everest Base Camp",
                                    label: "Everest Base Camp · 2023",
                                },
                                {
                                    src: "/assets/img/portfolio/music.webp",
                                    alt: "Playing music",
                                    label: "Music",
                                },
                                {
                                    src: "/assets/img/portfolio/tennis.webp",
                                    alt: "Playing tennis",
                                    label: "Tennis",
                                },
                                {
                                    src: "/assets/img/portfolio/pepperina.webp",
                                    alt: "Pepperina the Cocker Spaniel",
                                    label: "Pepperina",
                                },
                                {
                                    src: "/assets/img/portfolio/jordan.webp",
                                    alt: "Traveling in Jordan",
                                    label: "Jordan",
                                },
                            ]}
                        />
                    </div>
                </Reveal>
            </div>

        </div>
    );
}
