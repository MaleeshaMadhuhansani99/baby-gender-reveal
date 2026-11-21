import {useState} from 'react'

import Welcome from './components/Welcome'
import GuestName from './components/GuestName'
import GenderGuess from './components/GenderGuess'
import BabyQuestions from './components/BabyQuestions'
import type {BabyAnswers} from './components/BabyQuestions'
// import MiniGame from './components/MiniGame'
import Countdown from './components/Countdown'
import Reveal from './components/Reveal'
import type {BabyGender} from './components/WishForm'
import WishForm from './components/WishForm'
import WishesWall from './components/WishesWall'
import SoundEffects from './components/SoundEffects'
import BabyCallName from './components/BabyCallName'

type Page =
  | 'welcome'
  | 'name'
  | 'baby-call-name'
  | 'guess'
  | 'questions'
  // | 'game'
  | 'countdown'
  | 'reveal'
  | 'wish'
  | 'wishes'

function App() {
  const [page, setPage] = useState<Page>(() =>
    window.location.hash === '#wishes' ? 'wishes' : 'welcome',
  )

  const [guestName, setGuestName] = useState('')
  const [guess, setGuess] = useState<BabyGender>('girl')
  const [answers, setAnswers] = useState<BabyAnswers | null>(null)
  const [babyCallName, setBabyCallName] = useState('')

  const openWishes = () => {
    window.location.hash = 'wishes'
    setPage('wishes')
  }

  const closeWishes = () => {
    window.location.hash = ''
    setPage(answers ? 'wish' : 'welcome')
  }

  const renderPage = () => {
    if (page === 'wishes') {
      return <WishesWall onBack={closeWishes} />
    }

    if (page === 'name') {
      return (
        <GuestName
          onBack={() => setPage('welcome')}
          onContinue={(name) => {
            setGuestName(name.trim())
            setPage('baby-call-name')
          }}
        />
      )
    }

    if (page === 'baby-call-name') {
      return (
        <BabyCallName
          onBack={() => setPage('name')}
          onContinue={(value) => {
            setBabyCallName(value)
            setPage('guess')
          }}
        />
      )
    }

    if (page === 'guess') {
      return (
        <GenderGuess
          onBack={() => setPage('baby-call-name')}
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
          onBack={() => setPage('guess')}
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
      return (
        <Countdown
          onBack={() => setPage('questions')}
          onComplete={() => setPage('reveal')}
        />
      )
    }

    if (page === 'reveal') {
      return (
        <Reveal
          onBack={() => setPage('countdown')}
          onContinue={() => setPage('wish')}
        />
      )
    }

    if (page === 'wish' && answers) {
      return (
        <WishForm
          name={guestName}
          babyCallName={babyCallName}
          guess={guess}
          answers={answers}
          onViewWishes={openWishes}
          onBack={() => setPage('reveal')}
        />
      )
    }

    return <Welcome onContinue={() => setPage('name')} />
  }

  return (
    <>
      <SoundEffects />
      {renderPage()}
    </>
  )
}

export default App
