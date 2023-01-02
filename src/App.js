import Header from "./Components/Header/Header";
import { GlobalStyle } from "./GlobalStyle"
import { ChakraProvider } from '@chakra-ui/react'
import { Router } from "./Routes/Router";


function App() {
  return (
      <ChakraProvider>
        <Router/>
        <GlobalStyle/>
      </ChakraProvider>
  )
}

export default App;
