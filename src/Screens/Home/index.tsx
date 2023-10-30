import React from 'react';
import { Button } from 'react-native';
import { Container, Text } from './styles';

export function Home({ navigation }) {

    // function goToRegister(){
    //     navegation.navigate('Register');
    // }

    return (
        <Container>
            <Text>Home</Text>
            <Button title="Ir para Register" onPress={() => navigation.navigate('Register')} />
        </Container>
    );
}