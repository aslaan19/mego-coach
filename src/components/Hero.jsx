import { useRef } from 'react'
import { useLang } from '../context/LangContext'

export default function Hero() {
  const { t } = useLang()
  const dialog = useRef(null)
  const video = useRef(null)
  const trigger = useRef(null)

  function playFilm() {
    dialog.current.showModal()
    video.current.play().catch(() => {})
  }

  function onFilmClose() {
    video.current.pause()
    trigger.current.focus()
  }

  return (
    <section id="hero" className="hero" aria-labelledby="hero-title">
      <div className="wrap hero-inner">
        <div className="hero-visual">
          <span className="hero-background-type" aria-hidden="true" dir="ltr">MEGO</span>
          <img
            className="hero-portrait"
            src="/mego-portrait.webp"
            width="628"
            height="830"
            fetchPriority="high"
            alt={t('Coach MEGO in his physique competition attire', 'المدرب ميجو بملابس مسابقة الفيزيك')}
          />
        </div>

        <div className="hero-copy">
          <p className="eyebrow">{t('Physique coaching · Riyadh, KSA', 'تدريب فيزيك · الرياض، السعودية')}</p>
          <h1 id="hero-title" className="hero-title">
            <span>{t('BUILD YOUR', 'ابنِ جسمًا')}</span>
            <span>{t('STRONGEST', 'أقوى')}</span>
            <em>{t('PHYSIQUE.', 'مع ميجو.')}</em>
          </h1>
          <p className="hero-description">
            {t(
              'Train with Mohamed “MEGO” Abd Al Mageid. Personal coaching, a clear training plan, and nutrition built around your goals.',
              'تدرّب مع محمد «ميجو» عبد المجيد. تدريب شخصي، وخطة تمرين واضحة، وتغذية تناسب أهدافك.'
            )}
          </p>
          <div className="hero-actions">
            <a className="button button--primary" href="#contact">{t('Book coaching', 'احجز تدريبك')}</a>
            <button ref={trigger} className="film-button" type="button" onClick={playFilm}>
              <span className="play-icon" aria-hidden="true" />
              {t('Watch training reel', 'شاهد فيديو التدريب')}
            </button>
          </div>
        </div>

        <div className="hero-credit" aria-hidden="true">
          <span className="credit-mark" />
          <strong>{t('COACH MEGO', 'المدرب ميجو')}</strong>
          <span>{t('Physique athlete', 'رياضي فيزيك')}</span>
        </div>
      </div>

      <dialog className="film-dialog" ref={dialog} onClose={onFilmClose} aria-labelledby="film-title">
        <div className="film-heading">
          <h2 id="film-title">{t('MEGO training reel', 'فيديو تدريب ميجو')}</h2>
          <button type="button" onClick={() => dialog.current.close()}>{t('Close', 'إغلاق')}</button>
        </div>
        <video
          ref={video}
          src="/video1.mp4"
          controls
          playsInline
          preload="none"
          aria-label={t('MEGO training reel', 'فيديو تدريب ميجو')}
        >
          <a href="/video1.mp4">{t('Download the training reel', 'حمّل فيديو التدريب')}</a>
        </video>
      </dialog>
    </section>
  )
}