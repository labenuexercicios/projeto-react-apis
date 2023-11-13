import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PokedexDetailsPage from '../Pages/PokedexDetailsPage'
import PagPokedex from '../Pages/PagPokedex'
import PagListaPokemon from '../Pages/PagListaPokemon'


const Router = () => {
  return (
    <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<PagListaPokemon />}
                />
                <Route
                    path="/pokedex"
                    element={<PagPokedex />}
                />
                <Route
                    path="/details/:name"
                    element={<PokedexDetailsPage />}
                />

            </Routes>
        </BrowserRouter>
  )
}

export default Router