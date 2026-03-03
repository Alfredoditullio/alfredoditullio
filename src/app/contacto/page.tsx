export default function Contacto() {
    return (
        <main className="layout__content">
            <section className="content__page content__contact">
                <header className="contact__header">
                    <h1 className="contact__title">Contacto</h1>
                </header>

                <div className="contact__container">
                    <section className="contact__info">
                        <div className="contact__data">
                            <i className="contact__icon fa-solid fa-location-dot"></i>
                            <h2 className="contact__subtitle">Australia</h2>
                        </div>
                        <div className="contact__data">
                            <i className="contact__icon fa-solid fa-phone"></i>
                            <h2 className="contact__subtitle">+610404809925</h2>
                        </div>
                        <div className="contact__data">
                            <i className="contact__icon fa-solid fa-envelope"></i>
                            <h2 className="contact__subtitle">ditullioalfredo@gmail.com</h2>
                        </div>
                    </section>

                    <section className="contact__form-box">
                        <div className="contact__map" id="load-iframe-map">
                            <iframe
                                title="mapa"
                                className="contact__iframe"
                                frameBorder="0"
                                scrolling="yes"
                                marginHeight={0}
                                marginWidth={0}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13085.712220380312!2d-57.96088867159604!3d-34.92080007311053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e62f8920bfcf%3A0x20f966c1a35177f0!2sC.%2011%201090%2C%20B1900DPT%20La%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1707336378218!5m2!1ses-419!2sar"
                                style={{ border: 0 }}
                            ></iframe>
                        </div>

                        <header className="contact__form-header">
                            <h3 className="form-header__title">¿Cómo puedo <span className="title__color">ayudarte?</span></h3>
                        </header>

                        <form className="contact__form">
                            <div className="form__container">
                                <section className="form__left">
                                    <div className="form__group">
                                        <input type="text" className="form__input" name="name" required placeholder="Nombre" />
                                        <label htmlFor="name" className="form__label">Nombre</label>
                                    </div>
                                    <div className="form__group">
                                        <input type="email" className="form__input" name="email" required placeholder="Email" />
                                        <label htmlFor="email" className="form__label">Email</label>
                                    </div>
                                    <div className="form__group">
                                        <input type="text" className="form__input" name="subject" required placeholder="Asunto" />
                                        <label htmlFor="subject" className="form__label">Asunto</label>
                                    </div>
                                </section>
                                <section className="form__right">
                                    <div className="form__group form__group--textarea">
                                        <textarea className="form__input form__input--textarea" name="message" required placeholder="mensaje"></textarea>
                                        <label htmlFor="message" className="form__label">Mensaje</label>
                                    </div>
                                </section>
                            </div>
                            <input type="submit" className="form__buttom" value="enviar mensaje" />
                        </form>
                    </section>
                </div>
            </section>
        </main>
    );
}
