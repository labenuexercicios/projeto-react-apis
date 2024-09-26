import React, { useReducer, useState } from 'react'
import { Context } from '../createContext/GlobalContext'

  const initialState = {
    pokemons1:[]
  }

  const pokedexFunction = (state,action)=>{
    if(action.type === 'add'){
    const indexPokemonExistente = state.pokemons1.findIndex(pokemon=> pokemon.id === action.pokemons1.id );
      const pokemonExistente = state.pokemons1[indexPokemonExistente]
      let updatepokemons1
      updatepokemons1 = pokemonExistente ? state.pokemons1 :state.pokemons1.concat(action.pokemons1)
      return {
        pokemons1:updatepokemons1
      }
    }else if(action.type === "remove"){
      const removePokemon = state.pokemons1.filter(pokemon => pokemon.id !== action.pokemons1.id)
      return{
        pokemons1:removePokemon
      }
    }
    return initialState;
  };


  export const ContextProvider = ({children}) => {
    const [detalhes,setDetalhes]= useState([])
  const [pokemonState,dispatch] = useReducer(pokedexFunction,initialState)

  const addPokemon = (pokemon) =>{
  dispatch({type: "add", pokemons1:pokemon})
}

  const removePokemon = (pokemon) =>{
  dispatch({type: "remove", pokemons1:pokemon})
}
  
const context = {
  pokemons1: pokemonState.pokemons1,
  addPokemon:addPokemon,
  removePokemon:removePokemon,
  detalhes:detalhes,
  setDetalhes:setDetalhes
}

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  )
}
