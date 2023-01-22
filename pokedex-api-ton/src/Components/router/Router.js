import { BrowserRouter, Route, Routes } from "react-router-dom"
import {PokedexPage} from '../../Pages/PokedexPage/PokedexPage'
import {PokemonDetailPage} from '../../Pages/PokemonDetailPage/PokemonDetailPage'
import {PokemonListPage} from '../../Pages/PokemonListPage/PokemonListPage'


export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PokemonListPage/>}/>
                <Route path="/details/:id" element={<PokemonDetailPage/>}/>
                <Route path="/pokedex" element={<PokedexPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}