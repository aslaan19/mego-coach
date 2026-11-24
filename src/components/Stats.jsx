import { useLang } from '../context/LangContext'

const metrics = [
  { value: '8+', en: 'Years coaching', ar: 'سنوات من الخبرة' },
  { value: '100+', en: 'Client transformations', ar: 'تجارب تحوّل للعملاء' },
  { value: '3', en: 'Coaching certifications', ar: 'شهادات مهنية' },
]

export default function Stats() {
  const { t } = useLang()

  return (
    <section id="stats" className="proof" aria-label={t('Coaching experience', 'الخبرة التدريبية')}>
      <ul className="wrap proof-grid">
        {metrics.map(({ value, en, ar }) => (
          <li key={en}>
            <strong dir="ltr">{value}</strong>
            <span>{t(en, ar)}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}