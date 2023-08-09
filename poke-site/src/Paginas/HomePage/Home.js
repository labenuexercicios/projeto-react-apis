import React, { useContext, useState } from 'react'
import Pokecard from '../../PokeCard/PokeCard.js'
import HomePageStyle from './HomePage.style.js'
import Header from "../../componentes/Header/Header"
import { GlobalContext } from '../../Rotas/Context/GlobalContext.js'
import {UsarModal } from '../../componentes/Modal'


const Home = () => {
 

  const context = useContext(GlobalContext)

  const { resposta,
    todosPokemons,

  } = context


  return (


      <HomePageStyle>
        <Header />

        <div className='cor-da-pagina'>

          <div className='margem-total'>
            <h1>Todos os Pokemons</h1>
          </div>
          <div className='pagina-dos-cards' >
            {resposta.map((propsPokemon) => {
              return (<Pokecard todosPokemons={todosPokemons}
                propsPokemon={propsPokemon}
                key={propsPokemon.name}
              

              />)

            })}
          </div>

        </div>

      </HomePageStyle>
 
  )
}
export default Home