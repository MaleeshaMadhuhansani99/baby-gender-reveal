
import { useEffect, useState } from 'react'
import { Heart, ArrowLeft, RefreshCw, Baby } from 'lucide-react'
import { fetchWishes } from '../services/guestService'
import type { Wish } from '../services/guestService'

interface WishesWallProps {
  onBack: () => void
}

export default function WishesWall({ onBack }: WishesWallProps) {
  const [wishes, setWishes] = useState<Wish[]>([])
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

  return (
    <main className="min-h-screen w-full overflow-y-auto bg-[#FFF8F5] px-5 py-10">
      <div className="mx-auto w-full max-w-6xl">

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
              <Heart
                size={32}
                className="fill-pink-500 text-pink-500"
              />
            </div>
          </div>

          <h1 className="mb-4 text-4xl font-bold text-[#720C7D] md:text-5xl">
            Little Wishes, Big Love
          </h1>

          <p className="mx-auto max-w-xl text-lg text-gray-600">
            Every little message is filled with love. Here are the beautiful
            wishes for our little miracle.
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
            <p className="text-gray-500">
              Gathering all the lovely wishes...
            </p>
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

        {/* Wishes grid */}
        {!loading && !error && wishes.length > 0 && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {wishes.map((item, index) => (
              <div
                key={`${item.created_at}-${index}`}
                className="group relative rounded-3xl border border-pink-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Heart icon */}
                <div className="absolute right-6 top-6">
                  <Heart
                    size={20}
                    className="fill-pink-100 text-pink-300"
                  />
                </div>

                {/* Guest initial */}
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-pink-100 to-purple-100 text-lg font-bold text-[#720C7D]">
                  {item.name?.charAt(0).toUpperCase() || '?'}
                </div>

                {/* Guest gender guess */}
                <div
                  className={`mb-5 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium ${getGuessStyle(item.guess)}`}
                >
                  <Baby size={16} />
                  Guessed: {item.guess || 'Not specified'}
                </div>

                {/* Wish */}
                <p className="mb-6 min-h-20 whitespace-pre-wrap break-words leading-relaxed text-gray-700">
                  "{item.wish}"
                </p>

                {/* Guest details */}
                <div className="border-t border-pink-100 pt-4">
                  <h3 className="font-semibold text-[#720C7D]">
                    {item.name}
                  </h3>

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
