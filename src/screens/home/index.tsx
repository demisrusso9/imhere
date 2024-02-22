import { View, Text, TextInput, FlatList, Alert } from 'react-native'
import { styles } from './styles'
import { Participant } from '../../components/participant'
import { Button } from '../../ui/Button'

export function Home() {
  const participants = [
    { id: 1, name: 'Demis' },
    { id: 2, name: 'Russo' },
    { id: 3, name: 'Mendes' },
    { id: 4, name: 'da' },
    { id: 5, name: 'Silva' },
    { id: 6, name: 'Junior' },
    { id: 7, name: 'Dominique' },
    { id: 8, name: 'Ithina' },
    { id: 9, name: 'Oliveira' },
    { id: 10, name: 'Jesus' }
  ]

  function handleAddParticipant() {
    if (participants.some(item => item.name === 'Jesus')) {
      return Alert.alert(
        'Participante já existe',
        'Já existe um participante na lista com esse nome.'
      )
    }
  }

  function handleRemoveParticipant(name: string) {
    return Alert.alert('Remover', `Deseja remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert('Deletado')
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
            onRemove={() => handleRemoveParticipant(item.name)}
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
