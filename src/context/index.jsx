import axios from "axios";
import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const baseUrl = "https://pokeapi.co/api/v2/pokemon/";
  const [globaLimit, setGlobalLimit] = useState(20);
  const globalOffSet = !currentPage ? 1 : (currentPage - 1) * globaLimit;
  const [pokemons, setPokemons] = useState([]);
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getPokemons(`${baseUrl}?limit=${globaLimit}&offset=${globalOffSet}`);
    setIsLoading(false);
  }, [currentPage]);

  const getPokemons = async (url) => {
    try {
      let response = await axios.get(url);
      setCount(response.data.count);
      setPokemons(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const [pokemon, setPokemon] = useState([]);

  const getPokemon = async (url) => {
    try {
      const response = await axios.get(url);
      setPokemon(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const [pokedex, setPokedex] = useState(
    JSON.parse(
      localStorage.getItem("pokedex") == null
        ? "[]"
        : localStorage.getItem("pokedex")
    )
  );

  return (
    <GlobalContext.Provider
      value={{
        pokemons,
        count,
        globaLimit,
        baseUrl,
        setCurrentPage,
        currentPage,
        isLoading,
        getPokemon,
        setPokemon,
        pokemon,
        setPokedex,
        pokedex,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalContextProvider;
