import React, { useContext } from 'react'
import Header from '../Header/Header'
import { MainHomePage,TituloHome } from './HomePage.styled'
import CardPokemon from '../CardPokemon/CardPokemon'
import { GlobalContext } from '../../contexts/GlobalContext'

const HomePage = () => {
  const context = useContext(GlobalContext)
  const {cardTop, pokedex} = context
  const filteredCardTop = () =>
    cardTop.filter(
      (pokemonInList) =>
        !pokedex.find(
          (pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name
        )
    );
const umArray = []
  return (
    <>
    <Header isHomePage={true}/>
    <MainHomePage>
      <TituloHome><h1>Todos Pokémons</h1></TituloHome>
      {filteredCardTop().map((pokemon) => (
          <CardPokemon
            pokemon={pokemon}
            isHomePage={true}
            key={pokemon.url}
            pokemonUrlCada={pokemon.url}
          />))}
    </MainHomePage>  
    </>
  )
}

export default HomePage