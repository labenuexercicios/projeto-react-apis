import React from "react";
import { PokemonListContainer } from "./PokemonListStyle";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";

const PokemonList = () => {
  return (
    <PokemonListContainer>
      <div>
        <h3>Todos os Pokémons</h3>
      </div>
      <div className="pokemons-list">
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
      </div>
    </PokemonListContainer>
  );
};

export default PokemonList;
