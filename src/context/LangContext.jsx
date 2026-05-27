import { createContext, useContext, useState, useCallback } from 'react'

const LangContext = createContext({ isAr: false, toggle: () => {} })

export function LangProvider({ children }) {
  const [isAr, setIsAr] = useState(false)

  const toggle = useCallback(() => {
    setIsAr(prev => {
      const next = !prev
      document.documentElement.dir = next ? 'rtl' : 'ltr'
      document.documentElement.lang = next ? 'ar' : 'en'
      return next
    })
  }, [])

  return (
    <LangContext.Provider value={{ isAr, toggle }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)
