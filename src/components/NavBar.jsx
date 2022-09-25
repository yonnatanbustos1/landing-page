import { useState } from "react";
import { Placeholder } from "./Placeholder"
import { Link } from "react-scroll"

export const NavBar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <nav className="flex flex-wrap items-center px-2 py-3 justify-between z-50 bg-[#7B003A] mb-3 fixed w-full">
            <div className="container flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <Placeholder />
                    <button
                        className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                        <i className="fas fa-bars">Icono</i>
                    </button>
                </div>
                <div
                    className={
                        "lg:flex flex-grow items-center" +
                        (navbarOpen ? " flex" : " hidden")
                    }
                    id="example-navbar-danger"
                >
                    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                        <Link
                            smooth
                            spy
                            to="home"
                        >
                            <span className="ml-2 text-white text-xl">
                                Inicio
                            </span>
                        </Link>
                        <Link
                            smooth
                            spy
                            to="profile"
                        >
                            <span className="ml-2 text-white text-xl">
                                Perfil
                            </span>
                        </Link>
                        <Link
                            smooth
                            spy
                            to="studies"
                        >
                            <span className="ml-2 text-white text-xl">
                                Estudios
                            </span>
                        </Link>
                        <Link
                            smooth
                            spy
                            to="experience"
                        >
                            <span className="ml-2 text-white text-xl">
                                Experiencia
                            </span>
                        </Link>
                        <Link
                            smooth
                            spy
                            to="briefcase"
                        >
                            <span className="ml-2 text-white text-xl">
                                Portafolio
                            </span>
                        </Link>
                        <Link
                            smooth
                            spy
                            to="contact"
                        >
                            <span className="ml-2 text-white text-xl">
                                Contacto
                            </span>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
}