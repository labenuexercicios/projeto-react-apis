import PokemonListPage from "../Pages/PokemonListPage/PokemonListPage";
import PokemonDetailPage from "../Pages/PokemonDetailPage/PokemonDetailPage";
import PokedexPage from "../Pages/PokedexPage/PokedexPage";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { CONSTS } from "../utils";

export const Router = ()=> {
   
    return(
        <BrowserRouter>
          <Routes>
            <Route path={CONSTS.POKEMON_LIST_PAGE} element = {<PokemonListPage/>}/>
            <Route path ="pokedex" element = {<PokedexPage/>}/>
            <Route path ="pokemonDetalhes/:id" element = {<PokemonDetailPage/>}/>
          </Routes>
         
        </BrowserRouter> 
    )
}