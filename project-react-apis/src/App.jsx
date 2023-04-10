import React from 'react'
import { useState } from 'react'
import { createGlobalStyle } from 'styled-components'
import { PokedexPage } from './Pages/PokedexPage/PokedexPage'
import { PokemonDetailPage } from './Pages/PokemonDetailPage/PokemonDetailPage'
import { PokemonsListPage } from './Pages/PokemonsListPage/PokemonsListPage'
import Router from "./routes/Router"



const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
       
    }
`

function App() {

  return (
    <div>
      <GlobalStyle/>
      <Router/>
  
    </div>
  )
}

export default App
