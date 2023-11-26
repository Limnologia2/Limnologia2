/* eslint-disable react/prop-types */
import { useState } from "react";
import { Payments } from "../helpers/pagos";
import { Documents } from "../helpers/documents";
import { RxHamburgerMenu } from "react-icons/rx";
import pdfComoPagar from "../assets/Circulares/comoPagar.pdf";
export const Navbar = () => {
  const [isDropdownPaymentsOpen, setIsDropdownPaymentsOpen] = useState(false);
  const [isDropdownDocumentsOpen, setIsDropdownDocumentsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const scrollToElement = (id) => {
    const destino = document.querySelector(`#${id}`);
    destino.scrollIntoView({ behavior: "smooth" });
  };

  window.addEventListener("scroll", () => {
    setIsDropdownPaymentsOpen(false);
    setIsMenuOpen(false)
  });
  const toggleDropdownPayments = () => {
    setIsDropdownPaymentsOpen((prevState) => !prevState);
    if(isDropdownDocumentsOpen) setIsDropdownDocumentsOpen(false)
  };
  const toggleDropdownDocuments = () => {
    setIsDropdownDocumentsOpen((prevState) => !prevState);
    if(isDropdownPaymentsOpen) setIsDropdownPaymentsOpen(false)
  };
  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState)
  }
  return (
    <nav className="navbar">
      <div className="container">
        <button className="navbar-button" onClick={toggleMenu}>
          <RxHamburgerMenu />
        </button>
        <ul className={`navbar-list ${isMenuOpen ? 'open' : ''}`}>
          <li className="navbar-item">
            <button
              className="navbar-item-link"
              id="link-hero"
              onClick={() => scrollToElement("hero")}
            >
              Inicio
            </button>
          </li>
          <li className="navbar-item">
            <button
              className="navbar-item-link"
              id="link-conferencistas"
              onClick={() => scrollToElement("conferencistas")}
            >
              Conferencistas
            </button>
          </li>
          <li className="navbar-item">
            <button
              className="navbar-item-link"
              id="link-cronograma"
              onClick={() => scrollToElement("cronograma")}
            >
              Cronograma
            </button>
          </li>
          <li className="navbar-item">
            <button
              className="navbar-item-link"
              id="link-hoteles"
              onClick={() => scrollToElement("hoteles")}
            >
              Hoteles
            </button>
          </li>
          <li className="navbar-item">
            <button
              className="navbar-item-link"
              id="link-patrocinadores"
              onClick={() => scrollToElement("patrocinadores")}
            >
              Patrocinadores
            </button>
          </li>

          <div className="navbar-item" onClick={toggleDropdownPayments}>
            <button className="navbar-item-link">Pagos</button>
            {isDropdownPaymentsOpen && (
              <ul className="navbar-dropdown">
                {Payments &&
                  Payments.map((item, index) => {
                    if (item.tipo !== "preencuentro")
                      return (
                        <li className="navbar-dropdown-item" key={index}>
                          <a
                            href={item.link}
                            target="_blank"
                            className="navbar-dropdown-item-link"
                            rel="noreferrer"
                          >
                            {item.name}
                          </a>
                        </li>
                      )
                  })}
                <li className="navbar-dropdown-item">
                  <a
                    href={pdfComoPagar}
                    target="_blank"
                    rel="noreferrer"
                    className="navbar-dropdown-item-link"
                    id="link-contacto"
                  >
                    ¿Como pagar?
                  </a>
                </li>
              </ul>
            )}
          </div>
          <div className="navbar-item" onClick={toggleDropdownDocuments}>
            <button className="navbar-item-link">Documentos</button>
            {isDropdownDocumentsOpen && (
              <ul className="navbar-dropdown">
                {Documents &&
                  Documents.map((item, index) => {
                      return (
                        <li className="navbar-dropdown-item" key={index}>
                          <a
                            href={item.pdf}
                            target="_blank"
                            className="navbar-dropdown-item-link"
                            rel="noreferrer"
                          >
                            {item.name}
                          </a>
                        </li>
                      )
                  })}
              </ul>
            )}
          </div>
          <li className="navbar-item">
            <button
              className="navbar-item-link"
              id="link-contacto"
              onClick={() => scrollToElement("contacto")}
            >
              Contactanos
            </button>
          </li>
          
        </ul>
      </div>
    </nav>
  );
};
