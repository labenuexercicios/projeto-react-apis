import { PokemonDetailPage } from '../Pages/PokemonDetailPage/PokemonDetailPage';
import { MyPokedexPage } from '../Pages/MyPokedexPage/MyPokedexPage.js';
import { PokedexPage } from '../Pages/PokedexPage/PokedexPage.js';
import { Header } from '../Components/Header/Header';
import { ErrorPage } from '../Pages/ErrorPage/ErrorPage';
import { BrowserRouter, Routes, Route } from "react-router-dom"

export const Router = () => {


    return( 
        <BrowserRouter>
        <Header/>
        <Routes> 
          <Route index element={<PokedexPage />}/>
          <Route path="detailsPage/:name" element={<PokemonDetailPage />}/>
          <Route path="myPokedex" element={<MyPokedexPage />}/>
          <Route path="*" element={<ErrorPage />}/>
        </Routes>
      </BrowserRouter>
    )
} 