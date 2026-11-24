import { useRef, useState } from 'react'
import { useLang } from '../context/LangContext'
import { generalInquiry, navigation } from '../site'

export default function Header() {
  const { isAr, t, toggle } = useLang()
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButton = useRef(null)

  function handleEscape(event) {
    if (event.key === 'Escape' && menuOpen) {
      setMenuOpen(false)
      menuButton.current.focus()
    }
  }

  function followMenuLink(event) {
    const section = document.getElementById(event.currentTarget.hash.slice(1))
    section?.focus({ preventScroll: true })
    setMenuOpen(false)
  }

  return (
    <header className="site-header" onKeyDown={handleEscape}>
      <div className="wrap header-inner">
        <a href="./#hero" className="wordmark" aria-label={t('MEGO home', 'ميجو، الرئيسية')} dir="ltr">
          MEGO<span>.</span>
        </a>

        <nav className="desktop-nav" aria-label={t('Main navigation', 'القائمة الرئيسية')}>
          {navigation.map(({ href, en, ar }) => <a key={href} href={`./${href}`}>{t(en, ar)}</a>)}
        </nav>

        <div className="header-actions">
          <button className="language-button" type="button" onClick={toggle} lang={isAr ? 'en' : 'ar'}>
            {t('عربي', 'English')}
          </button>
          <a className="button button--outline header-book" href={generalInquiry(t)} target="_blank" rel="noopener noreferrer">
            {t('WhatsApp', 'واتساب')}
          </a>
          <button
            ref={menuButton}
            className="menu-button"
            type="button"
            aria-controls="mobile-nav"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? t('Close menu', 'أغلق القائمة') : t('Open menu', 'افتح القائمة')}
            onClick={() => setMenuOpen(open => !open)}
          >
            <span /><span />
          </button>
        </div>
      </div>

      <nav id="mobile-nav" className="mobile-nav" aria-label={t('Main navigation', 'القائمة الرئيسية')} hidden={!menuOpen}>
        <div className="wrap mobile-nav-inner">
          {navigation.map(({ href, en, ar }) => (
            <a key={href} href={`./${href}`} onClick={followMenuLink}>{t(en, ar)}</a>
          ))}
          <a href="./#contact" onClick={followMenuLink}>{t('Book coaching', 'احجز تدريبك')}</a>
        </div>
      </nav>
    </header>
  )
}