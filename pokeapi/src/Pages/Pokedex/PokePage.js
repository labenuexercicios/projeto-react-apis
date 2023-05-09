import React, { useState } from 'react';
import { Header } from '../../Components/Header/Header';
import { PokeCard } from '../../Components/PokemonCard/PokemonCard';

export const PokedexList = () => {
  const [capturedPokemons, setCapturedPokemons] = useState([]);

  const capturePokemon = (pokemon) => {
    setCapturedPokemons([...capturedPokemons, pokemon]);
  }

  return (
    <div>
      <Header/>
      <h2>Pokemons Capturados</h2>
      <div>
        {capturedPokemons.map((pokemon) => (
          <PokeCard key={pokemon.id} pokemons={{ data: pokemon }} />
        ))}
      </div>
    </div>
  );
}
