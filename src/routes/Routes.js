import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokedexPage from "../Pages/PokedexPage/PokedexPage";
import PokemonDetailPage from "../Pages/PokemonDetailPage/PokemonDetailPage";
import PokemonsListPage from "../Pages/PokemonsListPage/PokemonsListPage";


export default function Router() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PokemonsListPage/>}/>
                <Route path="/pokedex" element={<PokedexPage/>} />
                <Route path="/PokemonDetailPage/:pokemonName" element={<PokemonDetailPage/>}/>
            </Routes>
        </BrowserRouter>
    )

}