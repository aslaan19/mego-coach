import { useLayoutEffect, useRef, useState } from 'react'
import { useLang } from '../context/LangContext'

const seenKey = 'mego-intro-seen'
const reducedMotion = '(prefers-reduced-motion: reduce)'
const duration = 2400

function isFirstVisit() {
  try {
    return !localStorage.getItem(seenKey) && !window.matchMedia(reducedMotion).matches
  } catch {
    return false
  }
}

export default function VisitIntro() {
  const { t } = useLang()
  const [playing, setPlaying] = useState(isFirstVisit)
  const dialog = useRef(null)

  useLayoutEffect(() => {
    try {
      localStorage.setItem(seenKey, '1')
    } catch {
      // Avoid replaying the intro on every page when the visit cannot be saved.
      if (playing) setPlaying(false)
      return
    }

    if (!playing) return
    const element = dialog.current
    const preference = window.matchMedia(reducedMotion)
    const finish = () => setPlaying(false)
    if (!element.showModal || preference.matches) {
      finish()
      return
    }

    element.showModal()
    const timer = window.setTimeout(finish, duration)
    preference.addEventListener('change', finish)
    return () => {
      window.clearTimeout(timer)
      preference.removeEventListener('change', finish)
      element.close()
    }
  }, [playing])

  if (!playing) return null

  return (
    <dialog
      className="visit-intro"
      ref={dialog}
      style={{ '--intro-time': duration + 'ms' }}
      aria-label={t('MEGO coaching introduction', 'مقدمة ميجو للتدريب')}
      onCancel={event => { event.preventDefault(); setPlaying(false) }}
    >
      <div className="intro-poster" aria-hidden="true" dir="ltr">
        <img className="intro-athlete" src="/mego-portrait.webp" alt="" width="628" height="830" />
        <div className="intro-lockup">
          <span className="intro-name">MEGO<span>.</span></span>
          <span className="intro-caption" dir="auto">{t('Physique coaching · Riyadh', 'تدريب فيزيك · الرياض')}</span>
        </div>
      </div>
      <button className="intro-skip" type="button" onClick={() => setPlaying(false)}>
        {t('Skip intro', 'تخطَّ المقدمة')}
      </button>
    </dialog>
  )
}