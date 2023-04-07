import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokedexPage from "../Pages/PokedexPage/PokedexPage";
import PokemonDetailPage from "../Pages/PokemonDetailPage/PokemonDetailPage";
import PokemonsListPage from "../Pages/PokemonsListPage/PokemonsListPage";


export const Router = () =>{
    return(
    <BrowserRouter>
        <Routes>
            <Route index element={<PokedexPage/>}></Route>
            <Route path="/details" element={<PokemonDetailPage/>}></Route>
            <Route path="/list" element={<PokemonsListPage/>}></Route>
        </Routes>
    </BrowserRouter>
    )
}