import { LangProvider, useLang } from './context/LangContext'
import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Services from './components/Services'
import Certs from './components/Certs'
import Contact from './components/Contact'
import Footer from './components/Footer'

function Page() {
  const { t } = useLang()

  return (
    <>
      <a className="skip-link" href="#main">{t('Skip to content', 'انتقل إلى المحتوى')}</a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Stats />
        <Services />
        <About />
        <Certs />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return <LangProvider><Page /></LangProvider>
}