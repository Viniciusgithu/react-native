import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import QuizScreen from './src/Screens/QuizScreen';
import dark from './src/Themes/dark';


export default function App() {


  return (
    <ThemeProvider theme={dark}>

      <QuizScreen />
    </ThemeProvider>

  );
}
