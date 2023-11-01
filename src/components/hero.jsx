// import backgroundHeroImage from '../assets/val.svg'
import { useEffect } from 'react'
import backgroundHeroImage from '../assets/background.svg'
import { GrMapLocation } from "react-icons/gr"

export const Hero = () => {
    const fechaDestino = new Date("2023-11-30");
    useEffect(() => {
        const ahora = new Date();
        const diferencia = fechaDestino - ahora;

        if (diferencia <= 0) {
            document.getElementById('timer').innerHTML = '0';
        } else {
            const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
            document.getElementById('timer').innerHTML = `${dias} `;
        }
    }, [])




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
        <div className="hero-countdown">
            <h1 className="hero-countdown-title">FALTAN</h1>
            <p className='hero-countdown-timer' id="timer"></p>
            <h1 className="hero-countdown-title">DIAS</h1>
            
        </div>

    </section>)
}