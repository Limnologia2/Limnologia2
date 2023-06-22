/* eslint-disable react/prop-types */
import { BsFillArrowRightSquareFill } from "react-icons/bs"

export const HotelTableColumn = ({ label, data }) => {
    return (
        <div className="hotel-table-column">
            <header className="hotel-table-column-header">
                {label}
            </header>
            <main className="hotel-table-column-main">
                {data && data.map((data, index) =>
                    label != "ir" ?
                        <p key={index} className="hotel-table-column-main-item">
                            {data}
                        </p>
                        :
                        <a href={data} target="_blank" rel="noopener noreferrer" key={index} className="hotel-table-column-main-item">
                            <BsFillArrowRightSquareFill />
                        </a>
                )}
            </main>

        </div>
    )
}
