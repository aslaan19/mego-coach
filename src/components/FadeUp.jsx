import { useEffect, useRef } from 'react'

export default function FadeUp({ children, delay = 0, tag: Tag = 'div', className = '', style = {}, ...props }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (delay) el.style.transitionDelay = `${delay}s`

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          obs.unobserve(el)
        }
      },
      { threshold: 0.12 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [delay])

  return (
    <Tag ref={ref} className={`fade-up${className ? ` ${className}` : ''}`} style={style} {...props}>
      {children}
    </Tag>
  )
}
