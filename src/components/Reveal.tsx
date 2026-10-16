
import { Heart, Stars } from 'lucide-react'

export type BabyGender = 'girl' | 'boy'

type Props = {
  gender: BabyGender
  onContinue: () => void
}

export default function Reveal({ gender, onContinue }: Props) {
  const isGirl = gender === 'girl'

  return (
    <main
      className={`relative flex h-[100svh] items-center justify-center overflow-hidden px-5 py-4 text-center ${
        isGirl
          ? 'bg-gradient-to-br from-pink-100 via-[#FFF8F5] to-rose-200'
          : 'bg-gradient-to-br from-sky-100 via-[#FFF8F5] to-blue-200'
      }`}
    >
      <div className="pointer-events-none absolute left-5 top-8 animate-bounce text-3xl">
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
          className={`mx-auto mb-3 ${
            isGirl ? 'text-pink-500' : 'text-blue-500'
          }`}
          size={36}
        />
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#625761]">
          A little miracle is on the way
        </p>

        <h1 className="mt-4 text-4xl font-black text-[#720C7D] sm:text-5xl">
          It's a...
        </h1>

        <div
          className={`mx-auto my-5 flex h-48 w-48 items-center justify-center rounded-full border-4 bg-white/80 shadow-2xl sm:h-56 sm:w-56 ${
            isGirl
              ? 'border-pink-300 shadow-pink-200'
              : 'border-blue-300 shadow-blue-200'
          }`}
        >
          <div>
            <div className="text-6xl sm:text-7xl">
              {isGirl ? '🎀' : '🧸'}
            </div>
            <p
              className={`mt-3 text-3xl font-black sm:text-4xl ${
                isGirl ? 'text-pink-600' : 'text-blue-600'
              }`}
            >
              {isGirl ? 'GIRL!' : 'BOY!'}
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-black text-[#720C7D]">
          {isGirl ? 'A little princess!' : 'A little prince!'} 💖
        </h2>
        <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-[#625761]">
          The sweetest new chapter is beginning for Dilki & Asinthaka.
          So much love is waiting for this little one!
        </p>

        <div className="mt-5 flex items-center justify-center gap-2 text-sm font-semibold text-[#720C7D]">
          <Heart size={17} fill="currentColor" />
          Loved beyond words
          <Heart size={17} fill="currentColor" />
        </div>

        <button
          type="button"
          onClick={onContinue}
          className={`mt-6 w-full rounded-full px-5 py-3 font-bold text-white shadow-lg transition hover:scale-[1.02] ${
            isGirl
              ? 'bg-gradient-to-r from-pink-500 to-rose-500'
              : 'bg-gradient-to-r from-sky-500 to-blue-600'
          }`}
        >
          Leave a little wish 💌
        </button>
      </section>
    </main>
  )
}
