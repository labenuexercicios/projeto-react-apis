import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { goToPokedex, goToDetail, goToHome } from "../../routes/Coordinator";
import { PokemonType } from "../PokemonType/PokemonType";
import { BackgroundColor } from "../BackgroundColor/BackgroundColor";
import {
  ContainerCard,
  DivColumn,
  DivRow,
  DivRowCatch,
  TextId,
  TextPokemon,
  PokemonImg,
  DivPoison,
  CatchButton,
  Link,
  DeleteButton,
} from "./style";

export const Card = ({ url }) => {
  const navigate = useNavigate();
  const pathParams = useParams();

  const [pokemonId, setPokemonId] = useState("");
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonType1, setPokemonType1] = useState("");
  const [pokemonType2, setPokemonType2] = useState("");
  const [pokemonImg, setPokemonImg] = useState("");

  const searchPokemon = () => {
    axios
      .get(`${url}`, {})
      .then((response) => {
        setPokemonId(response.data.id);
        setPokemonName(response.data.name);
        setPokemonType1(response.data.types[0].type.name);
        if (!!response.data.types[1]) {
          setPokemonType2(response.data.types[1].type.name);
        }
        for (let i in response.data.sprites.other) {
          if (i === "official-artwork") {
            setPokemonImg(response.data.sprites.other[i].front_default);
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    searchPokemon();
  }, []);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <ContainerCard style={{ backgroundColor: BackgroundColor(pokemonType1) }}>
      <DivRow>
        <DivColumn>
          <TextId >#{pokemonId}</TextId>
          <TextPokemon>{capitalizeFirstLetter(pokemonName)}</TextPokemon>
          <DivPoison>
            <PokemonType type={pokemonType1} />
            <PokemonType type={pokemonType2} />
          </DivPoison>
        </DivColumn>
        <PokemonImg src={pokemonImg} />
      </DivRow>
      <DivRowCatch>
        <Link onClick={() => goToDetail(navigate, "detail")}>
          <u>Detalhes</u>
        </Link>
        {pathParams.variable === "pokedex" ? (
          <DeleteButton>Excluir</DeleteButton>
        ) : (
          <CatchButton>Capturar!</CatchButton>
        )}
      </DivRowCatch>
    </ContainerCard>
  );
};
