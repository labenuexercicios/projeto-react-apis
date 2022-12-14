import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import PokemonCard from '../../Components/PokemonCard/PokemonCard'
import { Container, CardsContainer } from './styles'

function HomePage() {

  const [pokemons, setPokemons] = useState([]) 

  useEffect(() => {
    getPokemons()
  }, [])

  const getPokemons = async () => {
    try {

      const response = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0")
      
      setPokemons(response.data.results)            

    } catch (error) {
      console.log(error)
    }
  }    

  return (
    <Container>
      <Header/> 
      <CardsContainer>  
        {
          pokemons.map((pokemon) => {
            return <PokemonCard pokemon={pokemon}/>
          })
        }   
      </CardsContainer>
    </Container>
  )
}

export default HomePage