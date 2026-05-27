import { useLang } from '../context/LangContext'
import FadeUp from './FadeUp'

const TAGS = [
  { en: 'Physique Coach', ar: 'مدرب فيزيك معتمد' },
  { en: 'Nutrition',      ar: 'تغذية رياضية' },
  { en: 'MBA',            ar: 'ماجستير إدارة أعمال' },
  { en: 'Fitness Model',  ar: 'فتنس موديل' },
]

const METRICS = [
  { num: '100+', en: 'TRANSFORMATIONS', ar: 'حالة تحول ناجحة' },
  { num: '8+',   en: 'YEARS COACHING',  ar: 'سنوات من الخبرة' },
  { num: '3',    en: 'CERTIFICATIONS',  ar: 'شهادات دولية' },
]

export default function About() {
  const { isAr } = useLang()
  const t = (en, ar) => isAr ? ar : en

  return (
    <section id="about">
      {/* ── Photo column ── */}
      <div className="about-img-col">
      
          <img src="/mego1.png" alt="Coach MEGO" />
     
        
      </div>

      {/* ── Text column ── */}
      <div className="about-text-col">
        <div className="section-label">
          {t('THE COACH', 'المدرب')}
        </div>

        <FadeUp tag="div" className="about-name">MOHAMED</FadeUp>
        <FadeUp tag="div" className="about-name" delay={0.1}>ABD AL MAGEID</FadeUp>
        <FadeUp tag="div" className="about-name-ar" delay={0.15}>
          محمد عبد المجيد (MEGO)
        </FadeUp>

        <div className="about-divider" />

        <FadeUp tag="p" className="about-bio-en" delay={0.2}>
          Mohamed "MEGO" is a certified personal trainer and physique competitor based in Riyadh,
          Saudi Arabia. Holding an MBA in Marketing Management, he brings both scientific rigor and
          strategic thinking to every transformation journey. As a physique model and bodybuilding
          athlete, he trains what he preaches.
        </FadeUp>

        <FadeUp tag="p" className="about-bio-ar" delay={0.25}>
          محمد "ميجو" مدرب شخصي معتمد ومنافس محترف في بطولات كمال أجسام الفيزيك،
          مقيم في الرياض بالمملكة العربية السعودية. يحمل درجة ماجستير إدارة أعمال في
          التسويق، مما يمنحه مزيجاً فريداً من الصرامة العلمية والتفكير الاستراتيجي في
          كل رحلة تحول. كفتنس موديل ورياضي محترف، هو يُجسّد بنفسه ما يُعلّمه.
        </FadeUp>

        <FadeUp className="about-tags" delay={0.3}>
          {TAGS.map(tag => (
            <span key={tag.en} className="tag">{t(tag.en, tag.ar)}</span>
          ))}
        </FadeUp>

        <FadeUp className="about-metrics" delay={0.35}>
          {METRICS.map(m => (
            <div key={m.en} className="metric">
              <div className="metric-num">{m.num}</div>
              <div className="metric-lbl">{t(m.en, m.ar)}</div>
            </div>
          ))}
        </FadeUp>
      </div>
    </section>
  )
}
