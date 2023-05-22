import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PokedexPage } from "../pages/PokedexPage/PokedexPage";
import { HomePage } from "../pages/HomePage/HomePage";
import { PokemonDetailPage } from "../pages/PokemonDetailPage/PokemonDetailPage";

export function Router() {


    return (
        <BrowserRouter>

            <Routes>

                <Route index element={<HomePage/>}/>
                <Route path="/pokedex" element={<PokedexPage />} />
                <Route path="/details/:id" element={<PokemonDetailPage />} />

            </Routes>

        </BrowserRouter>
    )
}