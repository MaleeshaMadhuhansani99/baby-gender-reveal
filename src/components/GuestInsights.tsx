
import { useEffect, useMemo, useState } from 'react'
import { Baby, Heart, Sparkles, Users } from 'lucide-react'
import {
  fetchWishes,
  type GuestResponse,
} from '../services/guestService'

export default function GuestInsights() {
  const [guests, setGuests] = useState<GuestResponse[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const loadInsights = async () => {
      try {
        setLoading(true)
        setError('')

        const data = await fetchWishes()
        setGuests(data)
      } catch (err) {
        console.error('Could not retrieve guest insights:', err)
        setError(
          err instanceof Error
            ? err.message
            : 'Unable to load guest insights.',
        )
      } finally {
        setLoading(false)
      }
    }

    loadInsights()
  }, [])

  const totalGuests = guests.length

  const boyCount = guests.filter(
    (guest) => guest.guess?.toLowerCase() === 'boy',
  ).length

  const girlCount = guests.filter(
    (guest) => guest.guess?.toLowerCase() === 'girl',
  ).length

  const boyPercentage =
    totalGuests > 0 ? Math.round((boyCount / totalGuests) * 100) : 0

  const girlPercentage =
    totalGuests > 0 ? Math.round((girlCount / totalGuests) * 100) : 0

  const getAnswerCounts = (
    field: 'looks_like' | 'loves_most',
  ) => {
    const counts: Record<string, number> = {}

    guests.forEach((guest) => {
      const answer = guest[field]

      if (answer) {
        const value = String(answer)
        counts[value] = (counts[value] || 0) + 1
      }
    })

    return Object.entries(counts).sort((a, b) => b[1] - a[1])
  }

  const looksLikeAnswers = useMemo(
    () => getAnswerCounts('looks_like'),
    [guests],
  )

  const lovesMostAnswers = useMemo(
    () => getAnswerCounts('loves_most'),
    [guests],
  )

  const nicknames = guests.filter(
    (guest) => guest.baby_nickname?.trim(),
  )

  if (loading) {
    return (
      <div className="py-12 text-center">
        <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-pink-200 border-t-[#720C7D]" />
        <p className="text-gray-500">
          Gathering everyone's baby predictions...
        </p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="rounded-3xl bg-white p-8 text-center shadow-sm">
        <p className="text-red-500">{error}</p>
      </div>
    )
  }

  if (guests.length === 0) {
    return null
  }

  return (
    <div className="space-y-8">

      {/* Guest statistics */}
      <section className="rounded-3xl border border-pink-100 bg-white p-6 shadow-sm md:p-8">
        <div className="mb-6 flex items-center gap-3">
          <div className="rounded-full bg-purple-100 p-3">
            <Users className="text-[#720C7D]" size={24} />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#720C7D]">
              Baby Predictions
            </h2>
            <p className="text-sm text-gray-500">
              Let's see what everyone is guessing!
            </p>
          </div>
        </div>

        <p className="mb-6 text-center text-gray-600">
          <span className="text-3xl font-bold text-[#720C7D]">
            {totalGuests}
          </span>
          <br />
          Guest responses
        </p>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

          {/* Boy */}
          <div className="rounded-2xl bg-blue-50 p-6 text-center">
            <Baby className="mx-auto mb-3 text-blue-500" size={30} />

            <h3 className="text-lg font-semibold text-blue-700">
              Team Boy 💙
            </h3>

            <p className="my-3 text-4xl font-bold text-blue-600">
              {boyPercentage}%
            </p>

            <p className="text-sm text-blue-500">
              {boyCount} {boyCount === 1 ? 'guest' : 'guests'}
            </p>
          </div>

          {/* Girl */}
          <div className="rounded-2xl bg-pink-50 p-6 text-center">
            <Baby className="mx-auto mb-3 text-pink-500" size={30} />

            <h3 className="text-lg font-semibold text-pink-700">
              Team Girl 💗
            </h3>

            <p className="my-3 text-4xl font-bold text-pink-600">
              {girlPercentage}%
            </p>

            <p className="text-sm text-pink-500">
              {girlCount} {girlCount === 1 ? 'guest' : 'guests'}
            </p>
          </div>
        </div>

        {/* Percentage bar */}
        <div className="mt-6">
          <div className="mb-2 flex h-4 overflow-hidden rounded-full bg-pink-100">
            <div
              className="bg-blue-400 transition-all duration-500"
              style={{ width: `${boyPercentage}%` }}
            />

            <div
              className="bg-pink-400 transition-all duration-500"
              style={{ width: `${girlPercentage}%` }}
            />
          </div>

          <div className="flex justify-between text-xs text-gray-500">
            <span>💙 Boy {boyPercentage}%</span>
            <span>Girl {girlPercentage}% 💗</span>
          </div>
        </div>
      </section>

      {/* Creative game answers */}
      <section className="rounded-3xl border border-pink-100 bg-white p-6 shadow-sm md:p-8">
        <div className="mb-6 flex items-center gap-3">
          <div className="rounded-full bg-pink-100 p-3">
            <Sparkles className="text-pink-500" size={24} />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#720C7D]">
              Little Baby Predictions
            </h2>
            <p className="text-sm text-gray-500">
              Some fun guesses from our lovely guests!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

          {/* Looks like */}
          <div className="rounded-2xl bg-purple-50 p-5">
            <h3 className="mb-4 font-semibold text-[#720C7D]">
              👶 Who will baby look like?
            </h3>

            {looksLikeAnswers.length > 0 ? (
              <div className="space-y-3">
                {looksLikeAnswers.map(([answer, count]) => (
                  <div
                    key={answer}
                    className="flex items-center justify-between gap-3 rounded-xl bg-white p-3"
                  >
                    <span className="text-sm text-gray-700">
                      {answer}
                    </span>

                    <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-semibold text-purple-700">
                      {count}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500">
                No answers yet.
              </p>
            )}
          </div>

          {/* Loves most */}
          <div className="rounded-2xl bg-pink-50 p-5">
            <h3 className="mb-4 font-semibold text-[#720C7D]">
              ❤️ What will baby love most?
            </h3>

            {lovesMostAnswers.length > 0 ? (
              <div className="space-y-3">
                {lovesMostAnswers.map(([answer, count]) => (
                  <div
                    key={answer}
                    className="flex items-center justify-between gap-3 rounded-xl bg-white p-3"
                  >
                    <span className="text-sm text-gray-700">
                      {answer}
                    </span>

                    <span className="rounded-full bg-pink-100 px-3 py-1 text-sm font-semibold text-pink-700">
                      {count}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500">
                No answers yet.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Baby nicknames */}
      <section className="rounded-3xl border border-pink-100 bg-white p-6 shadow-sm md:p-8">
        <div className="mb-5 flex items-center gap-3">
          <Heart className="fill-pink-300 text-pink-400" size={24} />

          <h2 className="text-2xl font-bold text-[#720C7D]">
            Cute Nicknames for Baby
          </h2>
        </div>

        {nicknames.length > 0 ? (
          <div className="flex flex-wrap gap-3">
            {nicknames.map((guest, index) => (
              <div
                key={`${guest.name}-${index}`}
                className="rounded-full bg-pink-50 px-5 py-3"
              >
                <span className="font-semibold text-[#720C7D]">
                  {guest.baby_nickname}
                </span>

                <span className="ml-2 text-xs text-gray-400">
                  — {guest.name}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-500">
            No nicknames submitted yet.
          </p>
        )}
      </section>

      {/* Individual guest answers */}
      <section className="rounded-3xl border border-pink-100 bg-white p-6 shadow-sm md:p-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-[#720C7D]">
            Everyone's Little Predictions 💕
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            See what each guest thinks about the little one.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {guests.map((guest, index) => (
            <div
              key={`${guest.name}-${index}`}
              className="rounded-2xl border border-pink-100 bg-[#FFF8F5] p-5"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-pink-100 to-purple-100 font-bold text-[#720C7D]">
                  {guest.name?.charAt(0).toUpperCase() || '?'}
                </div>

                <div>
                  <h3 className="font-semibold text-[#720C7D]">
                    {guest.name}
                  </h3>

                  <p className="text-xs text-gray-500">
                    Guessed: {guest.guess || 'Not specified'}
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-medium text-gray-500">
                    👶 Baby will look like
                  </p>
                  <p className="mt-1 text-gray-700">
                    {guest.looks_like || 'Not answered'}
                  </p>
                </div>

                <div>
                  <p className="font-medium text-gray-500">
                    ❤️ Baby will love most
                  </p>
                  <p className="mt-1 text-gray-700">
                    {guest.loves_most || 'Not answered'}
                  </p>
                </div>

                <div>
                  <p className="font-medium text-gray-500">
                    ✨ Baby nickname
                  </p>
                  <p className="mt-1 text-gray-700">
                    {guest.baby_nickname || 'Not provided'}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
