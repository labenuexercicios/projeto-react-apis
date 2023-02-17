import React, { useContext } from 'react'
import { Context } from '../../context/createContext/GlobalContext'

export const Pokedex = () => {

  const {pokemons1,removePokemon}= useContext(Context)

  return (
    <div>
      {pokemons1.map((pokemon)=>{
        return (
        <>
        <h1>{pokemon.name}</h1>
        <button onClick={()=>removePokemon(pokemon)}>remover</button>
        </>
        )
      })}
      {console.log(pokemons1)}
    </div>
  )
}

