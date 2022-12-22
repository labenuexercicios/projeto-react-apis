import React from 'react'
import Rotas from "./Rotas/Rotas"
import { GlobalStyle } from './GlobalStyle'
import axios from "axios"
import { useEffect, useState } from "react"
import { GlobalContext } from './Rotas/Context/GlobalContext'


const App = () => {
  const [resposta, setResposta] = useState([])
  const [arrayPokedex, setArrayPokedex] = useState([])

  useEffect(() => {
    todosPokemons()
  
  }, [])

  const todosPokemons = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon")
      .then((res) => setResposta(res.data.results))
      .catch((err) => console.log(err))

  }
  const context = {
    resposta,
    setResposta,
    todosPokemons,
    arrayPokedex,
    setArrayPokedex,

  }
  return (
    <>
      <GlobalStyle />
      <GlobalContext.Provider value={context} >
        <Rotas />
      </GlobalContext.Provider>
    </>
  )
}

export default App
