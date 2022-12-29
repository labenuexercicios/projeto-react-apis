import Header from "./Components/Header/Header";
import PokedexPage from "./Pages/PokedexPage/PokedexPage";
import { GlobalStyle } from "./GlobalStyle"
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
      <ChakraProvider>
        <Header/>
        <PokedexPage/>
        <GlobalStyle/>
      </ChakraProvider>
  )
}

export default App;
