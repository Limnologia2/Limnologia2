import Dia1 from '../assets/Cronograma/Dia1.svg'
import Dia2 from '../assets/Cronograma/Dia2.svg'
import Dia3 from '../assets/Cronograma/Dia3.svg'
export const Cronograma = () => {
    return (
        <section className="cronograma" id='cronograma'>
            <h3 className="cronograma-title">Cronograma</h3>
            <section className="cronograma-list">
                <img src={Dia1} alt="" className="cronograma-img cronograma-list-day" />
                <img src={Dia2} alt="" className="cronograma-img cronograma-list-day" />
                <img src={Dia3} alt="" className="cronograma-img cronograma-list-day" />
            </section>
        </section>
    )
}
