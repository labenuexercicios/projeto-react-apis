import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage/HomePage'
import DetailPage from '../Pages/PokemonDetailPage/DetailPage'
import PokedexPage from '../Pages/PokedexPage/PokedexPage'


function Router() {
    
  return (
    <BrowserRouter>
    <Routes>
        <Route index element={<HomePage/>}/>
        <Route path='detail' element={<DetailPage/>}/>
        <Route path='pokedex' element={<PokedexPage/>}/>
        
    </Routes>
    </BrowserRouter>
  )
}

export default Router