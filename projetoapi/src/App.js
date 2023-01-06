import { Router } from "./routes/Router";
import React from "react";
import { GlobalContext } from "./Components/contexts/GlobalContext";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function App() {


  const [pokedex, setPokedex] = useState([])

  const [pokelist, setPokelist] = useState([]);



  useEffect(() => {
    getPokemons()
  }, [])

  const getPokemons = async () => {
    try {

      const response = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=24&offset=0")

      setPokelist(response.data.results)

    } catch (error) {
      console.log(error)
    }
  }

  const addToPokedex = (pokemonToAdd) => {
    const isAlreadyOnPokedex = pokedex.find(
      (pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name
    );

    if (!isAlreadyOnPokedex) {
      const newPokedex = [...pokedex, pokemonToAdd];
      setPokedex(newPokedex);
      alert("Adicionado na pokedex")
    }
  };


  const removeFromPokedex = (pokemonToRemove) => {
    const newPokedex = pokedex.filter((pokemonInPokedex) => pokemonInPokedex.name !== pokemonToRemove.name)
    window.localStorage.removeItem('pokedex')
    setPokedex(newPokedex)
  }

  const context = {
    pokedex,
    setPokedex,
    setPokelist,
    pokelist,
    addToPokedex,
    removeFromPokedex
  }




  return (
    <>
      <GlobalContext.Provider value={context}>
        <Router />
      </GlobalContext.Provider>

    </>

  );
}

export default App;
