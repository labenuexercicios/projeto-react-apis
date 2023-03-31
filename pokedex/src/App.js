import React from "react";
import header from './Components/Header/Header'
import PokemonCard from "./Components/PokemonCard/PokemonCard";
import pokedexPage from "./Pages/PokedexPage/PokedexPage";
import pokemonDetailPage from "./Pages/PokemonDetailPage/PokemonDetailPage";
import pokemonsListPage from "./Pages/PokemonsListPage/PokemonsListPage";
import styled, { createGlobalStyle } from "styled-components";
import pokemons from "./pokemon/pokemon.json";
import { getColors } from "./utils/ReturnCardColor";

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  
  }
`;
const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));
  justify-items: center;
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      {header()}
      <CardsContainer>
        {pokemons.map((pokemon) => {
          return <PokemonCard
          cardColor={getColors(pokemon.type[0])}
          key={pokemon.id}
          pokemon={pokemon}
        />
        })}
      </CardsContainer>
      
      {pokedexPage()}
      {pokemonDetailPage()}
      {pokemonsListPage()}
    </div>
  );
}

export default App;
