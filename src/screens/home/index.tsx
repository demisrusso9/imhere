import { useEffect, useState } from 'react'
import { FlatList, Alert, Keyboard } from 'react-native'
import { Participant } from '@/components/Participant'
import { Button } from '@/components/Button'

import {
  Container,
  EventName,
  EventDate,
  Form,
  Input,
  ListEmptyList
} from './styles'
import { participantCreate } from '@/storage/participant/participantCreate'
import { participantGetAll } from '@/storage/participant/participantGetAll'
import { participantRemove } from '@/storage/participant/participantRemove'

export interface ParticipantsProps {
  id: number
  name: string
}

export function Home() {
  const [participants, setParticipants] = useState<ParticipantsProps[]>([])
  const [participantName, setParticipantName] = useState('')

  async function handleAddParticipant() {
    if (participantName.trim() === '') {
      return Alert.alert('Campo vazio', 'O campo de nome não pode ficar vazio.')
    }

    try {
      const newParticipant = {
        id: participants.length + 1,
        name: participantName
      }

      await participantCreate(newParticipant)
      fetchParticipants()

      setParticipants(prevState => [...prevState, newParticipant])
    } catch (error) {
      if (error instanceof Error) {
        return Alert.alert('Participante já existe', error.message)
      }
    } finally {
      setParticipantName('')
      Keyboard.dismiss()
    }
  }

  function handleRemoveParticipant(person: ParticipantsProps) {
    return Alert.alert(
      'Remover',
      `Deseja remover o participante ${person.name}?`,
      [
        { text: 'Não', style: 'cancel' },
        { text: 'Sim', onPress: () => removeParticipant(person) }
      ]
    )
  }

  async function removeParticipant(person: ParticipantsProps) {
    try {
      await participantRemove(person)

      setParticipants(prevState =>
        prevState.filter(item => item.id !== person.id)
      )
    } catch (error) {
      console.log(error)
    }
  }

  async function fetchParticipants() {
    try {
      const participants = await participantGetAll()
      setParticipants(participants)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchParticipants()
  }, [])

  return (
    <Container>
      <EventName>Nome de Evento</EventName>
      <EventDate>Terça-feira, 20, de 2024</EventDate>

      <Form>
        <Input
          placeholder='Nome do participante'
          placeholderTextColor={'#6B6B6B'}
          keyboardAppearance='dark'
          enterKeyHint='done'
          value={participantName}
          onChangeText={setParticipantName}
          onSubmitEditing={handleAddParticipant}
        />

        <Button onPress={handleAddParticipant} variant='primary' symbol={'+'} />
      </Form>

      <FlatList
        data={participants}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <Participant
            key={item.id}
            name={item.name}
            onRemove={() => handleRemoveParticipant(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <ListEmptyList>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista
            de presença.
          </ListEmptyList>
        )}
      />
    </Container>
  )
}
