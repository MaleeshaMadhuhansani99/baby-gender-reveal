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
import CreatorCredit from './components/CreatorCredit'
import LanguageSwitcher from './components/LanguageSwitcher'

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
  const [guess, setGuess] = useState<BabyGender | null>(null)
  const [answers, setAnswers] = useState<BabyAnswers | null>(null)
  const [babyCallName, setBabyCallName] = useState('')
  const [wish, setWish] = useState('')

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
          initialName={guestName}
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
          initialName={babyCallName}
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
          initialGuess={guess}
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
          initialAnswers={answers}
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

    if (page === 'wish' && answers && guess) {
      return (
        <WishForm
          name={guestName}
          babyCallName={babyCallName}
          guess={guess}
          answers={answers}
          onViewWishes={openWishes}
          onBack={() => setPage('reveal')}
          initialWish={wish}
          onWishChange={setWish}
        />
      )
    }

    return <Welcome onContinue={() => setPage('name')} />
  }

  return (
    <>
      <SoundEffects />
      <div className="fixed right-3 top-3 z-50 sm:right-5 sm:top-5">
        <LanguageSwitcher />
      </div>
      {renderPage()}
      <CreatorCredit />
    </>
  )
}

export default App
