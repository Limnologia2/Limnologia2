import { useEffect, useState } from 'react';
import CronogramaimgLarge from '../assets/Cronograma/cronogramalarge.webp'
import CronogramaimgSmall from '../assets/Cronograma/cronogramasmall.png'
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
    return (
        <section className="cronograma" id='cronograma'>
            <h3 className="cronograma-title">Cronograma</h3>
            <section className="cronograma-list">
                <img className="cronograma-img" src={Cronogramaimg} alt="Cronograma del evento" />
            </section>
        </section>
    )
}
