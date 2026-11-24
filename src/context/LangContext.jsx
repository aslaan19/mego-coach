import { createContext, useContext, useEffect, useState } from 'react'

const LangContext = createContext()
const languageKey = 'mego-language'

function getInitialLanguage() {
  try {
    return localStorage.getItem(languageKey) === 'ar'
  } catch {
    return false
  }
}

export function LangProvider({ children }) {
  const [isAr, setIsAr] = useState(getInitialLanguage)
  const t = (en, ar) => isAr ? ar : en

  useEffect(() => {
    const language = isAr ? 'ar' : 'en'
    document.documentElement.lang = language
    document.documentElement.dir = isAr ? 'rtl' : 'ltr'
    document.title = isAr
      ? 'ميجو | مدرب فيزيك في الرياض'
      : 'MEGO | Physique Coaching in Riyadh'

    try {
      localStorage.setItem(languageKey, language)
    } catch {
      // Language switching still works when storage is unavailable.
    }
  }, [isAr])

  return (
    <LangContext.Provider value={{ isAr, t, toggle: () => setIsAr(current => !current) }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)