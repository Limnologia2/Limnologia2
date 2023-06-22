import { HotelTable } from './hoteltable'

export const Hoteles = () => {

    return (
        <section id="hoteles">
            <h2 className="hotel-title">Hoteles</h2>
            <div className="container">
                <section className="hotel">
                    <HotelTable />
                </section>
            </div>
        </section>
    )
}
