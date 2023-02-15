import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from '../pages/HomePage/Home'
import Pokedex from '../pages/Pokedex/Pokedex'
import PokemonDetails from '../pages/Details/PokemonDetails'
import Header from '../components/Header/Header'
import ErrorPage from '../pages/ErrorPage/ErrorPage'

const Router = () => {
    return (
        <BrowserRouter>
                <Header/>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/pokedex" element = {<Pokedex />} />
                <Route path="/details/:name" element = {<PokemonDetails />} />
                <Route path="*" element = {<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
