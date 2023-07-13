import { GlobalStyle } from './GlobalStyle';
import { Router } from './router/Router';
import Pokemons from './components/Pokemons/Pokemons'
import { PokemonCard } from './components/PokemonCard/PokemonCard';
import { PokemonsListPage } from './pages/PokemonsListPage/PokemonsListPage';


function App() {
  <GlobalStyle />
  

  return (
    <div className="App">
      

        <Router />
        {/* <PokemonsListPage /> */}
        <Pokemons PokemonCard={PokemonCard}/>
    </div>
  );
}

export default App;
