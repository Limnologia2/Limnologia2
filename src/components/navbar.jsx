/* eslint-disable react/prop-types */
import { useState } from "react";
import { Payments } from "../helpers/pagos";
import pdfCircular from "../assets/Circulares/actualCircular.pdf";
import pdfComoPagar from "../assets/Circulares/comoPagar.pdf";
export const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const scrollToElement = (id) => {
    const destino = document.querySelector(`#${id}`);
    destino.scrollIntoView({ behavior: "smooth" });
  };

  window.addEventListener("scroll", () => {
    setIsDropdownOpen(false);
  });
  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };
  return (
    <nav className="navbar">
      <div className="container">
        <ul className="navbar-list">
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
            <a
              href={pdfCircular}
              target="_blank"
              rel="noreferrer"
              className="navbar-item-link"
              id="link-contacto"
            >
              Circular
            </a>
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

          <div className="navbar-item" onClick={toggleDropdown}>
            <button className="navbar-item-link">Pagos</button>
            {isDropdownOpen && (
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
