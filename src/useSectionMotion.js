import { useEffect } from 'react'

export default function useSectionMotion() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-entered')
          observer.unobserve(entry.target)
        }
      }
    }, { threshold: 0.06 })

    for (const element of document.querySelectorAll('[data-reveal]')) observer.observe(element)
    return () => observer.disconnect()
  }, [])
}