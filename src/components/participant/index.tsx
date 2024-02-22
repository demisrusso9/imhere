import { View, Text } from 'react-native'
import { styles } from './styles'
import { Button } from '../../ui/Button'

interface ParticipantProps {
  name: String
  onRemove: () => void
}

export function Participant({ name, onRemove }: ParticipantProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>

      <Button variant='secondary' symbol={'-'} onPress={onRemove} />
    </View>
  )
}
