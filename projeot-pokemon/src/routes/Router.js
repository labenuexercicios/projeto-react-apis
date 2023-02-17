import { BrowserRouter, Routes, Route } from "react-router-dom"
import { PokedexPage } from "../pages/pokedexPage/PokedexPage"
import { PokemonxDatailPage } from "../pages/pokemonDetailPage/PokemonDetailPage"
import { PokemonsListPage } from "../pages/pokemonsListPage/pokemonsListPage"

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/homepage' element={<PokedexPage/>}/>
                <Route path='/detail' element={<PokemonxDatailPage/>}/>
                <Route path='/list' element={<PokemonsListPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

