export default function Portafolio() {
    return (
        <main className="layout__content">
            <section className="content__page content__portfolio">
                <header className="portfolio__header">
                    <h1 className="portfolio__title">Portafolio</h1>
                </header>

                <nav className="portfolio__navbar">
                    <ul className="portfolio__menu">
                        <li className="portfolio__option portfolio__option--active">
                            <a href="#" className="portfolio__link">Todo</a>
                        </li>
                        <li className="portfolio__option">
                            <a href="#" className="portfolio__link">Cursos</a>
                        </li>
                        <li className="portfolio__option">
                            <a href="#" className="portfolio__link">Web</a>
                        </li>
                        <li className="portfolio__option">
                            <a href="#" className="portfolio__link">Redes sociales</a>
                        </li>
                        <li className="portfolio__option">
                            <a href="#" className="portfolio__link">Videos</a>
                        </li>
                        <li className="portfolio__option">
                            <a href="#" className="portfolio__link">Proyectos</a>
                        </li>
                    </ul>
                </nav>

                <section className="portfolio__gallery">
                    <figure className="portfolio__item">
                        <div className="portfolio__container-image">
                            <a href="#" className="gallery__link">
                                <img src="/assets/img/galeria-1.jpg" className="gallery__image" />
                            </a>
                        </div>
                        <figcaption className="gallery__title">Produccion musical</figcaption>
                        <i className="gallery__icon fa-solid fa-video-camera"></i>
                        <span className="gallery__category">Videos</span>
                    </figure>

                    <figure className="portfolio__item">
                        <div className="portfolio__container-image">
                            <a href="#" className="gallery__link">
                                <img src="/assets/img/galeria-2.jpg" className="gallery__image" />
                            </a>
                        </div>
                        <figcaption className="gallery__title">Clases de Filosofía</figcaption>
                        <i className="gallery__icon fa-solid fa-code"></i>
                        <span className="gallery__category">Cursos</span>
                    </figure>

                    <figure className="portfolio__item">
                        <div className="portfolio__container-image">
                            <a href="#" className="gallery__link">
                                <img src="/assets/img/galeria-3.jpg" className="gallery__image" />
                            </a>
                        </div>
                        <figcaption className="gallery__title">Clases de música</figcaption>
                        <i className="gallery__icon fa-solid fa-code-commit"></i>
                        <span className="gallery__category">Cursos</span>
                    </figure>

                    <figure className="portfolio__item">
                        <div className="portfolio__container-image">
                            <a href="#" className="gallery__link">
                                <img src="/assets/img/galeria-4.jpg" className="gallery__image" />
                            </a>
                        </div>
                        <figcaption className="gallery__title">Página web gimnasio</figcaption>
                        <i className="gallery__icon fa-solid fa-twitter"></i>
                        <span className="gallery__category">Web</span>
                    </figure>

                    <figure className="portfolio__item">
                        <div className="portfolio__container-image">
                            <a href="#" className="gallery__link">
                                <img src="/assets/img/galeria-5.jpg" className="gallery__image" />
                            </a>
                        </div>
                        <figcaption className="gallery__title">Master en </figcaption>
                        <i className="gallery__icon fa-solid fa-code"></i>
                        <span className="gallery__category">Cursos</span>
                    </figure>

                    <figure className="portfolio__item">
                        <div className="portfolio__container-image">
                            <a href="#" className="gallery__link">
                                <img src="/assets/img/galeria-6.jpg" className="gallery__image" />
                            </a>
                        </div>
                        <figcaption className="gallery__title">Galería de imágenes</figcaption>
                        <i className="gallery__icon fa-solid fa-portrait"></i>
                        <span className="gallery__category">Proyectos</span>
                    </figure>
                </section>

                <section className="portfolio__section"></section>
            </section>
        </main>
    );
}
