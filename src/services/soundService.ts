
let audioContext: AudioContext | null = null
let musicTimer: number | null = null
let soundEnabled = false
let musicIndex = 0

const melody = [
  523.25, 659.25, 783.99, 659.25,
  587.33, 698.46, 880.00, 698.46,
  523.25, 659.25, 783.99, 1046.50,
  880.00, 783.99, 659.25, 587.33,
]

function getAudioContext() {
  if (!audioContext) {
    audioContext = new AudioContext()
  }

  return audioContext
}

function playTone(
  frequency: number,
  duration = 0.2,
  volume = 0.08,
  type: OscillatorType = 'sine',
  delay = 0,
) {
  if (!soundEnabled) return

  const context = getAudioContext()
  const startTime = context.currentTime + delay

  const oscillator = context.createOscillator()
  const gain = context.createGain()

  oscillator.type = type
  oscillator.frequency.setValueAtTime(frequency, startTime)

  gain.gain.setValueAtTime(0, startTime)
  gain.gain.linearRampToValueAtTime(volume, startTime + 0.025)
  gain.gain.exponentialRampToValueAtTime(
    0.001,
    startTime + duration,
  )

  oscillator.connect(gain)
  gain.connect(context.destination)

  oscillator.start(startTime)
  oscillator.stop(startTime + duration + 0.02)
}

export function isSoundEnabled() {
  return soundEnabled
}

export async function enableSounds() {
  soundEnabled = true

  const context = getAudioContext()

  if (context.state === 'suspended') {
    await context.resume()
  }

  startBackgroundMusic()
}

export function disableSounds() {
  soundEnabled = false

  if (musicTimer !== null) {
    window.clearInterval(musicTimer)
    musicTimer = null
  }
}

export function startBackgroundMusic() {
  if (!soundEnabled || musicTimer !== null) return

  musicIndex = 0

  const playNextNote = () => {
    if (!soundEnabled) return

    const note = melody[musicIndex % melody.length]

    playTone(note, 0.38, 0.035, 'sine')

    // Add a soft harmony every few notes.
    if (musicIndex % 4 === 0) {
      playTone(note / 2, 0.55, 0.018, 'triangle')
    }

    musicIndex++
  }

  playNextNote()

  musicTimer = window.setInterval(playNextNote, 420)
}

export function playClickSound() {
  playTone(880, 0.09, 0.045, 'sine')
  playTone(1174.66, 0.12, 0.025, 'sine', 0.04)
}

export function playSuccessSound() {
  playTone(523.25, 0.2, 0.07, 'sine')
  playTone(659.25, 0.2, 0.07, 'sine', 0.15)
  playTone(783.99, 0.35, 0.07, 'sine', 0.3)
}

export function playCountdownSound() {
  playTone(659.25, 0.22, 0.07, 'triangle')
}

export function playRevealSound() {
  playTone(523.25, 0.5, 0.09, 'sine')
  playTone(659.25, 0.5, 0.09, 'sine', 0.12)
  playTone(783.99, 0.5, 0.09, 'sine', 0.24)
  playTone(1046.50, 0.9, 0.09, 'sine', 0.36)
  playTone(1318.51, 0.9, 0.045, 'triangle', 0.48)
}
