import { useLang } from '../context/LangContext'

export default function About() {
  const { t } = useLang()

  return (
    <section id="about" className="about" tabIndex={-1} aria-labelledby="about-title">
      <div className="wrap about-inner">
        <figure className="about-photo">
          <img
            src="/mego-training.webp"
            width="360"
            height="322"
            loading="lazy"
            decoding="async"
            alt={t('Coach MEGO training on a cable machine', 'المدرب ميجو يتمرّن على جهاز الكابل')}
          />
          <figcaption>{t('MEGO in the gym', 'ميجو في النادي')}</figcaption>
        </figure>
        <div className="about-copy">
          <p className="eyebrow">{t('Meet your coach', 'تعرّف على مدربك')}</p>
          <h2 id="about-title" className="display-heading">
            <span>{t('MOHAMED', 'محمد')}</span>
            <span>{t('ABD AL MAGEID.', 'عبد المجيد.')}</span>
          </h2>
          <p className="about-lead">
            {t(
              'I’m MEGO, a certified personal trainer and physique competitor based in Riyadh.',
              'أنا ميجو، مدرب شخصي معتمد ومنافس في بطولات الفيزيك في الرياض.'
            )}
          </p>
          <p>
            {t(
              'I bring what I’ve learned on the gym floor and in competition to each plan. We’ll start from your current level, set a clear goal, and adjust your training and nutrition as you progress.',
              'أنقل خبرتي في النادي وعلى منصة المنافسات إلى كل خطة تدريبية. نبدأ من مستواك الحالي، ونحدّد هدفًا واضحًا، ثم نعدّل تدريبك وتغذيتك مع تقدّمك.'
            )}
          </p>
          <a className="text-link" href="#certs">{t('See my credentials', 'اطّلع على شهاداتي')}</a>
        </div>
      </div>
    </section>
  )
}