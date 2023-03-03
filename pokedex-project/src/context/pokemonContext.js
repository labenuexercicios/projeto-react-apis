import axios from "axios";
import { createContext } from "react";
import { useState, useEffect } from "react";

// criar uma variavel que receba a criaçao do hook
export const PokemonContext = createContext();
const PokemonProvider = ({ children }) => {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    getPokemon();
  }, []);

  const getPokemon = () => {
    let pokemonPoint = [];
    for (let i = 1; i < 21; i++) {
      const lenght = i;
      pokemonPoint.push(`https://pokeapi.co/api/v2/pokemon/${lenght}/`);
      //   console.log(pokemonPoint) acessando todas as apis
    }
    axios
      .all(pokemonPoint.map((element) => axios.get(element)))
      .then((res) => setPokemon(res))
      .catch((erro) => console.log(erro));
  };

  return (
    <PokemonContext.Provider value={{ pokemon, setPokemon }}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
