import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { BASE_URL } from "../constants/Url";

export const GlobalContext = createContext();

export function GlobalContextProvider({ children }) {
  const [pokelist, setPokelist] = useState([]);
  const [pokedex, setPokedex] = useState([]);

  useEffect(() => {
    getPokelist();
  }, []);


  

  const getPokelist = () => {
    let listaPokemon = [];
    for (let i = 1; i < 152; i++) {
      listaPokemon.push(`${BASE_URL}/${i}/`);
    }
    axios
      .all(listaPokemon.map((pokemon) => axios.get(pokemon)))
      .then((res) => setPokelist(res))
      .catch((error) => console.log(error));
  };

  const addPokemon = (pokemon, onOpen, onClose) => {
    const isAlreadyOnPokedex = pokedex.find(
      (pokemonInPokedex) => pokemonInPokedex.data.name === pokemon.data.name
    );

    if (!isAlreadyOnPokedex) {
      onOpen();
      setTimeout(() => {
        onClose();
        const newPokedex = [...pokedex, pokemon];
        setPokedex(newPokedex);
      }, 1000);
    }
  };


  const removePokemon = (pokemon, onOpen, onClose) => {
    onOpen();
    setTimeout(() => {
      onClose();
      const newPokedex = pokedex.filter(
        (pokemonInPokedex) => pokemonInPokedex.data.name !== pokemon.data.name
      );

      setPokedex(newPokedex);
    }, 1000);
  };

  return (
    <GlobalContext.Provider
      value={{
        pokelist,
        setPokelist,
        getPokelist,
        addPokemon,
        removePokemon,
        pokedex,
        setPokedex,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
