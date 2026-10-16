
import { useEffect, useState } from 'react'
import { Sparkles } from 'lucide-react'

type Props = {
  onComplete: () => void
}

export default function Countdown({ onComplete }: Props) {
  const [count, setCount] = useState(3)

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
    if (count === 0) {
      const timer = window.setTimeout(onComplete, 700)
      return () => window.clearTimeout(timer)
    }
  }, [count, onComplete])

  return (
    <main className="flex h-[100svh] items-center justify-center overflow-hidden bg-[#FFF8F5] px-5 text-center">
      <section>
        <Sparkles className="mx-auto mb-5 text-purple-500" size={36} />
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-pink-600">
          The moment is here
        </p>
        <h1 className="mt-3 text-3xl font-black text-[#720C7D]">
          Ready to find out?
        </h1>
        <div
          key={count}
          className="mx-auto my-7 flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-br from-pink-400 to-purple-500 text-7xl font-black text-white shadow-xl shadow-pink-200"
        >
          {count === 0 ? '💖' : count}
        </div>
        <p className="text-sm text-[#625761]">
          A little surprise, a lifetime of love...
        </p>
      </section>
    </main>
  )
}
