import axios from "axios";
import { useEffect, useState } from "react";
import { ContainerStyled, ImgPokemon } from "./Style";

export default function Card({ url }) {
  let [pokemonResponse, setPokemonResponse] = useState([]);
  const getPokemon = async () => {
    try {
      const response = await axios.get(url);
      setPokemonResponse(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <ContainerStyled>
      <ImgPokemon
        src={pokemonResponse.sprites?.other["official-artwork"].front_default}
        alt=""
      />
      <p>{pokemonResponse.id}</p>
      <p>{pokemonResponse.name}</p>
    </ContainerStyled>
  );
}
