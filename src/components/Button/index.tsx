import { Container, ButtonText } from './styles'

interface ButtonProps {
  symbol: String
  onPress: () => void
  variant: 'primary' | 'secondary'
}

export function Button({ onPress, symbol, variant }: ButtonProps) {
  return (
    <Container onPress={onPress} variant={variant}>
      <ButtonText>{symbol}</ButtonText>
    </Container>
  )
}
