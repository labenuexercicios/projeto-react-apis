import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokedexPage from "../Pages/Pokedex/Pokedex.js";
import HomePage from "../Pages/Home/Home.js";
import PokemonDetailsPage from "../Pages/PokemonDetail/PokemonDetails"

 
export const Router = () =>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/pokedex" element={<PokedexPage/>}/>
                <Route path="/" element={<HomePage/>}/>
                <Route path ="/details/:pokemonName" element={<PokemonDetailsPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router
