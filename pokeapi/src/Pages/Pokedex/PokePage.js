import { Header } from "../../Components/Header/Header";
import React from "react";
import { PokemonCard } from "../../Components/PokemonCard/PokemonCard";

export const Pokedex = () => {
  const [capturedPokemons, setCapturedPokemons] = React.useState({});

  React.useEffect(() => {
    const storedCapturedPokemons = JSON.parse(localStorage.getItem("capturedPokemons")) || {};
    setCapturedPokemons(storedCapturedPokemons);
  }, []);

  const handleRemovePokemon = (pokemonId) => {
    const updatedCapturedPokemons = { ...capturedPokemons };
    delete updatedCapturedPokemons[pokemonId];
    setCapturedPokemons(updatedCapturedPokemons);
    localStorage.setItem("capturedPokemons", JSON.stringify(updatedCapturedPokemons));
  };
  
  return (
    <div>
      <Header />
      <h1>My Pokédex</h1>
      {Object.values(capturedPokemons).map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemons={pokemon}
          onRemove={handleRemovePokemon}
        />
      ))}
    </div>
  );
};