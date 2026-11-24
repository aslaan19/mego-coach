import { useLang } from '../context/LangContext'

const credentials = [
  { code: 'NASM', role: ['Certified Personal Trainer', 'مدرب شخصي معتمد'], issuer: 'National Academy of Sports Medicine' },
  { code: 'ISSN', role: ['Sports Nutrition Specialist', 'أخصائي تغذية رياضية'], issuer: 'International Society of Sports Nutrition' },
  { code: 'ISSA', role: ['Physique & Bodybuilding Coach', 'مدرب فيزيك وكمال أجسام'], issuer: 'International Sports Sciences Association' },
  { code: 'MBA', role: ['Marketing Management', 'إدارة التسويق'], issuer: 'Master of Business Administration' },
]

export default function Certs() {
  const { t } = useLang()

  return (
    <section id="certs" className="credentials section-padding" tabIndex={-1} aria-labelledby="certs-title">
      <div className="wrap credential-layout">
        <div className="section-heading">
          <p className="eyebrow">{t('Credentials', 'المؤهلات')}</p>
          <h2 id="certs-title" className="display-heading">{t('TRAIN WITH A CERTIFIED COACH.', 'تدرّب مع مدرب معتمد.')}</h2>
        </div>
        <ul className="credential-list">
          {credentials.map(({ code, role, issuer }) => (
            <li key={code}>
              <span className="credential-code" dir="ltr">{code}</span>
              <div>
                <h3>{t(...role)}</h3>
                <p lang="en" dir="ltr">{issuer}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}