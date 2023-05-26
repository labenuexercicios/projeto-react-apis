import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from '../Pages/HomePage/HomePage'
import { Details } from '../Pages/DetailsPage/Details'
import { PokedexPage } from '../Pages/PokedexPage/PokedexPage'

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path='/pokedex' element={<PokedexPage />} />
                <Route path='/details/:name' element={<Details />} />
            </Routes>
        </BrowserRouter>
    )
}