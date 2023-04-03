import React from "react";
import { DetailContainer } from "./PokemonDetailStyle";

const PokemonDetail = () => {
  return (
    <DetailContainer>
      <div>
        <h3>Detalhes do Pokémon</h3>
      </div>
      <div className="pokemon-detail">
        <p>Detalhes aqui</p>
      </div>
    </DetailContainer>
  );
};

export default PokemonDetail;