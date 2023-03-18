import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const PokemonContext = createContext()

const PokemonProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([])
  const [pokemonsCopytoDetahes, setPokemonsCopytoDetahes] = useState([])

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    const endPoints = []
    for (let i = 1; i <= 802; i++) {
      endPoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
    }
    const fetchPokemons = async () => {
      try {
        const responses = await axios.all(
          endPoints.map(endpoint => axios.get(endpoint))
        )
        const data = await axios.all(
          responses.map(async response => {
            const pokemon = response.data
            const speciesResponse = await axios.get(pokemon.species.url)
            const species = await speciesResponse.data
            return {
              ...pokemon,
              capture_rate: species.capture_rate
            }
          })
        )
        const savedPokedex = localStorage.getItem('pokedex')
        if (savedPokedex) {
          const pokedex = JSON.parse(savedPokedex)
          const filteredData = data.filter(
            pokemon => !pokedex.some(p => p.name === pokemon.name)
          )
          setPokemons(filteredData)
        } else {
          setPokemons(data)
        }
        setPokemonsCopytoDetahes(data)
      } catch (error) {
        console.log(error)
        setError(true)
      }
      setIsLoading(false)
    }
    fetchPokemons()
  }, [])

  const removeFromPokemon = id => {
    const newPokedex = pokemons.filter(pokemon => {
      return pokemon.id !== id
    })
    setPokemons(newPokedex)
  }

  const addToPokemon = id => {
    const updatedPokemons = [...pokemons, id].sort((a, b) => a.id - b.id)
    setPokemons(updatedPokemons)
  }

  const calculateCatchChance = captureRate => {
    return (captureRate / 255) * 100
  }
  const addMultPokemon = ids => {
    const updatedPokemons = [...pokemons, ...ids].sort((a, b) => a.id - b.id)
    setPokemons(updatedPokemons)
  }

  return (
    <PokemonContext.Provider
      value={{
        isLoading,
        error,
        pokemons,
        setPokemons,
        removeFromPokemon,
        addToPokemon,
        pokemonsCopytoDetahes,
        calculateCatchChance,
        addMultPokemon
      }}
    >
      {children}
    </PokemonContext.Provider>
  )
}
export default PokemonProvider
