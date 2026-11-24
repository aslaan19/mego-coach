import { useEffect } from 'react'
import VisitIntro from './components/VisitIntro'
import useSectionMotion from './useSectionMotion'
import { programs } from './programs'
import Program from './components/Program'
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
  useSectionMotion()
  const { isAr, t } = useLang()
  const id = new URLSearchParams(window.location.search).get('program')
  const program = programs.find(item => item.id === id)

  useEffect(() => {
    document.title = program
      ? program.name[isAr ? 1 : 0] + ' | MEGO'
      : isAr ? 'ميجو | مدرب فيزيك في الرياض' : 'MEGO | Physique Coaching in Riyadh'
  }, [isAr, program])

  useEffect(() => {
    const target = document.getElementById(window.location.hash.slice(1))
    if (target) target.scrollIntoView({ behavior: 'instant' })
  }, [])

  return (
    <>
      <a className="skip-link" href="#main">{t('Skip to content', 'انتقل إلى المحتوى')}</a>
      <VisitIntro />
      <Header />
      <main id="main" tabIndex={-1}>
        {program ? <Program program={program} /> : (
          <>
            <Hero />
            <Stats />
            <Services />
            <About />
            <Certs />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return <LangProvider><Page /></LangProvider>
}