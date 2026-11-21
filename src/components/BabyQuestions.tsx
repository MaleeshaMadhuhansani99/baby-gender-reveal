
import { useState } from 'react'
import { Sparkles, ArrowLeft, ArrowRight } from 'lucide-react'
import BackButton from './BackButton'

export type BabyAnswers = {
  looks_like: 'mommy' | 'daddy' | 'both'
  loves_most: 'mommy' | 'daddy' | 'both'
  baby_nickname: string
}

type Props = {
  onContinue: (answers: BabyAnswers) => void
  onBack: () => void
  initialAnswers?: BabyAnswers | null
}

const choices = [
  { value: 'mommy', label: 'Mommy 💗', emoji: '👩🏻' },
  { value: 'daddy', label: 'Daddy 💙', emoji: '👨🏻' },
  // { value: 'both', label: 'Both 💕', emoji: '👨‍👩‍👧' },
] as const

const questions = [
  {
    title: 'Who will Baby look like?',
    subtitle: 'Whose little copy will I be? 🥰',
    emoji: '👶🏻',
  },
  {
    title: 'Who will Baby love the most?',
    subtitle: 'Who will get all my cuddles? 💕',
    emoji: '💗',
  },
  {
    title: 'What cute nickname should we call Baby?',
    subtitle: 'Give me a special little name! ✨',
    emoji: '🍼',
  },
]

export default function BabyQuestions({ onContinue, onBack, initialAnswers }: Props) {
  const [step, setStep] = useState(initialAnswers ? 2 : 0)

  const [looksLike, setLooksLike] =
    useState<BabyAnswers['looks_like'] | ''>(initialAnswers?.looks_like ?? '')

  const [lovesMost, setLovesMost] =
    useState<BabyAnswers['loves_most'] | ''>(initialAnswers?.loves_most ?? '')

  const [nickname, setNickname] = useState(initialAnswers?.baby_nickname ?? '')

  const handleNext = () => {
    if (step === 0 && !looksLike) return
    if (step === 1 && !lovesMost) return

    if (step < 2) {
      setStep((current) => current + 1)
      return
    }

    onContinue({
      looks_like: looksLike as BabyAnswers['looks_like'],
      loves_most: lovesMost as BabyAnswers['loves_most'],
      baby_nickname: nickname.trim(),
    })
  }

  const handleBack = () => {
    if (step > 0) {
      setStep((current) => current - 1)
    } else {
      onBack()
    }
  }

  const currentQuestion = questions[step]

  return (
    <main className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#FFF8F5] px-4 py-6 text-[#30252F]">
      <BackButton onClick={handleBack} />

      {/* Background decorations */}
      <div className="pointer-events-none absolute -left-16 top-10 h-40 w-40 rounded-full bg-pink-200/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-40 w-40 rounded-full bg-purple-200/50 blur-3xl" />

      <section className="relative w-full max-w-md">

        {/* Header */}
        <div className="text-center">
          <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-pink-100 text-pink-600">
            <span className="text-3xl">{currentQuestion.emoji}</span>
          </div>

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-pink-600">
            A little bit of fun
          </p>

          <h1 className="mt-2 text-2xl font-black text-[#720C7D] sm:text-3xl">
            Let's talk about Baby! 🍼
          </h1>

          <p className="mt-2 text-sm text-[#625761]">
            Make your cutest predictions.
          </p>
        </div>

        {/* Progress */}
        <div className="mt-7 flex items-center justify-center gap-2">
          {[0, 1, 2].map((number) => (
            <div
              key={number}
              className={`h-2 rounded-full transition-all duration-300 ${
                number <= step
                  ? 'w-12 bg-gradient-to-r from-pink-500 to-purple-500'
                  : 'w-8 bg-pink-100'
              }`}
            />
          ))}
        </div>

        <p className="mt-2 text-center text-xs font-semibold text-pink-500">
          Question {step + 1} of 3
        </p>

        {/* Question card */}
        <div className="mt-5 min-h-[270px] rounded-3xl border border-pink-100 bg-white/90 p-5 shadow-lg shadow-pink-100/60">

          <div className="mb-6 text-center">
            <h2 className="text-xl font-black leading-snug text-[#720C7D]">
              {currentQuestion.title}
            </h2>

            <p className="mt-2 text-sm text-[#81727D]">
              {currentQuestion.subtitle}
            </p>
          </div>

          {/* Question 1 */}
          {step === 0 && (
            <div className="grid grid-cols-2 gap-4">
              {choices.map((choice) => (
                <button
                  key={choice.value}
                  type="button"
                  onClick={() => setLooksLike(choice.value)}
                  aria-pressed={looksLike === choice.value}
                  className={`rounded-2xl border p-3 text-center transition ${
                    looksLike === choice.value
                      ? 'border-pink-500 bg-pink-100 text-pink-800 shadow-md'
                      : 'border-pink-100 bg-white hover:bg-pink-50'
                  }`}
                >
                  <span className="mb-2 block text-3xl">
                    {choice.emoji}
                  </span>
                  <span className="text-xs font-bold">
                    {choice.label}
                  </span>
                </button>
              ))}
            </div>
          )}

          {/* Question 2 */}
          {step === 1 && (
            <div className="grid grid-cols-2 gap-4">
              {choices.map((choice) => (
                <button
                  key={choice.value}
                  type="button"
                  onClick={() => setLovesMost(choice.value)}
                  aria-pressed={lovesMost === choice.value}
                  className={`rounded-2xl border p-3 text-center transition ${
                    lovesMost === choice.value
                      ? 'border-purple-500 bg-purple-100 text-purple-800 shadow-md'
                      : 'border-pink-100 bg-white hover:bg-purple-50'
                  }`}
                >
                  <span className="mb-2 block text-3xl">
                    {choice.emoji}
                  </span>
                  <span className="text-xs font-bold">
                    {choice.label}
                  </span>
                </button>
              ))}
            </div>
          )}

          {/* Question 3 */}
          {step === 2 && (
            <div>
              <label
                htmlFor="baby-nickname"
                className="mb-2 block text-sm font-bold text-[#720C7D]"
              >
                Baby's special nickname ✨
              </label>

              <input
                id="baby-nickname"
                value={nickname}
                onChange={(event) => setNickname(event.target.value)}
                maxLength={50}
                placeholder="Little Bean, Bubba, Sweet Pea..."
                className="w-full rounded-2xl border border-pink-200 bg-[#FFFAFC] px-4 py-3.5 text-sm outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-100"
              />

              <p className="mt-3 text-center text-xs text-[#81727D]">
                Optional — get creative! 💕
              </p>
            </div>
          )}
        </div>

        {/* Navigation buttons */}
        <div className="mt-5 flex gap-3">
          {step > 0 && (
            <button
              type="button"
              onClick={handleBack}
              className="flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-pink-200 bg-white px-4 py-3 font-bold text-pink-600 transition hover:bg-pink-50"
            >
              <ArrowLeft size={18} />
              Back
            </button>
          )}

          <button
            type="button"
            onClick={handleNext}
            disabled={
              (step === 0 && !looksLike) ||
              (step === 1 && !lovesMost)
            }
            className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#E83E73] to-[#7048E8] px-5 py-3 font-bold text-white shadow-lg transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-40"
          >
            {step === 2 ? "Let's play!" : 'Next'}
            {step === 2 ? (
              <Sparkles size={18} />
            ) : (
              <ArrowRight size={18} />
            )}
          </button>
        </div>

        <p className="mt-4 text-center text-xs text-[#81727D]">
          Made with love for our little miracle 💖
        </p>

      </section>
    </main>
  )
}
