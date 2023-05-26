import axios from 'axios'
import { useEffect, useState } from 'react'

export const GlobalState = () => {

  const [pokemons, setPokemons] = useState([])
  const [pokedex, setPokedex] = useState([])
  const [flow, setFlow] = useState(2)
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenDel, setIsOpenDel] = useState(false)
  const [isOpenContact, setIsOpenContact] = useState(false)
  const [completed, setCompleted] = useState(0);
  const [isOpenFade, setIsOpenFade] = useState(false)

  console.log(isOpen)

  useEffect(() => {
    getPokemon()
  }, [])

  const getPokemon = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=21`)
      setPokemons(response.data.results)
    } catch (error) {
      console.log(error.response)
    }
  }

  const addPokedex = (pokemon) => {
    const addPokemon = [...pokedex.sort((a, b) => {
      return a.id - b.id
    })]
    const newPokemon = addPokemon.find((item) => item.name === pokemon.name)
    if (!newPokemon) {
      const pokemonAdd = { ...pokemon }
      addPokemon.push(pokemonAdd)
    }
    setPokedex(addPokemon)
    setIsOpen(true)
    localStorage.setItem('poke', JSON.stringify(pokemons))
    localStorage.setItem('pokedex', JSON.stringify(addPokemon))
  };

  const removePokedex = (pokemon) => {
    const filterDelete = pokedex.filter((poke) => poke.id !== pokemon.id)
    const newReturnPokemons = [...pokemons.sort((a, b) => {
      return a.id - b.id
    }) ]
    newReturnPokemons.push(pokemon)
    localStorage.setItem('poke', JSON.stringify(pokemons))
    localStorage.setItem('pokedex', JSON.stringify(filterDelete))
    setPokedex(filterDelete)
    setIsOpenDel(true)
  }

  const openContact = () =>{
    setIsOpenContact(true)
  }

  return {
    pokemons,
    setPokemons,
    getPokemon,
    pokedex,
    setPokedex,
    addPokedex,
    removePokedex,
    flow,
    setFlow,
    isOpen,
    setIsOpen,
    isOpenDel,
    setIsOpenDel,
    isOpenContact,
    setIsOpenContact,
    openContact,
    completed,
    setCompleted,
    isOpenFade,
    setIsOpenFade
  }
}

export default GlobalState