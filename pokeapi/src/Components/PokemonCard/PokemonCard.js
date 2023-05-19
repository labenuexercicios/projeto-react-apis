import { useEffect, useState } from "react";
import pokeball from "../../assets/pokebola.png";
import { getTypes } from "../../utils/PokeType";
import { getColors } from "../../utils/TypeColor";

import {
  CatchButton,
  Container,
  Containerimg,
  Pokeball,
  Pokemon,
  PokemonName,
  PokemonNumber,
  TypesContainer,
} from "./styledPokeCard";

export const PokemonCard = ({ pokemons, onRemove,  onCapturemsg }) => {
  const [captured, setCaptured] = useState(false);

  useEffect(() => {
    const capturedPokemons = JSON.parse(localStorage.getItem("capturedPokemons")) || {};
    if (capturedPokemons[pokemons.id]) {
      setCaptured(true);
    }
  }, [pokemons.id]);

  const types = pokemons.types.map((type) => getTypes(type.type.name));
  const color = pokemons.types.map((typecolor) => getColors(typecolor.type.name));

  const capturePokemon = () => {
    setCaptured(true);
    const capturedPokemons = JSON.parse(localStorage.getItem("capturedPokemons")) || {};
    capturedPokemons[pokemons.id] = pokemons;
    localStorage.setItem("capturedPokemons", JSON.stringify(capturedPokemons));
    onCapturemsg()
  };

  const releasePokemon = () => {
    setCaptured(false);
    const capturedPokemons = JSON.parse(localStorage.getItem("capturedPokemons")) || {};
    delete capturedPokemons[pokemons.id];
    localStorage.setItem("capturedPokemons", JSON.stringify(capturedPokemons));
    onRemove(pokemons.id);
  };
  
  /* console.log(pokemons) */
  return (
    <Container color={color}>
      <div>
        <PokemonNumber>{pokemons.id}</PokemonNumber>
        <PokemonName>{pokemons.name}</PokemonName>
        <TypesContainer>
          {types.map((typeUrl) => (
            <img src={typeUrl} alt="" key={typeUrl} />
          ))}
        </TypesContainer>
        <a href={`/list/detail/${pokemons.id}`}>See details</a>
      </div>
      <Containerimg>
        <Pokemon src={pokemons.sprites.front_default} alt="" />
        {captured ? (
          <CatchButton onClick={releasePokemon}>Release!</CatchButton>
        ) : (
          <CatchButton onClick={capturePokemon}>Capture!</CatchButton>
        )}
      </Containerimg>
      <Pokeball src={pokeball} alt="pokeball" />
    </Container>
  );
};