
import { useState } from 'react'
import { Heart, Sparkles } from 'lucide-react'

type Props = {
  onComplete: () => void
}

export default function MiniGame({ onComplete }: Props) {
  const [collected, setCollected] = useState(0)
  const total = 5

  const collectHeart = () => {
    if (collected < total) setCollected((current) => current + 1)
  }

  return (
    <main className="flex h-[100svh] items-center justify-center overflow-hidden bg-[#FFF8F5] px-5 py-4 text-center text-[#30252F]">
      <section className="w-full max-w-md">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-pink-100 text-pink-600">
          <Heart size={34} fill="currentColor" />
        </div>

        <p className="text-xs font-bold uppercase tracking-[0.2em] text-pink-600">
          A tiny challenge
        </p>
        <h1 className="mt-2 text-3xl font-black text-[#720C7D]">
          Collect some love!
        </h1>
        <p className="mx-auto mt-2 max-w-xs text-sm text-[#625761]">
          Tap the heart five times to fill this little moment with love for Baby.
        </p>

        <div className="my-6 flex justify-center gap-3">
          {Array.from({ length: total }, (_, index) => (
            <Heart
              key={index}
              size={30}
              className={index < collected ? 'text-pink-500' : 'text-pink-200'}
              fill={index < collected ? 'currentColor' : 'none'}
            />
          ))}
        </div>

        {collected < total ? (
          <button
            type="button"
            onClick={collectHeart}
            className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-pink-400 to-purple-500 text-white shadow-xl shadow-pink-200 transition active:scale-90"
            aria-label="Collect a heart"
          >
            <Heart size={64} fill="currentColor" />
          </button>
        ) : (
          <div className="rounded-3xl border border-pink-100 bg-white p-6 shadow-lg">
            <Sparkles className="mx-auto mb-2 text-purple-500" size={32} />
            <h2 className="text-xl font-black text-[#720C7D]">
              You did it! 💕
            </h2>
            <p className="mt-2 text-sm text-[#625761]">
              Baby is already surrounded by so much love.
            </p>
            <button
              type="button"
              onClick={onComplete}
              className="mt-5 w-full rounded-full bg-[#E83E73] px-5 py-3 font-bold text-white"
            >
              Ready for the surprise?
            </button>
          </div>
        )}

        <p className="mt-5 text-sm font-semibold text-pink-600">
          {collected} of {total} hearts collected 💗
        </p>
      </section>
    </main>
  )
}
