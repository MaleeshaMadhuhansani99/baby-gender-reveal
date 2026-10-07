
import { useState } from 'react'
import Welcome from './components/Welcome'
import GuestName from './components/GuestName'
import GenderGuess from './components/GenderGuess'

type Page = 'welcome' | 'name' | 'guess' | 'miniGame'

function App() {
  const [page, setPage] = useState<Page>('welcome')

  const [guestName, setGuestName] = useState('')
  const [guess, setGuess] = useState<'girl' | 'boy' | null>(null)

  if (page === 'name') {
    return (
      <GuestName
        onContinue={(name) => {
          setGuestName(name)
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
          setPage('miniGame')
        }}
      />
    )
  }

  if (page === 'miniGame') {
    return (
      <div className="flex h-[100svh] items-center justify-center bg-[#fff8f5]">
        <p>
          Mini-game coming next... Your guess was: {guess}
          <br />
          Guest: {guestName}
        </p>
      </div>
    )
  }

  return (
    <Welcome
      onContinue={() => setPage('name')}
    />
  )
}

export default App
