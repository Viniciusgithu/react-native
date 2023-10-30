import React from 'react';
import { Button, View } from 'react-native';

import { styles } from './styles';

export function Register({ navigation }) {

  // function goToHome() {
  //   navegation.navigate('Home');
  // }

  return (
    <View style={styles.container}>
      <Button
        title="Ir para Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}