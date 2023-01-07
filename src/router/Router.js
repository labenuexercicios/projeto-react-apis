import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import DetailsPage from "../Pages/Details/DetailsPage";
import PokedexPage from "../Pages/Pokedex/PokedexPage";


const Router = () => {

    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/pokedex" element={<PokedexPage />} />
                <Route path="/details/:pokemonName" element={<DetailsPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router