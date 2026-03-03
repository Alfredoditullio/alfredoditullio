export default function SobreMi() {
    return (
        <main className="layout__content">
            <section className="content__page content__about">
                <header className="about__header">
                    <h1 className="about__title">Sobre <span className="title__color">Mi</span></h1>
                </header>

                <section className="about__personal-info">
                    <article className="personal-info__bio">
                        <p className="personal-info__description">Bienvenido a mi mundo, donde la diversidad de intereses se encuentra con la profundidad del conocimiento. Soy una mente inquieta y creativa dedicada a explorar las vastas fronteras de la odontología, la filosofía, el turismo, la tecnología, la escritura, y el arte culinario. Cada día, busco entrelazar estas disciplinas aparentemente dispares para crear experiencias únicas, soluciones innovadoras y perspectivas enriquecedoras. Mi viaje profesional es un testimonio de mi pasión por el aprendizaje continuo, el deseo de superar los límites convencionales y la convicción de que la verdadera magia ocurre en la intersección del conocimiento. Bienvenidos a mi espacio, donde las ideas se transforman y las posibilidades son infinitas.</p>
                    </article>

                    <div className="personal-info__data">
                        <ul className="personal-info__list">
                            <li className="personal-info__option">
                                <span className="personal-info__title">Edad</span>
                                <span className="personal-info__value">31</span>
                            </li>

                            <li className="personal-info__option">
                                <span className="personal-info__title">Pais</span>
                                <span className="personal-info__value">Argentina</span>
                            </li>

                            <li className="personal-info__option">
                                <span className="personal-info__title">Dirección</span>
                                <span className="personal-info__value">La Plata</span>
                            </li>

                            <li className="personal-info__option">
                                <span className="personal-info__title">Correo</span>
                                <span className="personal-info__value">ditullioalfredo@gmail.com</span>
                            </li>

                            <li className="personal-info__option">
                                <span className="personal-info__title">Teléfono</span>
                                <span className="personal-info__value">+610404809925</span>
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="about__servicios">
                    <header className="servicios__header">
                        <h2 className="servicios__title">Lo que <span className="title__color">hago</span></h2>
                    </header>

                    <div className="servicios__container">
                        <article className="servicios__servicio">
                            <div className="servicio__icon">
                                <i className="fa-solid fa-code"></i>
                            </div>

                            <div className="servicio__content">
                                <h4 className="servicio__title">Programación</h4>
                                <p className="servicio__description">En el mundo digital, mi pasión reside en convertir ideas complejas en soluciones tecnológicas elegantes y eficientes. Con una sólida base en lenguajes de programación y marcos de desarrollo, me dedico a construir experiencias digitales que no solo cumplen con los objetivos de negocio, sino que también brindan una interacción intuitiva y placentera para el usuario. Desde aplicaciones web hasta soluciones móviles, mi enfoque es siempre innovar y superar los límites de lo posible.</p>
                            </div>
                        </article>

                        <article className="servicios__servicio">
                            <div className="servicio__icon">
                                <i className="fa-solid fa-chalkboard-user"></i>
                            </div>

                            <div className="servicio__content">
                                <h4 className="servicio__title">Docencia</h4>
                                <p className="servicio__description">Mi compromiso con el conocimiento trasciende las fronteras de lo personal para adentrarse en el ámbito de lo compartido. A través de la docencia, busco inspirar y nutrir mentes curiosas, guiándolas a través de los intrincados caminos de la filosofía, la tecnología y más allá. Como escritor, exploro las profundidades del pensamiento humano y el impacto de nuestras acciones en el mundo que nos rodea, siempre en busca de despertar una reflexión crítica y un deseo de aprendizaje constante en mis lectores.</p>
                            </div>
                        </article>

                        <article className="servicios__servicio">
                            <div className="servicio__icon">
                                <i className="fa-solid fa-computer"></i>
                            </div>

                            <div className="servicio__content">
                                <h4 className="servicio__title">Diseño UX/UI</h4>
                                <p className="servicio__description">Creo firmemente que la clave de un producto digital exitoso reside en su capacidad para conectar con el usuario a nivel emocional y funcional. Es por eso que me especializo en diseño UX/UI, donde combino principios de psicología, diseño visual y tecnología para crear experiencias memorables. Mediante un enfoque centrado en el usuario, me esfuerzo por diseñar interfaces que no solo sean atractivas visualmente, sino también intuitivas y accesibles para todos.</p>
                            </div>
                        </article>

                        <article className="servicios__servicio">
                            <div className="servicios__servicio--chef">
                                <svg xmlns="http://www.w3.org/2000/svg" className="chef__icono" width="56" height="56" viewBox="0 0 24 24" strokeWidth="2" stroke="#04B4E0" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M12 3c1.918 0 3.52 1.35 3.91 3.151a4 4 0 0 1 2.09 7.723l0 7.126h-12v-7.126a4 4 0 1 1 2.092 -7.723a4 4 0 0 1 3.908 -3.151z" />
                                    <path d="M6.161 17.009l11.839 -.009" />
                                </svg>
                            </div>

                            <div className="servicio__content">
                                <h4 className="servicio__title">Gastronomía</h4>
                                <p className="servicio__description">La cocina es mi campo de expresión artística y experimentación sensorial. Como chef calificado, me deleito en explorar la rica diversidad de sabores, texturas y aromas que ofrece el mundo culinario. Mi enfoque en la gastronomía se centra en fusionar técnicas tradicionales con innovaciones contemporáneas para crear platillos que deleitan el paladar y provocan conversaciones.</p>
                            </div>
                        </article>

                        <article className="servicios__servicio">
                            <div className="servicio__icon">
                                <i className="fa-solid fa-chalkboard-user"></i>
                            </div>

                            <div className="servicio__content">
                                <h4 className="servicio__title">Escritura</h4>
                                <p className="servicio__description">Mi compromiso con el conocimiento trasciende las fronteras de lo personal para adentrarse en el ámbito de lo compartido. A través de la docencia, busco inspirar y nutrir mentes curiosas, guiándolas a través de los intrincados caminos de la filosofía, la tecnología y más allá. Como escritor, exploro las profundidades del pensamiento humano y el impacto de nuestras acciones en el mundo que nos rodea, siempre en busca de despertar una reflexión crítica y un deseo de aprendizaje constante en mis lectores.</p>
                            </div>
                        </article>

                        <div className="contenedor__diente">
                            <svg xmlns="http://www.w3.org/2000/svg" className="diente__icono" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 5.5c-1.074 -.586 -2.583 -1.5 -4 -1.5c-2.1 0 -4 1.247 -4 5c0 4.899 1.056 8.41 2.671 10.537c.573 .756 1.97 .521 2.567 -.236c.398 -.505 .819 -1.439 1.262 -2.801c.292 -.771 .892 -1.504 1.5 -1.5c.602 0 1.21 .737 1.5 1.5c.443 1.362 .864 2.295 1.262 2.8c.597 .759 2 .993 2.567 .237c1.615 -2.127 2.671 -5.637 2.671 -10.537c0 -3.74 -1.908 -5 -4 -5c-1.423 0 -2.92 .911 -4 1.5z" />
                                <path d="M12 5.5l3 1.5" />
                            </svg>
                        </div>

                        <article className="servicios__servicio--odonto">
                            <div className="servicio__content">
                                <h4 className="servicio__title">Odontología</h4>
                                <p className="servicio__description">Mi compromiso con el conocimiento trasciende las fronteras de lo personal para adentrarse en el ámbito de lo compartido. A través de la docencia, busco inspirar y nutrir mentes curiosas, guiándolas a través de los intrincados caminos de la filosofía, la tecnología y más allá. Como escritor, exploro las profundidades del pensamiento humano y el impacto de nuestras acciones en el mundo que nos rodea, siempre en busca de despertar una reflexión crítica y un deseo de aprendizaje constante en mis lectores.</p>
                            </div>
                        </article>
                    </div>
                </section>

                <section className="about__reviews">
                    <header className="reviews__header">
                        <h2 className="reviews__title reviews__title--nota"><span className="title__color">Conocé </span>mi historia</h2>
                    </header>
                </section>

                <section className="container__nota">
                    <div className="nota__ln">
                        <a href="https://www.lanacion.com.ar/lifestyle/en-argentina-algo-le-faltaba-y-hallo-el-destino-que-buscaba-en-el-mundo-este-paraiso-me-dio-tiempo-nid08052024/" target="_blank" rel="noreferrer">
                            <img className="iamgen__nota" src="/assets/img/la nacion.png" alt="Australia" />
                        </a>
                        <div className="texto__nota">
                            <p className="nota__texto">Nota para el diario La Nación</p>
                        </div>
                    </div>
                </section>

            </section>
        </main>
    );
}
