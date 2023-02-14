import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import CardPokemon from "../cardPokemon";

const SectionPokemons = () => {
  const context = useContext(GlobalContext);
  const { pokemons } = context;
  return (
    <>
      {pokemons.map((pokemon, index) => (
        <CardPokemon key={index} pokemon={pokemon} />
      ))}
    </>
  );
};

export default SectionPokemons;
