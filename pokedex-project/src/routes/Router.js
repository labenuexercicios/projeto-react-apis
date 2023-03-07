import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "../pages/DetailsPage";
import Poke from "../pages/Pokedex";
import Home from "../pages/HomePage";
import Header from "../components/header";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:idPokemon" element={<Details />} />
        <Route path="/pokedex/:id" element={<Poke />} />
      </Routes>
    </BrowserRouter>
  );
};
