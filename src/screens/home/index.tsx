import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './styles'

export function Home() {
  function handleAddParticipant() {
    console.log('ok')
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

        <TouchableOpacity style={styles.button} onPress={handleAddParticipant}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
