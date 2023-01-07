import React from 'react'
import { useNavigate } from 'react-router-dom'
import PokemonCard from '../../components/Card/PokemonCard'
import Header from '../../components/Header/Header'
import { goToHomePage } from '../../routes/coordinator'
import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import { PokedexContainer } from './Pokedes.styled'

const Pokedex = ({name, pokemon, pokedex}) => {
  
  const stringSeta = "<"
  const navigate = useNavigate()
  

  return (
    <>
    
    <Header/>
    <PokedexContainer>

    <button className='button' onClick={() => goToHomePage(navigate)}>{stringSeta} Todos Pokémons</button>
    
    <h1>Meus Pokémons</h1>

    <Container maxWidth="false" >
        <Grid container spacing={3}>
          {pokedex && pokedex.map((pokemon) => (
            <Grid >
              <PokemonCard name={pokemon.data.name} type={pokemon.data.types} id={pokemon.data.id}/>
            </Grid>
          ))}

        </Grid>
      </Container>
          </PokedexContainer>
    </>
  )
}

export default Pokedex