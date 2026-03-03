import Link from 'next/link';

export default function Peru() {
    return (
        <main className="layout__content">
            <section className="content__page content__blog">
                <header className="blog__header">
                    <h1 className="blog__title">Mi Blog <span className="title__color">de viajes</span></h1>
                </header>

                <div className="titulo__articulo" style={{ textAlign: "center", marginBottom: "3rem" }}>
                    <h2>Perú: En lo alto del Imperio Inca</h2>
                    <p className="price__advice" style={{ fontStyle: "italic", marginTop: "1rem" }}>Cusco, Machu Picchu y las alturas que te quitan el aliento (y la razón)</p>
                </div>

                {/* Cusco */}
                <section className="seccion__1" style={{ width: "100%", maxWidth: "800px", margin: "0 auto", marginBottom: "4rem" }}>
                    <h2 className="sutbtitulo__articulo" style={{ marginBottom: "1.5rem" }}><span className="title__color">Cusco:</span> El ombligo del mundo andino</h2>
                    <div className="articulo__descripcion">
                        <p className="texto__articulo" style={{ marginBottom: "1.5rem", lineHeight: "1.8", textAlign: "justify" }}>
                            Cusco te recibe de golpe, y no hablo solamente del famoso "soroche" (el mal de altura). Te recibe con una bofetada arquitectónica y cultural que no podés terminar de procesar. A casi 3.400 metros sobre el nivel del mar, recorrer sus calles es un ejercicio tanto físico como histórico. Vas caminando jadeando, y de repente te topás con muros incas de un encaje en la piedra tan absurdo y matemáticamente perfecto que hace que las catedrales superpuestas por los españoles parezcan construidas por albañiles apurados.
                        </p>
                        <p className="texto__articulo" style={{ marginBottom: "1.5rem", lineHeight: "1.8", textAlign: "justify" }}>
                            Para alguien con formación filosófica, Cusco es un laboratorio fascinante del sincretismo. Ver la Plaza de Armas, con iglesias inmensas erigidas literalmente sobre los cimientos sagrados de palacios incas, te obliga a pensar en cómo las culturas no se destruyen por completo unas a otras, sino que se absorben y se transmutan. Todo allí vibra en dos frecuencias: la colonial, solemne y católica, y la andina, terrenal, profundamente conectada a la *Pachamama*.
                        </p>
                    </div>
                </section>

                {/* La Gastronomia Cusqueña */}
                <section className="seccion__1" style={{ width: "100%", maxWidth: "800px", margin: "0 auto", marginBottom: "4rem" }}>
                    <h2 className="sutbtitulo__articulo" style={{ marginBottom: "1.5rem" }}><span className="title__color">Gastronomía Serrana:</span> Sabores de altura</h2>
                    <div className="articulo__descripcion">
                        <p className="texto__articulo" style={{ marginBottom: "1.5rem", lineHeight: "1.8", textAlign: "justify" }}>
                            Por supuesto, mi brújula interna de chef se volvió loca en el Mercado de San Pedro. Como argentino y porteño estoy acostumbrado a enorgullecerme del asado y las empanadas, pero lo de Perú es otra galaxia. Pasillos enteros dedicados a cientos de variedades de papas nativas, ajíes que te despiertan hasta el último receptor de la lengua, y maíz de granos que parecen dientes gigantes.
                        </p>
                        <p className="texto__articulo" style={{ marginBottom: "1.5rem", lineHeight: "1.8", textAlign: "justify" }}>
                            Probar una chicha morada fría y luego atreverse a comer un buen plato de *Cuy al horno* (una carne suave, aunque para un porteño choque ver al animal entero en el plato) es entender que la cocina es pura geografía. Estar ahí arriba te exige una dieta para el sobreesfuerzo, por eso las sopas calientes elaboradas con quinuas y caldos concentrados son directamente abrazos al alma en medio de las madrugadas heladas de la sierra.
                        </p>
                    </div>
                </section>

                {/* Machu Picchu */}
                <section className="seccion__1" style={{ width: "100%", maxWidth: "800px", margin: "0 auto", marginBottom: "4rem" }}>
                    <h2 className="sutbtitulo__articulo" style={{ marginBottom: "1.5rem" }}><span className="title__color">Machu Picchu:</span> Donde las nubes tocan la tierra</h2>
                    <div className="articulo__descripcion">
                        <p className="texto__articulo" style={{ marginBottom: "1.5rem", lineHeight: "1.8", textAlign: "justify" }}>
                            Pero claro, el objetivo final, el Santo Grial del viaje andino, es la ciudadela perdida. Llegar a Machu Picchu exige un peregrinaje moderno. No importan los trenes y los colectivos modernos; de madrugada y con frío, el trayecto tiene una mística de purificación. Y cuando pasás esa puerta final tras trepar, y la niebla se disipa de golpe, la postal viva que aparece ante tus ojos te paraliza. Literalmente, a los que estábamos enmudecidos nos faltaba el aire, aunque esta vez no por la altura.
                        </p>
                        <p className="texto__articulo" style={{ marginBottom: "1.5rem", lineHeight: "1.8", textAlign: "justify" }}>
                            Es un triunfo absoluto de la voluntad. Pensar que hace siglos una civilización sin poleas, ni acero, ni herramientas de hierro levantó semejante colosal estructura religiosa y astronómica en la cresta afilada de una montaña rodeada por el río Urubamba es demencial.
                        </p>
                        <p className="texto__articulo" style={{ marginBottom: "1.5rem", lineHeight: "1.8", textAlign: "justify" }}>
                            Recorrer el Intihuatana o el Templo del Sol te hace percibir una escala de tiempo que empequeñece nuestra ansiedad metropolitana de Buenos Aires. En Machu Picchu, el tiempo no corre; está estratificado en las terrazas agrícolas. Es de esos pocos lugares en el mundo donde las ruinas no están muertas; sentís que, si te sentás en absoluto silencio frente a la estructura imponente del Huayna Picchu, las piedras tienen algo, un susurro antiguo, reservado todavía para aquellos dispuestos a escuchar.
                        </p>
                    </div>

                    <div className="container__imagen" style={{ marginTop: '3rem', marginBottom: '3rem' }}>
                        <img className="imagen__aus" style={{ width: '100%', borderRadius: '1.5rem', objectFit: 'cover', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }} src="/assets/img/img blog/Machu_Picchu,_Peru_(2018).jpg" alt="Ruinas de Machu Picchu" />
                        <figcaption className="imagen__subt" style={{ textAlign: 'center', marginTop: '1rem', fontStyle: 'italic', color: 'var(--ColorSubtitulo)' }}>Machu Picchu: triunfo absoluto de la voluntad inca entre las montañas</figcaption>
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
