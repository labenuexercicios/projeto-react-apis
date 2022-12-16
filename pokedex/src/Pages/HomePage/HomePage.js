import axios from 'axios'
import React, { useEffect, useState } from 'react'
import HeaderHome from '../../Components/Headers/HeaderHome'
import PokemonCard from '../../Components/PokemonCard/PokemonCard'
import { Container, CardsContainer } from './styles'

function HomePage(props) {

  const [pokemons, setPokemons] = useState([])   

  useEffect(() => {
    getPokemons()
  }, [])

  const getPokemons = async () => {
    try {      

      const response = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=99&offset=0")
            
      setPokemons(response.data.results)            

    } catch (error) {
      console.log(error)
    }
  }    

  return (
    <Container>   
      <HeaderHome/>   
      <CardsContainer>  
        {
          pokemons.map((pokemon) => {            
            return <PokemonCard pokemon={pokemon} addToPokedex={props.addToPokedex}/>
          })
        }   
      </CardsContainer>
    </Container>
  )
}

export default HomePage