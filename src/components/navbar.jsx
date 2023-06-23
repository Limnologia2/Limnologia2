export const Navbar = () => {

    const scrollToElement = (id) => {
        const destino = document.querySelector(`#${id}`)
        destino.scrollIntoView({ behavior: 'smooth' })
    }



    return (
        <nav className="navbar">
            <div className="container">
                <ul className="navbar-list">
                    <li className="navbar-item">
                        <button
                            className="navbar-item-link"
                            id="link-hero"
                            onClick={() => scrollToElement('hero')}
                        >
                            Inicio
                        </button>
                    </li>
                    <li className="navbar-item">
                        <button
                            className="navbar-item-link"
                            id="link-conferencistas"
                            onClick={() => scrollToElement('conferencistas')}
                        >
                            Conferencistas
                        </button>
                    </li>
                    <li className="navbar-item">
                        <button
                            className="navbar-item-link"
                            id="link-cronograma"
                            onClick={() => scrollToElement('cronograma')}
                        >
                            Cronograma
                        </button>
                    </li>
                    <li className="navbar-item">
                        <button
                            className="navbar-item-link"
                            id="link-hoteles"
                            onClick={() => scrollToElement('hoteles')}
                        >
                            Hoteles
                        </button>
                    </li>
                    <li className="navbar-item">
                        <button
                            className="navbar-item-link"
                            id="link-patrocinadores"
                            onClick={() => scrollToElement('patrocinadores')}
                        >
                            Patrocinadores
                        </button>
                    </li>
                    <li className="navbar-item">
                        <button
                            className="navbar-item-link"
                            id="link-contacto"
                            onClick={() => scrollToElement('contacto')}
                        >
                            Contactanos
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}