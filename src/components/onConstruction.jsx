import onConstructionImg from "../assets/regularImages/onConstruction.svg"

export const OnConstruction = () => {
    return (
        <picture className="onconstruction">
            <img src={onConstructionImg} className="onconstruction-image" alt="Trabajo en construccion" />
            <h2 className="onconstruction-title">En construccion</h2>
        </picture>
    )
}