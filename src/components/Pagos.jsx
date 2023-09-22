import { Payments } from "../helpers/pagos"
import paymentImage from "../assets/Pagos/paymentDraw.svg"
export const Pagos = () => {
    return (
        <section className="pagos" id="pagos">
            <h2 className="pagos-title">pagos</h2>
            <div className="container">
                <ul className="pagos-list">
                    {Payments && Payments.map((payment, index) => {
                        return (
                            <li key={index} className="pagos-item">
                                <a href={payment.link} className="pagos-item-link" target="_blank" rel="noreferrer">
                                    <img src={paymentImage} alt="pagos" className="pagos-item-image" />
                                    <h3 className="pagos-item-title">
                                        {payment.name}
                                    </h3>
                                    {payment.tipo === "preencuentro" && <small>(CURSO PRECONGRESO)</small>}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}

