import { useEffect, useRef, useState } from 'react'
import FadeUp from './FadeUp'

/* ── Icons ── */
function IgIcon() {
  return (
    <svg className="stat-platform-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  )
}
function TtIcon() {
  return (
    <svg className="stat-platform-icon" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.27 8.27 0 004.84 1.55V6.79a4.85 4.85 0 01-1.07-.1z" />
    </svg>
  )
}
function ScIcon() {
  return (
    <svg className="stat-platform-icon" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.166 2c2.092 0 5.179 1.237 5.179 5.033v.449c0 .376.039.745.107 1.105.277-.104.527-.162.744-.162.42 0 .795.148.795.578 0 .57-.694.832-1.25 1.027-.129.046-.284.1-.406.158.089.318.279.618.51.906 1.056 1.308 2.143 1.873 2.143 2.504 0 .433-.34.698-.74.698-.226 0-.457-.06-.662-.12-.278-.082-.521-.122-.742-.122-.185 0-.36.027-.56.087-.32.096-.659.493-.888 1.039-.23.547-.276 1.095-.076 1.505.048.1.072.207.072.314 0 .526-.514.77-1.103.77-.32 0-.655-.06-.976-.12-.264-.05-.513-.097-.72-.097-.183 0-.398.033-.655.115-.53.169-1.043.569-1.598.569-.536 0-1.052-.396-1.563-.566a2.6 2.6 0 00-.69-.118c-.212 0-.46.047-.724.097-.32.06-.656.12-.976.12-.59 0-1.103-.244-1.103-.77 0-.107.024-.214.072-.314.2-.41.154-.958-.076-1.505-.229-.546-.568-.943-.888-1.039a2.07 2.07 0 00-.56-.087c-.22 0-.464.04-.742.122-.205.06-.436.12-.662.12-.4 0-.74-.265-.74-.698 0-.631 1.087-1.196 2.143-2.504.231-.288.42-.588.51-.906-.122-.058-.277-.112-.406-.158-.557-.195-1.25-.457-1.25-1.027 0-.43.375-.578.795-.578.217 0 .467.058.744.162.068-.36.107-.729.107-1.105V7.033C6.655 3.237 9.742 2 11.834 2h.332z" />
    </svg>
  )
}

/* ── Counter hook (triggered once per section ─ */
function useCounter(target, decimals) {
  const [val, setVal] = useState(0)
  const triggered     = useRef(false)
  const ref           = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true
          const dur   = 2200
          const start = performance.now()
          const run   = (now) => {
            const t    = Math.min((now - start) / dur, 1)
            const ease = 1 - (1 - t) ** 3
            setVal(ease * target)
            if (t < 1) requestAnimationFrame(run)
          }
          requestAnimationFrame(run)
          obs.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [target])

  const display = decimals
    ? val.toFixed(1) + 'K'
    : target >= 1000
      ? (val / 1000).toFixed(1) + 'K'
      : String(Math.round(val))

  return { ref, display }
}

/* ── Single stat block ── */
function StatBlock({ href, icon, platform, handle, target, decimals, label, delay, suffix = '' }) {
  const { ref, display } = useCounter(target, decimals)

  return (
    <FadeUp tag="a" href={href} target="_blank" rel="noopener noreferrer" className="stat-block" delay={delay}>
      <div className="stat-platform">
        {icon}
        <span className="stat-platform-name">{platform}</span>
        <span className="stat-platform-handle">{handle}</span>
      </div>
      <div className="stat-num" ref={ref}>{display}{suffix}</div>
      <div className="stat-label">{label}</div>
      <div className="stat-arrow">↗</div>
    </FadeUp>
  )
}

export default function Stats() {
  return (
    <section id="stats">
      <div className="stats-inner">
        <StatBlock
          href="https://www.instagram.com/mohamed_abd_al_mageid/"
          icon={<IgIcon />}
          platform="INSTAGRAM"
          handle="@mohamed_abd_al_mageid"
          target={13600}
          decimals={false}
          label="FOLLOWERS"
          delay={0}
        />
        <StatBlock
          href="https://www.tiktok.com/@mego_1985"
          icon={<TtIcon />}
          platform="TIKTOK"
          handle="@mego_1985"
          target={30000}
          decimals={false}
          label="LIKES"
          suffix="+"
          delay={0.15}
        />
        <StatBlock
          href="https://www.snapchat.com/@mado3mado3"
          icon={<ScIcon />}
          platform="SNAPCHAT"
          handle="@mado3mado3"
          target={7}
          decimals={true}
          label="SUBSCRIBERS (K)"
          delay={0.3}
        />
      </div>
    </section>
  )
}
