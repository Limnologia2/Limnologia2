import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai'
import { RiFacebookCircleFill } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'

export const Footer = () => {
    return (
        <section className="contacto" id="contacto">
            <h3 className="contacto-title">Información de contacto</h3>
            <div className="contacto-media">
                <a target='_blank' rel='noreferrer' href="https://twitter.com/Limnologiaco2E">
                    <AiFillTwitterCircle />
                </a>
                <a target='_blank' rel='noreferrer' href="https://www.instagram.com/limnologiaco2e/">
                    <AiFillInstagram />
                </a>
                <a target='_blank' rel='noreferrer' href="https://www.facebook.com/profile.php?id=100093704325025">
                    <RiFacebookCircleFill />
                </a>
                <a target='_blank' rel='noreferrer' href="https://wa.me/3014560682">
                    <BsWhatsapp />
                </a>
            </div>
            <p className="contacto-address">
                <b>Dirección: </b>Carrera 32 No 22 – 08 Santa Marta D.T.C.H. - Colombia.
            </p>
            <span className="contacto-email">
                <b>Correo electrónico:</b> encuentrolimnocol2@gmail.com
            </span>
            <span className="contacto-Telefono">
                <b>Telefono:</b> +57 3014560682
            </span>
        </section>
    )
}
