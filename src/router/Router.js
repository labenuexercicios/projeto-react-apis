import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonDetail from "../pages/PokemonDetailPage/PokemonDetail";
import PokemonList from "../pages/PokemonListPage/PokemonList";
import Pokedex from "../pages/PokedexPage/Pokedex";


export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PokemonList />}/>
                <Route path="/pokedex" element={<Pokedex />}/>
                <Route path="/pokemon/:name" element={<PokemonDetail />}/>
            </Routes>
        </BrowserRouter>
    )
}