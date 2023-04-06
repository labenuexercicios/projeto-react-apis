
import { BrowserRouter, Route, Routes } from "react-router-dom";
import pokedexPage from "../Pages/PokedexPage/PokedexPage";
import pokemonDetailPage from "../Pages/PokemonDetailPage/PokemonDetailPage";
import pokemonsListPage from "../Pages/PokemonsListPage/PokemonsListPage";


export const Router = () =>{
    return(
    <BrowserRouter>
        <Routes>
            <Route index element={pokedexPage}></Route>
            <Route path="/details" element={pokemonDetailPage}></Route>
            <Route path="/list" element={pokemonsListPage}></Route>
        </Routes>
    </BrowserRouter>
    )
}