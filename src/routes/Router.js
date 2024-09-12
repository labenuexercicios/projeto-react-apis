import React from "react"
import { Route, Routes, BrowserRouter } from "react-router-dom"
import HomePage from "../pages/HomePage/homePage"
import PokedexPage from "../pages/PokedexPage/PokedexPage"
import PokemonDetailPage from "../pages/PokemonDetailPage/PokemonDetailPage"
import ErrorPage from "../pages/ErrorPage/ErrorPage"


export default function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage/>} />
                <Route path="/pokedex" element={<PokedexPage/>} />
                <Route path="/pokemon/:pokemonName" element={<PokemonDetailPage/>}/>               
                <Route path="*" element={<ErrorPage/>} />
            </Routes>
        </BrowserRouter>
    )
}