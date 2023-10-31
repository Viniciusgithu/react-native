import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Headline = styled.Text`
  font-size: 25px;
  font-weight: bold;
  align-self: center;
  color: ${({ theme }) => theme.COLORS.PRIMARY_700};
`;

export const TextInput = styled.TextInput`
 width: 80%;
 background-color: aliceblue;
`;

export const Text = styled.Text`
  font-size: 10px;
  font-weight: bold;
  align-self: center;
  color: aliceblue;
`;

export const Button = styled.TouchableOpacity`
  width: 50;
  height: 50;
  color: ${({ theme }) => theme.COLORS.INFO};
`;