import { useLang } from '../context/LangContext'
import { bookingUrl } from '../site'
import { programs } from '../programs'

export default function Services() {
  const { t } = useLang()

  return (
    <section id="services" className="services section-padding" tabIndex={-1} aria-labelledby="services-title">
      <div className="wrap">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">{t('Coaching programs', 'برامج التدريب')}</p>
          <h2 id="services-title" className="display-heading">{t('FIND YOUR PROGRAM.', 'اختر برنامجك.')}</h2>
          <p>{t('Build muscle, improve your lifts, or get ready for the stage.', 'ابنِ عضلاتك، وطوّر أداءك في التمرين، أو استعد للمنافسة.')}</p>
        </div>

        <div className="service-grid" data-reveal>
          {programs.map(({ id, photo, mode, name, summary, details, message }, index) => (
            <details className="service" name="coaching-program" key={name[0]} open={index === 0}>
              <summary>
                <img className="service-thumb" src={photo} alt="" loading="lazy" width="80" height="96" />
                <span className="service-mode">{t(...mode)}</span>
                <span className="service-name">{t(...name)}</span>
                <span className="service-toggle" aria-hidden="true" />
              </summary>
              <div className="service-body">
                <p className="service-summary">{t(...summary)}</p>
                <ul>{details.map(detail => <li key={detail[0]}>{t(...detail)}</li>)}</ul>
                <div className="program-links">
                  <a className="button button--dark" href={`?program=${id}`}>{t('View program', 'تفاصيل البرنامج')}</a>
                  <a
                    className="button button--outline"
                    href={bookingUrl(t(...message))}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t('Ask about ' + name[0].toLowerCase() + ' on WhatsApp', 'استفسر عن ' + name[1] + ' على واتساب')}
                  >
                    {t('Ask MEGO on WhatsApp', 'اسأل ميجو على واتساب')}
                  </a>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}