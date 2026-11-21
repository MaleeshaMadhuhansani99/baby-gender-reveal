import {useEffect, useState} from 'react'
import {Heart, ArrowLeft, RefreshCw, Baby, Sparkles, Star} from 'lucide-react'
import {fetchWishes} from '../services/guestService'
import type {GuestResponse} from '../services/guestService'

interface WishesWallProps {
  onBack: () => void
}

export default function WishesWall({onBack}: WishesWallProps) {
  const [wishes, setWishes] = useState<GuestResponse[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const fetchWishesData = async () => {
    setLoading(true)
    setError('')

    try {
      const data = await fetchWishes()
      setWishes(data)
    } catch (error) {
      console.error('Could not retrieve wishes:', error)

      setError(
        error instanceof Error
          ? error.message
          : 'Unable to load wishes. Please try again.',
      )
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchWishesData()
  }, [])

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })
  }

  const getGuessStyle = (guess: string) => {
    if (guess?.toLowerCase() === 'boy') {
      return 'bg-blue-50 text-blue-600 border-blue-100'
    }

    if (guess?.toLowerCase() === 'girl') {
      return 'bg-pink-50 text-pink-600 border-pink-100'
    }

    return 'bg-purple-50 text-purple-600 border-purple-100'
  }

  const boyCount = wishes.filter(
    (item) => item.guess?.toLowerCase() === 'boy',
  ).length

  const girlCount = wishes.filter(
    (item) => item.guess?.toLowerCase() === 'girl',
  ).length

  const totalGuesses = boyCount + girlCount

  const boyPercentage =
    totalGuesses > 0 ? Math.round((boyCount / totalGuesses) * 100) : 0

  const girlPercentage =
    totalGuesses > 0 ? Math.round((girlCount / totalGuesses) * 100) : 0

  return (
    <main className="relative h-[100dvh] w-full overflow-y-auto overflow-x-hidden overscroll-contain bg-[#FFF8F5] px-5 py-10">
      {/* Floating sparkles, stars, and flowers */}
      <div className="pointer-events-none absolute -left-20 top-[12%] h-40 w-40 rounded-full bg-pink-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-[38%] h-44 w-44 rounded-full bg-purple-200/40 blur-3xl" />

      <Sparkles
        aria-hidden="true"
        className="pointer-events-none absolute left-[12%] top-[22%] h-6 w-6 animate-float-slow text-[#e83e73]/60 sm:h-8 sm:w-8"
      />
      <Sparkles
        aria-hidden="true"
        className="pointer-events-none absolute right-[14%] top-[50%] h-7 w-7 animate-float-delay text-[#7048e8]/60 sm:h-9 sm:w-9"
      />
      <Star
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[20%] left-[16%] h-5 w-5 animate-twinkle fill-amber-300 text-amber-400 sm:h-7 sm:w-7"
      />
      <Star
        aria-hidden="true"
        className="pointer-events-none absolute right-[10%] bottom-[32%] h-5 w-5 animate-twinkle-delay fill-pink-300 text-pink-400 sm:h-6 sm:w-6"
      />
      <div className="pointer-events-none absolute left-[28%] top-[40%] h-2 w-2 rounded-full bg-[#ff6b8a]/50 animate-twinkle" />
      <div className="pointer-events-none absolute right-[30%] bottom-[18%] h-1.5 w-1.5 rounded-full bg-[#7048e8]/50 animate-twinkle-delay-2" />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-[8%] top-[20%] animate-float text-2xl opacity-70 sm:text-4xl"
      >
        🌸
      </span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[12%] left-[8%] animate-float-delay text-2xl opacity-70 sm:text-4xl"
      >
        🌼
      </span>

      {/* Flying butterflies */}
      <div className="butterfly butterfly-one">
        <span className="butterfly-wing butterfly-wing-left" />
        <span className="butterfly-body" />
        <span className="butterfly-wing butterfly-wing-right" />
      </div>
      <div className="butterfly butterfly-two">
        <span className="butterfly-wing butterfly-wing-left" />
        <span className="butterfly-body" />
        <span className="butterfly-wing butterfly-wing-right" />
      </div>
      <div className="butterfly butterfly-three">
        <span className="butterfly-wing butterfly-wing-left" />
        <span className="butterfly-body" />
        <span className="butterfly-wing butterfly-wing-right" />
      </div>
      <div className="butterfly butterfly-four">
        <span className="butterfly-wing butterfly-wing-left" />
        <span className="butterfly-body" />
        <span className="butterfly-wing butterfly-wing-right" />
      </div>
      <div className="butterfly butterfly-five">
        <span className="butterfly-wing butterfly-wing-left" />
        <span className="butterfly-body" />
        <span className="butterfly-wing butterfly-wing-right" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {/* Back button */}
        <button
          onClick={onBack}
          className="mb-8 flex items-center gap-2 text-[#720C7D] transition hover:opacity-70"
        >
          <ArrowLeft size={18} />
          Back to celebration
        </button>

        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 flex justify-center">
            <div className="rounded-full bg-pink-100 p-4">
              <Heart size={32} className="fill-pink-500 text-pink-500" />
            </div>
          </div>

          <h1 className="mb-4 text-4xl font-bold text-[#720C7D] md:text-5xl">
            Little Wishes, Big Love
          </h1>

          <p className="mx-auto max-w-xl text-lg text-gray-600">
            Every little message is filled with love. Here are the beautiful
            wishes and predictions for our little miracle.
          </p>

          {!loading && !error && (
            <p className="mt-5 text-sm text-gray-500">
              {wishes.length} beautiful{' '}
              {wishes.length === 1 ? 'wish' : 'wishes'} 💕
            </p>
          )}
        </div>

        {/* Loading */}
        {loading && (
          <div className="py-20 text-center">
            <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-pink-200 border-t-[#720C7D]" />
            <p className="text-gray-500">Gathering all the lovely wishes...</p>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="py-16 text-center">
            <p className="mb-5 text-red-500">{error}</p>

            <button
              onClick={fetchWishesData}
              className="inline-flex items-center gap-2 rounded-full bg-[#720C7D] px-6 py-3 text-white transition hover:opacity-90"
            >
              <RefreshCw size={16} />
              Try again
            </button>
          </div>
        )}

        {/* Empty state */}
        {!loading && !error && wishes.length === 0 && (
          <div className="rounded-3xl bg-white p-12 text-center shadow-sm">
            <Heart size={45} className="mx-auto mb-5 text-pink-300" />

            <h2 className="mb-3 text-2xl font-semibold text-[#720C7D]">
              No wishes yet!
            </h2>

            <p className="text-gray-500">
              Be the first to leave a beautiful message for the little one.
            </p>
          </div>
        )}

        {/* Prediction percentages */}
        {!loading && !error && wishes.length > 0 && (
          <div className="mb-10 rounded-3xl border border-pink-100 bg-white p-6 shadow-sm">
            <div className="mb-5 text-center">
              <h2 className="text-2xl font-bold text-[#720C7D]">
                Team Boy or Team Girl? 💕
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                What are everyone guessing?
              </p>
            </div>

            <div className="mb-4 flex justify-between text-sm font-semibold">
              <span className="text-blue-600">💙 Boy {boyPercentage}%</span>

              <span className="text-pink-600">Girl {girlPercentage}% 💗</span>
            </div>

            <div className="flex h-5 overflow-hidden rounded-full bg-pink-100">
              <div
                className="bg-blue-400 transition-all duration-500"
                style={{width: `${boyPercentage}%`}}
              />

              <div
                className="bg-pink-400 transition-all duration-500"
                style={{width: `${girlPercentage}%`}}
              />
            </div>

            <p className="mt-3 text-center text-xs text-gray-400">
              Based on {totalGuesses} gender{' '}
              {totalGuesses === 1 ? 'guess' : 'guesses'}
            </p>
          </div>
        )}

        {/* Wishes and predictions together */}
        {!loading && !error && wishes.length > 0 && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {wishes.map((item, index) => (
              <div
                key={`${item.created_at}-${index}`}
                className="group relative rounded-3xl border border-pink-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Heart icon */}
                <div className="absolute right-6 top-6">
                  <Heart size={20} className="fill-pink-100 text-pink-300" />
                </div>

                {/* Guest initial */}
                <h3 className="mb-2 text-lg font-extrabold tracking-wide text-[#720C7D] sm:text-xl">
                  <span className="text-pink-500">Baby's</span>{' '}
                  <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                    {item.baby_call_name?.trim() || item.name}
                  </span>
                  <span className="ml-1 text-pink-400">♥</span>
                </h3>

                {/* Guest gender guess */}
                <div
                  className={`mb-5 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium ${getGuessStyle(item.guess)}`}
                >
                  <Baby size={16} />
                  Guessed: {item.guess || 'Not specified'}
                </div>

                {/* Guest predictions */}
                <div className="mb-6 space-y-4 rounded-2xl bg-[#FFF8F5] p-4">
                  <div>
                    <p className="mb-1 flex items-center gap-2 text-xs font-semibold text-[#720C7D]">
                      <Baby size={15} />
                      Who will baby look like?
                    </p>

                    <p className="text-sm text-gray-700">
                      {item.looks_like || 'Not answered'}
                    </p>
                  </div>

                  <div>
                    <p className="mb-1 flex items-center gap-2 text-xs font-semibold text-[#720C7D]">
                      <Heart size={15} />
                      What will baby love most?
                    </p>

                    <p className="text-sm text-gray-700">
                      {item.loves_most || 'Not answered'}
                    </p>
                  </div>

                  <div>
                    <p className="mb-1 flex items-center gap-2 text-xs font-semibold text-[#720C7D]">
                      <Sparkles size={15} />
                      Baby nickname
                    </p>

                    <p className="text-sm text-gray-700">
                      {item.baby_nickname || 'Not provided'}
                    </p>
                  </div>
                </div>

                {/* Wish */}
                <div className="mb-6">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-purple-500">
                    A little wish for baby 💕
                  </p>

                  <p className="min-h-20 whitespace-pre-wrap break-words leading-relaxed text-gray-700">
                    "{item.wish}"
                  </p>
                </div>

                {/* Guest details */}
                <div className="border-t border-pink-100 pt-4">
                  <h3 className="font-semibold text-[#720C7D]">{item.name}</h3>

                  <p className="mt-1 text-xs text-gray-400">
                    {formatDate(item.created_at)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Refresh */}
        {!loading && !error && wishes.length > 0 && (
          <div className="mt-12 text-center">
            <button
              onClick={fetchWishesData}
              className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white px-6 py-3 text-[#720C7D] transition hover:bg-pink-50"
            >
              <RefreshCw size={16} />
              Refresh wishes
            </button>
          </div>
        )}

        {/* Footer */}
        <div className="mt-16 pb-8 text-center">
          <Heart className="mx-auto mb-3 fill-pink-200 text-pink-400" />

          <p className="text-sm text-gray-500">
            With love, for the little one. 💕
          </p>
        </div>
      </div>
    </main>
  )
}
