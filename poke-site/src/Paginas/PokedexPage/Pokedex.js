import React from 'react'
import Header from "../../componentes/Header/Header"
import Pokecard from '../../PokeCard/PokeCard'
import PokedexStyle from './Pokedex.style'
const Pokedex = () => {
  return (
    <>
      <Header />
      <PokedexStyle>
        <div className='margin-total'>
          <h1>Meus Pokemons</h1>
        </div>
        < div className='cards' >
        <Pokecard />
        <Pokecard />
        </div>
      </PokedexStyle>
    </>
  )
}

export default Pokedex