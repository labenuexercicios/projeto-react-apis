import { Header } from '../../Components/Header/Header'
import { useEffect, useState } from 'react';
import { PokeCard } from '../../Components/PokemonCard/PokemonCard';

export const Pokedex = ({ capturedPokemon }) => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const pokemon = localStorage.getItem('capturedPokemon');
    if (pokemon) {
      try {
        const parsedPokemon = JSON.parse(pokemon);
        setPokemonList(parsedPokemon);
        console.log(parsedPokemon)
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
        {pokemonList.map((pokemon) => (
          <PokeCard
            pokemons={{ data: pokemon }}
            key={pokemon.id}
            captured={true}
            onRemove={() => removePokemon(pokemon.id)}
          />
        ))}
      </ul>
    </div>
  );
};