import { ArrowLeft } from 'lucide-react'

type Props = {
  onClick: () => void
  label?: string
}

export default function BackButton({ onClick, label = 'Back' }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="absolute left-4 top-4 z-30 flex h-11 items-center gap-2 rounded-full border border-pink-100 bg-white/90 px-3 text-sm font-bold text-[#720C7D] shadow-md backdrop-blur-sm transition hover:-translate-x-1 hover:bg-white"
    >
      <ArrowLeft size={18} />
      <span className="hidden sm:inline">{label}</span>
    </button>
  )
}
