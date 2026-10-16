import {Heart, Sparkles, Stars} from 'lucide-react'
interface WelcomeProps {
  onContinue: () => void
}

export default function Welcome({onContinue}: WelcomeProps) {
  return (
    <main className="relative h-[100svh] w-full overflow-hidden bg-[#fff8f5] text-[#30252f]">
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-[35vh] w-[35vh] rounded-full bg-[#ff6b8a]/20 blur-3xl" />

      <div className="pointer-events-none absolute -right-24 top-[8%] h-[40vh] w-[40vh] rounded-full bg-[#7048e8]/15 blur-3xl" />

      <div className="pointer-events-none absolute bottom-[-15vh] left-1/2 h-[40vh] w-[40vh] -translate-x-1/2 rounded-full bg-[#ffb347]/20 blur-3xl" />

      {/* =====================================================
          FLYING BUTTERFLIES
          ===================================================== */}

      {/* <div className="butterfly butterfly-one">🦋</div>
      <div className="butterfly butterfly-two">🦋</div>
      <div className="butterfly butterfly-three">🦋</div> */}

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

      {/* =====================================================
          FLOATING DECORATIONS
          ===================================================== */}

      <div className="floating-heart heart-one">
        <Heart size={20} fill="currentColor" />
      </div>

      <div className="floating-heart heart-two">
        <Heart size={17} fill="currentColor" />
      </div>

      <div className="sparkle sparkle-one">
        <Sparkles size={22} />
      </div>

      <div className="sparkle sparkle-two">
        <Stars size={20} />
      </div>

      <div className="sparkle sparkle-three">
        <Sparkles size={17} />
      </div>

      {/* =====================================================
          MAIN CONTENT
          ===================================================== */}

      <section className="relative z-10 flex h-full w-full items-center justify-center px-4">
        <div className="flex h-full w-full max-w-2xl flex-col items-center justify-center text-center">
          {/* Top label */}
          <div className="welcome-fade flex shrink-0 items-center gap-2 rounded-full bg-white px-4 py-2 text-[clamp(0.55rem,1.5vw,0.75rem)] font-bold uppercase tracking-[0.12em] text-[#7048e8] shadow-sm ring-1 ring-[#eee5f5]">
            <Sparkles
              className="shrink-0 text-[#ff9f1c]"
              size="clamp(11px, 1.5vw, 14px)"
            />

            <span>A little surprise is waiting</span>
          </div>

          {/* Parents */}
          <div className="welcome-fade welcome-delay-1 mt-[clamp(0.7rem,2vh,1.25rem)] shrink-0">
            <p className="text-[clamp(0.5rem,1.5vw,0.7rem)] font-bold uppercase tracking-[0.22em] text-[#7048e8]">
              A little one is on the way
            </p>

            <h2 className="mt-1 font-serif text-[clamp(1.35rem,4vw,2rem)] font-bold leading-tight text-[#303b82]">
              Dilki <span className="text-[#e83e73]">&</span> Asinthaka
            </h2>

            <p className="mt-0.5 text-[clamp(0.62rem,1.7vw,0.85rem)] font-medium text-[#81727d]">
              are getting ready for their greatest little adventure ✨
            </p>
          </div>

          {/* Main heading */}
          <div className="welcome-fade welcome-delay-2 mt-[clamp(0.9rem,2.5vh,1.5rem)] w-full shrink-0">
            <p className="mb-1.5 text-[clamp(0.55rem,1.5vw,0.8rem)] font-extrabold uppercase tracking-[0.22em] text-[#e83e73]">
              Baby on the way
            </p>

            <h1 className="font-serif text-[clamp(2rem,7.5vw,4rem)] font-bold leading-[0.92] tracking-tight text-[#720c7d]">
              Someone very
              <span className="block text-[#e83e73]">special</span>
              is coming...
            </h1>

            <p className="mx-auto mt-[clamp(0.6rem,1.5vh,1rem)] max-w-[min(90vw,28rem)] text-[clamp(0.65rem,1.8vw,0.95rem)] font-medium leading-[1.45] text-[#625761]">
              We have a tiny secret to share with you. But you’ll have to play
              along to discover it. 👀
            </p>
          </div>

          {/* Baby */}
          <div className="welcome-fade welcome-delay-3 relative my-[clamp(0.7rem,2vh,1.25rem)] shrink-0">
            {/* Glow */}
            <div className="absolute inset-0 scale-125 rounded-full bg-[#ff6b8a]/15 blur-xl" />

            {/* Ring */}
            <div className="absolute inset-0 scale-[1.1] rounded-full border-2 border-[#e83e73]/20 animate-pulse" />

            {/* Baby */}
            <div className="baby-float relative flex h-[clamp(6.8rem,20vh,12rem)] w-[clamp(6.8rem,20vh,12rem)] items-center justify-center rounded-full bg-gradient-to-br from-[#ffd6df] via-white to-[#dcd2ff] shadow-[0_15px_45px_rgba(232,62,115,0.20)]">
              <div className="baby-bounce text-[clamp(3.3rem,11vh,5.5rem)]">
                👶
              </div>
            </div>

            {/* Heart */}
            <div className="decoration-float absolute -right-2 top-0 flex h-[clamp(1.8rem,5vh,2.5rem)] w-[clamp(1.8rem,5vh,2.5rem)] items-center justify-center rounded-full bg-white text-[clamp(0.8rem,2vh,1.1rem)] shadow-md">
              💕
            </div>

            {/* Star */}
            <div className="decoration-float decoration-delay absolute -bottom-1 -left-2 flex h-[clamp(1.8rem,5vh,2.5rem)] w-[clamp(1.8rem,5vh,2.5rem)] items-center justify-center rounded-full bg-white text-[clamp(0.8rem,2vh,1.1rem)] shadow-md">
              ⭐
            </div>
          </div>

          {/* CTA */}
          <div className="welcome-fade welcome-delay-4 shrink-0">
            <button
              type="button"
              className="cta-glow group flex min-h-[clamp(2.5rem,6vh,3.2rem)] items-center gap-2 rounded-full bg-[#e83e73] px-[clamp(1.1rem,4vw,2rem)] py-2 text-[clamp(0.7rem,1.7vw,0.9rem)] font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#d92f63] active:translate-y-0"
              onClick={onContinue}
            >
              <span>Let’s find out</span>

              <span className="flex h-[clamp(1.35rem,4vh,1.75rem)] w-[clamp(1.35rem,4vh,1.75rem)] items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>

            <p className="mt-[clamp(0.4rem,1vh,0.7rem)] text-[clamp(0.5rem,1.3vw,0.7rem)] font-semibold tracking-wide text-[#81727d]">
              A little journey awaits you ✨
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
