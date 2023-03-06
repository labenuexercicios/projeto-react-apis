import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToDetails } from "../../router/Coordinator";
import {
  Capture,
  ContainerStyled,
  Details,
  ImgPokemon,
  Captured,
} from "./Style";

export default function Card({ url, setpokedex }) {
  const navigate = useNavigate();

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

  let pokedex = JSON.parse(localStorage.getItem("pokedex"));
  pokedex = pokedex == null ? [] : pokedex;

  return (
    <ContainerStyled>
      <ImgPokemon
        src={pokemonResponse.sprites?.other["official-artwork"].front_default}
        alt=""
      />
      <p>{url.split("/")[url.split("/").length - 2]}</p>

      <Details
        onClick={() =>
          goToDetails(
            navigate,
            encodeURIComponent(JSON.stringify(pokemonResponse))
          )
        }
      >
        Details
      </Details>
      {!pokedex.some((pokemon) => pokemon == url) ? (
        <Capture
          onClick={() => {
            pokedex.push(url);
            localStorage.setItem("pokedex", JSON.stringify(pokedex));
            setpokedex(pokedex);
          }}
        >
          Capture
        </Capture>
      ) : (
        <Captured>Captured</Captured>
      )}
    </ContainerStyled>
  );
}
