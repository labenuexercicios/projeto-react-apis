import React, { useEffect, useState } from 'react';
import { Header } from '../../Components/Header/Header';
import { PokeCard } from '../../Components/PokemonCard/PokemonCard';


export const Pokedex = () => {
  const [capturedPokemon, setCapturedPokemon] = useState([]);

  useEffect(() => {
    // Retrieve the captured Pokémon array from localStorage
    const storedCapturedPokemon = localStorage.getItem('capturedPokemon');
    if (storedCapturedPokemon) {
      const parsedCapturedPokemon = JSON.parse(storedCapturedPokemon);
      setCapturedPokemon(parsedCapturedPokemon);
    }
  }, []);

  return (
    <div>
      <Header />
      {capturedPokemon.map((pokemon) => (
        <PokeCard key={pokemon.id} pokemons={{ data: { ...pokemon } }} />
      ))}
    </div>
  );
};