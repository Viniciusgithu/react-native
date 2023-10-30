import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.COLORS.BACKGROUND};
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: 40px;
  color: ${({ theme }) => theme.COLORS.PRIMARY_700};
`;