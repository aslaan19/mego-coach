import { useLang } from '../context/LangContext'

const NAV_LINKS = [
  { href: '#about',    en: 'About',          ar: 'نبذة' },
  { href: '#services', en: 'Training',        ar: 'تدريب' },
  { href: '#certs',    en: 'Certificates',    ar: 'الشهادات' },
  { href: '#contact',  en: 'Book a Session',  ar: 'احجز جلسة' },
]

function IgIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  )
}
function TtIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.27 8.27 0 004.84 1.55V6.79a4.85 4.85 0 01-1.07-.1z" />
    </svg>
  )
}
function ScIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.166 2c2.092 0 5.179 1.237 5.179 5.033v.449c0 .376.039.745.107 1.105.277-.104.527-.162.744-.162.42 0 .795.148.795.578 0 .57-.694.832-1.25 1.027-.129.046-.284.1-.406.158.089.318.279.618.51.906 1.056 1.308 2.143 1.873 2.143 2.504 0 .433-.34.698-.74.698-.226 0-.457-.06-.662-.12-.278-.082-.521-.122-.742-.122-.185 0-.36.027-.56.087-.32.096-.659.493-.888 1.039-.23.547-.276 1.095-.076 1.505.048.1.072.207.072.314 0 .526-.514.77-1.103.77-.32 0-.655-.06-.976-.12-.264-.05-.513-.097-.72-.097-.183 0-.398.033-.655.115-.53.169-1.043.569-1.598.569-.536 0-1.052-.396-1.563-.566a2.6 2.6 0 00-.69-.118c-.212 0-.46.047-.724.097-.32.06-.656.12-.976.12-.59 0-1.103-.244-1.103-.77 0-.107.024-.214.072-.314.2-.41.154-.958-.076-1.505-.229-.546-.568-.943-.888-1.039a2.07 2.07 0 00-.56-.087c-.22 0-.464.04-.742.122-.205.06-.436.12-.662.12-.4 0-.74-.265-.74-.698 0-.631 1.087-1.196 2.143-2.504.231-.288.42-.588.51-.906-.122-.058-.277-.112-.406-.158-.557-.195-1.25-.457-1.25-1.027 0-.43.375-.578.795-.578.217 0 .467.058.744.162.068-.36.107-.729.107-1.105V7.033C6.655 3.237 9.742 2 11.834 2h.332z" />
    </svg>
  )
}
function WaIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

const SOCIALS = [
  { href: 'https://www.instagram.com/mohamed_abd_al_mageid/', label: 'Instagram', Icon: IgIcon },
  { href: 'https://www.tiktok.com/@mego_1985',                label: 'TikTok',    Icon: TtIcon },
  { href: 'https://www.snapchat.com/@mado3mado3',             label: 'Snapchat',  Icon: ScIcon },
  { href: 'https://wa.me/966500176066',                       label: 'WhatsApp',  Icon: WaIcon },
]

export default function Footer() {
  const { isAr } = useLang()
  const t = (en, ar) => isAr ? ar : en

  return (
    <footer>
      <div className="footer-top">
        <div>
          <div className="footer-logo">
            <div className="logo-frame logo-frame--sm">
              <img src="/logo.png" alt="MEGO" />
            </div>
          </div>
          <div className="footer-tagline">
            {t('PHYSIQUE COACHING · RIYADH, KSA', 'تدريب فيزيك · الرياض، المملكة العربية السعودية')}
          </div>
        </div>

        <nav className="footer-nav">
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href}>{t(l.en, l.ar)}</a>
          ))}
        </nav>

        <div className="footer-socials">
          {SOCIALS.map(({ href, label, Icon }) => (
            <a key={label} href={href} className="social-ico" target="_blank" rel="noopener noreferrer" aria-label={label}>
              <Icon />
            </a>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <span className="footer-copy">© 2025 MEGO — MOHAMED ABD AL MAGEID. ALL RIGHTS RESERVED.</span>
        <span className="footer-made">RIYADH, KSA</span>
      </div>
    </footer>
  )
}
