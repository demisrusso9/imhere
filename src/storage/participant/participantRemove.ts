import { ParticipantsProps } from "@/screens/Home";
import { participantGetAll } from "./participantGetAll";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PARTICIPANTS_COLLECTION } from "../config";

export async function participantRemove(person: ParticipantsProps) {
  try {
    const participants: ParticipantsProps[] = await participantGetAll();

    const storage = participants.filter(item => item.id !== person.id)

    await AsyncStorage.setItem(PARTICIPANTS_COLLECTION, JSON.stringify(storage))
  } catch (error) {
    throw error
  }
}