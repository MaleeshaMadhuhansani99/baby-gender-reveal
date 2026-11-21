import { useLanguage } from '../context/LanguageContext'

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-1 rounded-full border border-pink-200 bg-white/90 p-1 shadow-sm">
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`rounded-full px-3 py-2 text-xs font-bold transition ${
          language === 'en'
            ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'
            : 'text-gray-600 hover:bg-pink-50'
        }`}
      >
        🇬🇧 English
      </button>

      <button
        type="button"
        onClick={() => setLanguage('si')}
        className={`rounded-full px-3 py-2 text-xs font-bold transition ${
          language === 'si'
            ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'
            : 'text-gray-600 hover:bg-pink-50'
        }`}
      >
        🇱🇰 සිංහල
      </button>
    </div>
  )
}