import React, { useState } from 'react';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color:#CCCCFF;
`;

const HeaderText = styled.Text`
  font-size: 25px;
  color: #EEE;
  margin-top: 5%;
`;

const Input = styled.TextInput`
  width: 90%;
  height: 40px;
  font-size: 18px;
  background-color: #EEE;
  margin-top: 10%;
  border-radius: 10px;
  padding: 10px;
`;

const CalcButton = styled.Button`
margin-top: 10%;
`;

const ResultArea = styled.View`
  margin-top: 30px;
  background-color: #EEE;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

const ResultItem = styled.Text`
font-size: 18px;
color: black
`;

export default function Gorjeta() {

  const [conta, setConta] = useState('');
  const [tip, setTip] = useState(0);

  const calc = () => {
    let n = parseFloat(conta);

    if (n) {
      setTip(n * 0.1);
    } else {
      alert('Digite o valor da conta!');
    }
  }

  return (
    <Page>
      <HeaderText>Calculadora de Gorjeta 🧮</HeaderText>

      <Input
        placeholder='Quanto deu a sua conta?'
        placeholderTextColor={'#000'}
        keyboardType='numeric'
        value={conta}
        onChangeText={(valor) => setConta(valor)}
      />
      <CalcButton
        title="Calcular"
        onPress={calc}
      />
      {tip > 0 &&

        <ResultArea>
          <ResultItem>Valor da Conta</ResultItem>
          <ResultItem>R$ {parseFloat(conta).toFixed(2)}</ResultItem>
          <ResultItem>Valor da Gorjeta</ResultItem>
          <ResultItem>R$ {tip.toFixed(2)}</ResultItem>
          <ResultItem>Valor Total</ResultItem>
          <ResultItem>R$ {(parseFloat(conta) + tip).toFixed(2)}</ResultItem>
        </ResultArea>

      }
    </Page>
  );
}
