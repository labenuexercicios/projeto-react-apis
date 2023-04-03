import React from "react";
import { PokemonCardContainer } from "./PokemonCardStyle";
import { Link } from "react-router-dom";

function PokemonCard() {


  return (
    <PokemonCardContainer>
      <p>Eu sou um pokémon!</p>
      <Link className = "details-link" to="/detail/:id">Detalhes</Link>
    </PokemonCardContainer>
  );
}

export default PokemonCard;
