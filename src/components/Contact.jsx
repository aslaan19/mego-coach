import { useState } from 'react'
import { useLang } from '../context/LangContext'
import { programs } from '../programs'
import { bookingUrl, generalInquiry, phone } from '../site'

export default function Contact() {
  const { t } = useLang()
  const [programId, setProgramId] = useState('')
  const program = programs.find(item => item.id === programId)
  const link = program ? bookingUrl(t(...program.message)) : generalInquiry(t)

  return (
    <section id="contact" className="contact" tabIndex={-1} aria-labelledby="contact-title">
      <div className="wrap contact-inner">
        <div className="contact-copy" data-reveal>
          <p className="eyebrow">{t('Coaching enquiries', 'استفسارات التدريب')}</p>
          <h2 id="contact-title" className="display-heading">{t('TALK TO MEGO.', 'تواصل مع ميجو.')}</h2>
          <p>{t('Tell me where you train and what you want to work on. We’ll take it from there.', 'قل لي أين تتمرّن وما الذي تريد تطويره، ونختار الخطوة القادمة معًا.')}</p>
        </div>
        <div className="booking-card" data-reveal>
          <label htmlFor="booking-program">{t('Which program interests you?', 'أي برنامج يهمّك؟')}</label>
          <select id="booking-program" value={programId} onChange={event => setProgramId(event.target.value)}>
            <option value="">{t('Help me choose', 'ساعدني في الاختيار')}</option>
            {programs.map(item => <option key={item.id} value={item.id}>{t(...item.name)}</option>)}
          </select>
          <a className="button button--dark" href={link} target="_blank" rel="noopener noreferrer">{t('Message MEGO on WhatsApp', 'راسل ميجو على واتساب')}</a>
          <a className="booking-phone" href="tel:+966500176066"><bdi dir="ltr">{phone}</bdi></a>
        </div>
      </div>
    </section>
  )
}