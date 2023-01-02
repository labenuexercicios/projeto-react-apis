import PokemonListPage from "../Pages/PokemonListPage/PokemonListPage";
import PokemonDetailPage from "../Pages/PokemonDetailPage/PokemonDetailPage";
import PokedexPage from "../Pages/PokedexPage/PokedexPage";
import { BrowserRouter,Routes,Route } from "react-router-dom";

export const Router = ()=> {
   
    return(
        <BrowserRouter>
          <Routes>
            <Route index element = {<PokemonListPage/>}/>
            <Route path ="pokedex" element = {<PokedexPage/>}/>
            <Route path ="pokemonDetalhes" element = {<PokemonDetailPage/>}/>
          </Routes>
         
        </BrowserRouter> 
    )
}