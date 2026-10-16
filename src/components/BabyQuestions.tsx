
import { useState } from 'react'
import { Heart, Sparkles } from 'lucide-react'

export type BabyAnswers = {
  looks_like: 'mommy' | 'daddy' | 'both'
  loves_most: 'mommy' | 'daddy' | 'both'
  baby_nickname: string
}

type Props = {
  onContinue: (answers: BabyAnswers) => void
}

const choices = [
  { value: 'mommy', label: 'Mommy 💗', emoji: '👩🏻' },
  { value: 'daddy', label: 'Daddy 💙', emoji: '👨🏻' },
] as const

export default function BabyQuestions({ onContinue }: Props) {
  const [looksLike, setLooksLike] =
    useState<BabyAnswers['looks_like'] | ''>('')
  const [lovesMost, setLovesMost] =
    useState<BabyAnswers['loves_most'] | ''>('')
  const [nickname, setNickname] = useState('')

  const handleContinue = () => {
    if (!looksLike || !lovesMost) return

    onContinue({
      looks_like: looksLike,
      loves_most: lovesMost,
      baby_nickname: nickname.trim(),
    })
  }

  return (
    <main className="relative flex h-[100svh] items-center justify-center overflow-hidden bg-[#FFF8F5] px-4 py-3 text-[#30252F]">
      <div className="pointer-events-none absolute -left-16 top-10 h-40 w-40 rounded-full bg-pink-200/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-40 w-40 rounded-full bg-purple-200/50 blur-3xl" />

      <section className="relative w-full max-w-md space-y-4">
        <div className="text-center">
          <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 text-pink-600">
            <Heart size={25} fill="currentColor" />
          </div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-pink-600">
            A little bit of fun
          </p>
          <h1 className="mt-1 text-2xl font-black text-[#720C7D] sm:text-3xl">
            Let's talk about Baby! 🍼
          </h1>
          <p className="mt-1 text-sm text-[#625761]">
            Make your cutest predictions.
          </p>
        </div>

        <div className="space-y-3 rounded-3xl border border-pink-100 bg-white/90 p-4 shadow-lg shadow-pink-100/60">
          <div>
            <p className="mb-2 text-sm font-bold">
              1. Who will Baby look like?
            </p>
            <div className="grid grid-cols-3 gap-2">
              {choices.map((choice) => (
                <button
                  key={choice.value}
                  type="button"
                  onClick={() => setLooksLike(choice.value)}
                  aria-pressed={looksLike === choice.value}
                  className={`rounded-2xl border p-2 text-center text-xs font-semibold transition ${
                    looksLike === choice.value
                      ? 'border-pink-500 bg-pink-100 text-pink-800'
                      : 'border-pink-100 bg-white hover:bg-pink-50'
                  }`}
                >
                  <span className="mb-1 block text-2xl">{choice.emoji}</span>
                  {choice.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-2 text-sm font-bold">
              2. Who will Baby love the most?
            </p>
            <div className="grid grid-cols-3 gap-2">
              {choices.map((choice) => (
                <button
                  key={choice.value}
                  type="button"
                  onClick={() => setLovesMost(choice.value)}
                  aria-pressed={lovesMost === choice.value}
                  className={`rounded-2xl border p-2 text-center text-xs font-semibold transition ${
                    lovesMost === choice.value
                      ? 'border-purple-500 bg-purple-100 text-purple-800'
                      : 'border-pink-100 bg-white hover:bg-purple-50'
                  }`}
                >
                  <span className="mb-1 block text-2xl">{choice.emoji}</span>
                  {choice.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label
              htmlFor="baby-nickname"
              className="mb-2 block text-sm font-bold"
            >
              3. What cute nickname should we call Baby? ✨
            </label>
            <input
              id="baby-nickname"
              value={nickname}
              onChange={(event) => setNickname(event.target.value)}
              maxLength={50}
              placeholder="Little Bean, Bubba, Sweet Pea..."
              className="w-full rounded-2xl border border-pink-200 bg-[#FFFAFC] px-4 py-3 text-sm outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-100"
            />
            <p className="mt-1 text-xs text-[#81727D]">
              Optional — get creative! 💕
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleContinue}
          disabled={!looksLike || !lovesMost}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#E83E73] to-[#7048E8] px-5 py-3 font-bold text-white shadow-lg transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-40"
        >
          Let's play!
          <Sparkles size={18} />
        </button>
        <p className="text-center text-xs text-[#81727D]">
          Two little choices and we're ready to go 💖
        </p>
      </section>
    </main>
  )
}
