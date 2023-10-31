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
  margin-bottom: 10px;
`;

export const ImageLogo = styled.Image`
  width: 100px;
  height: 100px;
  align-self: center;
  margin-bottom: 50px;
`;

export const TextView = styled.Text`
  font-size: 13px;
  font-weight: bold;
  align-self: center;
  color: black;
`;

export const ButtonSend = styled.TouchableOpacity`
  width: 50%;
  height: 50px;
  background-color: ${({ theme }) => theme.COLORS.INFO};
  color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
  border-top-right-radius: 10px;
  align-self: center;
`;

export const Div = styled.View`
  flex-direction: row;
  justify-content: center;
`;