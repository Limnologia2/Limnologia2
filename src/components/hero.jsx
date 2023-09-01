// import backgroundHeroImage from '../assets/val.svg'
import backgroundHeroImage from '../assets/background.svg'
import { GrMapLocation } from "react-icons/gr"

export const Hero = () => {
    return (<section className="hero" id='hero'>
        <div className="hero-background">
            <img src={backgroundHeroImage} alt="Segundo encuentro Colombiano de limnologia" className="hero-background-img" />
        </div>

        {/* <section className="hero-buttons">
            <a className="hero-button hero-button-register" href='https://docs.google.com/forms/d/e/1FAIpQLSczW5VbGaNR0wtQJKv4pz0CZ4uXvPummIdZ8QD2pIaBOgCTsg/viewform' target='_blank' rel='noreferrer'>
                Registrarse
            </a>
            <a className="hero-button hero-button-resumenes" href='https://docs.google.com/forms/d/e/1FAIpQLSedzCPnyzfBEKGaAE-yXlgyy7pcqpww7A2czxZBg_1IkJZxdQ/viewform' target='_blank' rel='noreferrer'>
                Resumenes
            </a>
        </section> */}
        <a href="https://goo.gl/maps/tgFFUcCpKMAb7fTB9" target='_blank' rel="noreferrer" className="hero-location">
            <GrMapLocation />
            Universidad del Magdalena
        </a>

    </section>)
}