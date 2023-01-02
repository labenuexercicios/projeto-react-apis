import React from "react"
import { Router } from "./Routers/Router";
import { ChakraProvider } from '@chakra-ui/react'
import { createGlobalStyle } from "styled-components";
import { Header } from "./components/header";



const GlobalStyled = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`


function App() {
  return (
    <ChakraProvider>
      <GlobalStyled/>
      <Router/>
    </ChakraProvider>
  );
}

export default App;
