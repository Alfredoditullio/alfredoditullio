import Link from 'next/link';

export default function Egipto() {
    return (
        <main className="layout__content">
            <section className="content__page content__blog">
                <header className="blog__header">
                    <h1 className="blog__title">Mi Blog <span className="title__color">de viajes</span></h1>
                </header>

                <div className="titulo__articulo" style={{ textAlign: "center", marginBottom: "3rem" }}>
                    <h2>Egipto: Una visita a las pirámides</h2>
                    <p className="price__advice" style={{ fontStyle: "italic", marginTop: "1rem" }}>Entre la eternidad del desierto y el bullicio de El Cairo</p>
                </div>

                <section className="seccion__1" style={{ width: "100%", maxWidth: "800px", margin: "0 auto", marginBottom: "4rem" }}>
                    <h2 className="sutbtitulo__articulo" style={{ marginBottom: "1.5rem" }}><span className="title__color">El Cairo:</span> Caos, especias y eternidad</h2>
                    <div className="articulo__descripcion">
                        <p className="texto__articulo" style={{ marginBottom: "1.5rem", lineHeight: "1.8", textAlign: "justify" }}>
                            Como buen porteño, creía estar curtido ante el caos del tráfico y el sonido incesante de una metrópolis, pero caminar por las calles de El Cairo por primera vez es una bofetada a los sentidos que nadie te puede anticipar. Entre bocinazos interminables, cruzando calles sin semáforos, el llamado a la oración que inunda el cielo desde decenas de minaretes a la vez, y el aroma profundo a comino y cardamomo que me despierta al instante el instinto de chef; la ciudad te envuelve por completo, sin pedir permiso.
                        </p>
                        <p className="texto__articulo" style={{ marginBottom: "1.5rem", lineHeight: "1.8", textAlign: "justify" }}>
                            Fue uno de esos viajes cortos, intensos, de los que te obligan a exprimir cada segundo disponible. Y siendo licenciado en filosofía, es imposible no perderse en reflexiones frente a tanta vastedad histórica. Estar parado en la cuna de una civilización donde el concepto de la inmortalidad literalmente se materializó en toneladas de piedra hace miles de años, te deja por un rato sin palabras y te obliga a replantearte lo efímero de nuestro propio paso por el mundo.
                        </p>
                    </div>

                    <div className="container__imagen" style={{ marginTop: '3rem', marginBottom: '3rem' }}>
                        <img className="imagen__aus" style={{ width: '100%', borderRadius: '1.5rem', objectFit: 'cover', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }} src="/assets/img/img blog/Egypt.Giza.Sphinx.02.jpg" alt="Pirámides de Egipto y la Esfinge" />
                        <figcaption className="imagen__subt" style={{ textAlign: 'center', marginTop: '1rem', fontStyle: 'italic', color: 'var(--ColorSubtitulo)' }}>Las Pirámides de Giza y la Gran Esfinge recortando el cielo</figcaption>
                    </div>

                </section>

                <section className="seccion__1" style={{ width: "100%", maxWidth: "800px", margin: "0 auto", marginBottom: "4rem" }}>
                    <h2 className="sutbtitulo__articulo" style={{ marginBottom: "1.5rem" }}><span className="title__color">Gastronomía del Nilo:</span> Un festín para el alma</h2>
                    <div className="articulo__descripcion">
                        <p className="texto__articulo" style={{ marginBottom: "1.5rem", lineHeight: "1.8", textAlign: "justify" }}>
                            Pero claro, mi lado de cocinero profesional es siempre el que termina guiando gran parte de mi brújula. En Egipto me encontré con una cocina humilde, profundamente callejera, pero sumamente reconfortante. Cero pretensiones.
                        </p>
                        <p className="texto__articulo" style={{ marginBottom: "1.5rem", lineHeight: "1.8", textAlign: "justify" }}>
                            Sentarme en un rincón ruidoso a probar un auténtico <em>Koshary</em>, esa mezcla impensada de arroz, lentejas, macarrones y garbanzos, todo bañado en una salsa de tomate súper especiada y coronado con cebolla frita crujiente, es una locura de texturas. Combinan carbohidratos con una brutalidad hermosa, logrando darte esa inyección de energía fundamental que tu cuerpo necesita desesperadamente para soportar el calor agobiante del desierto. Una lección gastronómica de que muchas veces el mejor plato es aquel que se cocina para alimentar al trabajador en las calles.
                        </p>
                    </div>
                </section>

                <div className="servicio__icon" style={{ marginTop: '2rem', fontSize: '4rem', textAlign: 'center' }}>
                    <Link href="/blog" style={{ color: 'var(--ColorSecundario)', transition: 'transform 300ms ease', display: 'inline-block' }} className="blog-back-link">
                        <i className="fa-solid fa-circle-arrow-left"></i>
                    </Link>
                </div>

            </section>
        </main>
    );
}
