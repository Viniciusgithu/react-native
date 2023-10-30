import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import dark from './src/Themes/dark';
import { Routes } from './src/routes';


export default function App() {


  return (
    <ThemeProvider theme={dark}>
      <Routes />
    </ThemeProvider>

  );
}
