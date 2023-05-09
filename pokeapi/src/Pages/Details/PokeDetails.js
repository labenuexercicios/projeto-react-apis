import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../../Components/Header/Header';
import { BaseStates, CardBack, CardContainer, CardFront, ContainerDetails, FrontBackImg, Info, Moves, NameImg, Pokemon } from './styledDetails';


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

  return (
    <div>
      <Header />
      <ContainerDetails>
          <CardContainer>
           
            <FrontBackImg>
            <CardFront>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </CardFront>
            <CardBack>
              <img src={pokemon.sprites.back_default} alt={pokemon.name} />
            </CardBack>
          </FrontBackImg>
          <BaseStates>
          <ul>
            {pokemon.types.map((type) => (
              <li key={type.slot}>{type.type.name}</li>
            ))}
          </ul>
          </BaseStates>
          <Info>
          <NameImg>
          <h1>{pokemon.name}</h1>
          <Pokemon src={pokemon.sprites.front_default} alt={pokemon.name} />
          </NameImg>
          <Moves>
              <p>moves</p>
          </Moves>
          </Info>
        </CardContainer>
      </ContainerDetails>
    </div>
  );
};