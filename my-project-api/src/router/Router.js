import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PokedexPage } from "../Pages/PokedexPage/PokedexPage";
import { PokemonDetailPage } from "../Pages/PokemonDetailPage/PokemonDetailPage";
import { PokemonsListPage } from "../Pages/PokemonsListPage/PokemonsListPage";

const  Router = () => {
    
    return(
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<PokemonsListPage/>}/>
                <Route path={"/detalhes"} element={<PokemonDetailPage/>}/>
                <Route path={"/pokedex"} element={<PokedexPage/>}/>

            </Routes>
        </BrowserRouter>
    )
};

export default Router ;