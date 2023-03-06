import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import { ContainerStyled } from "./Style";

export default function Details() {
  const params = useParams();

  let [pokemon, setPokemon] = useState([
    JSON.parse(decodeURIComponent(params.pokemon)),
  ]);
  return (
    <ContainerStyled>
      <Header calledFor="details" />
      <img src={pokemon[0].sprites.front_default} />
      <img src={pokemon[0].sprites.back_default} />
    </ContainerStyled>
  );
}
