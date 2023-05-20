import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../../Components/Header/Header';
import { BackeFrontImg, BaseList, BaseStates, CardBack, CardContainer, CardFront, ContainerDetails, FrontBackImg, Info, ListItem, Moves, MovesPoke, NameImg, PokeballD, Pokeimg, Pokemon, PokemonNameD, ProgressBar, ProgressFill, Title } from './styledDetails';
import { PokemonName, PokemonNumber, TypesContainer } from '../../Components/PokemonCard/styledPokeCard';
import pokeball from '../../assets/pokebola.png';
import { getTypes } from '../../utils/PokeType';
import { getColors } from '../../utils/TypeColor';


export const PokeDetails = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const pokemonId = id;

  useEffect(() => {
    async function fetchPokemon() {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
      const data = await response.json();
      setPokemon(data);
    }
    fetchPokemon();
  }, [pokemonId]);

  if (pokemon === null) {
    return <div>Carregando...</div>;
  }
  const types = pokemon.types.map((type) => getTypes(type.type.name));
  const color = pokemon.types.map((typecolor) => getColors(typecolor.type.name));
  return (
    <div>
      <Header />
      <ContainerDetails >
        <h1>Detalhes</h1>
          <CardContainer color={color}>
           
            <FrontBackImg>
            <CardFront>
              <BackeFrontImg src={pokemon.sprites.front_default} alt={pokemon.name} />
            </CardFront>
            <CardBack>
              <BackeFrontImg src={pokemon.sprites.back_default} alt={pokemon.name} />
            </CardBack>
          </FrontBackImg>
          <BaseStates>
          <Title>Base States</Title>
          <BaseList>
            {pokemon.stats.map((type) => (
              <ListItem key={type.slot}>{type.stat.name}:{type.base_stat}<ProgressBar>
                <ProgressFill value={type.base_stat} />
                </ProgressBar>
                </ListItem>
            ))}
          </BaseList>
          </BaseStates>
          <Info>
          <NameImg>
          <PokemonNumber>#{pokemon.id}</PokemonNumber>
          <PokemonNameD>{pokemon.name}</PokemonNameD>
          <TypesContainer>
          {types.map((typeUrl) => (
            <img src={typeUrl} alt="" key={typeUrl} />
          ))}
        </TypesContainer>
          
          </NameImg>
          <Moves>
          <ul>
            <MovesPoke>{pokemon.moves[0].move.name}</MovesPoke>
            <MovesPoke>{pokemon.moves[1].move.name}</MovesPoke>
            <MovesPoke>{pokemon.moves[2].move.name}</MovesPoke>
            <MovesPoke>{pokemon.moves[3].move.name}</MovesPoke>
            <MovesPoke>{pokemon.moves[4].move.name}</MovesPoke>
            <MovesPoke>{pokemon.moves[5].move.name}</MovesPoke>
          </ul>
          </Moves>
          </Info>
          <Pokeimg>
          <PokeballD src={pokeball} alt="pokeball" />
          </Pokeimg>
          <Pokemon src={pokemon.sprites.front_default} alt={pokemon.name} />
        </CardContainer>
      </ContainerDetails>
    </div>
  );
};