import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../../Components/Header/Header';
import { BackeFrontImg, BaseList, BaseStates, CardBack, CardContainer, CardFront, ContainerDetails, FrontBackImg, Info, ListItem, Moves, MovesPoke, NameImg, PokeballD, Pokemon, PokemonNameD, ProgressBar, ProgressFill, Title } from './styledDetails';
import { PokemonName } from '../../Components/PokemonCard/styledPokeCard';
import pokeball from '../../assets/pokebola.png';


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
  console.log(pokemon)
  
  return (
    <div>
      <Header />
      <ContainerDetails >
          <CardContainer>
           
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
          <PokemonNameD>{pokemon.name}</PokemonNameD>
          <Pokemon src={pokemon.sprites.front_default} alt={pokemon.name} />
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
          <PokeballD src={pokeball} alt="pokeball" />
        </CardContainer>
      </ContainerDetails>
    </div>
  );
};