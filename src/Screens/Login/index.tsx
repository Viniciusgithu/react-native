import { Button, Input } from '@rneui/themed';
import React from 'react';


import { Container, Div, Headline, ImageLogo } from './styles';

export function Login({ navigation }) {

    // function goToRegister(){
    //     navegation.navigate('Register');
    // }

    return (
        <Container>

            <Headline>Seja bem vindo(a)!</Headline>

            <ImageLogo
                source={require('../../../assets/icon.png')}
            />

            <Input
                placeholder='Digite o seu nome'
                leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
                containerStyle={{ width: '70%' }}
                style={{ color: 'black' }}
            />

            <Input
                placeholder='Digite a sua senha'
                leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
                secureTextEntry={true}
                style={{ color: 'black' }}
            />

            <Div>

                <Button
                    title="LOG IN"
                    buttonStyle={{
                        backgroundColor: 'black',
                        borderWidth: 2,
                        borderColor: 'white',
                        borderRadius: 30,
                    }}
                    containerStyle={{
                        width: 200,
                        marginHorizontal: 50,
                        marginVertical: 10,
                    }}
                    titleStyle={{ fontWeight: 'bold' }}
                    onPress={
                        () => navigation.navigate('Home')
                    }
                />

            </Div>



            {/* <TextView style={{color: 'red'}}>Aplicativo em fase de teste {`\n`}</TextView>
            <TextView>Aqui você irá encontrar:</TextView>
            <TextView>Cronômetro</TextView>
            <TextView>To Do List</TextView>
            <TextView>Quiz</TextView>
            <TextView>Gorjeta</TextView>

            <ButtonSend
            title="Me registrar"
            onPress={
                () => navigation.navigate('Register')
                }
            /> */}

        </Container>
    );
}