import React from 'react'
import Header from '../../Components/Header/Header'
import { ContainerPokedexPage } from './PokedexPageStyle'
import PokemonCard from '../../Components/PokemonCard/PokemonCard'

export default function PokedexPage() {
  return (
    <ContainerPokedexPage>
      <Header buttonBack='Voltar'/>
      <div>
      <PokemonCard/>
      <PokemonCard/>
      <PokemonCard/>
      <PokemonCard/>
      <PokemonCard/>
      </div>
    </ContainerPokedexPage>
  )
}
