import { LangProvider } from './context/LangContext'
import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Services from './components/Services'
import Certs from './components/Certs'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <LangProvider>
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Certs />
        <Contact />
      </main>
      <Footer />
    </LangProvider>
  )
}
