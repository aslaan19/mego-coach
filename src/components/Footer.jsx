import { useLang } from '../context/LangContext'
import { navigation, socials } from '../site'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-main" data-reveal>
          <div className="footer-brand">
            <a href="./#hero" className="wordmark" aria-label={t('MEGO home', 'ميجو، الرئيسية')} dir="ltr">MEGO<span>.</span></a>
            <p>{t('Physique coaching in Riyadh', 'تدريب فيزيك في الرياض')}</p>
          </div>
          <nav aria-label={t('Footer navigation', 'قائمة التذييل')}>
            <h2 className="footer-nav-title">{t('Explore', 'تصفّح')}</h2>
            {navigation.map(({ href, en, ar }) => <a key={href} href={`./${href}`}>{t(en, ar)}</a>)}
          </nav>
          <nav aria-label={t('Social media', 'وسائل التواصل الاجتماعي')}>
            <h2 className="footer-nav-title">{t('Follow MEGO', 'تابع ميجو')}</h2>
            {socials.map(({ label, href }) => (
              <a key={label} href={href} lang="en" target="_blank" rel="noopener noreferrer">{label}</a>
            ))}
          </nav>
        </div>
        <div className="footer-base">
          <p className="footer-legal">© {new Date().getFullYear()} {t('MEGO · Mohamed Abd Al Mageid', 'ميجو · محمد عبد المجيد')}</p>
          <a href="#main">{t('Back to top', 'العودة للأعلى')}</a>
        </div>
      </div>
    </footer>
  )
}