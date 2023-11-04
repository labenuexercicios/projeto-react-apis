import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import PokemonListPage from "../Pages/PokemonListPage/PokemonListPage";
import PokedexPage from "../Pages/PokedexPage/PokedexPage";
import PokemonDetailPage from "../Pages/PokemonDetailPage/PokemonDetailPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Header from "../Components/Header/Header";


export const Router = () => {
 
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<PokemonListPage />} />
                <Route path="/pokedex" element={<PokedexPage/>} />
                <Route path="/pokedex/details/:pokemonName" element={<PokemonDetailPage/>} />
                <Route path="*" element={<ErrorPage/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router