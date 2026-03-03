import Link from 'next/link';

export default function Blog() {
    return (
        <main className="layout__content">
            <section className="content__page content__blog">
                <header className="blog__header">
                    <h1 className="blog__title blog__title--blog">Mi Blog <span className="title__color">de viajes</span></h1>
                </header>

                <div className="secciones__blog">
                    <ul className="lista__blog">
                        <li className="blog__opcion">América</li>
                        <li className="blog__opcion">África</li>
                        <li className="blog__opcion">Europa</li>
                        <li className="blog__opcion">Asia</li>
                        <li className="blog__opcion">Oceanía</li>
                    </ul>
                </div>

                <section className="blog__articles">
                    <article className="articles__article">
                        <div className="article__top">
                            <div className="article__category">Oceanía</div>
                            <a href="articuloAustralia.html" className="article__image-link">
                                <div className="article__mask">
                                    <img src="/assets/img/australia.png" className="article__image" alt="imagen del blog" />
                                </div>
                                <div className="article__logo">
                                    <i className="article__icon fa-solid fa-book"></i>
                                </div>
                            </a>
                        </div>
                        <div className="article__bottom">
                            <time dateTime="2024-02-09" className="article__date">09/02/2024</time>
                            <a href="articuloAustralia.html" className="article__link">
                                <h2 className="article__title"><span className="title__color">Australia:</span> La vida dentro de la isla</h2>
                            </a>
                        </div>
                    </article>

                    <article className="articles__article">
                        <div className="article__top">
                            <div className="article__category">Asia</div>
                            <a href="Everest.html" className="article__image-link">
                                <div className="article__mask">
                                    <img src="/assets/img/img blog/everest.webp" className="article__image" alt="imagen del blog" />
                                </div>
                                <div className="article__logo">
                                    <i className="article__icon fa-solid fa-book"></i>
                                </div>
                            </a>
                        </div>
                        <div className="article__bottom">
                            <time dateTime="2024-02-09" className="article__date">09/02/2024</time>
                            <a href="Everest.html" className="article__link">
                                <h2 className="article__title"><span className="title__color">Nepal:</span> Trekking al Everest</h2>
                            </a>
                        </div>
                    </article>

                    <article className="articles__article">
                        <div className="article__top">
                            <div className="article__category">Europa</div>
                            <a href="Everest.html" className="article__image-link">
                                <div className="article__mask">
                                    <img src="/assets/img/img blog/estambul.webp" className="article__image" alt="imagen del blog" />
                                </div>
                                <div className="article__logo">
                                    <i className="article__icon fa-solid fa-book"></i>
                                </div>
                            </a>
                        </div>
                        <div className="article__bottom">
                            <time dateTime="2024-02-09" className="article__date">09/02/2024</time>
                            <a href="Everest.html" className="article__link">
                                <h2 className="article__title"><span className="title__color">Estambúl:</span> La capital de los imperios</h2>
                            </a>
                        </div>
                    </article>

                    <article className="articles__article">
                        <div className="article__top">
                            <div className="article__category">África</div>
                            <Link href="/blog/egipto" className="article__image-link">
                                <div className="article__mask">
                                    <img src="/assets/img/img blog/Egypt.Giza.Sphinx.02.jpg" className="article__image" alt="imagen del blog" />
                                </div>
                                <div className="article__logo">
                                    <i className="article__icon fa-solid fa-book"></i>
                                </div>
                            </Link>
                        </div>
                        <div className="article__bottom">
                            <time dateTime="2024-02-09" className="article__date">09/02/2024</time>
                            <Link href="/blog/egipto" className="article__link">
                                <h2 className="article__title"><span className="title__color">Egipto:</span> Una visita a las pirámides</h2>
                            </Link>
                        </div>
                    </article>

                    <article className="articles__article">
                        <div className="article__top">
                            <div className="article__category">Europa</div>
                            <a href="europa.html" className="article__image-link">
                                <div className="article__mask">
                                    <img src="/assets/img/img blog/copenhague.jpeg" className="article__image" alt="imagen del blog" />
                                </div>
                                <div className="article__logo">
                                    <i className="article__icon fa-solid fa-book"></i>
                                </div>
                            </a>
                        </div>
                        <div className="article__bottom">
                            <time dateTime="2024-02-09" className="article__date">09/02/2024</time>
                            <a href="europa.html" className="article__link">
                                <h2 className="article__title"><span className="title__color">Dinamarca:</span> El país del bienestar</h2>
                            </a>
                        </div>
                    </article>

                    <article className="articles__article">
                        <div className="article__top">
                            <div className="article__category">Europa</div>
                            <a href="europa.html" className="article__image-link">
                                <div className="article__mask">
                                    <img src="/assets/img/img blog/atenas.jpeg" className="article__image" alt="imagen del blog" />
                                </div>
                                <div className="article__logo">
                                    <i className="article__icon fa-solid fa-book"></i>
                                </div>
                            </a>
                        </div>
                        <div className="article__bottom">
                            <time dateTime="2024-02-09" className="article__date">09/02/2024</time>
                            <a href="europa.html" className="article__link">
                                <h2 className="article__title"><span className="title__color">Atenas:</span> La cuna de occidente</h2>
                            </a>
                        </div>
                    </article>

                    <article className="articles__article">
                        <div className="article__top">
                            <div className="article__category">Asia</div>
                            <Link href="/blog/india" className="article__image-link">
                                <div className="article__mask">
                                    <img src="/assets/img/img blog/india-taj-mahal.jpg" className="article__image" alt="imagen del blog" />
                                </div>
                                <div className="article__logo">
                                    <i className="article__icon fa-solid fa-book"></i>
                                </div>
                            </Link>
                        </div>
                        <div className="article__bottom">
                            <time dateTime="2024-02-09" className="article__date">09/02/2024</time>
                            <Link href="/blog/india" className="article__link">
                                <h2 className="article__title"><span className="title__color">India:</span> el país de la reencarnación</h2>
                            </Link>
                        </div>
                    </article>

                    <article className="articles__article">
                        <div className="article__top">
                            <div className="article__category">Asia</div>
                            <a href="europa.html" className="article__image-link">
                                <div className="article__mask">
                                    <img src="/assets/img/img blog/Batu-Caves-Que-ver-en-Kuala-Lumpur.webp" className="article__image" alt="imagen del blog" />
                                </div>
                                <div className="article__logo">
                                    <i className="article__icon fa-solid fa-book"></i>
                                </div>
                            </a>
                        </div>
                        <div className="article__bottom">
                            <time dateTime="2024-02-09" className="article__date">09/02/2024</time>
                            <a href="europa.html" className="article__link">
                                <h2 className="article__title"><span className="title__color">Malasia:</span> Rascacielos, cuevas y monos</h2>
                            </a>
                        </div>
                    </article>

                    <article className="articles__article">
                        <div className="article__top">
                            <div className="article__category">Europa</div>
                            <a href="Everest.html" className="article__image-link">
                                <div className="article__mask">
                                    <img src="/assets/img/img blog/Barcelona-Blog-de-Renfe-4.jpg" className="article__image" alt="imagen del blog" />
                                </div>
                                <div className="article__logo">
                                    <i className="article__icon fa-solid fa-book"></i>
                                </div>
                            </a>
                        </div>
                        <div className="article__bottom">
                            <time dateTime="2024-02-09" className="article__date">09/02/2024</time>
                            <a href="Everest.html" className="article__link">
                                <h2 className="article__title"><span className="title__color">Barcelona:</span> La capital mundial del turismo</h2>
                            </a>
                        </div>
                    </article>

                    <article className="articles__article">
                        <div className="article__top">
                            <div className="article__category">América</div>
                            <Link href="/blog/peru" className="article__image-link">
                                <div className="article__mask">
                                    <img src="/assets/img/img blog/Machu_Picchu,_Peru_(2018).jpg" className="article__image" alt="imagen del blog" />
                                </div>
                                <div className="article__logo">
                                    <i className="article__icon fa-solid fa-book"></i>
                                </div>
                            </Link>
                        </div>
                        <div className="article__bottom">
                            <time dateTime="2024-02-09" className="article__date">09/02/2024</time>
                            <Link href="/blog/peru" className="article__link">
                                <h2 className="article__title"><span className="title__color">Perú:</span> Machu Picchu</h2>
                            </Link>
                        </div>
                    </article>

                    <article className="articles__article">
                        <div className="article__top">
                            <div className="article__category">África</div>
                            <a href="Everest.html" className="article__image-link">
                                <div className="article__mask">
                                    <img src="/assets/img/img blog/morocco-chefchaouen.jpeg" className="article__image" alt="imagen del blog" />
                                </div>
                                <div className="article__logo">
                                    <i className="article__icon fa-solid fa-book"></i>
                                </div>
                            </a>
                        </div>
                        <div className="article__bottom">
                            <time dateTime="2024-02-09" className="article__date">09/02/2024</time>
                            <a href="Everest.html" className="article__link">
                                <h2 className="article__title"><span className="title__color">Marruecos:</span> Entre los bazares y el Sahara</h2>
                            </a>
                        </div>
                    </article>

                    <article className="articles__article">
                        <div className="article__top">
                            <div className="article__category">Ámérica</div>
                            <a href="Everest.html" className="article__image-link">
                                <div className="article__mask">
                                    <img src="/assets/img/img blog/iguazu.webp" className="article__image" alt="imagen del blog" />
                                </div>
                                <div className="article__logo">
                                    <i className="article__icon fa-solid fa-book"></i>
                                </div>
                            </a>
                        </div>
                        <div className="article__bottom">
                            <time dateTime="2024-02-09" className="article__date">09/02/2024</time>
                            <a href="Everest.html" className="article__link">
                                <h2 className="article__title"><span className="title__color">Argentina:</span> Iguazú y una maravilla del mundo natural</h2>
                            </a>
                        </div>
                    </article>

                    <article className="articles__article">
                        <div className="article__top">
                            <div className="article__category">Europa</div>
                            <a href="Everest.html" className="article__image-link">
                                <div className="article__mask">
                                    <img src="/assets/img/img blog/praga-portada-1540732106.jpg" className="article__image" alt="imagen del blog" />
                                </div>
                                <div className="article__logo">
                                    <i className="article__icon fa-solid fa-book"></i>
                                </div>
                            </a>
                        </div>
                        <div className="article__bottom">
                            <time dateTime="2024-02-09" className="article__date">09/02/2024</time>
                            <a href="Everest.html" className="article__link">
                                <h2 className="article__title"><span className="title__color">Budapest: </span>Del imperio romano al astrohúngaro</h2>
                            </a>
                        </div>
                    </article>

                    <article className="articles__article">
                        <div className="article__top">
                            <div className="article__category">Ámérica</div>
                            <a href="Everest.html" className="article__image-link">
                                <div className="article__mask">
                                    <img src="/assets/img/img blog/boli.jpeg" className="article__image" alt="imagen del blog" />
                                </div>
                                <div className="article__logo">
                                    <i className="article__icon fa-solid fa-book"></i>
                                </div>
                            </a>
                        </div>
                        <div className="article__bottom">
                            <time dateTime="2024-02-09" className="article__date">09/02/2024</time>
                            <a href="Everest.html" className="article__link">
                                <h2 className="article__title"><span className="title__color">Bolivia:</span> la magia del Titikaka</h2>
                            </a>
                        </div>
                    </article>

                    <article className="articles__article">
                        <div className="article__top">
                            <div className="article__category">América</div>
                            <a href="Everest.html" className="article__image-link">
                                <div className="article__mask">
                                    <img src="/assets/img/img blog/chile.webp" className="article__image" alt="imagen del blog" />
                                </div>
                                <div className="article__logo">
                                    <i className="article__icon fa-solid fa-book"></i>
                                </div>
                            </a>
                        </div>
                        <div className="article__bottom">
                            <time dateTime="2024-02-09" className="article__date">09/02/2024</time>
                            <a href="Everest.html" className="article__link">
                                <h2 className="article__title"><span className="title__color">Chile:</span> El sur y su encanto</h2>
                            </a>
                        </div>
                    </article>

                    <article className="articles__article">
                        <div className="article__top">
                            <div className="article__category">Europa</div>
                            <a href="Everest.html" className="article__image-link">
                                <div className="article__mask">
                                    <img src="/assets/img/img blog/praga-portada-1540732106.jpg" className="article__image" alt="imagen del blog" />
                                </div>
                                <div className="article__logo">
                                    <i className="article__icon fa-solid fa-book"></i>
                                </div>
                            </a>
                        </div>
                        <div className="article__bottom">
                            <time dateTime="2024-02-09" className="article__date">09/02/2024</time>
                            <a href="Everest.html" className="article__link">
                                <h2 className="article__title"><span className="title__color">Rep. Checa: </span>Gótica y bohemia</h2>
                            </a>
                        </div>
                    </article>
                </section>
            </section>
        </main>
    );
}
