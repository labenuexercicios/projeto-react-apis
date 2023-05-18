<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { Header } from '../../Components/Header/Header';
=======
import { Header } from '../../Components/Header/Header';
import { useEffect, useState } from 'react';
>>>>>>> 633d06f5575c7ce7bd61d8b1acfd391643988ff6
import { PokeCard } from '../../Components/PokemonCard/PokemonCard';


export const Pokedex = () => {
  const [capturedPokemon, setCapturedPokemon] = useState([]);

  useEffect(() => {
<<<<<<< HEAD
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
=======
    const pokemon = localStorage.getItem('capturedPokemon');
    if (pokemon) {
      try {
        const parsedPokemon = JSON.parse(pokemon);
        setPokemonList(parsedPokemon);
      } catch (error) {
        console.error('Error parsing captured Pokemon:', error);
      }
    } else {
      localStorage.setItem('capturedPokemon', JSON.stringify([]));
    }
  }, []);

  const removePokemon = (id) => {
    const filteredList = pokemonList.filter((pokemon) => pokemon.id !== id);
    setPokemonList(filteredList);
    localStorage.setItem('capturedPokemon', JSON.stringify(filteredList));
  };

  return (
    <div>
      <Header />
      <ul>
        {pokemonList &&
          pokemonList.map((pokemon) => (
            <PokeCard
              pokemons={{ data: pokemon }}
              key={pokemon.id}
              captured={true}
              onRemove={() => removePokemon(pokemon.id)}
            />
          ))}
      </ul>
>>>>>>> 633d06f5575c7ce7bd61d8b1acfd391643988ff6
    </div>
  );
};