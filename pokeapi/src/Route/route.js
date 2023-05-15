import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PokeDetails } from "../Pages/Details/PokeDetails";
import { PokeList } from "../Pages/List/PokeList";
import { Pokedex } from "../Pages/Pokedex/PokePage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/list/pokedex" element={<Pokedex/>} />

        <Route path="/list/detail/:id" element={<PokeDetails />} />

        <Route path="/" element={<PokeList />} />
      </Routes>
    </BrowserRouter>
    )
}