"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="layout__aside">
            <section className="aside__user-info">
                {/* User General Info */}
                <div className="user-info__general">
                    <div className="user-info__container-imagen">
                        <img className="user-info__image" src="/assets/img/yo.png" alt="imagen usuario" />
                    </div>

                    <h2 className="user-info__name">Alfredo Di Tullio</h2>
                    <h4 className="user-info__job">Profesional Multidisciplinario</h4>
                </div>

                {/* Navigation Menu */}
                <nav className="layout__menu">
                    <ul className="menu__list">
                        <li className="menu__option">
                            <Link href="/" className={`menu__link ${pathname === "/" ? "menu__link--active" : ""}`}>
                                <i className="menu__icon fa-solid fa-house"></i>
                                <span className="menu__overlay">Home</span>
                            </Link>
                        </li>

                        <li className="menu__option">
                            <Link href="/sobre-mi" className={`menu__link ${pathname === "/sobre-mi" ? "menu__link--active" : ""}`}>
                                <i className="menu__icon fa-solid fa-user"></i>
                                <span className="menu__overlay">Sobre mi</span>
                            </Link>
                        </li>

                        <li className="menu__option">
                            <Link href="/curriculum" className={`menu__link ${pathname === "/curriculum" ? "menu__link--active" : ""}`}>
                                <i className="menu__icon fa-solid fa-graduation-cap"></i>
                                <span className="menu__overlay">Curriculum</span>
                            </Link>
                        </li>

                        <li className="menu__option">
                            <Link href="/portafolio" className={`menu__link ${pathname === "/portafolio" ? "menu__link--active" : ""}`}>
                                <i className="menu__icon fa-solid fa-briefcase"></i>
                                <span className="menu__overlay">Portafolio</span>
                            </Link>
                        </li>

                        <li className="menu__option">
                            <Link href="/blog" className={`menu__link ${pathname === "/blog" ? "menu__link--active" : ""}`}>
                                <i className="menu__icon fa-solid fa-book"></i>
                                <span className="menu__overlay">Blog</span>
                            </Link>
                        </li>

                        <li className="menu__option">
                            <Link href="/ecommerce" className={`menu__link ${pathname === "/ecommerce" ? "menu__link--active" : ""}`}>
                                <i className="menu__icon fa-solid fa-wallet"></i>
                                <span className="menu__overlay">E-commerce</span>
                            </Link>
                        </li>

                        <li className="menu__option">
                            <Link href="/contacto" className={`menu__link ${pathname === "/contacto" ? "menu__link--active" : ""}`}>
                                <i className="menu__icon fa-solid fa-envelope"></i>
                                <span className="menu__overlay">Contacto</span>
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Social Links */}
                <div className="user-info__links">
                    <ul className="links__social">
                        <li className="social__option">
                            <a className="social__link" target="_blank" rel="noreferrer" href="https://www.facebook.com/alfreditullio">
                                <i className="social__link fa-brands fa-facebook"></i>
                            </a>
                        </li>

                        <li className="social__option">
                            <a className="social__link" target="_blank" rel="noreferrer" href="#">
                                <i className="social__link fa-brands fa-linkedin"></i>
                            </a>
                        </li>

                        <li className="social__option">
                            <a className="social__link" target="_blank" rel="noreferrer" href="https://www.instagram.com/alfre_ditu">
                                <i className="social__link fa-brands fa-instagram"></i>
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Button */}
                <div className="user-info__buttoms">
                    <a href="#" className="user-info__btn">Descargar CV</a>
                </div>

                {/* Footer */}
                <footer className="user-info__footer">
                    &copy; 2024 Alfredo Di Tullio WEB
                </footer>
            </section>
        </aside>
    );
}
