/* eslint-disable react/prop-types */

export const Conferencista = ({ conferencista }) => {
    return (
        <div className="conferencista"  >
            <img src={conferencista.image} alt={conferencista.name} className="conferencista-image" />
            <p className="conferencista-name">{conferencista.titulo} {conferencista.name}</p>
            <span className="conferencista-description">{conferencista.descripcion}</span>
        </div>
    )
}
