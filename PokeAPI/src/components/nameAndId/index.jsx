import React from "react";
import TiposPokemon from "../tiposPokemons";
import { BoxNameAndId, Id, Name } from "./styled";

const NameAndId = (props) => {
  const { pokemon } = props;
  return (
    <BoxNameAndId>
      <Id>#{pokemon?.id}</Id>
      <Name>{pokemon?.name}</Name>
      <TiposPokemon pokemon={pokemon} />
    </BoxNameAndId>
  );
};

export default NameAndId;
