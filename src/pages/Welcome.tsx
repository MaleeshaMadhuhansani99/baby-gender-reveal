import {Heart, Sparkles, Stars} from 'lucide-react'

export default function Welcome() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fff8f5] text-[#30252f]">
      {/* Background accents */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-[#ff6b8a]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-24 h-64 w-64 rounded-full bg-[#7048e8]/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#ffb347]/20 blur-3xl" />

      {/* Floating decorations */}
      <div className="pointer-events-none absolute left-[8%] top-[14%] hidden text-[#e83e73] sm:block">
        <Heart size={21} fill="currentColor" />
      </div>

      <div className="pointer-events-none absolute right-[10%] top-[11%] hidden text-[#7048e8] sm:block">
        <Sparkles size={24} />
      </div>

      <div className="pointer-events-none absolute left-[12%] top-[47%] hidden text-[#4f7cff] sm:block">
        <Stars size={20} />
      </div>

      <div className="pointer-events-none absolute bottom-[19%] right-[10%] hidden text-[#ff6b5f] sm:block">
        <Heart size={18} fill="currentColor" />
      </div>

      {/* Main content */}
      <section className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-4 py-8 text-center sm:px-6 sm:py-12">
        {/* Top label */}
        <div className="mb-5 flex max-w-full items-center justify-center gap-2 rounded-full bg-white px-4 py-2.5 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-[#7048e8] shadow-sm ring-1 ring-[#eee5f5] sm:mb-6 sm:px-5 sm:text-xs sm:tracking-wider">
          <Sparkles size={14} className="text-[#ff9f1c]" />A little surprise is
          waiting
        </div>

        <div className="mb-7">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#7048e8]">
            A little one is on the way
          </p>

          <h2 className="mt-2 font-serif text-2xl font-bold text-[#303b82] sm:text-3xl">
            Dilki <span className="text-[#e83e73]">&</span> Asinthaka
          </h2>

          <p className="mt-1 text-sm font-medium text-[#81727d]">
            are getting ready for their greatest little adventure ✨
          </p>
        </div>

        {/* Heading */}
        <div className="w-full max-w-md">
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.22em] text-[#e83e73] sm:text-sm sm:tracking-[0.3em]">
            Baby on the way
          </p>

          <h1 className="font-serif text-[clamp(2.5rem,9vw,3.75rem)] font-bold leading-[1.05] tracking-tight text-[#720c7d]">
            Someone very
            <span className="block text-[#e83e73]">special</span>
            is coming...
          </h1>

          <p className="mx-auto mt-5 max-w-sm text-[clamp(0.9rem,3.8vw,1rem)] font-medium leading-7 text-[#625761] sm:mt-6">
            We have a tiny secret to share with you. But you’ll have to play
            along to discover it. 👀
          </p>
        </div>

        {/* Baby illustration */}
        <div className="relative my-7 sm:my-10">
          {/* Glow */}
          <div className="absolute inset-0 scale-125 rounded-full bg-[#ff6b8a]/15 blur-xl" />

          {/* Outer ring */}
          <div className="absolute inset-0 scale-110 rounded-full border-2 border-[#e83e73]/20" />

          {/* Illustration */}
          <div className="relative flex h-[clamp(9rem,42vw,14rem)] w-[clamp(9rem,42vw,14rem)] items-center justify-center rounded-full bg-gradient-to-br from-[#ffd6df] via-white to-[#dcd2ff] shadow-[0_18px_55px_rgba(232,62,115,0.20)]">
            <div className="text-[clamp(4.5rem,18vw,6rem)]">👶</div>
          </div>

          {/* Decorations */}
          <div className="absolute -right-3 top-1 flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg shadow-lg">
            💕
          </div>

          <div className="absolute -bottom-2 -left-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg shadow-lg">
            ⭐
          </div>
        </div>

        {/* CTA */}
        <button
          type="button"
          className="group flex min-h-12 items-center gap-3 rounded-full bg-[#e83e73] px-6 py-3 text-sm font-bold text-white shadow-[0_10px_30px_rgba(232,62,115,0.30)] transition duration-300 hover:-translate-y-1 hover:bg-[#d92f63] hover:shadow-[0_15px_35px_rgba(232,62,115,0.35)] active:translate-y-0 sm:px-8 sm:py-4"
        >
          <span>Let’s find out</span>

          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>

        {/* Bottom hint */}
        <p className="mt-5 text-xs font-semibold tracking-wide text-[#81727d] sm:mt-6">
          A little journey awaits you ✨
        </p>
      </section>
    </main>
  )
}
