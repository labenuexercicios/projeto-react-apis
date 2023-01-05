import PokemonListPage from "../Pages/PokemonListPage/PokemonListPage";
import PokemonDetailPage from "../Pages/PokemonDetailPage/PokemonDetailPage";
import PokedexPage from "../Pages/PokedexPage/PokedexPage";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { PAGES } from "../utils";

export const Router = ()=> {
   
    return(
        <BrowserRouter>
          <Routes>
            <Route path={PAGES.POKEMON_LIST_PAGE} element = {<PokemonListPage/>}/>
            <Route path={PAGES.POKEDEX} element = {<PokedexPage/>}/>
            <Route path={PAGES.POKEMON_DETAILS} element = {<PokemonDetailPage/>}/>
          </Routes>
         
        </BrowserRouter> 
    )
}