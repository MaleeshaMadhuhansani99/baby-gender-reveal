
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
    subtitle: 'Whose little copy will baby be? 🥰',
    emoji: '👶🏻',
  },
  {
    title: 'Who will Baby love the most?',
    subtitle: "Who will get all baby's cuddles? 💕",
    emoji: '💗',
  },
  {
    title: 'Suggest a cute nickname for Baby!',
    subtitle: 'Give baby a special little name! ✨',
    emoji: '🍼',
  },
]

export default function BabyQuestions({
  onContinue,
  onBack,
  initialAnswers,
}: Props) {
  const [step, setStep] = useState(initialAnswers ? 2 : 0)

  const [looksLike, setLooksLike] =
    useState<BabyAnswers['looks_like'] | ''>(
      initialAnswers?.looks_like ?? '',
    )

  const [lovesMost, setLovesMost] =
    useState<BabyAnswers['loves_most'] | ''>(
      initialAnswers?.loves_most ?? '',
    )

  const [nickname, setNickname] = useState(
    initialAnswers?.baby_nickname ?? '',
  )

  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState<'next' | 'back'>('next')
  const [animationKey, setAnimationKey] = useState(0)

  const currentQuestion = questions[step]

  const changeStep = (nextStep: number, nextDirection: 'next' | 'back') => {
    if (isAnimating) return

    setDirection(nextDirection)
    setIsAnimating(true)

    window.setTimeout(() => {
      setStep(nextStep)
      setAnimationKey((previous) => previous + 1)
      setIsAnimating(false)
    }, 350)
  }

  const handleNext = () => {
    if (isAnimating) return

    if (step === 0 && !looksLike) return
    if (step === 1 && !lovesMost) return

    if (step < 2) {
      changeStep(step + 1, 'next')
      return
    }

    onContinue({
      looks_like: looksLike as BabyAnswers['looks_like'],
      loves_most: lovesMost as BabyAnswers['loves_most'],
      baby_nickname: nickname.trim(),
    })
  }

  const handleBack = () => {
    if (isAnimating) return

    if (step > 0) {
      changeStep(step - 1, 'back')
    } else {
      onBack()
    }
  }

  return (
    <main className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#FFF8F5] px-4 py-6 text-[#30252F]">

      <BackButton onClick={handleBack} />

      {/* Background decorations */}
      <div className="pointer-events-none absolute -left-16 top-10 h-40 w-40 rounded-full bg-pink-200/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-40 w-40 rounded-full bg-purple-200/50 blur-3xl" />

      <section className="relative w-full max-w-md">

        {/* Header */}
        <div className="text-center">
          <div
            key={`emoji-${animationKey}`}
            className="wizard-emoji mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-pink-100 text-pink-600"
          >
            <span className="text-3xl">{currentQuestion.emoji}</span>
          </div>

          <p className="wizard-header text-xs font-bold uppercase tracking-[0.2em] text-pink-600">
            A little bit of fun
          </p>

          <h1 className="wizard-header mt-2 text-2xl font-black text-[#720C7D] sm:text-3xl">
            Let's talk about Baby! 🍼
          </h1>

          <p className="wizard-header mt-2 text-sm text-[#625761]">
            Make your cutest predictions.
          </p>
        </div>

        {/* Progress */}
        <div className="mt-7 flex items-center justify-center gap-2">
          {[0, 1, 2].map((number) => (
            <div
              key={number}
              className={`h-2 rounded-full transition-all duration-500 ease-out ${
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

        {/* Question Card */}
        <div
          key={animationKey}
          className={`wizard-card mt-5 min-h-[270px] rounded-3xl border border-pink-100 bg-white/90 p-5 shadow-lg shadow-pink-100/60 ${
            direction === 'next' ? 'slide-from-right' : 'slide-from-left'
          }`}
        >
          {/* Question heading */}
          <div className="wizard-content mb-6 text-center">
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
              {choices.map((choice, index) => (
                <button
                  key={choice.value}
                  type="button"
                  onClick={() => setLooksLike(choice.value)}
                  aria-pressed={looksLike === choice.value}
                  style={{ animationDelay: `${index * 100}ms` }}
                  className={`wizard-option rounded-2xl border p-3 text-center transition duration-300 ${
                    looksLike === choice.value
                      ? 'border-pink-500 bg-pink-100 text-pink-800 shadow-md'
                      : 'border-pink-100 bg-white hover:-translate-y-1 hover:bg-pink-50 hover:shadow-md'
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
              {choices.map((choice, index) => (
                <button
                  key={choice.value}
                  type="button"
                  onClick={() => setLovesMost(choice.value)}
                  aria-pressed={lovesMost === choice.value}
                  style={{ animationDelay: `${index * 100}ms` }}
                  className={`wizard-option rounded-2xl border p-3 text-center transition duration-300 ${
                    lovesMost === choice.value
                      ? 'border-purple-500 bg-purple-100 text-purple-800 shadow-md'
                      : 'border-pink-100 bg-white hover:-translate-y-1 hover:bg-purple-50 hover:shadow-md'
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
            <div className="wizard-option">
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
                placeholder="Sudu baba, Chooty..."
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
              disabled={isAnimating}
              className="flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-pink-200 bg-white px-4 py-3 font-bold text-pink-600 transition duration-300 hover:-translate-y-0.5 hover:bg-pink-50 active:scale-95 disabled:opacity-40"
            >
              <ArrowLeft size={18} />
              Back
            </button>
          )}

          <button
            type="button"
            onClick={handleNext}
            disabled={
              isAnimating ||
              (step === 0 && !looksLike) ||
              (step === 1 && !lovesMost)
            }
            className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#E83E73] to-[#7048E8] px-5 py-3 font-bold text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-95 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {step === 2 ? "Let's go!" : 'Next'}

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

      {/* Wizard animations */}
      <style>{`
        .wizard-card {
          will-change: transform, opacity;
        }

        .slide-from-right {
          animation: slideFromRight 550ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .slide-from-left {
          animation: slideFromLeft 550ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        @keyframes slideFromRight {
          0% {
            opacity: 0;
            transform: translateX(45px) scale(0.96);
            filter: blur(5px);
          }
          60% {
            opacity: 1;
            filter: blur(0);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes slideFromLeft {
          0% {
            opacity: 0;
            transform: translateX(-45px) scale(0.96);
            filter: blur(5px);
          }
          60% {
            opacity: 1;
            filter: blur(0);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        .wizard-emoji {
          animation: emojiPop 600ms cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        @keyframes emojiPop {
          0% {
            opacity: 0;
            transform: scale(0.5) rotate(-12deg);
          }
          70% {
            opacity: 1;
            transform: scale(1.12) rotate(5deg);
          }
          100% {
            transform: scale(1) rotate(0);
          }
        }

        .wizard-header {
          animation: headerFade 500ms ease-out both;
        }

        @keyframes headerFade {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .wizard-content {
          animation: contentFade 500ms 100ms ease-out both;
        }

        @keyframes contentFade {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .wizard-option {
          animation: optionFade 450ms 150ms ease-out both;
        }

        @keyframes optionFade {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .wizard-card,
          .wizard-emoji,
          .wizard-header,
          .wizard-content,
          .wizard-option {
            animation-duration: 1s !important;
            animation-delay: 1s !important;
          }
        }
      `}</style>
    </main>
  )
}
