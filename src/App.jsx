
import { Hero } from './components/hero'
import { Navbar } from './components/navbar'
import { Conferencistas } from './components/conferencistas'
import { Footer } from './components/footer'
import { Cronograma } from './components/cronograma'
import { Patrocinadores } from './components/patrocinadores'
import { Hoteles } from './components/hoteles'
import { Pagos } from "./components/Pagos"
import { OnConstruction } from './components/onConstruction'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Conferencistas />
      <Cronograma />
      <Hoteles />
      <Pagos />
      <Patrocinadores />
      <OnConstruction />
      <Footer />
    </>
  )
}

export default App
