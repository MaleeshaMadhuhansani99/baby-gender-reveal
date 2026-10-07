import { supabase } from '../lib/supabase'

export interface GuestResponse {
  name: string
  guess: 'girl' | 'boy'
  looks_like?: 'mommy' | 'daddy' | 'both'
  loves_most?: 'mommy' | 'daddy' | 'both'
  wish?: string
}

export async function saveGuestResponse(response: GuestResponse) {
  const { data, error } = await supabase
    .from('guests')
    .insert(response)
    .select()
    .single()

  if (error) {
    throw error
  }

  return data
}