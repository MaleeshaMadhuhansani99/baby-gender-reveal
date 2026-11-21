
import { useState } from 'react'
import { Heart, Baby, ArrowRight, Sparkles } from 'lucide-react'
import BackButton from './BackButton'

type Props = {
  onContinue: (babyCallName: string) => void
  onBack: () => void
  initialName?: string
}

export default function BabyCallName({ onContinue, onBack, initialName = '' }: Props) {
  const [babyCallName, setBabyCallName] = useState(initialName)

  const handleContinue = () => {
    const value = babyCallName.trim()

    if (!value) return

    onContinue(value)
  }

  return (
    <main className="relative h-[100svh] w-full overflow-hidden bg-[#fff8f5] text-[#30252f]">
      <BackButton onClick={onBack} />
      {/* Soft background glows */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-[35vh] w-[35vh] rounded-full bg-[#ff6b8a]/15 blur-3xl animate-soft-glow" />
      <div className="pointer-events-none absolute -right-24 top-[8%] h-[40vh] w-[40vh] rounded-full bg-[#7048e8]/12 blur-3xl animate-soft-glow-delay" />
      <div className="pointer-events-none absolute bottom-[-18vh] left-1/2 h-[42vh] w-[42vh] -translate-x-1/2 rounded-full bg-[#ffb347]/15 blur-3xl animate-soft-glow-delay-2" />

      {/* Flying butterflies */}
      <div className="butterfly butterfly-one">
        <span className="butterfly-wing butterfly-wing-left" />
        <span className="butterfly-body" />
        <span className="butterfly-wing butterfly-wing-right" />
      </div>
      <div className="butterfly butterfly-two">
        <span className="butterfly-wing butterfly-wing-left" />
        <span className="butterfly-body" />
        <span className="butterfly-wing butterfly-wing-right" />
      </div>
      <div className="butterfly butterfly-three">
        <span className="butterfly-wing butterfly-wing-left" />
        <span className="butterfly-body" />
        <span className="butterfly-wing butterfly-wing-right" />
      </div>
      <div className="butterfly butterfly-four">
        <span className="butterfly-wing butterfly-wing-left" />
        <span className="butterfly-body" />
        <span className="butterfly-wing butterfly-wing-right" />
      </div>
      <div className="butterfly butterfly-five">
        <span className="butterfly-wing butterfly-wing-left" />
        <span className="butterfly-body" />
        <span className="butterfly-wing butterfly-wing-right" />
      </div>

      {/* Floating decorations */}
      <div className="pointer-events-none absolute left-[9%] top-[20%] animate-float-slow opacity-60">
        <Heart size={18} fill="#ff6b8a" strokeWidth={1.5} className="text-[#ff6b8a]" />
      </div>
      <div className="pointer-events-none absolute right-[10%] top-[25%] animate-float opacity-60">
        <Sparkles size={17} strokeWidth={1.5} className="text-[#7048e8]" />
      </div>
      <div className="pointer-events-none absolute bottom-[20%] left-[12%] animate-float-delay opacity-50">
        <Sparkles size={17} className="text-[#ffb347]" />
      </div>
      <div className="pointer-events-none absolute bottom-[19%] right-[13%] animate-float-slow opacity-50">
        <Heart size={16} fill="#e83e73" strokeWidth={1.5} className="text-[#e83e73]" />
      </div>

      {/* Main content */}
      <section className="relative z-10 flex h-full w-full items-center justify-center px-5 py-5">
        <div className="flex h-full w-full max-w-xl flex-col items-center justify-center text-center">
          {/* Small label */}
          <div className="animate-page-fade-up mb-4 flex items-center gap-2 rounded-full border border-[#ff6b8a]/20 bg-white/70 px-4 py-2 shadow-sm backdrop-blur-sm">
            <Baby size={15} className="text-[#e83e73]" strokeWidth={2} />
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#81727d] sm:text-xs">
              One little question
            </span>
            <Sparkles size={14} className="text-[#7048e8]" strokeWidth={1.8} />
          </div>

          {/* Heading */}
          <div className="animate-page-fade-up-delay-1">
            <h1
              className="font-serif font-bold tracking-tight text-[#720c7d]"
              style={{ fontSize: 'clamp(2rem, 7vw, 3.5rem)', lineHeight: 1.05 }}
            >
              What should Baby call you? 🥰
            </h1>
            <p
              className="mx-auto mt-3 max-w-md px-3 text-[#625761]"
              style={{ fontSize: 'clamp(0.85rem, 2vw, 1rem)', lineHeight: 1.55 }}
            >
              Are you Baby's Punchi, Aunty, Uncle,
              <br />
              Amma Achchi, Seeya or someone special?
            </p>
          </div>

          {/* Input */}
          <div className="animate-name-input mt-7 w-full max-w-md sm:mt-9">
            <div className={`name-input-wrapper ${babyCallName.trim() ? 'name-input-active' : ''}`}>
              <input
                id="baby-call-name"
                type="text"
                value={babyCallName}
                onChange={(event) => setBabyCallName(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') handleContinue()
                }}
                placeholder="e.g. Malee Punchi, Aunty, Amma Achchi..."
                maxLength={40}
                autoComplete="nickname"
                className="name-input"
              />
              <span className="input-heart">♡</span>
            </div>
            <p className="mt-2 px-2 text-left text-[10px] text-[#a0929b] sm:text-xs">
              Choose the sweet name your little one will use ✨
            </p>
          </div>

          {/* Continue */}
          <div className="mt-6 sm:mt-7">
            <button
              type="button"
              disabled={!babyCallName.trim()}
              onClick={handleContinue}
              className={`group flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold transition-all duration-300 ${
                babyCallName.trim()
                  ? 'continue-ready bg-[#30252f] text-white shadow-lg hover:-translate-y-1 hover:shadow-xl'
                  : 'cursor-not-allowed bg-[#30252f]/10 text-[#30252f]/30'
              }`}
            >
              <span>Next</span>
              <ArrowRight
                size={17}
                className={`transition-transform duration-300 ${
                  babyCallName.trim() ? 'group-hover:translate-x-1' : ''
                }`}
              />
            </button>
          </div>

          <p className="animate-page-fade-up-delay-3 mt-4 text-[10px] tracking-wide text-[#a0929b] sm:text-xs">
            I can't wait to meet you! 💕
          </p>
        </div>
      </section>
    </main>
  )
}
