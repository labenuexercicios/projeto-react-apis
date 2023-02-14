import axios from "axios";
import { GlobalContext } from "./GlobalContext";
import { useEffect, useState } from "react";

export default function GlobalState(props) {

  const [Pokemons, setPokemons] = useState([])
  const [Pokedex, setPokedex] = useState([])

  useEffect(() => {getPokemonApi()},[])

  function getPokemonApi() {
    axios.get(`https://pokeapi.co/api/v2/pokemon`)
      .then(response => {
        setPokemons(response.data.results)
      })
      .catch(error => console.log(error))
  }

  const addToPokedex = (pokemon) => {
    setPokedex([...Pokedex, pokemon])
    console.log(Pokedex)
  }

  const context = {
    Pokemons: Pokemons,
    Pokedex,
    setPokedex,
    addToPokedex
  }

  return(
    <GlobalContext.Provider value={context}>
      {props.children}
    </GlobalContext.Provider>
  )
}