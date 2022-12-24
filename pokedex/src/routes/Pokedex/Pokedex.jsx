import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../contexts/GlobalContext'
import CardPokemon from '../CardPokemon/CardPokemon'
import Header from '../Header/Header' 
import { MainPokedex,TituloPokedex } from './Pokedex.styled'

const Pokedex = (props) => {
  const context = useContext(GlobalContext)
  const {pokedex} = context

  return (
    <>
    <Header isPokedex={true}/>
    <MainPokedex>
    <TituloPokedex><h1>Meus Pokémons</h1><h1>({pokedex.length})</h1></TituloPokedex>
      {pokedex && pokedex.map((pokemon)=>{
      return  <CardPokemon
        pokemon={pokemon}
        isPokedex={true}
        key={pokemon.url}
        pokemonUrlCada2={pokemon.url}
        
        />
      })}
    </MainPokedex>
    </>
  )
}

export default Pokedex