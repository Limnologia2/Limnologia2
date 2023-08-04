import { patrocinadores } from "../helpers/patrocinadores"
export const Patrocinadores = () => {
    return (
        <section className="patrocinadores" id="patrocinadores">
            <h3 className="patrocinadores-title">Patrocinadores</h3>
            <article className="patrocinadores-list">
                {patrocinadores && patrocinadores.map((patrocinador, index) => {
                    return (
                        <a href={patrocinador.link} className="patrocinador" key={index} target="_blank" rel="noreferrer" >
                            <img src={patrocinador.image} alt={patrocinador.name} className="patrocinador-image" />
                            <h4 className="patrocinador-name">{patrocinador.name}</h4>

                        </a>
                    )
                })}
            </article>

        </section>
    )
}
