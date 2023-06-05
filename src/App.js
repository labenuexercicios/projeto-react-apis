import React from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Router } from './routes/Router';
import GlobalState from './contexts/GlobalState';
import { ChakraProvider } from "@chakra-ui/react";




function App() {

  return (
    <GlobalState>
      <ChakraProvider>
      <GlobalStyle />
      <Router />
      </ChakraProvider>
    </GlobalState>
  );

}

export default App;
