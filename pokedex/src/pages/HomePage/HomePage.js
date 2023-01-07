import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import React, { useEffect, useState } from 'react'
import PokemonCard from '../../components/Card/PokemonCard'
import Header from '../../components/Header/Header'
import axios from 'axios'
import { HomePageContainer } from './HomePage.styled'
import { Button } from '@mui/material'
import { goToPokedex } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'

const HomePage = (props) => {

  
  const navigate = useNavigate()
  
  const [pokemons, setPokemons] = useState([])
  console.log(pokemons)
  useEffect(() => {
    getPokemons()
  }, [])

  const getPokemons = () => {
    let endpoints = []
    for( var i = 1; i < 50; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    }
    let response = axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res))
    }

  return (
    <HomePageContainer>
      <Header />
      <Button className="button" variant="contained" onClick={() => goToPokedex(navigate)}>POKEDEX</Button>

      <h1>Todos os Pokemons</h1>
      
      <Container maxWidth="false" >
        <Grid container spacing={3}>
          {pokemons.map((pokemon, key) => (
            <Grid key={key} >
              <PokemonCard name={pokemon.data.name} type={pokemon.data.types} id={pokemon.data.id}/>
            </Grid>
          ))}

        </Grid>
      </Container>
      

    </HomePageContainer>
  )
}

export default HomePage