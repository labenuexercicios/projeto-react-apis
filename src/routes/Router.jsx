import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './HomePage/HomePage'
import Detalhes from './Detalhes/Detalhes'
import Pokedex from './Pokedex/Pokedex'
import React from 'react'
import Jogo from './Jogo/Jogo'
import NotFoundPage from './NotFoundPage/NotFoundPage'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/pokedex' element={<Pokedex />} />
        <Route path='/detalhes/:id' element={<Detalhes />} />
        <Route path='/jogo' element={<Jogo />}/>
        <Route path='*' element={<NotFoundPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router