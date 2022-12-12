import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "../Pages/HomePage"
import Pokedex from "../Pages/Pokedex"
import DetailsPage from "../Pages/DetailsPage"
import NotFoundPage from "../Pages/NotFoundPage"

function Router () {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/pokedex" element={<Pokedex/>}/>
                <Route path="/:pokemonId" element={<DetailsPage/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router