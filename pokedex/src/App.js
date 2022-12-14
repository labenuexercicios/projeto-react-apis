import Header from "./Components/Header/Header";
import { GlobalStyled } from "./GlobalStyled";
import PokedexListPage from "./Pages/PokedexListPage/PokedexListPage";
import PokedexPage from "./Pages/PokedexPage/PokedexPage";
import PokemonDetailsPage from "./Pages/PokemonDetailsPage/PokemonDatailsPage";

function App() {
  return (
    <div >
      <GlobalStyled />
      <Header/>
      <PokedexListPage/>
      <PokedexPage/>
      <PokemonDetailsPage/>
    </div>
  );
}

export default App;
