import React, { useEffect, useState } from 'react'
import { StyledPokemonCard, StyledButtons, ButtonDetails, ButtonCapturar } from './PokemonCardStyle'
import { goToPokedexDetailPage } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'


export default function PokemonCard(props) {

console.log(props)

  const navigate = useNavigate()


  return (
    <StyledPokemonCard>
      <img src={props.pokemon.sprites} alt={props.pokemon.name} />
      <p>{props.pokemon.name}</p>
      <StyledButtons>
        <ButtonDetails onClick={() => goToPokedexDetailPage(navigate)}>Details</ButtonDetails>
        <ButtonCapturar>Capturar!</ButtonCapturar>
      </StyledButtons>
    </StyledPokemonCard>
  )
}
