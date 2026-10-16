
import { useState } from 'react'
import { supabase } from '../lib/supabase'

export default function SupabaseTest() {
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const testDatabase = async () => {
    setLoading(true)
    setStatus('Testing Supabase...')

    const { error } = await supabase
      .from('guests')
      .insert({
        name: 'Supabase Test',
        guess: 'girl',
        looks_like: 'mommy',
        loves_most: 'daddy',
        baby_nickname: 'Little Bean',
        wish: 'Testing the database connection!',
      })

    setLoading(false)

    if (error) {
      console.error('Supabase test failed:', error)
      setStatus(`❌ Failed: ${error.message}`)
      return
    }

    setStatus('✅ Success! The test response was saved.')
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-5 bg-[#fff8f5] p-6 text-center">
      <h1 className="text-2xl font-bold text-[#720c7d]">
        Supabase Connection Test 🍼
      </h1>

      <button
        onClick={testDatabase}
        disabled={loading}
        className="rounded-full bg-[#30252f] px-6 py-3 font-semibold text-white disabled:opacity-50"
      >
        {loading ? 'Testing...' : 'Test Database'}
      </button>

      <p role="status" aria-live="polite">{status}</p>
    </main>
  )
}
