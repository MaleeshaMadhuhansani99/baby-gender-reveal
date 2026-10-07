
import { useState } from 'react'
import { ArrowRight, Baby, Heart, Sparkles, Star } from 'lucide-react'

interface GuestNameProps {
  onContinue: (name: string) => void
}

export default function GuestName({ onContinue }: GuestNameProps) {
  const [name, setName] = useState('')

  const handleContinue = () => {
    const trimmedName = name.trim()

    if (!trimmedName) return

    onContinue(trimmedName)
  }

  return (
    <main className="relative h-[100svh] w-full overflow-hidden bg-[#fff8f5] text-[#30252f]">
      {/* Soft background glows */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-[35vh] w-[35vh] rounded-full bg-[#ff6b8a]/15 blur-3xl animate-soft-glow" />

      <div className="pointer-events-none absolute -right-24 top-[8%] h-[40vh] w-[40vh] rounded-full bg-[#7048e8]/12 blur-3xl animate-soft-glow-delay" />

      <div className="pointer-events-none absolute bottom-[-18vh] left-1/2 h-[42vh] w-[42vh] -translate-x-1/2 rounded-full bg-[#ffb347]/15 blur-3xl animate-soft-glow-delay-2" />

      {/* Floating decorations */}
      <div className="pointer-events-none absolute left-[9%] top-[20%] animate-float-slow opacity-60">
        <Heart
          size={18}
          fill="#ff6b8a"
          strokeWidth={1.5}
          className="text-[#ff6b8a]"
        />
      </div>

      <div className="pointer-events-none absolute right-[10%] top-[25%] animate-float opacity-60">
        <Sparkles
          size={17}
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

      <div className="pointer-events-none absolute bottom-[19%] right-[13%] animate-float-slow opacity-50">
        <Heart
          size={16}
          fill="#e83e73"
          strokeWidth={1.5}
          className="text-[#e83e73]"
        />
      </div>

      {/* Main content */}
      <section className="relative z-10 flex h-full w-full items-center justify-center px-5 py-5">
        <div className="flex h-full w-full max-w-xl flex-col items-center justify-center text-center">
          {/* Small label */}
          <div className="animate-page-fade-up mb-4 flex items-center gap-2 rounded-full border border-[#ff6b8a]/20 bg-white/70 px-4 py-2 shadow-sm backdrop-blur-sm">
            <Baby
              size={15}
              className="text-[#e83e73]"
              strokeWidth={2}
            />

            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#81727d] sm:text-xs">
              Before we begin
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
                fontSize: 'clamp(2rem, 7vw, 3.5rem)',
                lineHeight: 1.05,
              }}
            >
              What should we call you?
            </h1>

            <p
              className="mx-auto mt-3 max-w-md px-3 text-[#625761]"
              style={{
                fontSize: 'clamp(0.85rem, 2vw, 1rem)',
                lineHeight: 1.55,
              }}
            >
              Tell us your name before you make
              <br />
              your Baby prediction 💕
            </p>
          </div>

          {/* Input */}
          <div className="animate-name-input mt-7 w-full max-w-md sm:mt-9">
            <div
              className={`name-input-wrapper ${
                name.trim() ? 'name-input-active' : ''
              }`}
            >
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    handleContinue()
                  }
                }}
                placeholder="Your name..."
                maxLength={40}
                autoComplete="name"
                className="name-input"
              />

              <span className="input-heart">♡</span>
            </div>

            <p className="mt-2 px-2 text-left text-[10px] text-[#a0929b] sm:text-xs">
              Just a little name so we know who made the prediction ✨
            </p>
          </div>

          {/* Continue */}
          <div className="mt-6 sm:mt-7">
            <button
              type="button"
              disabled={!name.trim()}
              onClick={handleContinue}
              className={`group flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold transition-all duration-300 ${
                name.trim()
                  ? 'continue-ready bg-[#30252f] text-white shadow-lg hover:-translate-y-1 hover:shadow-xl'
                  : 'cursor-not-allowed bg-[#30252f]/10 text-[#30252f]/30'
              }`}
            >
              <span>Let's begin</span>

              <ArrowRight
                size={17}
                className={`transition-transform duration-300 ${
                  name.trim() ? 'group-hover:translate-x-1' : ''
                }`}
              />
            </button>
          </div>

          <p className="animate-page-fade-up-delay-3 mt-4 text-[10px] tracking-wide text-[#a0929b] sm:text-xs">
            Your prediction journey starts here 🍼
          </p>
        </div>
      </section>
    </main>
  )
}

