
import { useEffect, useState } from 'react'
import { Sparkles, Star, Stars } from 'lucide-react'
import { playCountdownSound } from '../services/soundService'
import BackButton from './BackButton'

type Props = {
  onComplete: () => void
  onBack: () => void
}

export default function Countdown({ onComplete, onBack }: Props) {
  const [count, setCount] = useState(5)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCount((current) => {
        if (current <= 1) {
          window.clearInterval(timer)
          return 0
        }

        return current - 1
      })
    }, 1000)

    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    if (count > 0) {
      playCountdownSound()
    }
  }, [count])

  useEffect(() => {
    if (count === 0) {
      const timer = window.setTimeout(onComplete, 700)
      return () => window.clearTimeout(timer)
    }
  }, [count, onComplete])

  return (
    <main className="relative flex h-[100svh] items-center justify-center overflow-hidden bg-[#FFF8F5] px-5 text-center">
      <BackButton onClick={onBack} />
      <Star
        aria-hidden="true"
        className="pointer-events-none absolute left-[12%] top-[35%] h-6 w-6 animate-float-slow fill-amber-300 text-amber-400 opacity-70 sm:h-8 sm:w-8"
      />
      <Star
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[27%] right-[14%] h-5 w-5 animate-float-delay fill-pink-300 text-pink-400 opacity-70 sm:h-7 sm:w-7"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-[14%] bottom-[18%] animate-float text-2xl opacity-70 sm:text-4xl"
      >
        🌸
      </span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-[12%] top-[20%] animate-float-slow text-2xl opacity-70 sm:text-4xl"
      >
        🌷
      </span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-[22%] top-[15%] animate-float-delay text-xl opacity-60 sm:text-3xl"
      >
        🌼
      </span>
      <Sparkles
        aria-hidden="true"
        className="sparkle sparkle-one pointer-events-none h-8 w-8 text-pink-400 sm:h-10 sm:w-10"
      />
      <Stars
        aria-hidden="true"
        className="sparkle sparkle-two pointer-events-none h-7 w-7 text-purple-400 sm:h-9 sm:w-9"
      />
      <Sparkles
        aria-hidden="true"
        className="sparkle sparkle-three pointer-events-none h-6 w-6 text-amber-400 sm:h-8 sm:w-8"
      />
      <Sparkles
        aria-hidden="true"
        className="sparkle pointer-events-none left-[48%] top-[12%] h-5 w-5 text-purple-300 sm:h-6 sm:w-6"
      />
      <section className="relative z-10">
        <Sparkles className="mx-auto mb-5 text-purple-500" size={36} />

        <p className="text-xl font-bold uppercase tracking-[0.2em] text-pink-600">
          Girl or Boy? 💕
        </p>

        <h1 className="mt-3 text-3xl font-black text-[#720C7D]">
          Ready to find out?
        </h1>

        <div
          key={count}
          className="mx-auto my-7 flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-br from-pink-400 to-purple-500 text-7xl font-black text-white shadow-xl shadow-pink-200"
        >
          {count === 0 ? '👶' : count}
        </div>

        <p className="text-sm text-[#625761]">
          A little surprise, a lifetime of love...
        </p>
      </section>
    </main>
  )
}
