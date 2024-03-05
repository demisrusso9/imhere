import AsyncStorage from '@react-native-async-storage/async-storage'
import { PARTICIPANTS_COLLECTION } from '../config'

export async function participantGetAll() {
  try {
    const storage = await AsyncStorage.getItem(PARTICIPANTS_COLLECTION)

    return storage ? JSON.parse(storage) : []
  } catch (error) {
    throw error
  }
}