import { BrowserRouter, Routes, Route } from "react-router-dom"
import Details from "../pages/detailsPage"
import HomePage from "../pages/home"
import PokedexPage from "../pages/pokedexPage"


export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<HomePage />} />
                <Route path="/detalhes/" element={<Details />} />
                <Route path="/pokedex/" element={<PokedexPage />} />
            </Routes>
        </BrowserRouter>
    )
}
