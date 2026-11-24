import { useLang } from '../context/LangContext'
import { bookingUrl, phone } from '../site'

export default function Contact() {
  const { t } = useLang()
  const message = t(
    'Hi Coach MEGO, I’d like to talk about coaching and which program would fit my goals.',
    'مرحبًا كوتش ميجو، أود معرفة البرنامج التدريبي الأنسب لأهدافي.'
  )

  return (
    <section id="contact" className="contact" tabIndex={-1} aria-labelledby="contact-title">
      <div className="wrap contact-inner">
        <div>
          <p className="eyebrow">{t('Book coaching', 'احجز تدريبك')}</p>
          <h2 id="contact-title" className="display-heading">{t('LET’S GET TO WORK.', 'خلّنا نبدأ.')}</h2>
          <p>{t('Tell me what you want to work on. We’ll figure out which program fits.', 'أخبرني عن هدفك، ونختار معًا البرنامج الذي يناسبك.')}</p>
        </div>
        <div className="contact-action">
          <a className="button button--dark" href={bookingUrl(message)} target="_blank" rel="noopener noreferrer">
            {t('Message MEGO on WhatsApp', 'راسل ميجو على واتساب')}
          </a>
          <bdi dir="ltr">{phone}</bdi>
        </div>
      </div>
    </section>
  )
}