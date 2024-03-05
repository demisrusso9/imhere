import AsyncStorage from '@react-native-async-storage/async-storage'
import { PARTICIPANTS_COLLECTION } from '../config'
import { participantGetAll } from './participantGetAll'
import { ParticipantsProps } from '@/screens/Home'

export async function participantCreate(person: ParticipantsProps) {
  try {
    const participants: ParticipantsProps[] = await participantGetAll()

    const exists = participants.some(item => item.name === person.name)

    if (exists) {
      throw new Error('Já existe um participante na lista com esse nome.')
    }

    await AsyncStorage.setItem(PARTICIPANTS_COLLECTION, JSON.stringify([...participants, person]))
  } catch (error) {
    throw error
  }
}