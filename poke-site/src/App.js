import React from 'react'
import Rotas from "./Rotas/Rotas"
import { GlobalStyle } from './GlobalStyle'
import axios from "axios"
import { useEffect, useState } from "react"
import { GlobalContext } from './Rotas/Context/GlobalContext'
import { UsarModal } from './componentes/Modal'

const App = () => {
  const [resposta, setResposta] = useState([])
  const [arrayPokedex, setArrayPokedex] = useState([])
  const [ isOpen, setIsOpen] = useState(false)
  const [isOpenDel, setIsOpenDel] =useState(false)
  useEffect(() => {
    todosPokemons()
  
  }, [])

  const todosPokemons = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon")
      .then((res) => setResposta(res.data.results))
      .catch((err) => console.log(err))

  }

  const context = {
    isOpenDel, 
    setIsOpenDel,
    isOpen, 
    setIsOpen,
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
       < UsarModal/>
        <Rotas />
      </GlobalContext.Provider>
    </>
  )
}

export default App
