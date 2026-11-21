import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from 'react'
import en from '../translations.en'
import si from '../translations.si'



export type Language = 'en' | 'si'

const translations = {
  en,
  si,
}

type TranslationKey = keyof typeof en

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: TranslationKey) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('baby-language')

    return savedLanguage === 'si' ? 'si' : 'en'
  })

  useEffect(() => {
    localStorage.setItem('baby-language', language)
  }, [language])

  const t = (key: TranslationKey) => translations[language][key]

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage must be used inside LanguageProvider')
  }

  return context
}