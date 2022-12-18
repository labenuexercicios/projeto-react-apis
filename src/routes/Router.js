import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetalhesPage from "../pages/DetalhesPage";
import HomePage from "../pages/HomePage";
import PokedexPage from "../pages/PokedexPage";

function Router (){
    return (

        
        < BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage isHomePage ={true} />}  />
            <Route path="/detalhes/:namePokemon" element={<DetalhesPage isDetalhes={true}/>} />
            <Route path="/pokedex" element={<PokedexPage/>} />
        </Routes>
        </BrowserRouter>
    )
}
export default Router