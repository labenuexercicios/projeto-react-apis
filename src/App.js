import Router from "./Routes/Router";
import Header from "./components/Header/Header";
import { createGlobalStyle } from "styled-components";
import GlobalState from "./Context/GlobalState";
import { ChakraProvider } from '@chakra-ui/react'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
`

function App() {
  
  return (
    <GlobalState>
      <ChakraProvider>
      <GlobalStyle />
      <Header />
      <Router />
      </ChakraProvider>
    </GlobalState>
  );
}

export default App;
