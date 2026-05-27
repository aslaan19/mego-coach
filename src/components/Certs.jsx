import { useLang } from '../context/LangContext'
import FadeUp from './FadeUp'

const CERTS = [
  {
    tag:   'CERTIFICATE',
    en:    'Certified Personal Trainer',
    ar:    'مدرب شخصي معتمد',
    org:   'NASM — NATIONAL ACADEMY OF SPORTS MEDICINE',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="1.5">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
  },
  {
    tag:   'CERTIFICATE',
    en:    'Sports Nutrition Specialist',
    ar:    'أخصائي التغذية الرياضية',
    org:   'ISSN — INTERNATIONAL SOCIETY OF SPORTS NUTRITION',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="1.5">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    tag:   'CERTIFICATE',
    en:    'Physique & Bodybuilding Coach',
    ar:    'مدرب فيزيك وكمال أجسام',
    org:   'ISSA — INTERNATIONAL SPORTS SCIENCES ASSOCIATION',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="1.5">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
  },
  {
    tag:   'DEGREE',
    en:    'MBA — Marketing Management',
    ar:    'ماجستير إدارة الأعمال — تسويق',
    org:   'MASTER OF BUSINESS ADMINISTRATION',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="1.5">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
]

export default function Certs() {
  const { isAr } = useLang()
  const t = (en, ar) => isAr ? ar : en

  return (
    <section id="certs">
      <FadeUp className="certs-header">
        <span className="section-eyebrow">{t('CREDENTIALS', 'الشهادات')}</span>
        <div className="section-title">
          {t('CERTIFIED TO THE', 'معتمد بأعلى')}<br />
          {t('HIGHEST STANDARD', 'المعايير')}
        </div>
      </FadeUp>

      <div className="certs-grid">
        {CERTS.map((c, i) => (
          <FadeUp key={c.en} className="cert-card" delay={i * 0.1}>
            <div className="cert-badge">{c.icon}</div>
            <div>
              <span className="cert-year-tag">{c.tag}</span>
              <div className="cert-name">{t(c.en, c.ar)}</div>
              <div className="cert-org">{c.org}</div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  )
}
