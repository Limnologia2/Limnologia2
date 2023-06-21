
import { Hero } from './components/hero'
import { Navbar } from './components/navbar'
import { Conferencistas } from './components/conferencistas'
import { Footer } from './components/footer'
import { Cronograma } from './components/cronograma'
import { Patrocinadores } from './components/patrocinadores'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Conferencistas />
      <Cronograma />
      <Patrocinadores />

      <Footer />
    </>
  )
}

export default App
