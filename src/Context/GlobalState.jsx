import axios from "axios";
import { GlobalContext } from "./GlobalContext";
import { useEffect, useState } from "react";

export default function GlobalState(props) {

  const [Pokemons, setPokemons] = useState([])
  const [Pokedex, setPokedex] = useState([])
  const [location, setLocation] = useState(0)

  useEffect(() => {getPokemonApi()},[])

  function getPokemonApi() {
    axios.get(`https://pokeapi.co/api/v2/pokemon`)
      .then(response => {
        setPokemons(response.data.results)
      })
      .catch(error => console.err(error))
  }

  const addToPokedex = (pokemon) => {
    const newPokemon = Pokedex.find(el => el.id === pokemon.id)
    if (newPokemon === undefined) {
      setPokedex([...Pokedex, pokemon])
      window.alert(`${pokemon.name} capturado!`)
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
    location,
    setLocation,
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