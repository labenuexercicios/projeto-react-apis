import { createContext, useState, useEffect, useContext } from 'react';

const PokemonContext = createContext({});

export const PokemonProvider = ({ children }) => {
    const [pokemons, setPokemons] = useState([]);
  
    useEffect(() => {
      async function loadStoragedData() {
        const items = localStorage.getItem('@Pokedex:pokemons');
  
        if (items) {
          setPokemons(JSON.parse(items));
        }
      }
  
      loadStoragedData();
    }, []);
  
    useEffect(() => {
      localStorage.setItem('@Pokedex:pokemons', JSON.stringify(pokemons));
    }, [pokemons]);
  
    const addToPokedex = (pokemonSelectedName) => {
      const checkPokemomExists = pokemons.findIndex(
        (element) => element.name === pokemonSelectedName
      );
  
      if (checkPokemomExists === -1) {
        setPokemons([...pokemons, pokemonSelectedName]);
      }
    };

    const removeToPokedex = (pokemonSelectedName) => {
      const items = pokemons.filter((pokemon) => pokemonSelectedName !== pokemon);
  
      setPokemons(items);
    };
  
    return (
      <PokemonContext.Provider
        value={{
          pokemons,
          removeToPokedex,
          addToPokedex
        }}
      >
        {children}
      </PokemonContext.Provider>
    );
  };

  export function usePokemon() {
    const context = useContext(PokemonContext);
  
    return context;
  }