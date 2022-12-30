import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ErrorPage from '../pages/ErrorPage'
import Homepage from '../pages/Homepage'
import PageDetails from '../pages/PageDetails'
import PokedexPage from '../pages/PokedexPage'
const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route  index element={<Homepage/>}></Route>
      <Route path='/Pokedex'element={<PokedexPage/>}></Route>
      <Route path='/PageDetails/:pokemonName'element={<PageDetails/>}></Route>
      <Route path='*'element={<ErrorPage/>}></Route>
    </Routes>
    </BrowserRouter>

  )
}

export default Router