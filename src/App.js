import Router from './routes/router'
import { GlobalContext } from "./GlobalContext/GlobalContext"
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from './constants/BASE_URL'
import { ChakraProvider } from '@chakra-ui/react'


const App = () => {

  const [pokelist, setPokelist] = useState([])
  const [pokedex, setPokedex] = useState([])

  useEffect(() => {
    fetchPokemon()
  }, [])

  const fetchPokemon = async () => {
    try {
      const response = await axios.get(BASE_URL)
      setPokelist(response.data.results)
      console.log(pokelist,"aAQUIQUIQUIQ")

    } catch (error) {
      console.log(error)

    }
  }
  
  const addToPokedex = (pokemonToAdd) => {
    const isAlreadyOnPokedex = pokedex.find((pokemonInPokedex) => pokemonInPokedex.data?.name === pokemonToAdd.data?.name);

    if (!isAlreadyOnPokedex) {
      const newPokedex = [...pokedex, pokemonToAdd];
      setPokedex(newPokedex);
      takeOutHomePage(pokemonToAdd)
    }
  };

  const takeOutHomePage = (remove) => {
    const copyPokelist = []

    let pokemonRemove = pokelist.filter((pokeRemove) => {
      if (pokeRemove.name !== remove.data?.name) {
        copyPokelist.push(pokeRemove)
      }
    })
    setPokelist(copyPokelist)
  }

  const removeFromPokedex = (pokemonToRemove) => {
    const newPokedex = pokedex.filter((pokemonInPokedex) => pokemonInPokedex.data?.name !== pokemonToRemove.data?.name);
    setPokedex(newPokedex);
  };


  const context = {
    pokelist,
    setPokelist,
    pokedex,
    setPokedex,
    addToPokedex,
    removeFromPokedex

  }
  
  return (

    <GlobalContext.Provider value={context}>
      
        <Router />
     

    </GlobalContext.Provider>
  )
}

export default App
