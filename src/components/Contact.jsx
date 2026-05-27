import { useLang } from '../context/LangContext'
import FadeUp from './FadeUp'

const WA_LINK = "https://wa.me/966500176066?text=Hello%20Coach%20Mego%2C%20I%27d%20like%20to%20book%20a%20session%20with%20you."

function WhatsAppIcon() {
  return (
    <svg className="wa-icon" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export default function Contact() {
  const { isAr } = useLang()
  const t = (en, ar) => isAr ? ar : en

  return (
    <section id="contact">
      {/* Coach photo — place your image at public/contact-photo.jpg */}
      <div className="contact-photo">
        <img src="/bigramy.png" alt="Coach MEGO" />
      </div>

      <div className="contact-inner">
      <FadeUp tag="span" className="contact-eyebrow">
        {t('READY TO TRANSFORM?', 'هل أنت مستعد للتحول؟')}
      </FadeUp>

      <FadeUp
        tag="div"
        className="contact-title"
        delay={0.1}
        style={{ fontFamily: isAr ? "'Tajawal', sans-serif" : "'Bebas Neue', sans-serif" }}
      >
        {isAr ? <>ابدأ<br />رحلتك الآن.</> : <>START YOUR<br />JOURNEY.</>}
      </FadeUp>

      <FadeUp tag="div" className="contact-title-ar" delay={0.15}>
        {t('Book a session via WhatsApp', 'احجز جلستك عبر واتساب')}
      </FadeUp>

      <FadeUp tag="p" className="contact-sub" delay={0.2}>
        {t(
          "Send a message directly to Coach MEGO on WhatsApp. Whether you're a beginner or a seasoned athlete, every transformation starts with a single message.",
          'تواصل مباشرةً مع المدرب ميجو عبر واتساب. سواء كنت في بداية طريقك أو رياضياً محترفاً يسعى لمستوى أعلى — كل رحلة تحول تبدأ برسالة واحدة.'
        )}
      </FadeUp>

      <FadeUp tag="a" href={WA_LINK} className="wa-btn" target="_blank" rel="noopener noreferrer" delay={0.25}>
        <WhatsAppIcon />
        {t('CHAT ON WHATSAPP', 'تحدث على واتساب')}
      </FadeUp>

      <FadeUp tag="div" className="contact-note" delay={0.3}>
        {t(
          '+966 50 017 6066  ·  RIYADH, SAUDI ARABIA',
          '+966 50 017 6066  ·  الرياض، المملكة العربية السعودية'
        )}
      </FadeUp>
      </div>
    </section>
  )
}
