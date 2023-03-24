import React, { useReducer, useState } from 'react'
import { Context } from '../createContext'

// ============== initial state useReducer ===================
const initialState = {
  pokemons: []
}

// ================= function pokedex useReducer =====================
const pokedexFunction = (state, action) => {
  if (action.type === 'ADD') {
    const existingPokemonIndex = state.pokemons.findIndex(
      pokemon => pokemon.id === action.pokemon.id
    )

    const existingPokemon = state.pokemons[existingPokemonIndex]
    let updatedPokemonItems

    updatedPokemonItems = existingPokemon
      ? state.pokemons
      : state.pokemons.concat(action.pokemon)

    return {
      pokemons: updatedPokemonItems
    }

  } else if (action.type === 'REMOVE') {
    const removePokemon =  state.pokemons.filter(pokemon => pokemon.id !== action.pokemon.id)
    return {
      pokemons: removePokemon
    }
  }

  return initialState
}




export const ContextProvider = ({ children }) => {
  const[showPokedex, setShowPokedex] = useState(true)

  // ============================== change button detail ========================================
  const[buttonPokedex, setButtonPokedex] = useState(true)
  const[buttonAllPokemons, setButtonAllPokemons] = useState(false)
  const[buttonHeaderDetail, setButtonHeaderDetail] = useState(false)
  // ============================================================================================
  const [details, setDetail] = useState([])
  const [showModalCapture, setShowModalCapture] = useState(false)
  const [showModalDelete, setShowModalDelete] = useState(false)
  const [pokedexState, dispatch] = useReducer(pokedexFunction, initialState)


  // ================== function ADD Pokemon ======================

  const AddPokemon = pokemon => {
    dispatch({ type: 'ADD', pokemon: pokemon })
  }

  // ================== function REMOVE Pokemon ===================

  const RemovePokemon = pokemon => {
    dispatch({type: 'REMOVE', pokemon: pokemon})
  }

  // ================= data ============================

  const context = {
    pokemons: pokedexState.pokemons,
    addPokemon: AddPokemon,
    putDetails: setDetail,
    details: details,
    setShowModalCapture: setShowModalCapture,
    showModalCapture: showModalCapture,
    RemovePokemon: RemovePokemon,
    setShowModalDelete: setShowModalDelete,
    showModalDelete: showModalDelete,
    setButtonHeaderDetail: setButtonHeaderDetail,
    buttonHeaderDetail: buttonHeaderDetail,
    setButtonPokedex: setButtonPokedex,
    buttonPokedex: buttonPokedex,
    setButtonAllPokemons: setButtonAllPokemons,
    buttonAllPokemons: buttonAllPokemons,
  }

  return <Context.Provider value={context}>{children}</Context.Provider>
}
