
import { Hero } from './components/hero'
import { Navbar } from './components/navbar'
import { Conferencistas } from './components/conferencistas'
import { Footer } from './components/footer'
import { Cronograma } from './components/cronograma'
import { Patrocinadores } from './components/patrocinadores'
import { Hoteles } from './components/hoteles'
import { Pagos } from "./components/Pagos"
import { OnConstruction } from './components/onConstruction'
import { PagosPrecongreso } from './components/pagosPrecongreso'
// import { Circular } from "./components/circular"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Conferencistas />
      <PagosPrecongreso />
      <Cronograma />
      <Hoteles />
      {/* <Circular /> */}
      <Pagos />
      <Patrocinadores />
      {/* <OnConstruction /> */}
      <Footer />
    </>
  )
}

export default App
