import { useState } from 'react'
import { Heart, Sparkles, Star } from 'lucide-react'

interface GenderGuessProps {
  onContinue: (guess: 'girl' | 'boy') => void
}

export default function GenderGuess({
  onContinue,
}: GenderGuessProps) {
  const [selected, setSelected] = useState<'girl' | 'boy' | null>(null)

  const handleSelect = (guess: 'girl' | 'boy') => {
    setSelected(guess)
  }

  return (
    <main className="relative h-[100svh] w-full overflow-hidden bg-[#fff8f5] text-[#30252f]">
      {/* Background decorations */}
      <div className="pointer-events-none absolute -left-24 top-[-10%] h-[35vh] w-[35vh] rounded-full bg-[#ff6b8a]/15 blur-3xl" />

      <div className="pointer-events-none absolute -right-24 bottom-[-10%] h-[40vh] w-[40vh] rounded-full bg-[#7048e8]/15 blur-3xl" />

      <div className="pointer-events-none absolute left-[10%] top-[20%] text-[#e83e73]/30">
        <Sparkles size={24} />
      </div>

      <div className="pointer-events-none absolute right-[12%] top-[18%] text-[#7048e8]/30">
        <Star size={22} />
      </div>

      <div className="pointer-events-none absolute bottom-[20%] left-[12%] text-[#ff9f1c]/40">
        <Sparkles size={20} />
      </div>

      <div className="pointer-events-none absolute bottom-[18%] right-[10%] text-[#e83e73]/30">
        <Heart size={20} fill="currentColor" />
      </div>

      {/* Main content */}
      <section className="relative z-10 flex h-full w-full items-center justify-center px-4">
        <div className="w-full max-w-2xl text-center">

          {/* Small label */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#7048e8] shadow-sm ring-1 ring-[#eee5f5]">
            <Sparkles size={13} className="text-[#ff9f1c]" />
            Make your prediction
          </div>

          {/* Heading */}
          <h1 className="font-serif text-[clamp(2rem,7vw,3.8rem)] font-bold leading-[0.95] text-[#720c7d]">
            What do you think
            <span className="block text-[#e83e73]">
              Baby will be?
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-[#625761] sm:text-base">
            Time to trust your instincts! Pick the team you think
            Baby Dilki & Asinthaka is joining. 👀
          </p>

          {/* Choices */}
          <div className="mx-auto mt-8 grid w-full max-w-lg grid-cols-2 gap-4">

            {/* Girl */}
            <button
              type="button"
              onClick={() => handleSelect('girl')}
              className={`group relative overflow-hidden rounded-3xl border-2 p-5 transition-all duration-300 sm:p-7 ${
                selected === 'girl'
                  ? 'scale-[1.03] border-[#e83e73] bg-[#fff0f4] shadow-[0_15px_40px_rgba(232,62,115,0.20)]'
                  : 'border-[#f0dfe5] bg-white hover:-translate-y-1 hover:border-[#ff9fbd] hover:shadow-lg'
              }`}
            >
              <div className="text-5xl transition-transform duration-300 group-hover:scale-110 sm:text-6xl">
                🎀
              </div>

              <h2 className="mt-3 text-lg font-bold text-[#e83e73] sm:text-xl">
                Little Girl
              </h2>

              <p className="mt-1 text-xs text-[#81727d] sm:text-sm">
                Team Pink 💕
              </p>

              {selected === 'girl' && (
                <div className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-[#e83e73] text-white">
                  ✓
                </div>
              )}
            </button>

            {/* Boy */}
            <button
              type="button"
              onClick={() => handleSelect('boy')}
              className={`group relative overflow-hidden rounded-3xl border-2 p-5 transition-all duration-300 sm:p-7 ${
                selected === 'boy'
                  ? 'scale-[1.03] border-[#7048e8] bg-[#f3efff] shadow-[0_15px_40px_rgba(112,72,232,0.20)]'
                  : 'border-[#e3def2] bg-white hover:-translate-y-1 hover:border-[#a99af0] hover:shadow-lg'
              }`}
            >
              <div className="text-5xl transition-transform duration-300 group-hover:scale-110 sm:text-6xl">
                🧢
              </div>

              <h2 className="mt-3 text-lg font-bold text-[#7048e8] sm:text-xl">
                Little Boy
              </h2>

              <p className="mt-1 text-xs text-[#81727d] sm:text-sm">
                Team Blue 💙
              </p>

              {selected === 'boy' && (
                <div className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-[#7048e8] text-white">
                  ✓
                </div>
              )}
            </button>
          </div>

          {/* Reaction */}
          <div className="mt-6 min-h-[70px]">
            {selected && (
              <div className="animate-[welcomeFade_0.5s_ease-out]">
                <p className="text-sm font-bold text-[#30252f]">
                  {selected === 'girl'
                    ? '🎀 Ooooh... Team Girl!'
                    : '💙 Ooooh... Team Boy!'}
                </p>

                <p className="mt-1 text-xs text-[#81727d]">
                  {selected === 'girl'
                    ? 'Someone has strong pink predictions! 👀'
                    : 'Someone has strong blue predictions! 👀'}
                </p>
              </div>
            )}
          </div>

          {/* Continue */}
          <button
            type="button"
            disabled={!selected}
            onClick={() => selected && onContinue(selected)}
            className={`mt-3 inline-flex min-h-12 items-center gap-2 rounded-full px-7 text-sm font-bold transition-all duration-300 ${
              selected
                ? 'bg-[#e83e73] text-white shadow-[0_8px_25px_rgba(232,62,115,0.30)] hover:-translate-y-1 hover:bg-[#d92f63]'
                : 'cursor-not-allowed bg-[#eadfe4] text-[#aa9da4]'
            }`}
          >
            <span>
              {selected ? 'Let’s continue' : 'Choose your team'}
            </span>

            <span className="text-lg">→</span>
          </button>

          <p className="mt-3 text-[11px] font-medium tracking-wide text-[#a0939c]">
            Your prediction will be revealed later... 🤫
          </p>
        </div>
      </section>
    </main>
  )
}