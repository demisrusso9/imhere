import { useState } from 'react'
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

interface ParticipantsProps {
  id: number
  name: string
}

export function Home() {
  const [participants, setParticipants] = useState<ParticipantsProps[]>([])
  const [participantName, setParticipantName] = useState('')

  function handleAddParticipant() {
    if (participantName.trim() === '') {
      return Alert.alert('Campo vazio', 'O campo de nome não pode ficar vazio.')
    }

    if (participants.some(item => item.name === participantName)) {
      return Alert.alert(
        'Participante já existe',
        'Já existe um participante na lista com esse nome.'
      )
    }

    const newParticipant = {
      id: participants.length + 1,
      name: participantName
    }

    setParticipants(prevState => [...prevState, newParticipant])
    setParticipantName('')
    Keyboard.dismiss()
  }

  function handleRemoveParticipant(id: number, name: string) {
    return Alert.alert('Remover', `Deseja remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => {
          setParticipants(prevState => prevState.filter(item => item.id !== id))
        }
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

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
            onRemove={() => handleRemoveParticipant(item.id, item.name)}
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
