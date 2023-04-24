import React from 'react'
import Header from '../../Components/Header/Header'
import { HomepageContainer } from './PokemonsHomePageStyle'
import PokemonCard from '../../Components/PokemonCard/PokemonCard'
import axios from 'axios'
import { AUTH_TOKEN } from '../../constants/AUTH_TOKEN'
import { BASE_URL } from '../../constants/BASE_URL'
import { useState, useEffect } from 'react'

export default function PokemonHomePage(props) {
  

  const [pokemonList, setPokemonList] = useState([])
 
  const getAllPokemons = async () => {
    try {
      const response = await axios.get(`${BASE_URL}pokemon`, {
        headers: {
          Authorization: AUTH_TOKEN,
        }
      })

      // console.log(response.data.results)
      setPokemonList(response.data.results)
    } catch (error) {
      console.error(error)
    }
  }



  const getPokemonDetails = async (url) => {
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: AUTH_TOKEN,
        }
      })

      // console.log(response.data)
      return response.data

    } catch (error) {
      console.error(error)
    }

  }

console.log(pokemonList)
  useEffect(() => { getAllPokemons() }, [])





  return (

    <HomepageContainer>
      <Header buttonPokedex='Pokedex'/>
      <div>
        {pokemonList.map(pokemon => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      
      
      </div>
    
    </HomepageContainer>

  )
}
