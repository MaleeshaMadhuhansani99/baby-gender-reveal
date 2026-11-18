
import { supabase } from '../lib/supabase'
import type { BabyAnswers } from '../components/BabyQuestions'
import type { BabyGender } from '../components/Reveal'

export type GuestResponse = {
  name: string
  guess: BabyGender
  looks_like: BabyAnswers['looks_like']
  loves_most: BabyAnswers['loves_most']
  baby_nickname: string
  wish: string
}

export interface Wish {
  name: string
  guess: BabyGender
  wish: string
  created_at: string
}

export async function saveGuestResponse(response: GuestResponse) {
  const { error } = await supabase
    .from('guests')
    .insert({
      name: response.name,
      guess: response.guess,
      looks_like: response.looks_like,
      loves_most: response.loves_most,
      baby_nickname: response.baby_nickname,
      wish: response.wish,
    })

  if (error) {
    throw error
  }
}

export const fetchWishes = async (): Promise<Wish[]> => {
  const { data, error } = await supabase
    .from('guests')
    .select('name, guess, wish, created_at')
    .not('wish', 'is', null)
    .neq('wish', '')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching wishes:', error)
    throw error
  }

  return data ?? []
}
