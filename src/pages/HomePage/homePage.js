import React, { useContext } from 'react'
import Header from '../../components/Header/header'
import PokemonCard from "../../components/PokemonCard/pokemonCard"
import { GlobalContext } from '../../context/GlobalContext'
import { CardsContainer } from './style'

const HomePage = () => {

  const context = useContext(GlobalContext)
  const {pokemon} = context

  return (
    <div>
      <Header />
      <CardsContainer>
      <h1 className='title'> Todos os Pokémons </h1>
      {pokemon && pokemon.map((pokemon) => {
      return <PokemonCard 
      key={pokemon.data.name}
      pokemon={pokemon}
      />
    })}
    </CardsContainer>
    </div>
  )
}

export default HomePage;
