import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Pokedex }from "../Pages/Pokedex/PokePage";
import { PokeDetails } from "../Pages/Details/PokeDetails";
import { PokeList } from "../Pages/List/PokeList";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/list/pokedex" element={<Pokedex/>} />

        <Route path="/list/detail" element={<PokeDetails/>} />

        <Route path="/" element={<PokeList />} />
      </Routes>
    </BrowserRouter>
    )
}