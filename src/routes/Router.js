import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "../pages/Home/Home"
import Pokedex from "../pages/Pokedex/Pokedex"
import Details from "../pages/Details/Details"
import About from "../pages/About/About"

function Router() {

return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/:page" element={<Home/>}/>
                <Route path="/sobre" element={<About/>}/>
                <Route path="/pokedex" element={<Pokedex/>}/>
                <Route path="/pokemon/:PokemonName" element={<Details/>}/>
            </Routes>
        </BrowserRouter>   
    );
  }
  
  export default Router