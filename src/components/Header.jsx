import { useState, useEffect } from 'react'
import { useLang } from '../context/LangContext'

const NAV_LINKS = [
  { href: '#about',    en: 'About',        ar: 'نبذة' },
  { href: '#services', en: 'Training',     ar: 'تدريب' },
  { href: '#certs',    en: 'Certificates', ar: 'الشهادات' },
  { href: '#contact',  en: 'Book',         ar: 'احجز' },
]

const WA_LINK = "https://wa.me/966500176066?text=Hello%20Coach%20Mego%2C%20I%27m%20interested%20in%20booking%20a%20session."

export default function Header() {
  const { isAr, toggle } = useLang()
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  const t = (en, ar) => isAr ? ar : en

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* lock body scroll when menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
        <div className="logo">
          <div className="logo-frame">
            <img src="/logo.png" alt="MEGO Logo" />
          </div>
        </div>

        <nav className="main-nav">
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href}>{t(l.en, l.ar)}</a>
          ))}
        </nav>

        <div className="header-right">
          <button className="lang-btn" onClick={toggle}>
            {isAr ? 'EN' : 'عربي'}
          </button>
          <a href={WA_LINK} className="book-btn" target="_blank" rel="noopener noreferrer">
            {t('BOOK A SESSION', 'احجز جلسة')}
          </a>
        </div>

        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(o => !o)}
        >
          <span /><span /><span />
        </button>
      </header>

      {/* ── Mobile overlay menu ── */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
        <button className="mobile-menu-close" onClick={closeMenu} aria-label="Close">✕</button>
        {NAV_LINKS.map((l, i) => (
          <a
            key={l.href}
            href={l.href}
            onClick={closeMenu}
            style={{ transitionDelay: menuOpen ? `${0.08 + i * 0.06}s` : '0s' }}
          >
            {t(l.en, l.ar)}
          </a>
        ))}
        <a
          href={WA_LINK}
          className="mobile-book-btn"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
          style={{ transitionDelay: menuOpen ? '0.32s' : '0s' }}
        >
          {t('BOOK A SESSION', 'احجز جلسة')}
        </a>
      </div>
    </>
  )
}
