import { listaConferencistas } from "../helpers/conferencistas"
import { Conferencista } from "./conferencista"

export const Conferencistas = () => {
    return (
        <section className="conferencistas" id="conferencistas">
            <h2 className="conferencistas-title">conferencistas</h2>
            <div className="container">
                <article className="conferencistas-list">
                    {listaConferencistas && listaConferencistas.map((conferencista, index) => {
                        return (
                            <Conferencista key={index} conferencista={conferencista} />
                        )
                    }
                    )}
                </article>
            </div>
        </section>
    )
}
