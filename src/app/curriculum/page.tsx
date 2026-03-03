export default function Curriculum() {
    return (
        <main className="layout__content">
            <section className="content__page content__resume">
                <header className="resume__header">
                    <h1 className="resume__title">Curriculum</h1>
                </header>

                <div className="resume__container">
                    <section className="resume__left">
                        <header className="resume__subheader">
                            <h2 className="resume__subtitle">Formación <span className="subtitle__color">Universitaria</span></h2>
                        </header>

                        <div className="resume__timelines">
                            <article className="timelines__timeline">
                                <header className="timeline__header">
                                    <h4 className="timeline__year">2013</h4>
                                    <span className="timeline__company">Universidad Nacional de La Plata</span>
                                </header>
                                <div className="timeline__divider"></div>
                                <div className="timeline__description">
                                    <h3 className="timeline__title">Odontólogo</h3>
                                    <p className="timeline__text">Odóntologo general</p>
                                </div>
                            </article>

                            <article className="timelines__timeline">
                                <header className="timeline__header">
                                    <h4 className="timeline__year">2018</h4>
                                    <span className="timeline__company">IGA - La Plata</span>
                                </header>
                                <div className="timeline__divider"></div>
                                <div className="timeline__description">
                                    <h3 className="timeline__title">Chef Internacional</h3>
                                    <p className="timeline__text">Diplomado en Gastronomía y Alta Cocina</p>
                                </div>
                            </article>

                            <article className="timelines__timeline">
                                <header className="timeline__header">
                                    <h4 className="timeline__year">2023</h4>
                                    <span className="timeline__company">Universidad TECH</span>
                                </header>
                                <div className="timeline__divider"></div>
                                <div className="timeline__description">
                                    <h3 className="timeline__title">Licenciado en Filosofía</h3>
                                    <p className="timeline__text">Filosofía general e historia</p>
                                </div>
                            </article>

                            <article className="timelines__timeline">
                                <header className="timeline__header">
                                    <h4 className="timeline__year">2024</h4>
                                    <span className="timeline__company">Universidad Nacional de Tres de Febrero</span>
                                </header>
                                <div className="timeline__divider"></div>
                                <div className="timeline__description">
                                    <h3 className="timeline__title">Técnico Univesitario en Turismo</h3>
                                    <p className="timeline__text">(Actualmente cursando la licenciatura)</p>
                                </div>
                            </article>

                            <article className="timelines__timeline">
                                <header className="timeline__header">
                                    <h4 className="timeline__year">2024</h4>
                                    <span className="timeline__company">Universidad Nacional de Córdoba</span>
                                </header>
                                <div className="timeline__divider"></div>
                                <div className="timeline__description">
                                    <h3 className="timeline__title">Dilpomado en Desarrollo Web </h3>
                                    <p className="timeline__text">Desarrollador web Full Stack</p>
                                </div>
                            </article>
                        </div>

                        <header className="resume__subheader">
                            <h2 className="resume__subtitle">Experiencia <span className="subtitle__color">Laboral</span></h2>
                        </header>

                        <div className="resume__timelines">
                            <article className="timelines__timeline">
                                <header className="timeline__header">
                                    <h4 className="timeline__year">2017 - 2020</h4>
                                    <span className="timeline__company">Universidad Nacional de La Plata</span>
                                </header>
                                <div className="timeline__divider"></div>
                                <div className="timeline__description">
                                    <h3 className="timeline__title">Docente de Fisiología</h3>
                                    <p className="timeline__text">Ayudante diplomado</p>
                                </div>
                            </article>

                            <article className="timelines__timeline">
                                <header className="timeline__header">
                                    <h4 className="timeline__year">2018- 2020</h4>
                                    <span className="timeline__company">Odontología Integral Martinez</span>
                                </header>
                                <div className="timeline__divider"></div>
                                <div className="timeline__description">
                                    <h3 className="timeline__title">Odontólogo</h3>
                                    <p className="timeline__text">Odontología general y Urgencias</p>
                                </div>
                            </article>

                            <article className="timelines__timeline timelines__timeline--chef">
                                <header className="timeline__header">
                                    <h4 className="timeline__year">2021- 2023</h4>
                                    <span className="timeline__company">Kiin-kiin (Copenhague, Denmark)</span>
                                </header>
                                <div className="timeline__divider"></div>
                                <div className="timeline__description">
                                    <h3 className="timeline__title">Chef de Partie</h3>
                                    <p className="timeline__text">Chef at a Michelin-star Restaurante</p>
                                </div>
                            </article>

                            <article className="timelines__timeline">
                                <header className="timeline__header">
                                    <h4 className="timeline__year">2023- 2024</h4>
                                    <span className="timeline__company">Graze (Daydream Island, Australia)</span>
                                </header>
                                <div className="timeline__divider"></div>
                                <div className="timeline__description">
                                    <h3 className="timeline__title">Commis Chef</h3>
                                    <p className="timeline__text">Breakfast-buffet chef</p>
                                </div>
                            </article>
                        </div>
                    </section>

                    <section className="resume__right">
                        <header className="resume__subheader">
                            <h2 className="resume__subtitle">Habilidades de <span className="subtitle__color">Diseño</span></h2>
                        </header>

                        <div className="resume__skills">
                            <article className="skills__title">
                                <h4 className="skills__text">Programación</h4>
                                <span className="skills__number">90%</span>
                            </article>
                            <div className="skills__progressbar">
                                <div className="skills__percentage skills__percentage--p1"></div>
                            </div>

                            <article className="skills__title">
                                <h4 className="skills__text">Desarrollo y Diseño Web</h4>
                                <span className="skills__number">70%</span>
                            </article>
                            <div className="skills__progressbar">
                                <div className="skills__percentage skills__percentage--p2"></div>
                            </div>

                            <article className="skills__title">
                                <h4 className="skills__text">Diseño de Mockups</h4>
                                <span className="skills__number">100%</span>
                            </article>
                            <div className="skills__progressbar">
                                <div className="skills__percentage skills__percentage--p3"></div>
                            </div>

                            <article className="skills__title">
                                <h4 className="skills__text">Diseño de Banners</h4>
                                <span className="skills__number">80%</span>
                            </article>
                            <div className="skills__progressbar">
                                <div className="skills__percentage skills__percentage--p4"></div>
                            </div>
                        </div>

                        <header className="resume__subheader">
                            <h2 className="resume__subtitle">Habilidades de <span className="subtitle__color">código</span></h2>
                        </header>

                        <div className="resume__skills">
                            <article className="skills__title">
                                <h4 className="skills__text">JavaScript</h4>
                                <span className="skills__number">90%</span>
                            </article>
                            <div className="skills__progressbar">
                                <div className="skills__percentage skills__percentage--p5"></div>
                            </div>

                            <article className="skills__title">
                                <h4 className="skills__text">NodeJS</h4>
                                <span className="skills__number">70%</span>
                            </article>
                            <div className="skills__progressbar">
                                <div className="skills__percentage skills__percentage--p6"></div>
                            </div>

                            <article className="skills__title">
                                <h4 className="skills__text">HTML/CSS</h4>
                                <span className="skills__number">100%</span>
                            </article>
                            <div className="skills__progressbar">
                                <div className="skills__percentage skills__percentage--p7"></div>
                            </div>

                            <article className="skills__title">
                                <h4 className="skills__text">React</h4>
                                <span className="skills__number">80%</span>
                            </article>
                            <div className="skills__progressbar">
                                <div className="skills__percentage skills__percentage--p8"></div>
                            </div>

                            <article className="skills__title">
                                <h4 className="skills__text">Github</h4>
                                <span className="skills__number">85%</span>
                            </article>
                            <div className="skills__progressbar">
                                <div className="skills__percentage skills__percentage--p9"></div>
                            </div>
                        </div>

                        <header className="resume__subheader">
                            <h2 className="resume__subtitle">Conocimientos y <span className="subtitle__color">Hobbies</span></h2>
                        </header>

                        <div className="resume__knodgleges">
                            <ul className="knowdleges__list">
                                <li className="knodleges__option">Programación</li>
                                <li className="knodleges__option">Desarrollo web</li>
                                <li className="knodleges__option">Odontología</li>
                                <li className="knodleges__option">Docencia</li>
                                <li className="knodleges__option">Filosofía</li>
                                <li className="knodleges__option">Gastronomía</li>
                                <li className="knodleges__option">Escritura</li>
                                <li className="knodleges__option">Música</li>
                                <li className="knodleges__option">Tenis</li>
                                <li className="knodleges__option">Diseño UX/UI</li>
                                <li className="knodleges__option">Montañismo</li>
                            </ul>
                        </div>

                        <section className="languages">
                            <header className="languages__header">
                                <h2><span className="subtitle__color">Idiomas</span></h2>
                            </header>

                            <article className="skills__title">
                                <h4 className="skills__text">Español</h4>
                                <span className="skills__number">100%</span>
                            </article>
                            <div className="skills__progressbar">
                                <div className="skills__percentage skills__percentage--p3"></div>
                            </div>

                            <article className="skills__title">
                                <h4 className="skills__text">Ingles</h4>
                                <span className="skills__number">80%</span>
                            </article>
                            <div className="skills__progressbar">
                                <div className="skills__percentage skills__percentage--p8"></div>
                            </div>

                            <article className="skills__title">
                                <h4 className="skills__text">Francés</h4>
                                <span className="skills__number">50%</span>
                            </article>
                            <div className="skills__progressbar">
                                <div className="skills__percentage skills__percentage--10"></div>
                            </div>

                            <article className="skills__title">
                                <h4 className="skills__text">Portugués</h4>
                                <span className="skills__number">50%</span>
                            </article>
                            <div className="skills__progressbar">
                                <div className="skills__percentage skills__percentage--11"></div>
                            </div>
                        </section>
                    </section>
                </div>

                <div className="resume__certificates">
                    <header className="resume__subheader">
                        <h2 className="resume__subtitle"><span className="subtitle__color">Certificados</span></h2>
                    </header>

                    <section className="certificates__container">
                        <article className="certificates__certificate">
                            <div className="certificate__logo">
                                <img src="/assets/img/certificado-1.png" className="certificate__image" />
                            </div>
                            <div className="certificate__content">
                                <h4 className="certificate__title">Certificación Profesional en UX Design</h4>
                                <span className="certificate__id">ID de Verificación: 2233345</span>
                                <span className="certificate__date">10 enero 2024</span>
                            </div>
                        </article>

                        <article className="certificates__certificate">
                            <div className="certificate__logo">
                                <img src="/assets/img/certificado-1.png" className="certificate__image" />
                            </div>
                            <div className="certificate__content">
                                <h4 className="certificate__title">Marketing Digital Gastronómico</h4>
                                <span className="certificate__id">ID de Verificación: 2233345</span>
                                <span className="certificate__date">10 enero 2024</span>
                            </div>
                        </article>

                        <article className="certificates__certificate">
                            <div className="certificate__logo">
                                <img src="/assets/img/certificado-1.png" className="certificate__image" />
                            </div>
                            <div className="certificate__content">
                                <h4 className="certificate__title">Comunicaciones integradas de marketing</h4>
                                <span className="certificate__id">ID de Verificación: TFMH4M47GV8V</span>
                                <span className="certificate__date">28 septiembre 2020</span>
                            </div>
                        </article>

                        <article className="certificates__certificate">
                            <div className="certificate__logo">
                                <img src="/assets/img/certificado-1.png" className="certificate__image" />
                            </div>
                            <div className="certificate__content">
                                <h4 className="certificate__title">Master en HTML, CSS & JavaScript</h4>
                                <span className="certificate__id">ID verificación: 1122345</span>
                                <span className="certificate__date">4 mayo 2024</span>
                            </div>
                        </article>

                        <article className="certificates__certificate">
                            <div className="certificate__logo">
                                <img src="/assets/img/certificado-1.png" className="certificate__image" />
                            </div>
                            <div className="certificate__content">
                                <h4 className="certificate__title">Gestión Empresarial Exitosa para Pymes</h4>
                                <span className="certificate__id">ID verificación: GGSRT7BMVY6X</span>
                                <span className="certificate__date">20 septiembre 2020</span>
                            </div>
                        </article>

                        <article className="certificates__certificate">
                            <div className="certificate__logo">
                                <img src="/assets/img/certificado-1.png" className="certificate__image" />
                            </div>
                            <div className="certificate__content">
                                <h4 className="certificate__title">Master en Figma, AdobeXD & Sketch</h4>
                                <span className="certificate__id">ID verificación: 1122345</span>
                                <span className="certificate__date">4 mayo 2024</span>
                            </div>
                        </article>
                    </section>
                </div>
            </section>
        </main>
    );
}
