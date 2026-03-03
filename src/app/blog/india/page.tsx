import Link from 'next/link';

export default function India() {
    return (
        <main className="layout__content">
            <section className="content__page content__blog">
                <header className="blog__header">
                    <h1 className="blog__title">Mi Blog <span className="title__color">de viajes</span></h1>
                </header>

                <div className="titulo__articulo" style={{ textAlign: "center", marginBottom: "3rem" }}>
                    <h2>India: El país de la reencarnación</h2>
                    <p className="price__advice" style={{ fontStyle: "italic", marginTop: "1rem" }}>Un viaje al extremo de los sentidos: de Nueva Delhi a Varanasi</p>
                </div>

                {/* Nueva Delhi */}
                <section className="seccion__1" style={{ width: "100%", maxWidth: "800px", margin: "0 auto", marginBottom: "4rem" }}>
                    <h2 className="sutbtitulo__articulo" style={{ marginBottom: "1.5rem" }}><span className="title__color">Nueva Delhi:</span> Donde el presente arrolla al pasado</h2>
                    <div className="articulo__descripcion">
                        <p className="texto__articulo" style={{ marginBottom: "1.5rem", lineHeight: "1.8", textAlign: "justify" }}>
                            India no es un país, es un continente entero dentro de sus fronteras; o mejor dicho, es un estado alterado de conciencia. Llegar a Nueva Delhi es como que te tiren de paracaídas en medio de una ola constante de colores brillantes, vacas sagradas adueñadas del asfalto, tuk-tuks esquivando imposibles y olores a especias que se te meten hasta en los poros de la ropa.
                        </p>
                        <p className="texto__articulo" style={{ marginBottom: "1.5rem", lineHeight: "1.8", textAlign: "justify" }}>
                            Como argentino y, por deformación profesional, como filósofo, siempre traté de buscarle el hilo conductor a todo choque cultural, una línea de pensamiento racional. Pero en Delhi aprendés rapidísimo que la lógica occidental acá no tiene jurisdicción. Pasás de la modernidad absoluta en los barrios empresariales al caos milenario de Old Delhi, caminando entre callejones estrechos bajo marañas de cables de luz que harían sudar frío a cualquier ingeniero porteño. Todo coexiste, todo choca y sin embargo, todo fluye. Y como chef... bueno, recorrer los bazares de especias como *Khari Baoli* es literalmente estar en el cielo. La comida de la calle te vuela la cabeza: samosas crujientes y chai humeante servido en vasitos de barro a toda hora.
                        </p>
                    </div>
                </section>

                {/* Jaipur y el Rajastán */}
                <section className="seccion__1" style={{ width: "100%", maxWidth: "800px", margin: "0 auto", marginBottom: "4rem" }}>
                    <h2 className="sutbtitulo__articulo" style={{ marginBottom: "1.5rem" }}><span className="title__color">Jaipur:</span> El esplendor rosa del Rajastán</h2>
                    <div className="articulo__descripcion">
                        <p className="texto__articulo" style={{ marginBottom: "1.5rem", lineHeight: "1.8", textAlign: "justify" }}>
                            Continué el recorrido por el legendario Triángulo Dorado y llegué a Jaipur, "La ciudad rosa". Es imposible no sentirse dentro de un cuento medieval al observar la fastuosidad del Fuerte Amber o los delicados laberintos de ventanas del Hawa Mahal (el Palacio de los Vientos). Detrás de esas fachadas en tonos terracota y rosa se esconden historias de maharajás, guerras antiguas y riquezas incalculables.
                        </p>
                        <p className="texto__articulo" style={{ marginBottom: "1.5rem", lineHeight: "1.8", textAlign: "justify" }}>
                            Mientras probaba un auténtico <em>Laal Maas</em>, un curry de cordero ardiente tan intenso que te hace replantear tus decisiones de vida —pero que no podés dejar de comer— me puse a pensar en cómo India lleva su enorme exceso de historia siempre a flor de piel. No esconden el polvo de los siglos, lo viven a diario. Jaipur es prueba de esto: elefantes pintados subiendo escalinatas de palacios junto a motos último modelo.
                        </p>
                    </div>
                </section>

                {/* Agra - Taj Mahal */}
                <section className="seccion__1" style={{ width: "100%", maxWidth: "800px", margin: "0 auto", marginBottom: "4rem" }}>
                    <h2 className="sutbtitulo__articulo" style={{ marginBottom: "1.5rem" }}><span className="title__color">Agra:</span> La lágrima de mármol en la eternidad</h2>
                    <div className="articulo__descripcion">
                        <p className="texto__articulo" style={{ marginBottom: "1.5rem", lineHeight: "1.8", textAlign: "justify" }}>
                            Ningún viaje a esta región está completo sin Agra, y puntualmente, sin el Taj Mahal. Podés haber visto mil fotos en Instagram, documentales en altísima definición, podés leer lo que pensaba de él Rabindranath Tagore, pero nada te prepara para cruzar el monumental portal de entrada y ver esa estructura de mármol blanco reluciente asomando entre la niebla del amanecer.
                        </p>
                        <p className="texto__articulo" style={{ marginBottom: "1.5rem", lineHeight: "1.8", textAlign: "justify" }}>
                            Verlo en silencio, mientras el sol de la mañana cambia los colores del palacio del gris azulado al blanco resplandeciente, es una de esas experiencias que frenan el reloj interno. Es el tributo fúnebre más hermoso jamás construido por el ser humano. Y detrás de tanta belleza poética y trabajo matemático preciso para crear semejante simetría, no pude evitar preguntarme, como filósofo, cuánto ego y cuánta tristeza hacen falta para mover ejércitos de artesanos durante décadas con el solo fin de vencer al olvido.
                        </p>
                    </div>

                    <div className="container__imagen" style={{ marginTop: '3rem', marginBottom: '3rem' }}>
                        <img className="imagen__aus" style={{ width: '100%', borderRadius: '1.5rem', objectFit: 'cover', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }} src="/assets/img/img blog/india-taj-mahal.jpg" alt="Taj Mahal" />
                        <figcaption className="imagen__subt" style={{ textAlign: 'center', marginTop: '1rem', fontStyle: 'italic', color: 'var(--ColorSubtitulo)' }}>El Taj Mahal brillando bajo el cielo índigo de Agra</figcaption>
                    </div>
                </section>

                {/* Varanasi */}
                <section className="seccion__1" style={{ width: "100%", maxWidth: "800px", margin: "0 auto", marginBottom: "4rem" }}>
                    <h2 className="sutbtitulo__articulo" style={{ marginBottom: "1.5rem" }}><span className="title__color">Varanasi:</span> La muerte en el centro de la vida</h2>
                    <div className="articulo__descripcion">
                        <p className="texto__articulo" style={{ marginBottom: "1.5rem", lineHeight: "1.8", textAlign: "justify" }}>
                            Si Delhi desafió mis sentidos, Varanasi (Benarés) movió todos los cimientos existenciales que pueda tener un académico de occidente. Es, sin dudas, la ciudad más sagrada de India, ubicada a las orillas del Ganges, un río tan venerado que promete liberar a las almas del ciclo infinito de las reencarnaciones (el *moksha*).
                        </p>
                        <p className="texto__articulo" style={{ marginBottom: "1.5rem", lineHeight: "1.8", textAlign: "justify" }}>
                            Llegar a los <em>Ghats</em>, las escalinatas que descienden hacia este río turbio y majestuoso, fue absolutamente chocante. Occidente tiene la costumbre médica de esconder la muerte detrás de cortinas esterilizadas de hospitales y cocherías asépticas, de alejarla lo máximo posible de la vista de todos. Varanasi es todo lo contrario: la muerte ocurre en la plaza pública. Los crematorios arden las veinticuatro horas del día, y las cenizas de miles de personas abrazan el agua.
                        </p>
                        <p className="texto__articulo" style={{ marginBottom: "1.5rem", lineHeight: "1.8", textAlign: "justify" }}>
                            Ver las piras funerarias de Manikarnika Ghat es una experiencia de una crudeza inenarrable. Los cuerpos en envueltos en telas, el humo denso, los sacerdotes recitando mantras milenarios, la familias, la ausencia de llanto desconsolado. En ese lugar entendí en carne propia lo que en la facultad sonaba tan teórico: para ellos, el fin del cuerpo no es el fin del recorrido, es una transición divina y alegre.
                        </p>
                        <p className="texto__articulo" style={{ marginBottom: "1.5rem", lineHeight: "1.8", textAlign: "justify" }}>
                            Varanasi te rompe por dentro y, de alguna manera rarísima, te vuelve a armar. Te devuelve a tu país dándote cuenta de que nuestra métrica de felicidad, éxito, y temporalidad no es universal. Y volví, tal vez más humilde, sabiendo que ni la filosofía ni la gastronomía logran tocar ese misterio tan profundo que, todos los atardeceres y a cielo abierto, los indios logran disipar a orillas del Ganges.
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
