import axios from "axios";
import { createContext } from "react";
import { useState, useEffect } from "react";

// criar uma variavel que receba a criaçao do hook
export const PokemonContext = createContext();
const PokemonProvider = ({ children }) => {
  const [pokemon, setPokemon] = useState([]);
  const [pokedex, setPokedex] = useState([]);

  useEffect(() => {
    getPokemon();
  }, []);

  const getPokemon = () => {
    let pokemonPoint = [];
    for (let i = 1; i < 22; i++) {
      const lenght = i;
      pokemonPoint.push(`https://pokeapi.co/api/v2/pokemon/${lenght}/`);
      //   console.log(pokemonPoint) acessando todas as apis
    }
    axios
      .all(pokemonPoint.map((element) => axios.get(element)))
      .then((res) => setPokemon(res))
      .catch((erro) => console.log(erro));
  };
  const addToPokedex = (pokemonToAdd) => {
    console.log("adicionado");
    const isAlreadyOnPokedex = pokedex.find(
      (pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name
    );

    if (!isAlreadyOnPokedex) {
      const newPokedex = [...pokedex, pokemonToAdd];
      setPokedex(newPokedex);
    }
  };
  const removeFromPokedex = (pokemonToRemove) => {
    const newPokedex = pokedex.filter(
      (pokemonInPokedex) => pokemonInPokedex.name !== pokemonToRemove.name
    );

    setPokedex(newPokedex);
  };

  return (
    <PokemonContext.Provider
      value={{
        pokemon,
        setPokemon,
        pokedex,
        setPokedex,
        addToPokedex,
        removeFromPokedex,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
