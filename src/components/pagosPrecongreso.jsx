import { Payments } from "../helpers/pagos"
import FechaHora from "../assets/Pagos/fechaHora.png"
export const PagosPrecongreso = () => {
    const paymentsRender = Payments.filter((payment) => {
        return payment.tipo === "preencuentro"
    })
    return (
        <section className="pagos" id="pagos">
            <h2 className="pagos-title">Cursos pre-encuentro</h2>
            <div className="container">
                <p>
                    <img src={FechaHora} alt="Fecha y hora del encuentro" className="pagos-fecha" />
                </p>
                <ul className="pagos-list">
                    {paymentsRender && paymentsRender.map((payment, index) => {
                        return (
                            <li key={index} className="pagos-item">
                                <a href={payment.link} className="pagos-item-link" target="_blank" rel="noreferrer">
                                    <img src={payment.image} alt="pagos" className={`pagos-item-image${payment.tipo == "normal" ? "" : " preencuentro"}`} />
                                    <h3 className="pagos-item-title">
                                        {payment.name}
                                    </h3>
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}

