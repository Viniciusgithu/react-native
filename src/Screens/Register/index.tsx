import React, { useState } from 'react';

import {
  Button,
  Container,
  Headline,
  Text,
  TextInput
} from './styles';

export function Register({ navigation }) {

  const [name, setName] = useState('');

  // function goToHome() {
  //   navegation.navigate('Home');
  // }

  return (
    <Container>
      <Headline>Você está na tela de Registro, {'\n'}
        deixe os dados abaixo.</Headline>
      {/* <Image source={require('../../assets/images/logo.png')} /> */}
      <TextInput
        onChangeText={text => setName(text)}
      />

      <Text>Nome: {name}</Text>

      <Button title="Navegar até a Home" onPress={() => navigation.navigate('Home')} />
    </Container>
  );
}