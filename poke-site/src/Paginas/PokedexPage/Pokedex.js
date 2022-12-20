import React, { useContext } from 'react'
import Header from "../../componentes/Header/Header"
import PokedexStyle from './Pokedex.style'
import { GlobalContext } from '../../Rotas/Context/GlobalContext'

const Pokedex = () => {
  const context = useContext(GlobalContext) 
  const { pokemon,
    setPokemon,
    arrayPokedex,
    setArrayPokedex,
    adcPokedex,} = context
  return (
    <>
      <Header />
      <PokedexStyle>
        <div className='margin-total'>
          <h1>Meus Pokemons</h1>
        </div>
        < div className='cards' >
       {/* {arrayPokedex.map(()=>)} */}
        </div>
      </PokedexStyle>
    </>
  )
}

export default Pokedex