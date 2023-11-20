import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "./constants/url";
import { GlobalContext } from "./contexts/GlobalContext";
import Router from "./routes/Router";
import React from "react";


export default function App() {
  const [pokelist, setPokelist] = useState([]);
  const [pokedex, setPokedex] = useState([]);
  const  [pokemonDetailed, setPokemonDetailed ] = useState([]);
  const [openModal, setOpenModal] = useState(false)
  const [pokemonExistsInPokedex, setPokemonExistsInPokedex] = useState(false)

  useEffect(() => {
    fetchPokelist();
  }, []);
//

//
  const fetchPokelist = async () => {
    try {
      const response = await axios.get(BASE_URL);
      setPokelist(response.data.results);
      
    } catch (error) {
      console.log("Erro ao buscar lista de pokemons");
      
    }
  };


  const verifyPokemon = (pokemon) => {
    const isAlreadyOnPokedex = pokedex.find(
      (pokemonInPokedex) => pokemonInPokedex.name === pokemon.name
    );
      if (!isAlreadyOnPokedex) {
setPokemonExistsInPokedex(true);
      }else if(isAlreadyOnPokedex) {
        setPokemonExistsInPokedex(false);
      }

  };


  const addToPokedex = (pokemonToAdd) => {
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
 

  const context = {
    verifyPokemon: verifyPokemon,
    pokelist: pokelist,
    addToPokedex: addToPokedex,
    pokedex: pokedex,
    removeFromPokedex: removeFromPokedex,
    openModal,
    setOpenModal,
    pokemonDetailed,
    setPokemonDetailed,
    pokemonExistsInPokedex,
    setPokemonExistsInPokedex
  };

  return (
      
      <GlobalContext.Provider value={context}>
        <Router />
      </GlobalContext.Provider>
  );
}
