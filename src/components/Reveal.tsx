import {useEffect, useRef} from 'react'
import {Heart, Stars, Sparkles} from 'lucide-react'
import {playRevealSound} from '../services/soundService'
import BackButton from './BackButton'

type Props = {
  onContinue: () => void
  onBack: () => void
}

export default function Reveal({onContinue, onBack}: Props) {
  const soundPlayed = useRef(false)

  useEffect(() => {
    if (!soundPlayed.current) {
      soundPlayed.current = true
      playRevealSound()
    }
  }, [])

  return (
    <main className="relative flex h-[100svh] items-center justify-center overflow-y-auto bg-gradient-to-br from-pink-100 via-[#FFF8F5] to-purple-200 px-5 py-6 text-center">
      <BackButton onClick={onBack} />
      <div className="pointer-events-none absolute left-5 top-8 animate-bounce text-3xl sparkle sparkle-one">
        ✨
      </div>

      <div className="pointer-events-none absolute right-6 top-16 animate-pulse text-3xl">
        💕
      </div>

      <div className="pointer-events-none absolute bottom-12 left-8 animate-pulse text-3xl">
        🎉
      </div>

      <div className="pointer-events-none absolute bottom-16 right-8 animate-bounce text-3xl">
        ⭐
      </div>

      <section className="relative w-full max-w-md">
        <Stars
          className="mx-auto mb-3 sparkle sparkle-one text-pink-500"
          size={36}
        />
{/* 
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#625761]">
          A little miracle is on the way
        </p> */}

        <h1 className="mt-4 text-2xl font-black text-[#720C7D] sm:text-2xl">
          Oops! Not just yet! 💕
        </h1>

        <div className="mx-auto my-6 flex h-36 w-36 items-center justify-center rounded-full border-4 border-pink-300 bg-white/80 shadow-2xl shadow-pink-200 sm:h-42 sm:w-42">
          <div>
            <div className="text-2xl sm:text-5xl">🎁</div>

            <p className="mt-3 text-xl font-black text-pink-600">SURPRISE!</p>
          </div>
        </div>

        <h2 className="text-2xl font-black text-[#720C7D]">
          The big reveal is still a secret! 🤫
        </h2>

        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-[#625761]">
          Wait for the big reveal
          to discover whether it's a little prince or princess!
        </p>

        <div className="mt-5 rounded-2xl border border-pink-100 bg-white/70 p-4">
          <Sparkles className="mx-auto mb-2 text-pink-500" size={24} />

          <p className="text-sm font-semibold leading-relaxed text-[#720C7D]">
            Until then, let's fill this beautiful journey with love!
          </p>

          <button
            type="button"
            onClick={onContinue}
            className="mt-6 w-full rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-5 py-3 font-bold text-white shadow-lg transition hover:scale-[1.02]"
          >
            Leave a little wish 💌
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
