import { useState } from 'react'
import GenderGuess from './components/GenderGuess'
import Welcome from './components/Welcome'

type Page = 'welcome' | 'guess'

function App() {
  const [page, setPage] = useState<Page>('welcome')

  if (page === 'guess') {
    return (
      <GenderGuess
        onContinue={() => {
          // Next we will connect the mini-game here
          console.log('Continue to mini-game')
        }}
      />
    )
  }

  return (
    <Welcome
      onContinue={() => {
        setPage('guess')
      }}
    />
  )
}

export default App