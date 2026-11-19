
import { useEffect, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

import {
  enableSounds,
  disableSounds,
  isSoundEnabled,
  playClickSound,
  playSuccessSound,
  playCountdownSound,
  playRevealSound,
} from '../services/soundService'

export default function SoundControls() {
  const [enabled, setEnabled] = useState(isSoundEnabled())

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target

      if (!(target instanceof Element)) return

      const button = target.closest('button')

      if (!button || button.disabled) return

      if (isSoundEnabled()) {
        playClickSound()
      }
    }

    const handleSuccess = () => playSuccessSound()
    const handleCountdown = () => playCountdownSound()
    const handleReveal = () => playRevealSound()

    document.addEventListener('click', handleClick)

    window.addEventListener('baby-form-success', handleSuccess)
    window.addEventListener('baby-countdown-tick', handleCountdown)
    window.addEventListener('baby-gender-reveal', handleReveal)

    return () => {
      document.removeEventListener('click', handleClick)

      window.removeEventListener('baby-form-success', handleSuccess)
      window.removeEventListener('baby-countdown-tick', handleCountdown)
      window.removeEventListener('baby-gender-reveal', handleReveal)
    }
  }, [])

  const toggleSound = async () => {
    if (enabled) {
      disableSounds()
      setEnabled(false)
    } else {
      await enableSounds()
      setEnabled(true)
    }
  }

  return (
    <button
      type="button"
      onClick={toggleSound}
      aria-label={enabled ? 'Turn sound off' : 'Turn sound on'}
      title={enabled ? 'Turn sound off' : 'Turn sound on'}
      className="fixed right-5 top-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-pink-200 bg-white/90 text-[#720C7D] shadow-lg backdrop-blur transition hover:scale-105 hover:bg-pink-50"
    >
      {enabled ? <Volume2 size={22} /> : <VolumeX size={22} />}
    </button>
  )
}
