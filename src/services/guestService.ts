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
