import Cronogramaimg from '../assets/Cronograma/cronograma.webp'
export const Cronograma = () => {
    return (
        <section className="cronograma" id='cronograma'>
            <h3 className="cronograma-title">Cronograma</h3>
            <section className="cronograma-list">
                <img className="cronograma-img" src={Cronogramaimg} alt="Cronograma del evento" />
            </section>
        </section>
    )
}
