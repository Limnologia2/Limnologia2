import PECES from "../assets/Pagos/Biomonitoreo.png"
import BIOMONITOREO from "../assets/Pagos/Ecologia.png"
import ECOLOGIA from "../assets/Pagos/Peces.png"
import PaymentDraw from "../assets/Pagos/paymentDraw.svg"


export const Payments = [
    {
        name: "Estudiante Pregrado",
        link: "https://pse.unimagdalena.edu.co/Volante/GenerarPago/1039",
        tipo: "normal",
        image: PaymentDraw
    },
    {
        name: "Estudiante Posgrado o Profesional",
        link: "https://pse.unimagdalena.edu.co/Volante/GenerarPago/1040",
        tipo: "normal",
        image: PaymentDraw
    },
    {
        name: "Taxonomía y sistemática de peces dulceacuícolas neotropicales",
        link: "https://pagos.unimagdalena.edu.co/Volante/GenerarPago/1015",
        tipo: "preencuentro",
        image: PECES
    },
    {
        name: "Introducción a la ecología y taxonomía de diatomeas",
        link: "https://pagos.unimagdalena.edu.co/Volante/GenerarPago/1016",
        tipo: "preencuentro",
        image: ECOLOGIA
    },
    {
        name: "Biomonitoreo acuático participativo",
        link: "https://pagos.unimagdalena.edu.co/Volante/GenerarPago/1017",
        tipo: "preencuentro",
        image: BIOMONITOREO
    }
]