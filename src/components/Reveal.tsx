import {useEffect, useRef} from 'react'
import {Heart, Stars, Sparkles} from 'lucide-react'
import {playRevealSound} from '../services/soundService'
import BackButton from './BackButton'
import { useLanguage } from '../context/LanguageContext'

type Props = {
  onContinue: () => void
  onBack: () => void
}

export default function Reveal({onContinue, onBack}: Props) {
  const { t, language } = useLanguage()
  const soundPlayed = useRef(false)

  useEffect(() => {
    if (!soundPlayed.current) {
      soundPlayed.current = true
      playRevealSound()
    }
  }, [])

  return (
    <main className="relative flex h-[100dvh] min-h-[100svh] items-center justify-center overflow-x-hidden overflow-y-hidden overscroll-contain bg-[#fff8f5] px-5 py-6 text-center text-[#30252f]">
      <BackButton onClick={onBack} />
      <div className="pointer-events-none absolute -left-24 -top-24 h-[35vh] w-[35vh] rounded-full bg-[#ff6b8a]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-[8%] h-[40vh] w-[40vh] rounded-full bg-[#7048e8]/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-15vh] left-1/2 h-[40vh] w-[40vh] -translate-x-1/2 rounded-full bg-[#ffb347]/20 blur-3xl" />

      <div className="butterfly butterfly-one">
        <span className="butterfly-wing butterfly-wing-left" />
        <span className="butterfly-body" />
        <span className="butterfly-wing butterfly-wing-right" />
      </div>
      <div className="butterfly butterfly-two">
        <span className="butterfly-wing butterfly-wing-left" />
        <span className="butterfly-body" />
        <span className="butterfly-wing butterfly-wing-right" />
      </div>
      <div className="butterfly butterfly-three">
        <span className="butterfly-wing butterfly-wing-left" />
        <span className="butterfly-body" />
        <span className="butterfly-wing butterfly-wing-right" />
      </div>
      <div className="butterfly butterfly-four">
        <span className="butterfly-wing butterfly-wing-left" />
        <span className="butterfly-body" />
        <span className="butterfly-wing butterfly-wing-right" />
      </div>
      <div className="butterfly butterfly-five">
        <span className="butterfly-wing butterfly-wing-left" />
        <span className="butterfly-body" />
        <span className="butterfly-wing butterfly-wing-right" />
      </div>

      <div className="floating-heart heart-one">
        <Heart size={20} fill="currentColor" />
      </div>
      <div className="floating-heart heart-two">
        <Heart size={17} fill="currentColor" />
      </div>
      <div className="sparkle sparkle-one">
        <Sparkles size={22} />
      </div>
      <div className="sparkle sparkle-two">
        <Stars size={20} />
      </div>
      <div className="sparkle sparkle-three">
        <Sparkles size={17} />
      </div>

      <section className="relative z-10 my-auto w-full max-w-md">
        <Stars
          className="mx-auto mb-3 animate-twinkle text-[#e83e73]"
          size={36}
        />
{/* 
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#625761]">
          A little miracle is on the way
        </p> */}

        <h1 className="mt-4 text-2xl font-black text-[#720C7D] sm:text-2xl">
          {t('revealTitle')}
        </h1>

        <div className="mx-auto my-6 flex h-36 w-36 items-center justify-center rounded-full border-4 border-[#e83e73]/20 bg-gradient-to-br from-[#ffd6df] via-white to-[#dcd2ff] shadow-[0_15px_45px_rgba(232,62,115,0.20)] sm:h-42 sm:w-42">
          <div>
            <div className="text-5xl sm:text-6xl">👶</div>

            <p className="mt-3 text-xl font-black text-[#e83e73]">
              SURPRISE!
            </p>
          </div>
        </div>

        <h2 className={`font-black text-[#720C7D] ${
          language === 'si' ? 'text-xl sm:text-2xl' : 'text-2xl'
        }`}>
          {t('revealSecretTitle')}
        </h2>

        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-[#625761]">
          Wait for the big reveal
          to discover whether it's a little prince or princess!
        </p>

        <div className="mt-5 rounded-2xl border border-pink-100 bg-white/70 p-4">
          <Sparkles className="mx-auto mb-2 text-[#e83e73]" size={24} />

          <p className="text-sm font-semibold leading-relaxed text-[#720C7D]">
            Until then, let's fill this beautiful journey with love!
          </p>

          <button
            type="button"
            onClick={onContinue}
            className="mt-6 w-full rounded-full bg-[#e83e73] px-5 py-3 font-bold text-white shadow-lg transition hover:scale-[1.02] hover:bg-[#d92f63]"
          >
            {t('revealLeaveWish')}
          </button>
{/* 
          <p className="mt-2 text-sm leading-relaxed text-[#625761]">
            Send a little wish for our precious baby. Your love and blessings
            will make this journey even more special. 💌
          </p> */}
        </div>

        <div className="mt-5 flex items-center justify-center gap-2 text-sm font-semibold text-[#720C7D]">
          <Heart size={17} fill="currentColor" />
          Loved beyond words
          <Heart size={17} fill="currentColor" />
        </div>

        <p className="mt-4 text-xs text-[#81727D]">
          With love, Dilki & Asinthaka ❤️
        </p>
      </section>
    </main>
  )
}
