import styled from 'styled-components/native'

interface ButtonProps {
  variant: 'primary' | 'secondary'
}

export const Container = styled.TouchableOpacity<ButtonProps>`
  height: 56px;
  width: 56px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, variant }) =>
    variant === 'primary' ? theme.colors.green : theme.colors.red};
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.write};
  font-size: ${({ theme }) => theme.fontSize.lg}px;
`;
