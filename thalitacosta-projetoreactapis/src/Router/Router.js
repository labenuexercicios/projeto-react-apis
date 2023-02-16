import {BrowserRouter, Routes, Route} from "react-router-dom"
import PokedexPage from "../Pages/PokedexPage/PokedexPage";
import PokemonDetailPage from "../Pages/PokemonDetailPage/PokemonDetailPage";
import PokemonListPage from "../Pages/PokemonListPage/PokemonListPage";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<PokemonListPage/>}/>
                <Route path="/pokemondetail" element={<PokemonDetailPage/>}/>
                <Route path="/pokedex" element={<PokedexPage/>}/>
            </Routes>
        </BrowserRouter>
    )
  }
  
export default Router;