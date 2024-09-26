import { HomeContainer, Title } from './style'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { CardPokedex } from '../../components/cardPokemonsHome'


export const Home = () => {
  const [pokemonRequest, setPokemonRequest] = useState([])

  const handleAPI = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon'
  })

  const getRequestPokedex = async () => {
    const response = await handleAPI.get()
    const data = await response.data.results
    setPokemonRequest(data)
  }

  useEffect(() => {
    getRequestPokedex()
  }, [])

  

  return (
    <>
      <HomeContainer>
        <Title />
        <div className='ContainerPokedex'>
          {pokemonRequest.map(pokemon => {
            return <CardPokedex key={pokemon.name} pokemon={pokemon} />
          })}
        </div>
      </HomeContainer>
    </>
  )
}