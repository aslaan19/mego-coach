import { useState, useEffect, useRef } from 'react'
import { useLang } from '../context/LangContext'

const TOTAL    = 3
const INTERVAL = 5000

function PlayIcon() {
  return (
    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1">
      <circle cx="12" cy="12" r="10" />
      <polygon points="10 8 16 12 10 16 10 8" fill="white" stroke="none" />
    </svg>
  )
}

export default function Hero() {
  const { isAr } = useLang()
  const [slide, setSlide]     = useState(0)
  const [soundOn, setSoundOn] = useState(false)
  const timerRef              = useRef(null)

  const t = (en, ar) => isAr ? ar : en

  const getAllVideos = () =>
    Array.from(document.querySelectorAll('.video-slot video'))

  const startTimer = () => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => setSlide(s => (s + 1) % TOTAL), INTERVAL)
  }

  const toggleSound = () => {
    const next = !soundOn
    setSoundOn(next)
    getAllVideos().forEach(v => {
      v.muted = !next
      if (!next) return
      /* browsers block unmuted autoplay — play() re-triggers permission */
      v.play().catch(() => {
        v.muted = true
        setSoundOn(false)
      })
    })
  }

  const goSlide = (n) => {
    setSlide(n)
    startTimer()
  }

  useEffect(() => {
    startTimer()
    return () => clearInterval(timerRef.current)
  }, [])

  return (
    <section id="hero">
      {/* ── Video reel ── */}
      <div className="video-reel">
        {Array.from({ length: TOTAL }, (_, i) => (
          <div key={i} className={`video-slot${slide === i ? ' active' : ''}`}>

              <video src="/video1.mp4" autoPlay muted loop playsInline />
           
            <div className="video-placeholder">
              <PlayIcon />
            </div>
          </div>
        ))}
      </div>

      <div className="hero-overlay" />

      {/* ── Hero content ── */}
      <div className="hero-content">
        <div className="hero-text">
          <span className="hero-eyebrow">
            {t(
              'CERTIFIED PHYSIQUE COACH · RIYADH, KSA',
              'مدرب شخصي معتمد · الرياض، المملكة العربية السعودية'
            )}
          </span>

          <h1
            className="hero-title"
            style={{ fontFamily: isAr ? "'Tajawal', sans-serif" : "'Bebas Neue', sans-serif" }}
          >
            {isAr ? (
              <>ابنِ<br />جسدك<br /><span>الآن.</span></>
            ) : (
              <>BUILD THE<br />BODY YOU<br /><span>DESERVE.</span></>
            )}
          </h1>

          <p className="hero-sub">
            {t(
              'Science-based training. Personalized nutrition. Real results.',
              'تدريب مبني على العلم. تغذية مخصصة. نتائج حقيقية.'
            )}
          </p>
        </div>

        {/* ── Controls ── */}
        <div className="hero-controls">
          <button className="sound-btn" onClick={toggleSound}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              {soundOn ? (
                <>
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                </>
              ) : (
                <>
                  <line x1="23" y1="9" x2="17" y2="15" />
                  <line x1="17" y1="9" x2="23" y2="15" />
                </>
              )}
            </svg>
            <span>{soundOn ? 'SOUND ON' : 'SOUND OFF'}</span>
          </button>

          <div className="reel-dots">
            {Array.from({ length: TOTAL }, (_, i) => (
              <div
                key={i}
                className={`reel-dot${slide === i ? ' active' : ''}`}
                onClick={() => goSlide(i)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="scroll-hint">
        <span>SCROLL</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
