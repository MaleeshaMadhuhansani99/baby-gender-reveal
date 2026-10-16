
import { useState } from 'react'
import { Heart, Send, Sparkles } from 'lucide-react'
import { saveGuestResponse } from '../services/guestService'
import type { BabyAnswers } from './BabyQuestions'
import type { BabyGender } from './Reveal'

type Props = {
  name: string
  guess: BabyGender
  answers: BabyAnswers
}

export default function WishForm({ name, guess, answers }: Props) {
  const [wish, setWish] = useState('')
  const [loading, setLoading] = useState(false)
  const [saved, setSaved] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!wish.trim() || loading) return

    setLoading(true)
    setErrorMessage('')

    try {
      await saveGuestResponse({
        name,
        guess,
        looks_like: answers.looks_like,
        loves_most: answers.loves_most,
        baby_nickname: answers.baby_nickname,
        wish: wish.trim(),
      })
      setSaved(true)
    } catch (error) {
      console.error('Could not save the guest response:', error)
      setErrorMessage(
        'We could not save your wish just now. Please check your connection and try again.'
      )
    } finally {
      setLoading(false)
    }
  }

  if (saved) {
    return (
      <main className="flex h-[100svh] items-center justify-center overflow-hidden bg-[#FFF8F5] px-5 text-center">
        <section className="w-full max-w-md rounded-3xl border border-pink-100 bg-white p-7 shadow-xl shadow-pink-100">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-pink-100 text-pink-600">
            <Heart size={42} fill="currentColor" />
          </div>
          <h1 className="mt-5 text-3xl font-black text-[#720C7D]">
            Your wish is saved! 💖
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-[#625761]">
            Thank you, {name}, for being part of this special journey.
            Your love and wishes mean so much to Dilki, Asinthaka, and Baby.
          </p>
          <div className="mt-5 text-3xl">🍼 💕 ✨</div>
          <p className="mt-4 text-xs text-[#81727D]">
            Made with love for a very special little one.
          </p>
        </section>
      </main>
    )
  }

  return (
    <main className="flex h-[100svh] items-center justify-center overflow-y-auto bg-[#FFF8F5] px-4 py-4 text-[#30252F]">
      <form
        onSubmit={handleSubmit}
        className="my-auto w-full max-w-md rounded-3xl border border-pink-100 bg-white p-5 shadow-xl shadow-pink-100/60 sm:p-6"
      >
        <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-pink-100 text-pink-600">
          <Heart size={30} fill="currentColor" />
        </div>

        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-pink-600">
          A message from the heart
        </p>
        <h1 className="mt-2 text-center text-3xl font-black text-[#720C7D]">
          Leave a little wish 💌
        </h1>
        <p className="mt-2 text-center text-sm text-[#625761]">
          Write something sweet for the parents and their little bundle of joy.
        </p>

        <label htmlFor="guest-wish" className="mb-2 mt-5 block text-sm font-bold">
          Your wish for Baby and the parents
        </label>
        <textarea
          id="guest-wish"
          value={wish}
          onChange={(event) => setWish(event.target.value)}
          placeholder="Wishing your little family a lifetime of love..."
          maxLength={500}
          required
          rows={4}
          className="w-full resize-none rounded-2xl border border-pink-200 bg-[#FFFAFC] px-4 py-3 text-sm outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-100"
        />
        <p className="mt-1 text-right text-xs text-[#81727D]">
          {wish.length}/500
        </p>

        {errorMessage && (
          <p role="alert" className="mt-3 text-sm text-red-600">
            {errorMessage}
          </p>
        )}

        <button
          type="submit"
          disabled={!wish.trim() || loading}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#E83E73] to-[#7048E8] px-5 py-3 font-bold text-white shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? 'Saving your wish...' : 'Send with love'}
          {!loading && <Send size={17} />}
        </button>

        <p className="mt-3 flex items-center justify-center gap-1 text-center text-xs text-[#81727D]">
          <Sparkles size={13} />
          Your message will be saved for the family.
        </p>
      </form>
    </main>
  )
}
