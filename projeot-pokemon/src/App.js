import { PokedexPage } from './pages/pokedexPage/PokedexPage';
import { PokedexDatailPage } from './pages/pokemonDetailPage/PokemonDetailPage';
import { Router } from './routes/Router';
import { ChakraProvider } from '@chakra-ui/react'


function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Router />
      </ChakraProvider>




    </div>
  );
}

export default App;