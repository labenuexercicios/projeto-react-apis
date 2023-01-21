import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getTypes } from "../../utils/ReturnTypes";
import Header from "../../components/Header/header";
import { UserContext } from "../../context/GlobalContext";
import { getColors } from "../../utils/ReturnCardColor";
import {
  Detail,
  Content,
  DetailsContent,
  SpriteContent,
  Sprites,
  Stats,
  RightContent,
  Name,
  TypeContent,
  Type,
  Moves,
  Move,
} from "./styled";

const DetailsPage = () => {
  const context = useContext(UserContext);
  const { pokemon } = context;
  const location = useLocation();
  const [pokemonDetails, setPokemonDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const pokemonName = location.pathname.substring(9, location.pathname.length);
  const pokemonSelected = pokemon.results?.filter(
    (pokemon) => pokemon.name === pokemonName
  );

  useEffect(() => {
    // setIsLoading(true);
    fetchPokemon();
  }, [pokemon]);

  const fetchPokemon = async () => {
    try {
      const response = await axios.get(pokemonSelected[0].url);
      setPokemonDetails(response.data);
      //console.log(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log("Erro ao pegar dados do Pokemon!");
      console.log(error);
    }
  };

  const cardColor = () => {
    const pokemonTypes = pokemonDetails.types;
    const firstPokemonType = pokemonTypes ? pokemonTypes[0] : {};
    const firstPokemonTypeName = firstPokemonType.type?.name;
    return getColors(firstPokemonTypeName);
  };

  return (
    <div>
      <Header page={"detail"} />
      <Content>
        <Detail>Detalhes</Detail>
        <DetailsContent color={cardColor()}>
          <Sprites>
            <SpriteContent></SpriteContent>
            <SpriteContent></SpriteContent>
          </Sprites>
          <Stats></Stats>
          <RightContent>
            #{pokemonDetails.id}
            <Name>{pokemonDetails.name}</Name>
            <TypeContent>
              {pokemonDetails.types?.map((pokemonType, index) => {
                const imageTypeLink = getTypes(pokemonType.type.name);
                return <Type key={index} src={imageTypeLink} alt="" />;
              })}
            </TypeContent>
            <Moves>
              Moves:
              {pokemonDetails.moves?.map((move, index) => {
                return (
                  <Move key={index}>{move.move.name.replace("-", " ")}</Move>
                );
              })}
            </Moves>
          </RightContent>
        </DetailsContent>
      </Content>
    </div>
  );
};

export default DetailsPage;
