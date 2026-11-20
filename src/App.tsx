
import { useState } from 'react'

import Welcome from './components/Welcome'
import GuestName from './components/GuestName'
import GenderGuess from './components/GenderGuess'
import BabyQuestions from './components/BabyQuestions'
import type { BabyAnswers } from './components/BabyQuestions'
// import MiniGame from './components/MiniGame'
import Countdown from './components/Countdown'
import Reveal from './components/Reveal'
import type { BabyGender } from './components/WishForm'
import WishForm from './components/WishForm'
import WishesWall from './components/WishesWall'
import SoundEffects from './components/SoundEffects'

type Page =
  | 'welcome'
  | 'name'
  | 'guess'
  | 'questions'
  // | 'game'
  | 'countdown'
  | 'reveal'
  | 'wish'
  | 'wishes'

function App() {
  const [page, setPage] = useState<Page>(() =>
    window.location.hash === '#wishes' ? 'wishes' : 'welcome'
  )

  const [guestName, setGuestName] = useState('')
  const [guess, setGuess] = useState<BabyGender>('girl')
  const [answers, setAnswers] = useState<BabyAnswers | null>(null)

  const openWishes = () => {
    window.location.hash = 'wishes'
    setPage('wishes')
  }

  const closeWishes = () => {
    window.location.hash = ''
    setPage('welcome')
  }

  const renderPage = () => {
    if (page === 'wishes') {
      return <WishesWall onBack={closeWishes} />
    }

    if (page === 'name') {
      return (
        <GuestName
          onContinue={(name) => {
            setGuestName(name.trim())
            setPage('guess')
          }}
        />
      )
    }

    if (page === 'guess') {
      return (
        <GenderGuess
          onContinue={(selectedGuess) => {
            setGuess(selectedGuess)
            setPage('questions')
          }}
        />
      )
    }

    if (page === 'questions') {
      return (
        <BabyQuestions
          onContinue={(babyAnswers) => {
            setAnswers(babyAnswers)
            setPage('countdown')
          }}
        />
      )
    }

    // if (page === 'game') {
    //   return <MiniGame onComplete={() => setPage('countdown')} />
    // }

    if (page === 'countdown') {
      return <Countdown onComplete={() => setPage('reveal')} />
    }

    if (page === 'reveal') {
      return (
        <Reveal
          onContinue={() => setPage('wish')}
        />
      )
    }

    if (page === 'wish' && answers) {
      return (
        <WishForm
          name={guestName}
          guess={guess}
          answers={answers}
          onViewWishes={openWishes}
        />
      )
    }

    return (
      <Welcome onContinue={() => setPage('name')} />
    )
  }

  return (
    <>
      <SoundEffects />
      {renderPage()}
    </>
  )
}

export default App
