import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home"
import { PokeDex } from "../pages/PokeDex"
import { Details } from "../pages/Details"

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<PokeDex />} />
                <Route path="home" element={<Home />} />
                <Route path="pokedex" element={<PokeDex />} />
                <Route path="details" element={<Details />} />
            </Routes>
        </BrowserRouter>
    )
}