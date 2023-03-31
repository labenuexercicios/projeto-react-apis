import React from "react";
import header from './Components/Header/Header'
import pokemonCard from "./Components/PokemonCard/PokemonCard";
import pokedexPage from "./Pages/PokedexPage/PokedexPage";
import pokemonDetailPage from "./Pages/PokemonDetailPage/PokemonDetailPage";
import pokemonsListPage from "./Pages/PokemonsListPage/PokemonsListPage";

function App() {
  return (
    <div className="App">
      {header()}
      {pokemonCard()}
      {pokedexPage()}
      {pokemonDetailPage()}
      {pokemonsListPage()}
    </div>
  );
}

export default App;
