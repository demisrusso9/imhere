import { Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'

interface ButtonProps {
  symbol: String
  onPress?: () => void
  variant: 'primary' | 'secondary'
}

export function Button({ onPress, symbol, variant }: ButtonProps) {
  const buttonColor = variant === 'primary' ? '#31CF67' : '#E23C44'

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: buttonColor }]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{symbol}</Text>
    </TouchableOpacity>
  )
}
