import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray700};
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

export const Name = styled.Text`
  flex: 1;
  font-size: ${({ theme }) => theme.fontSize.md}px;
  color: ${({ theme }) => theme.colors.write};
  margin-left: 16px;
`;