import { useLang } from '../context/LangContext'
import FadeUp from './FadeUp'

const SERVICES = [
  {
    num: '01',
    en:  'ONLINE COACHING',
    ar:  'التدريب عن بُعد',
    descEn: 'Full personalized program delivered remotely. Custom training plan, weekly check-ins, nutrition guidance, and progress tracking — all from your phone.',
    descAr: 'برنامج تدريبي متكامل ومخصص بالكامل عن بُعد. خطة تمرين احترافية، متابعة أسبوعية دقيقة، إرشادات غذائية شاملة، وتتبع مستمر للتقدم — كل ذلك من خلال هاتفك.',
  },
  {
    num: '02',
    en:  'IN-PERSON TRAINING',
    ar:  'التدريب الشخصي المباشر',
    descEn: 'One-on-one sessions at the gym. Hands-on technique correction, progressive overload programming, and real-time coaching in Riyadh.',
    descAr: 'جلسات تدريبية فردية مكثفة داخل الصالة الرياضية. تصحيح دقيق للتقنية، برمجة تحميل تدريجي محكمة، وإشراف مباشر في الوقت الفعلي بمدينة الرياض.',
  },
  {
    num: '03',
    en:  'PHYSIQUE PREP',
    ar:  'التحضير للمنافسات',
    descEn: 'Competition and photoshoot preparation. Peak conditioning protocols, posing coaching, and precision nutrition timing to get you stage-ready.',
    descAr: 'تحضير احترافي للمسابقات والجلسات التصويرية. بروتوكولات الوصول للذروة، تدريب على الإلقاء والوقوف، وضبط دقيق لتوقيت التغذية للوصول إلى الشكل المثالي على المنصة.',
  },
]

export default function Services() {
  const { isAr } = useLang()
  const t = (en, ar) => isAr ? ar : en

  return (
    <section id="services">
      <div className="section-header">
        <div className="section-title-block">
          <span className="section-eyebrow">{t('COACHING PACKAGES', 'برامج التدريب')}</span>
          <FadeUp tag="div" className="section-title">{t('HOW WE WORK', 'كيف نعمل')}</FadeUp>
          <FadeUp tag="div" className="section-title-ar" delay={0.1}>
            برامج التدريب والتغذية
          </FadeUp>
        </div>
      </div>

      <div className="services-grid">
        {SERVICES.map((s, i) => (
          <FadeUp key={s.num} className="service-card" delay={i * 0.15}>
            <span className="service-num">{s.num}</span>
            <div className="service-name">{t(s.en, s.ar)}</div>
            <div className="service-name-ar">{s.ar}</div>
            <p className="service-desc">{t(s.descEn, s.descAr)}</p>
            <span className="service-arrow">→</span>
          </FadeUp>
        ))}
      </div>
    </section>
  )
}
