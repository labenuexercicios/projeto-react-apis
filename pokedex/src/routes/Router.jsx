import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonHomePage from '../Pages/PokemonsHomePage/PokemonsHomePage';
import PokedexPage from '../Pages/PokedexPage/PokedexPage';
import PokemonDetailPage from '../Pages/PokemonDetailPage/PokemonDetailPage';

export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<PokemonHomePage/>}/>
            <Route path='/Pokedex' element={<PokedexPage/>}/>
            <Route path='/Details/:id' element={<PokemonDetailPage/>} />
        </Routes>

    </BrowserRouter>
  )
}
