import { hoteles } from '../helpers/hoteles'

import { HotelTableColumn } from './hoteltablecolumn'
// eslint-disable-next-line react/prop-types
export const HotelTable = () => {
    const tipos = hoteles.map(hotel => hotel.tipo)
    const nombres = hoteles.map(hotel => hotel.nombre)
    const direcciones = hoteles.map(hotel => hotel.direccion)
    const links = hoteles.map(hotel => hotel.link)
    return (
        <article className="hotel-table">
            <HotelTableColumn label="tipo" data={tipos} />
            <HotelTableColumn label="nombre" data={nombres} />
            <HotelTableColumn label="direccion" data={direcciones} />
            <HotelTableColumn label="ir" data={links} />

        </article>
    )
}
