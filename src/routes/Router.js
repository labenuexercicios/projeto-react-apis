import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "../pages/Home/Home"
import Pokedex from "../pages/Pokedex/Pokedex"
import Details from "../pages/Details/Details"

function Router() {

return (
<BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/pokedex" element={<Pokedex/>}/>
        <Route path="/:PokemonName" element={<Details/>}/>
    </Routes>
</BrowserRouter>   
);
}

  export default Router