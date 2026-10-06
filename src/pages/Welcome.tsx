
import { Heart, Sparkles, Stars } from 'lucide-react'

export default function Welcome() {
  return (
    <main className="relative min-h-[100svh] overflow-hidden bg-[#fff8f5] text-[#30252f]">
      {/* Background accents */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-[clamp(10rem,25vw,20rem)] w-[clamp(10rem,25vw,20rem)] rounded-full bg-[#ff6b8a]/20 blur-3xl" />

      <div className="pointer-events-none absolute -right-24 top-[10%] h-[clamp(12rem,28vw,22rem)] w-[clamp(12rem,28vw,22rem)] rounded-full bg-[#7048e8]/15 blur-3xl" />

      <div className="pointer-events-none absolute bottom-[-8rem] left-1/2 h-[clamp(12rem,28vw,22rem)] w-[clamp(12rem,28vw,22rem)] -translate-x-1/2 rounded-full bg-[#ffb347]/20 blur-3xl" />

      {/* Flying butterflies */}
      <div className="butterfly butterfly-one">🦋</div>
      <div className="butterfly butterfly-two">🦋</div>
      <div className="butterfly butterfly-three">🦋</div>

      {/* Floating hearts */}
      <div className="floating-heart heart-one">💕</div>
      <div className="floating-heart heart-two">💗</div>

      {/* Sparkles */}
      <div className="sparkle sparkle-one">✦</div>
      <div className="sparkle sparkle-two">✧</div>
      <div className="sparkle sparkle-three">✦</div>

      {/* Main content */}
      <section className="relative z-10 flex min-h-[100svh] items-center justify-center px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <div className="flex w-full max-w-2xl flex-col items-center text-center">

          {/* Top label */}
          <div className="welcome-fade flex max-w-[90vw] items-center justify-center gap-2 rounded-full bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#7048e8] shadow-sm ring-1 ring-[#eee5f5] sm:px-5 sm:py-2.5 sm:text-xs sm:tracking-wider">
            <Sparkles
              size={13}
              className="shrink-0 text-[#ff9f1c] sm:h-[14px] sm:w-[14px]"
            />
            <span>A little surprise is waiting</span>
          </div>

          {/* Parents */}
          <div className="welcome-fade welcome-delay-1 mt-5 sm:mt-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#7048e8] sm:text-xs sm:tracking-[0.28em]">
              A little one is on the way
            </p>

            <h2 className="mt-1.5 font-serif text-[clamp(1.5rem,5vw,2rem)] font-bold leading-tight text-[#303b82]">
              Dilki <span className="text-[#e83e73]">&</span> Asinthaka
            </h2>

            <p className="mx-auto mt-1 max-w-[18rem] text-xs font-medium leading-5 text-[#81727d] sm:max-w-none sm:text-sm sm:leading-6">
              are getting ready for their greatest little adventure ✨
            </p>
          </div>

          {/* Main heading */}
          <div className="welcome-fade welcome-delay-2 mt-6 w-full sm:mt-8">
            <p className="mb-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#e83e73] sm:mb-3 sm:text-sm sm:tracking-[0.3em]">
              Baby on the way
            </p>

            <h1 className="font-serif text-[clamp(2.35rem,9vw,4rem)] font-bold leading-[0.98] tracking-tight text-[#720c7d]">
              Someone very
              <span className="block text-[#e83e73]">special</span>
              is coming...
            </h1>

            <p className="mx-auto mt-4 max-w-[19rem] text-[clamp(0.82rem,2.5vw,1rem)] font-medium leading-6 text-[#625761] sm:mt-5 sm:max-w-md sm:leading-7">
              We have a tiny secret to share with you. But you’ll have to play
              along to discover it. 👀
            </p>
          </div>

          {/* Baby */}
          <div className="welcome-fade welcome-delay-3 relative my-6 sm:my-8 lg:my-9">
            {/* Glow */}
            <div className="absolute inset-0 scale-125 rounded-full bg-[#ff6b8a]/15 blur-xl" />

            {/* Outer ring */}
            <div className="absolute inset-0 scale-[1.1] rounded-full border-2 border-[#e83e73]/20 animate-pulse" />

            {/* Baby illustration */}
            <div className="baby-float relative flex h-[clamp(8.5rem,28vw,13rem)] w-[clamp(8.5rem,28vw,13rem)] items-center justify-center rounded-full bg-gradient-to-br from-[#ffd6df] via-white to-[#dcd2ff] shadow-[0_18px_55px_rgba(232,62,115,0.20)]">
              <div className="baby-bounce text-[clamp(4rem,13vw,5.75rem)]">
                👶
              </div>
            </div>

            {/* Decorations */}
            <div className="decoration-float absolute -right-2 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-white text-base shadow-md sm:-right-3 sm:h-10 sm:w-10 sm:text-lg">
              💕
            </div>

            <div className="decoration-float decoration-delay absolute -bottom-1 -left-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-base shadow-md sm:-bottom-2 sm:-left-3 sm:h-10 sm:w-10 sm:text-lg">
              ⭐
            </div>
          </div>

          {/* CTA */}
          <div className="welcome-fade welcome-delay-4">
            <button
              type="button"
              className="cta-glow group flex min-h-11 items-center gap-2.5 rounded-full bg-[#e83e73] px-5 py-3 text-xs font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#d92f63] active:translate-y-0 sm:min-h-12 sm:gap-3 sm:px-8 sm:py-4 sm:text-sm"
            >
              <span>Let’s find out</span>

              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-1 sm:h-7 sm:w-7">
                →
              </span>
            </button>

            <p className="mt-4 text-[10px] font-semibold tracking-wide text-[#81727d] sm:mt-5 sm:text-xs">
              A little journey awaits you ✨
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

