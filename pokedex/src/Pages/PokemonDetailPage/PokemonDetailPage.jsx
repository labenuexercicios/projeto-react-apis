import React from 'react'
import { StyledPokedexPage } from './PokemonDetailPageStyle'
import { goToLastPage } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'
import Header from '../../Components/Header/Header'


export default function PokemonDetailPage() {

 
  return (
    <StyledPokedexPage >
      <Header buttonTeste='Adicionar/Remover' buttonBack='Voltar' />
      PokemonDetailPage
    
      </StyledPokedexPage>
  )
}
