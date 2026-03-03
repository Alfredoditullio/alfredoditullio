export default function Ecommerce() {
    return (
        <main className="layout__content">
            <section className="content__page content__about">
                <header className="about__header">
                    <h1 className="about__title"><span className="title__color">E-</span>Commerce</h1>
                </header>

                <h2 className="titulo__libro"><span className="title__color">Mi libro:</span> En búsqueda del sentido</h2>
                <div className="container__principal">
                    <div className="container__libro">
                        <div>
                            <a href="https://www.amazon.com.au/b%C3%BAsqueda-del-sentido-encontrar-sinsentido/dp/B0CKX2PMGT/" target="_blank" rel="noreferrer">
                                <img className="portada" src="/assets/img/portada.png" alt="portada-libro" />
                            </a>
                        </div>

                        <div className="info__imagen">
                            <p className="price__precios">10 usd</p>
                            <p className="price__text">+ costo de envío</p>
                        </div>
                        <div className="boton__comprar">
                            <button className="price__boton">
                                <a className="texto__boton" href="https://www.amazon.com.au/b%C3%BAsqueda-del-sentido-encontrar-sinsentido/dp/B0CKX2PMGT/" target="_blank" rel="noreferrer">Comprar</a>
                            </button>
                        </div>
                    </div>

                    <div className="container__libro">
                        <div>
                            <a href="https://www.amazon.com.au/b%C3%BAsqueda-del-sentido-encontrar-sinsentido/dp/B0CKX2PMGT/" target="_blank" rel="noreferrer">
                                <img className="portada" src="/assets/img/portada.png" alt="portada-libro" />
                            </a>
                        </div>

                        <div className="info__imagen">
                            <p className="price__precios">10 usd</p>
                            <p className="price__text">+ costo de envío</p>
                        </div>
                        <div className="boton__comprar">
                            <button className="price__boton">
                                <a className="texto__boton" href="https://www.amazon.com.au/b%C3%BAsqueda-del-sentido-encontrar-sinsentido/dp/B0CKX2PMGT/" target="_blank" rel="noreferrer">Comprar</a>
                            </button>
                        </div>
                    </div>
                </div>

                <section className="info__extra">
                    <div>
                        <h3 className="titulo__extra"><span className="title__color title__color--ecommerce">Información </span>extra:</h3>
                    </div>
                </section>

                <section className="cuadro__principal">
                    <div className="cuadro__dos">
                        <div className="cuadro__tres">
                            <div className="tres__info">
                                <i className="social__link fa-brands fa-linkedin"></i>
                                <h3>Libros vendidos</h3>
                                <p>+40</p>
                            </div>
                        </div>

                        <div className="cuadro__tres">
                            <div className="tres__info">
                                <i className="social__link fa-brands fa-linkedin"></i>
                                <h3>Libros vendidos</h3>
                                <p>+40</p>
                            </div>
                        </div>

                        <div className="cuadro__tres">
                            <div className="tres__info">
                                <i className="social__link fa-brands fa-linkedin"></i>
                                <h3>Libros vendidos</h3>
                                <p>+40</p>
                            </div>
                        </div>

                        <div className="cuadro__tres">
                            <div className="tres__info">
                                <i className="social__link fa-brands fa-linkedin">
                                    <h3></h3>
                                    <button>Click aqui</button>
                                </i>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </main>
    );
}
