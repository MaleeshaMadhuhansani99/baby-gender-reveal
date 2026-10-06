import { Heart, Sparkles, Stars } from 'lucide-react'

export default function Welcome() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fff8f5] text-[#30252f]">
      {/* Background accents */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-[#ff6b8a]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-24 h-64 w-64 rounded-full bg-[#7048e8]/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#ffb347]/20 blur-3xl" />

      {/* Floating decorations */}
      <div className="pointer-events-none absolute left-[8%] top-[14%] text-[#e83e73]">
        <Heart size={21} fill="currentColor" />
      </div>

      <div className="pointer-events-none absolute right-[10%] top-[11%] text-[#7048e8]">
        <Sparkles size={24} />
      </div>

      <div className="pointer-events-none absolute left-[12%] top-[47%] text-[#4f7cff]">
        <Stars size={20} />
      </div>

      <div className="pointer-events-none absolute bottom-[19%] right-[10%] text-[#ff6b5f]">
        <Heart size={18} fill="currentColor" />
      </div>

      {/* Main content */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-12 text-center">
        {/* Top label */}
        <div className="mb-6 flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#7048e8] shadow-sm ring-1 ring-[#eee5f5]">
          <Sparkles size={14} className="text-[#ff9f1c]" />
          A little surprise is waiting
        </div>

        {/* Heading */}
        <div className="max-w-md">
          <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.3em] text-[#e83e73]">
            Baby on the way
          </p>

          <h1 className="font-serif text-5xl font-bold leading-[1.05] tracking-tight text-[#30252f] sm:text-6xl">
            Someone very
            <span className="block text-[#e83e73]">
              special
            </span>
            is coming...
          </h1>

          <p className="mx-auto mt-6 max-w-sm text-base font-medium leading-7 text-[#625761]">
            We have a tiny secret to share with you.
            But you’ll have to play along to discover it. 👀
          </p>
        </div>

        {/* Baby illustration */}
        <div className="relative my-10">
          {/* Glow */}
          <div className="absolute inset-0 scale-125 rounded-full bg-[#ff6b8a]/15 blur-xl" />

          {/* Outer ring */}
          <div className="absolute inset-0 scale-110 rounded-full border-2 border-[#e83e73]/20" />

          {/* Illustration */}
          <div className="relative flex h-48 w-48 items-center justify-center rounded-full bg-gradient-to-br from-[#ffd6df] via-white to-[#dcd2ff] shadow-[0_18px_55px_rgba(232,62,115,0.20)] sm:h-56 sm:w-56">
            <div className="text-7xl sm:text-8xl">
              👶
            </div>
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
          className="group flex items-center gap-3 rounded-full bg-[#e83e73] px-8 py-4 text-sm font-bold text-white shadow-[0_10px_30px_rgba(232,62,115,0.30)] transition duration-300 hover:-translate-y-1 hover:bg-[#d92f63] hover:shadow-[0_15px_35px_rgba(232,62,115,0.35)] active:translate-y-0"
        >
          <span>Let’s find out</span>

          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>

        {/* Bottom hint */}
        <p className="mt-6 text-xs font-semibold tracking-wide text-[#81727d]">
          A little journey awaits you ✨
        </p>
      </section>
    </main>
  )
}