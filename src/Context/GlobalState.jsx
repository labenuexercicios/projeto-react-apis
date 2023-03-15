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
    const newPokemon = Pokedex.find(el => el.id === pokemon.id)
    if (newPokemon === undefined) {
      setPokedex([...Pokedex, pokemon])
      console.log(pokemon)
    } else {
      window.alert('Pokemon já capturado!')
    }
  }

  const removeFromPokedex = pokemon => {
    const newPokedex = []
    Pokedex.map(el => {
      if(el.id !== pokemon.id) {
        newPokedex.push(el)
      }
    })
    setPokedex(newPokedex)
    window.alert(`${pokemon.name} removido da Pokedex!`)
  }

  const context = {
    Pokemons: Pokemons,
    Pokedex,
    setPokedex,
    addToPokedex,
    removeFromPokedex
  }

  return(
    <GlobalContext.Provider value={context}>
      {props.children}
    </GlobalContext.Provider>
  )
}