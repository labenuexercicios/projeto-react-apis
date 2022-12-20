import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "../Paginas/HomePage/Home"
import Detalhes from "../Paginas/DetalhesPage/Detalhes"
import Pokedex from "../Paginas/PokedexPage/Pokedex"
import PaginaNaoEncontrada from "../Paginas/PaginaNaoEncontrada/PaginaNaoEncontrada"
import { GlobalContext } from "./Context/GlobalContext"
const Rotas = () => {

    return (
      <GlobalContext.Provider >
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/detalhes/:nomePokemon" element={<Detalhes/>}/>
      <Route path="/pokedex" element={<Pokedex/>}/>
      <Route path="*" element={<PaginaNaoEncontrada/>}/>
      </Routes>
      </BrowserRouter>
      </GlobalContext.Provider>
        
  
        )
  }
  
  export default Rotas