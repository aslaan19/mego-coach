import { useLang } from '../context/LangContext'
import { programs } from '../programs'
import { bookingUrl } from '../site'

export default function Program({ program }) {
  const { t } = useLang()
  const { id, name, mode, summary, photo, details, focus, first, message } = program

  return (
    <article className="program-page">
      <div className="program-cover">
        <div className="wrap program-cover-inner">
          <div className="program-intro" data-reveal>
            <a className="back-link" href="./#services">{t('All coaching programs', 'كل برامج التدريب')}</a>
            <p className="eyebrow">{t(...mode)}</p>
            <h1 className="display-heading">{t(...name)}</h1>
            <p className="program-deck">{t(...summary)}</p>
            <a className="button button--primary" href={bookingUrl(t(...message))} target="_blank" rel="noopener noreferrer">
              {t('Ask MEGO on WhatsApp', 'اسأل ميجو على واتساب')}
            </a>
          </div>
          <img className="program-photo" src={photo} alt="" width="520" height="580" />
        </div>
      </div>
      <section className="program-brief">
        <div className="wrap brief-inner">
          <div className="program-includes" data-reveal>
            <h2>{t('Included in your program', 'يشمل برنامجك')}</h2>
            <ul>{details.map(item => <li key={item[0]}>{t(...item)}</li>)}</ul>
          </div>
          <div className="program-notes">
            {focus.map(([title, body, arTitle, arBody]) => (
              <section key={title} data-reveal>
                <h2>{t(title, arTitle)}</h2>
                <p>{t(body, arBody)}</p>
              </section>
            ))}
            <section>
              <h2>{t('Your first message', 'رسالتك الأولى')}</h2>
              <p>{t(...first)}</p>
              <a className="inline-cta" href={bookingUrl(t(...message))} target="_blank" rel="noopener noreferrer">{t('Message MEGO', 'راسل ميجو')}</a>
            </section>
          </div>
        </div>
      </section>
      <nav className="wrap other-programs" aria-label={t('Other coaching programs', 'برامج تدريب أخرى')}>
        <h2>{t('Other programs', 'برامج أخرى')}</h2>
        {programs.filter(item => item.id !== id).map(item => (
          <a key={item.id} href={'?program=' + item.id}>{t(...item.name)}</a>
        ))}
      </nav>
    </article>
  )
}