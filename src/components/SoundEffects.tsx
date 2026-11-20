
import { useEffect } from 'react'

import {
  activateSounds,
  playClickSound,
  playSuccessSound,
  playCountdownSound,
  playRevealSound,
} from '../services/soundService'

export default function SoundEffects() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target

      if (!(target instanceof Element)) return

      const button = target.closest('button')

      if (!button || button.disabled) return

      void activateSounds()
        .then(() => {
          playClickSound()
        })
        .catch((error: unknown) => {
          console.error('Unable to start sound playback.', error)
        })
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

  return null
}
