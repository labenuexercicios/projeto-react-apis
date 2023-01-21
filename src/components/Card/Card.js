import axios from "axios";
import React, { useEffect, useState } from "react";
import { getColors } from "../../utils/ReturnCardColor";
import { getTypes } from "../../utils/ReturnTypes";
import pokebal from "../../img/pokebal.png";
import { useNavigate } from "react-router-dom";
import { goToPokemonDetails } from "../../routes/Coordinator";
import {
  Capturar,
  CardItem,
  Details,
  DetailsContent,
  Id,
  Left,
  Name,
  PokebalContent,
  PokeImage,
  Right,
  Type,
  TypeContent,
} from "./styled";

const Card = ({ url }) => {
  const [pokemon, setPokemon] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = async () => {
    try {
      const response = await axios.get(url);
      setPokemon(response.data);
      //console.log(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log("Erro ao pegar dados do Pokemon!");
      console.log(error);
    }
  };

  const cardColor = () => {
    const pokemonTypes = pokemon.types;
    const firstPokemonType = pokemonTypes ? pokemonTypes[0] : {};
    const firstPokemonTypeName = firstPokemonType.type?.name;
    return getColors(firstPokemonTypeName);
  };

  return (
    <CardItem color={cardColor()}>
      <Left>
        <Id>#{pokemon.id}</Id>
        <Name>{pokemon.name}</Name>
        <TypeContent>
          {pokemon.types?.map((pokemonType, index) => {
            const imageTypeLink = getTypes(pokemonType.type.name);
            return <Type key={index} src={imageTypeLink} alt="" />;
          })}
        </TypeContent>
        <DetailsContent>
          <Details
            onClick={() => {
              goToPokemonDetails(navigate, pokemon.name);
            }}
          >
            Detalhes
          </Details>
          <Capturar>Capturar!</Capturar>
        </DetailsContent>
      </Left>
      <Right>
        <PokeImage
          src={pokemon.sprites?.other["official-artwork"]["front_default"]}
        />
        <PokebalContent src={pokebal} />
      </Right>
    </CardItem>
  );
};

export default Card;
