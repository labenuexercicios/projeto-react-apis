import { BrowserRouter, Routes, Route } from "react-router-dom";
import {HomePage} from "../Pages/HomePage/HomePage";
import {PokedexPage} from "../Pages/PokedexPage/PokedexPage";
import PokemonDetailPage from "../Pages/PokemonDetailPage/PokemonDetailPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path= "/detalhes/:id" element={<PokemonDetailPage/>} />
        <Route path="/pokedex" element={<PokedexPage/>} />
      </Routes>
    </BrowserRouter>
  );
};