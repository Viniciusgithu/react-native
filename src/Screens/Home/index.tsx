import { Avatar, Icon, ListItem, Button } from '@rneui/themed';
import React, { useState } from 'react';


import {
  Container,
  Headline
} from './styles';



export function Home({ navigation }) {

  const [name, setName] = useState('');


  // function goToHome() {
  //   navegation.navigate('Home');
  // }

  return (
    <Container>
      <Headline>Você está em casa, {'\n'}
        tire os chinelos.</Headline>

      {/* <Image source={require('../../assets/images/logo.png')} /> */}
      {/* <TextInput
        onChangeText={text => setName(text)}
      />
      <Text>Nome: {name}</Text> */}




      <Button
              title="Gorjeta"
              buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)' }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
              titleStyle={{ color: 'white', marginHorizontal: 20 }}
              onPress={
                () => navigation.navigate('Gorjeta')
            }
            />

      {/* <Button title="Navegar até a Home" onPress={() => navigation.navigate('Home')} /> */}
    </Container>
  );
}