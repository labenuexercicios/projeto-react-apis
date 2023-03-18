import React, { createContext, useState, useEffect } from 'react'
import openPokebola from '../assets/openPokebola.png'
import closePokebola from '../assets/closePokebola.png'
import { Image } from '@chakra-ui/react'

export const PokedexContext = createContext()

const PokedexProvider = ({ children }) => {
  const [pokedex, setPokedex] = useState([])
  const [pokemonAmount, setPokemonAmount] = useState(0)
  pokedex.sort((a, b) => a.id - b.id)

  useEffect(() => {
    if (pokedex.length > 0) {
      localStorage.setItem('pokedex', JSON.stringify(pokedex))
    }
  }, [pokedex])

  useEffect(() => {
    if (pokemonAmount !== 0) {
      localStorage.setItem('pokemonAmount', JSON.stringify(pokemonAmount))
    }
  }, [pokemonAmount])

  useEffect(() => {
    const savedPokedex = localStorage.getItem('pokedex')
    const savedPokemonAmount = localStorage.getItem('pokemonAmount')
    if (savedPokedex) {
      setPokedex(JSON.parse(savedPokedex))
    }
    if (savedPokemonAmount) {
      setPokemonAmount(JSON.parse(savedPokemonAmount))
    }
  }, [])

  useEffect(() => {
    if (pokedex) {
      const amount = pokedex.reduce((accumulator, currentPokemon) => {
        return accumulator + currentPokemon.amount
      }, 0)
      setPokemonAmount(amount)
    }
  }, [pokedex])

  const addToPokedex = (pokemon, id) => {
    const newPokemon = { id: pokemon.id, name: pokemon.name, amount: 1 }    
    const pokedexPokemon = pokedex.find(pokemon => {
      return pokemon.id === id
    })
    if (pokedexPokemon) {
      const newPokedex = [...pokedex].map(pokemon => {
        if (pokemon.id === id) {
          return { ...pokemon, amount: pokedexPokemon.amount + 1 }
        } else {
          return pokemon
        }
      })
      setPokedex(newPokedex)
    } else {
      setPokedex([...pokedex, newPokemon])
    }
  }

  const removeFromPokedex = id => {
    const newPokedex = pokedex.filter(pokemon => {
      return pokemon.id !== id
    })
    setPokedex(newPokedex)
    const newPokemonAmount = pokemonAmount - 1
    setPokemonAmount(newPokemonAmount)
    localStorage.setItem('pokedex', JSON.stringify(newPokedex))
    localStorage.setItem('pokemonAmount', JSON.stringify(newPokemonAmount))
  }

  const clearPokedex = () => {
    setPokedex([])
    setPokemonAmount(0)
    localStorage.setItem('pokedex', JSON.stringify([]))
    localStorage.setItem('pokemonAmount', JSON.stringify(0))
  }

  const pokedexIcon = (mousePointer, mouseGrab) => {
    if (pokemonAmount === 0) {
      return (
        <Image
          src={openPokebola}
          alt='Open Pokebola'
          h='3em'
          mr='1em'
          cursor={`url(${mousePointer}), auto`}
          _active={{ cursor: `url(${mouseGrab}), auto` }}
        />
      )
    } else {
      return (
        <Image
          src={closePokebola}
          alt='Closed Pokebola'
          h='3em'
          mr='1em'
          cursor={`url(${mousePointer}), auto`}
          _active={{ cursor: `url(${mouseGrab}), auto` }}
        />
      )
    }
  }

  return (
    <PokedexContext.Provider
      value={{
        pokedex,
        setPokedex,
        addToPokedex,
        removeFromPokedex,
        clearPokedex,
        pokemonAmount,
        pokedexIcon
      }}
    >
      {children}
    </PokedexContext.Provider>
  )
}

export default PokedexProvider
