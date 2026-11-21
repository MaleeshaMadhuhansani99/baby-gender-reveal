
import { supabase } from '../lib/supabase'
import type { BabyAnswers } from '../components/BabyQuestions'

export type GuestResponse = {
  name: string
  guess: string
  baby_call_name: string
  looks_like: BabyAnswers['looks_like']
  loves_most: BabyAnswers['loves_most']
  baby_nickname: string
  wish: string
  created_at: string
}

export async function saveGuestResponse(response: GuestResponse) {
  const { error } = await supabase
    .from('guests')
    .insert({
      name: response.name,
      guess: response.guess,
      baby_call_name: response.baby_call_name,
      looks_like: response.looks_like,
      loves_most: response.loves_most,
      baby_nickname: response.baby_nickname,
      wish: response.wish,
    })

  if (error) {
    throw error
  }
}


export async function fetchWishes(): Promise<GuestResponse[]> {
  const { data, error } = await supabase
    .from('guests')
    .select('name, guess, baby_call_name, looks_like, loves_most, baby_nickname, created_at, wish')
    .not('wish', 'is', null)
    .neq('wish', '')

  if (error) {
    console.error('Error fetching guest insights:', error)
    throw error
  }

  return (data ?? []) as GuestResponse[]
}