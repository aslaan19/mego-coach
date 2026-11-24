import { useLang } from '../context/LangContext'
import { bookingUrl } from '../site'

const services = [
  {
    mode: ['Remote', 'عن بُعد'],
    name: ['Online coaching', 'التدريب عن بُعد'],
    summary: [
      'A training plan built around your schedule, with weekly check-ins to adjust it as you progress.',
      'خطة تمرين تناسب جدولك، مع متابعة أسبوعية لتعديلها مع تقدّمك.',
    ],
    details: [
      ['Custom training plan', 'خطة تمرين مخصصة'],
      ['Nutrition guidance', 'إرشادات غذائية'],
      ['Weekly progress reviews', 'مراجعة أسبوعية للتقدّم'],
    ],
    message: ['Hi Coach MEGO, I’d like to ask about online coaching.', 'مرحبًا كوتش ميجو، أود الاستفسار عن التدريب عن بُعد.'],
  },
  {
    mode: ['Riyadh · 1:1', 'الرياض · فردي'],
    name: ['In-person training', 'التدريب الشخصي'],
    summary: [
      'Train one-on-one with MEGO in Riyadh and get direct feedback on how you lift and progress.',
      'تدرّب مع ميجو بشكل فردي في الرياض، واحصل على ملاحظات مباشرة حول أدائك وتقدّمك.',
    ],
    details: [
      ['One-on-one gym sessions', 'جلسات فردية في النادي'],
      ['Technique correction', 'تصحيح أسلوب التمرين'],
      ['Progressive programming', 'برنامج تدريبي متدرّج'],
    ],
    message: ['Hi Coach MEGO, I’d like to ask about in-person training in Riyadh.', 'مرحبًا كوتش ميجو، أود الاستفسار عن التدريب الشخصي في الرياض.'],
  },
  {
    mode: ['Stage & shoot', 'المنافسات والتصوير'],
    name: ['Physique prep', 'التحضير للفيزيك'],
    summary: [
      'Prepare for a competition or photoshoot with a plan built around the date you need to be ready.',
      'استعد لمسابقة أو جلسة تصوير مع خطة تراعي موعدك والهدف الذي تسعى إليه.',
    ],
    details: [
      ['Competition conditioning', 'إعداد بدني للمنافسات'],
      ['Posing practice', 'تدريب على وضعيات العرض'],
      ['Nutrition planning', 'تخطيط التغذية'],
    ],
    message: ['Hi Coach MEGO, I’d like to ask about physique prep.', 'مرحبًا كوتش ميجو، أود الاستفسار عن برنامج التحضير للفيزيك.'],
  },
]

export default function Services() {
  const { t } = useLang()

  return (
    <section id="services" className="services section-padding" tabIndex={-1} aria-labelledby="services-title">
      <div className="wrap">
        <div className="section-heading">
          <p className="eyebrow">{t('Coaching programs', 'برامج التدريب')}</p>
          <h2 id="services-title" className="display-heading">{t('FIND YOUR PROGRAM.', 'اختر برنامجك.')}</h2>
          <p>{t('Build muscle, improve your lifts, or get ready for the stage.', 'ابنِ عضلاتك، وطوّر أداءك في التمرين، أو استعد للمنافسة.')}</p>
        </div>

        <div className="service-grid">
          {services.map(({ mode, name, summary, details, message }) => (
            <article className="service" key={name[0]}>
              <p className="service-mode">{t(...mode)}</p>
              <h3>{t(...name)}</h3>
              <p className="service-summary">{t(...summary)}</p>
              <ul>{details.map(detail => <li key={detail[0]}>{t(...detail)}</li>)}</ul>
              <a
                className="button button--outline"
                href={bookingUrl(t(...message))}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t('Ask about ' + name[0].toLowerCase() + ' on WhatsApp', 'استفسر عن ' + name[1] + ' على واتساب')}
              >
                {t('Ask about this program', 'استفسر عن البرنامج')}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}