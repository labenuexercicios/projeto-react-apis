import Router from "./Router/Router";
import GlobalStyle from "./GlobalStyle";
import { PokemonProvider } from "./Contexts/pokedexContext"

function App() {
  return (
    <PokemonProvider>
      <GlobalStyle />
      <Router />
    </PokemonProvider>
  );
}

export default App;
