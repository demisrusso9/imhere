import { Button } from '../Button'
import { Container, Name } from './styles'

interface ParticipantProps {
  name: String
  onRemove: () => void
}

export function Participant({ name, onRemove }: ParticipantProps) {
  return (
    <Container>
      <Name>{name}</Name>

      <Button variant='secondary' symbol={'-'} onPress={onRemove} />
    </Container>
  )
}
