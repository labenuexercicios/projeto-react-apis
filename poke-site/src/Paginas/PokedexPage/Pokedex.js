import React, { useContext, useEffect, useState } from 'react'
import Pokecard from '../../PokeCard/PokeCard.js'
import HomePageStyle from '../HomePage/HomePage.style'
import Header from "../../componentes/Header/Header"
import { GlobalContext } from '../../Rotas/Context/GlobalContext.js'


const Pokedex = () => {

  const context = useContext(GlobalContext)

  const { resposta,
    todosPokemons,
    arrayPokedex } = context

  console.log(arrayPokedex)
  return (

    <HomePageStyle>
      <Header />
    
      <div className='cor-da-pagina'>
        <div className='margem-total'>
          <h1>Pokedex</h1>
        </div>
        <div className='pagina-dos-cards' >
          {arrayPokedex.map((propsPokemon) => {
            return (<Pokecard
              propsPokemon={propsPokemon}
            />)

          })}
        </div>
      </div>

    </HomePageStyle>

  )
}
export default Pokedex 