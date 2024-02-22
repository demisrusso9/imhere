import { View, Text, TextInput, FlatList, Alert } from 'react-native'
import { styles } from './styles'
import { Participant } from '../../components/participant'
import { Button } from '../../ui/Button'
import { useState } from 'react'

interface ParticipantsProps {
  id: number
  name: string
}

export function Home() {
  const [participants, setParticipants] = useState<ParticipantsProps[]>([])
  const [participantName, setParticipantName] = useState('')

  function handleAddParticipant() {
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
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome de Evento</Text>
      <Text style={styles.eventDate}>Terça-feira, 20, de 2024</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Nome do participante'
          placeholderTextColor={'#6B6B6B'}
          keyboardAppearance='dark'
          value={participantName}
          onChangeText={setParticipantName}
          onSubmitEditing={handleAddParticipant}
        />

        <Button onPress={handleAddParticipant} variant='primary' symbol={'+'} />
      </View>

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
          <Text style={styles.listEmptyList}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista
            de presença.
          </Text>
        )}
      />
    </View>
  )
}
