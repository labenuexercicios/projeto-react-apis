import { PokemonDetailPage } from '../Pages/PokemonDetailPage/PokemonDetailPage';
import { PokemonListPage } from '../Pages/PokemonListPage/PokemonListPage';
import { PokedexPage } from '../Pages/PokedexPage/PokedexPage.js';
import { ErrorPage } from '../Pages/ErrorPage/ErrorPage';
import { BrowserRouter, Routes, Route } from "react-router-dom"

export const Router = () => {


    return( 
        <BrowserRouter>
        <Routes> 
          <Route index element={<PokedexPage />}/>
          <Route path="detailsPage/:name" element={<PokemonDetailPage />}/>
          <Route path="listPage" element={<PokemonListPage />}/>
          <Route path="*" element={<ErrorPage />}/>
        </Routes>
      </BrowserRouter>
    )
} 