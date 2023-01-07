import { BrowserRouter, Routes, Route } from "react-router-dom"
import { PaginaPrincipalPokedex }  from '../componentes/Paginaprincipal/PaginaPrincipal'
import PaginaPokedex from '../componentes/Paginas/PaginaPokedex'
import PaginaDetalhes from '../componentes/Paginas/DetalhesPokemon'


function Rotas(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<PaginaPrincipalPokedex />}/>
            <Route path='/pokedex' element={<PaginaPokedex/>}/>
            <Route path="/details/:name" element={<PaginaDetalhes/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Rotas