import Header from "./Components/Header/Header";
import PokemonListPage from "./Pages/PokemonListPage/PokemonListPage";
import PokedexPage from "./Pages/PokedexPage/PokedexPage";
import { GlobalStyle } from "./GlobalStyle"
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
      <ChakraProvider>
        <Header/>
        <PokemonListPage/>
        <GlobalStyle/>
      </ChakraProvider>
  )
}

export default App;
