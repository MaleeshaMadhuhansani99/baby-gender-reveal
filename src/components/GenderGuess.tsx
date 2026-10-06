import { useState } from 'react'
import {
  Check,
  Heart,
  Sparkles,
  Star,
  ArrowRight,
  Baby,
} from 'lucide-react'

interface GenderGuessProps {
  onContinue: (guess: 'girl' | 'boy') => void
}

type Guess = 'girl' | 'boy'

export default function GenderGuess({ onContinue }: GenderGuessProps) {
  const [selected, setSelected] = useState<Guess | null>(null)

  const handleSelect = (guess: Guess) => {
    setSelected(guess)
  }

  return (
    <main className="relative h-[100svh] w-full overflow-hidden bg-[#fff8f5] text-[#30252f]">
      {/* Soft background glow */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-[35vh] w-[35vh] rounded-full bg-[#ff6b8a]/15 blur-3xl animate-soft-glow" />

      <div className="pointer-events-none absolute -right-24 top-[8%] h-[40vh] w-[40vh] rounded-full bg-[#7048e8]/12 blur-3xl animate-soft-glow-delay" />

      <div className="pointer-events-none absolute bottom-[-18vh] left-1/2 h-[42vh] w-[42vh] -translate-x-1/2 rounded-full bg-[#ffb347]/15 blur-3xl animate-soft-glow-delay-2" />

      {/* Floating hearts */}
      <div className="pointer-events-none absolute left-[8%] top-[18%] animate-float-slow opacity-60">
        <Heart
          size={18}
          fill="#ff6b8a"
          strokeWidth={1.5}
          className="text-[#ff6b8a]"
        />
      </div>

      <div className="pointer-events-none absolute right-[10%] top-[26%] animate-float opacity-60">
        <Heart
          size={14}
          fill="#7048e8"
          strokeWidth={1.5}
          className="text-[#7048e8]"
        />
      </div>

      <div className="pointer-events-none absolute bottom-[20%] left-[12%] animate-float-delay opacity-50">
        <Star
          size={17}
          fill="#ffb347"
          strokeWidth={1.5}
          className="text-[#ffb347]"
        />
      </div>

      <div className="pointer-events-none absolute bottom-[18%] right-[13%] animate-float-slow opacity-50">
        <Sparkles
          size={19}
          strokeWidth={1.5}
          className="text-[#7048e8]"
        />
      </div>

      {/* Small decorative dots */}
      <div className="pointer-events-none absolute left-[20%] top-[35%] h-2 w-2 rounded-full bg-[#ff6b8a]/40 animate-twinkle" />
      <div className="pointer-events-none absolute right-[22%] top-[44%] h-1.5 w-1.5 rounded-full bg-[#7048e8]/40 animate-twinkle-delay" />
      <div className="pointer-events-none absolute bottom-[30%] left-[25%] h-1.5 w-1.5 rounded-full bg-[#ffb347]/50 animate-twinkle-delay-2" />

      {/* Main content */}
      <section className="relative z-10 flex h-full w-full items-center justify-center px-4 py-5">
        <div className="flex h-full w-full max-w-3xl flex-col items-center justify-center text-center">

          {/* Top label */}
          <div className="animate-page-fade-up mb-3 flex items-center gap-2 rounded-full border border-[#ff6b8a]/20 bg-white/70 px-4 py-2 shadow-sm backdrop-blur-sm">
            <Baby
              size={15}
              className="text-[#e83e73]"
              strokeWidth={2}
            />

            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#81727d] sm:text-xs">
              Prediction time
            </span>

            <Sparkles
              size={14}
              className="text-[#7048e8]"
              strokeWidth={1.8}
            />
          </div>

          {/* Heading */}
          <div className="animate-page-fade-up-delay-1">
            <h1
              className="font-serif font-bold tracking-tight text-[#720c7d]"
              style={{
                fontSize: 'clamp(2rem, 6vw, 3.5rem)',
                lineHeight: 1.05,
              }}
            >
              Make your prediction
            </h1>

            <p
              className="mx-auto mt-3 max-w-xl px-2 text-[#625761]"
              style={{
                fontSize: 'clamp(0.85rem, 2vw, 1rem)',
                lineHeight: 1.55,
              }}
            >
              What do you think Baby will be?
              <br />
              <span className="text-[#81727d]">
                Trust your instincts... 👀
              </span>
            </p>
          </div>

          {/* Guess cards */}
          <div className="mt-6 grid w-full max-w-2xl grid-cols-2 gap-3 px-1 sm:mt-8 sm:gap-5 sm:px-0">
            {/* Girl */}
            <button
              type="button"
              onClick={() => handleSelect('girl')}
              className={`guess-card guess-card-girl group animate-card-in-1 ${
                selected === 'girl' ? 'guess-card-selected' : ''
              }`}
            >
              {/* Selection check */}
              <div
                className={`absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-[#e83e73] text-white transition-all duration-300 sm:right-4 sm:top-4 ${
                  selected === 'girl'
                    ? 'scale-100 opacity-100'
                    : 'scale-50 opacity-0'
                }`}
              >
                <Check size={15} strokeWidth={3} />
              </div>

              {/* Sparkles */}
              {selected === 'girl' && (
                <>
                  <Sparkles className="selection-sparkle sparkle-1 absolute left-[12%] top-[15%] h-4 w-4 text-[#e83e73]" />
                  <Sparkles className="selection-sparkle sparkle-2 absolute right-[13%] bottom-[18%] h-3.5 w-3.5 text-[#ff6b8a]" />
                </>
              )}

              <div className="relative z-10 flex flex-col items-center">
                <div
                  className={`guess-icon guess-icon-girl ${
                    selected === 'girl'
                      ? 'scale-110'
                      : 'group-hover:scale-105'
                  }`}
                >
                  🎀
                </div>

                <h2 className="mt-3 text-base font-bold text-[#30252f] sm:text-xl">
                  Little Girl
                </h2>

                <p className="mt-1 text-xs font-medium text-[#e83e73] sm:text-sm">
                  Team Pink 💕
                </p>
              </div>
            </button>

            {/* Boy */}
            <button
              type="button"
              onClick={() => handleSelect('boy')}
              className={`guess-card guess-card-boy group animate-card-in-2 ${
                selected === 'boy' ? 'guess-card-selected' : ''
              }`}
            >
              {/* Selection check */}
              <div
                className={`absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-[#7048e8] text-white transition-all duration-300 sm:right-4 sm:top-4 ${
                  selected === 'boy'
                    ? 'scale-100 opacity-100'
                    : 'scale-50 opacity-0'
                }`}
              >
                <Check size={15} strokeWidth={3} />
              </div>

              {/* Sparkles */}
              {selected === 'boy' && (
                <>
                  <Sparkles className="selection-sparkle sparkle-1 absolute left-[12%] top-[15%] h-4 w-4 text-[#7048e8]" />
                  <Sparkles className="selection-sparkle sparkle-2 absolute right-[13%] bottom-[18%] h-3.5 w-3.5 text-[#9b7cf4]" />
                </>
              )}

              <div className="relative z-10 flex flex-col items-center">
                <div
                  className={`guess-icon guess-icon-boy ${
                    selected === 'boy'
                      ? 'scale-110'
                      : 'group-hover:scale-105'
                  }`}
                >
                  🧢
                </div>

                <h2 className="mt-3 text-base font-bold text-[#30252f] sm:text-xl">
                  Little Boy
                </h2>

                <p className="mt-1 text-xs font-medium text-[#7048e8] sm:text-sm">
                  Team Blue 💙
                </p>
              </div>
            </button>
          </div>

          {/* Reaction */}
          <div className="mt-4 h-[48px] sm:mt-5">
            {selected && (
              <div
                key={selected}
                className="animate-reaction flex flex-col items-center"
              >
                <p className="text-sm font-bold text-[#30252f] sm:text-base">
                  {selected === 'girl'
                    ? '🎀 Ooooh... Team Girl!'
                    : '💙 Ooooh... Team Boy!'}
                </p>

                <p className="mt-0.5 text-xs text-[#81727d] sm:text-sm">
                  {selected === 'girl'
                    ? 'Someone has strong pink predictions! 👀'
                    : 'Someone has strong blue predictions! 👀'}
                </p>
              </div>
            )}
          </div>

          {/* Continue */}
          <div className="mt-3 sm:mt-4">
            <button
              type="button"
              disabled={!selected}
              onClick={() => selected && onContinue(selected)}
              className={`group flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 sm:px-7 ${
                selected
                  ? 'continue-ready bg-[#30252f] text-white shadow-lg hover:-translate-y-1 hover:shadow-xl'
                  : 'cursor-not-allowed bg-[#30252f]/10 text-[#30252f]/30'
              }`}
            >
              <span>
                {selected ? 'Let’s see what happens' : 'Choose your team'}
              </span>

              <ArrowRight
                size={17}
                className={`transition-transform duration-300 ${
                  selected ? 'group-hover:translate-x-1' : ''
                }`}
              />
            </button>
          </div>

          {/* Bottom hint */}
          <p className="animate-page-fade-up-delay-3 mt-4 text-[10px] tracking-wide text-[#a0929b] sm:text-xs">
            Your prediction will be revealed later... 🤫
          </p>
        </div>
      </section>
    </main>
  )
}