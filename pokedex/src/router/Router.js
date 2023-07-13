import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { PokemonsListPage } from '../pages/PokemonsListPage/PokemonsListPage'
import { PokedexPage } from '../pages/PokedexPage/PokedexPage'
import { PokedexDetailPage } from '../pages/PokedexDetailPage/PokedexDetailPage'


export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='homepage' element={<PokemonsListPage />} />
                <Route path='pokedexpage' element={<PokedexPage />} />
                <Route path='detailpage' element={<PokedexDetailPage />} />
            </Routes>

        </BrowserRouter>
    )
}