 import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {PokemonList} from '../Pages/PokemonListPage/PokemonList' 
import { PokeDexPage } from '../Pages/PokedexPage/PokedexPage'
import { PokemonDetail } from '../Pages/PokemonDetailPage/PokemonDetail'
import Header  from '../Components/Header/Header'

export default function Router(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route index="/" element={<PokemonList/>}/>
                <Route path="/pokedex" element={<PokeDexPage/>}/>
                <Route path="/pokedetail/" element={<PokemonDetail/>}/>
            </Routes>
        
        </BrowserRouter>

    )

} 