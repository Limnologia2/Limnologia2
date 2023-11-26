import { useEffect, useState } from 'react';
import CronogramaimgLarge from '../assets/Cronograma/cronogramalarge.webp'
import CronogramaimgLarge2 from '../assets/Cronograma/cronogramalarge2.webp'
import CronogramaimgLarge3 from '../assets/Cronograma/cronogramalarge3.webp'
import CronogramaimgSmall from '../assets/Cronograma/cronogramasmall.webp'
import CronogramaimgSmall2 from '../assets/Cronograma/cronogramasmall2.webp'
import CronogramaimgSmall3 from '../assets/Cronograma/cronogramasmall3.webp'

export const Cronograma = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleWindowSizeChange = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        };
    }, []); 
    const Cronogramaimg = windowWidth >= 992 ? CronogramaimgLarge : CronogramaimgSmall;
    const Cronogramaimg2 = windowWidth >= 992 ? CronogramaimgLarge2 : CronogramaimgSmall2;
    const Cronogramaimg3 = windowWidth >= 992 ? CronogramaimgLarge3 : CronogramaimgSmall3;
    return (
        <section className="cronograma" id='cronograma'>
            <h3 className="cronograma-title">Cronograma</h3>
            <section className="cronograma-list">
                <img className="cronograma-img" src={Cronogramaimg} alt="Cronograma del evento" />
                <img className="cronograma-img" src={Cronogramaimg2} alt="Cronograma del evento" />
                <img className="cronograma-img" src={Cronogramaimg3} alt="Cronograma del evento" />
            </section>
        </section>
    )
}
