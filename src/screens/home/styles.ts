import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 24px;
`;

export const EventName = styled.Text`
  color: ${({ theme }) => theme.colors.write};
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.lg}px;
  margin-top: 48px;
`;

export const EventDate = styled.Text`
  color: ${({ theme }) => theme.colors.gray200};
  font-size: ${({ theme }) => theme.fontSize.md}px;
`;

export const Input = styled.TextInput`
  flex: 1;
  background-color: #1F1E25;
  height: 56px;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.write};
  padding: 16px;
  font-size: ${({ theme }) => theme.fontSize.md}px;
  margin-right: 12px;
`;

export const Form = styled.View`
  width: 100%;
  flex-direction: row;
  margin-top: 36px;
  margin-bottom: 42px;
`;

export const ListEmptyList = styled.Text`
  color: ${({ theme }) => theme.colors.write};
  font-size: ${({ theme }) => theme.fontSize.sm}px;
  text-align: center;
`;
