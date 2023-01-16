import React, { useEffect, useState } from "react";
import axios from "axios";

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [pokemon, setPokemon] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = async () => {
    try {
      const response = await axios.get(BASE_URL);
      setPokemon(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log("Erro ao pegar dados do Pokemon!");
      console.log(error);
    }
  };

  return (
    <UserContext.Provider value={{ pokemon, isLoading }}>
      {children}
    </UserContext.Provider>
  );
};
