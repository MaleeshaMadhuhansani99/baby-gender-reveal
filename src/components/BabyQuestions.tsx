
import { useState } from 'react'
import { ArrowLeft, ArrowRight, Heart, Sparkles, BookOpen } from 'lucide-react'
import type { BabyAnswers } from './BabyQuestions'
import BackButton from './BackButton'

type Props = {
  onContinue: (answers: BabyAnswers) => void
  onBack: () => void
  initialAnswers?: BabyAnswers | null
}

const choices = [
  { value: 'mommy', label: 'Mommy 💗', emoji: '👩🏻' },
  { value: 'daddy', label: 'Daddy 💙', emoji: '👨🏻' },
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

  const [answers, setAnswers] = useState<BabyAnswers>(
    initialAnswers || {
      looks_like: 'mommy',
      loves_most: 'mommy',
      baby_nickname: '',
    },
  )

  const [turning, setTurning] = useState(false)
  const [direction, setDirection] = useState<'next' | 'back'>('next')
  const [displayStep, setDisplayStep] = useState(step)

  const isLastStep = step === 2

  const updateChoice = (value: 'mommy' | 'daddy') => {
    setAnswers((prev) => ({
      ...prev,
      [step === 0 ? 'looks_like' : 'loves_most']: value,
    }))
  }

  const turnPage = (dir: 'next' | 'back') => {
    if (turning) return

    if (dir === 'next' && step === 2) {
      onContinue(answers)
      return
    }

    if (dir === 'back' && step === 0) {
      onBack()
      return
    }

    const nextStep = dir === 'next' ? step + 1 : step - 1

    setDirection(dir)
    setDisplayStep(nextStep)
    setTurning(true)

    window.setTimeout(() => {
      setStep(nextStep)
      setTurning(false)
    }, 900)
  }

  const renderQuestion = (index: number) => (
    <div className="flex h-full flex-col items-center justify-center px-5 text-center sm:px-8">
      <div className="mb-4 text-5xl sm:text-6xl">
        {questions[index].emoji}
      </div>

      <div className="mb-3 flex items-center gap-2 text-pink-400">
        <Sparkles size={16} />
        <span className="text-xs font-bold uppercase tracking-[0.25em]">
          Baby's little question
        </span>
        <Sparkles size={16} />
      </div>

      <h2 className="max-w-sm text-2xl font-extrabold leading-tight text-[#853B79] sm:text-3xl">
        {questions[index].title}
      </h2>

      <p className="mt-4 max-w-xs text-sm leading-relaxed text-purple-500 sm:text-base">
        {questions[index].subtitle}
      </p>

      <div className="mt-7 flex items-center gap-2 text-pink-300">
        <Heart size={15} fill="currentColor" />
        <span className="text-xs font-medium">With love, Baby</span>
        <Heart size={15} fill="currentColor" />
      </div>
    </div>
  )

  const renderAnswer = (index: number) => {
    if (index === 2) {
      return (
        <div className="flex h-full flex-col items-center justify-center px-5 sm:px-8">
          <div className="mb-4 text-4xl">🧸</div>

          <h3 className="mb-2 text-center text-lg font-extrabold text-[#853B79] sm:text-xl">
            Baby's special nickname
          </h3>

          <p className="mb-5 text-center text-sm text-purple-400">
            What cute name should we call Baby?
          </p>

          <input
            id="baby-nickname"
            type="text"
            value={answers.baby_nickname}
            onChange={(e) =>
              setAnswers((prev) => ({
                ...prev,
                baby_nickname: e.target.value,
              }))
            }
            placeholder="Sudu baba, Chooty..."
            className="w-full max-w-xs rounded-2xl border-2 border-pink-200 bg-white/80 px-4 py-3 text-center text-sm text-purple-700 outline-none transition focus:border-pink-400 focus:ring-4 focus:ring-pink-100"
          />

          <p className="mt-4 text-xs text-pink-400">
            I can't wait to hear it! 💕
          </p>
        </div>
      )
    }

    const selected = index === 0 ? answers.looks_like : answers.loves_most

    return (
      <div className="flex h-full flex-col items-center justify-center px-5 sm:px-8">
        <div className="mb-5 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-pink-400">
            Choose your answer
          </p>
          <p className="mt-2 text-sm text-purple-400">
            What do you think?
          </p>
        </div>

        <div className="grid w-full max-w-xs grid-cols-1 gap-4">
          {choices.map((choice) => {
            const isSelected = selected === choice.value

            return (
              <button
                key={choice.value}
                type="button"
                onClick={() =>
                  updateChoice(choice.value)
                }
                className={`flex items-center justify-center gap-3 rounded-2xl border-2 px-5 py-4 text-base font-bold transition-all duration-300 ${
                  isSelected
                    ? 'scale-[1.03] border-pink-400 bg-pink-100 text-pink-700 shadow-lg shadow-pink-100'
                    : 'border-purple-100 bg-white/70 text-purple-500 hover:border-pink-200 hover:bg-pink-50'
                }`}
              >
                <span className="text-3xl">{choice.emoji}</span>
                {choice.label}
                {isSelected && (
                  <Heart size={17} fill="currentColor" />
                )}
              </button>
            )
          })}
        </div>

        <p className="mt-5 text-center text-xs text-pink-400">
          Baby is curious to know! 🥰
        </p>
      </div>
    )
  }

  return (
    <main className="relative flex h-[100svh] w-full flex-col items-center overflow-hidden bg-gradient-to-br from-[#fff1f7] via-[#fff8fc] to-[#f3eaff] px-3 py-3 sm:px-6 sm:py-5">

      {/* Decorations */}
      <div className="pointer-events-none absolute left-5 top-16 animate-pulse text-2xl opacity-60">
        🌸
      </div>
      <div className="pointer-events-none absolute right-6 top-24 animate-bounce text-xl opacity-60">
        🦋
      </div>
      <div className="pointer-events-none absolute bottom-16 left-8 text-xl opacity-50">
        ✨
      </div>
      <div className="pointer-events-none absolute bottom-20 right-8 text-2xl opacity-50">
        💕
      </div>

      <div className="relative z-10 flex w-full max-w-5xl shrink-0 items-center justify-between">
        <BackButton onClick={() => turnPage('back')} />

        <div className="flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs font-bold text-pink-500 shadow-sm">
          <BookOpen size={16} />
          Baby's Storybook
        </div>
      </div>

      <div className="relative z-10 mt-3 flex w-full flex-1 flex-col items-center justify-center gap-3">

        <div className="text-center">
          <h1 className="text-xl font-extrabold text-[#853B79] sm:text-2xl">
            A Little Book of Questions
          </h1>
          <p className="mt-1 text-xs text-purple-400 sm:text-sm">
            Let's fill Baby's little book together! 💗
          </p>
        </div>

        {/* Book */}
        <div className="book-scene relative w-full max-w-4xl">
          <div className="book-spread relative grid grid-cols-2 overflow-hidden rounded-[20px] sm:rounded-[28px]">

            {/* Left page - Question */}
            <div className="book-page relative z-0 min-w-0 border-r border-[#e8cce0]">
              <div className="page-content">
                {renderQuestion(step)}
              </div>
              <span className="page-number left-5">0{step + 1}</span>
            </div>

            {/* Right page - Answer */}
            <div className="book-page relative z-0 min-w-0">
              <div className="page-content">
                {renderAnswer(step)}
              </div>
              <span className="page-number right-5">0{step + 1}</span>
            </div>

            {/* Book centre spine */}
            <div className="book-spine pointer-events-none absolute bottom-0 left-1/2 top-0 z-20 w-3 -translate-x-1/2" />

            {/* Actual turning page */}
            {turning && (
              <div
                key={`${step}-${direction}`}
                className={`turning-page ${
                  direction === 'next'
                    ? 'turn-next'
                    : 'turn-back'
                }`}
              >
                <div className="turning-page-front">
                  {direction === 'next'
                    ? renderAnswer(step)
                    : renderQuestion(step)}
                </div>

                <div className="turning-page-back">
                  {direction === 'next'
                    ? renderQuestion(displayStep)
                    : renderAnswer(displayStep)}
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Navigation */}
        <div className="flex w-full max-w-4xl items-center justify-between gap-3 px-1">
          <button
            type="button"
            onClick={() => turnPage('back')}
            disabled={step === 0 || turning}
            className="flex items-center gap-2 rounded-full border border-pink-200 bg-white/80 px-4 py-2.5 text-sm font-bold text-pink-500 shadow-sm transition hover:bg-pink-50 disabled:opacity-30 sm:px-6"
          >
            <ArrowLeft size={17} />
            Previous
          </button>

          <div className="flex items-center gap-2">
            {questions.map((_, index) => (
              <span
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === step
                    ? 'w-7 bg-pink-400'
                    : 'w-2 bg-pink-200'
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => turnPage('next')}
            disabled={turning || (step === 2 && !answers.baby_nickname.trim())}
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-pink-200 transition hover:scale-105 disabled:opacity-50 sm:px-6"
          >
            {isLastStep ? 'Finish' : 'Next'}
            <ArrowRight size={17} />
          </button>
        </div>

        <p className="text-center text-xs text-purple-300">
          Turn the page to discover the next question ✨
        </p>
      </div>

      <style>{`
        .book-scene {
          perspective: 2200px;
          perspective-origin: center center;
        }

        .book-spread {
          height: clamp(230px, 43svh, 390px);
          background: #fffafc;
          box-shadow:
            0 18px 45px rgba(139, 69, 120, 0.16),
            0 4px 12px rgba(139, 69, 120, 0.08);
          transform-style: preserve-3d;
        }

        .book-page {
          background:
            linear-gradient(90deg, rgba(255,255,255,0.96), rgba(255,248,252,0.98));
          min-height: 0;
          overflow: hidden;
        }

        .book-page:first-child {
          background:
            linear-gradient(90deg, #fffafd 0%, #fff5fa 100%);
          box-shadow: inset -12px 0 20px -18px rgba(100, 40, 90, 0.45);
        }

        .book-page:nth-child(2) {
          background:
            linear-gradient(90deg, #fff7fb 0%, #fffafd 100%);
          box-shadow: inset 12px 0 20px -18px rgba(100, 40, 90, 0.45);
        }

        .page-content {
          height: 100%;
          min-height: 0;
        }

        .page-number {
          position: absolute;
          bottom: 12px;
          font-size: 10px;
          font-weight: 700;
          color: #d9a9cc;
        }

        .book-spine {
          background: linear-gradient(
            90deg,
            rgba(130, 65, 115, 0.13),
            rgba(255,255,255,0.8),
            rgba(130, 65, 115, 0.12)
          );
          box-shadow: 0 0 12px rgba(130, 65, 115, 0.12);
        }

        .turning-page {
          position: absolute;
          z-index: 15;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 50%;
          transform-style: preserve-3d;
          transform-origin: left center;
          background: #fff8fc;
          box-shadow: 0 4px 18px rgba(90, 40, 80, 0.18);
          backface-visibility: hidden;
        }

        .turning-page-front,
        .turning-page-back {
          position: absolute;
          inset: 0;
          overflow: hidden;
          background: linear-gradient(90deg, #fff7fb, #fffafd);
          backface-visibility: hidden;
        }

        .turning-page-back {
          transform: rotateY(180deg);
          background: linear-gradient(90deg, #fffafd, #fff5fa);
        }

        .turn-next {
          animation: flipNext 900ms cubic-bezier(0.55, 0.05, 0.25, 1) forwards;
        }

        .turn-back {
          animation: flipBack 900ms cubic-bezier(0.55, 0.05, 0.25, 1) forwards;
          transform-origin: left center;
        }

        @keyframes flipNext {
          0% {
            transform: rotateY(0deg);
          }
          45% {
            box-shadow: 18px 8px 28px rgba(80, 30, 70, 0.22);
          }
          100% {
            transform: rotateY(-180deg);
            box-shadow: 0 0 0 transparent;
          }
        }

        @keyframes flipBack {
          0% {
            transform: rotateY(0deg);
          }
          45% {
            box-shadow: 18px 8px 28px rgba(80, 30, 70, 0.22);
          }
          100% {
            transform: rotateY(-180deg);
            box-shadow: 0 0 0 transparent;
          }
        }

        @media (max-height: 650px) {
          .book-spread {
            height: 38svh;
            min-height: 210px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .turning-page {
            animation-duration: 1s !important;
          }
        }
      `}</style>
    </main>
  )
}
