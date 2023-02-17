import React from "react";
import CardPokemon from "../cardPokemon";

const SectionPokemons = ({ pokemons }) => {
  return (
    <>
      {pokemons.map((pokemon, index) => (
        <CardPokemon key={index} pokemon={pokemon} />
      ))}
    </>
  );
};

export default SectionPokemons;
