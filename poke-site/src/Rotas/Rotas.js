import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "../Paginas/HomePage/Home"
import Detalhes from "../Paginas/DetalhesPage/Detalhes"
import Pokedex from "../Paginas/PokedexPage/Pokedex"

const Rotas = () => {

    return (
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/Detalhes/:pokemon.name" element={<Detalhes/>}/>
      <Route path="/Pokedex" element={<Pokedex/>}/>

      </Routes>
      </BrowserRouter>
        
  
        )
  }
  
  export default Rotas