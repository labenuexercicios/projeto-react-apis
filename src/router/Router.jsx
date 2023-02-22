import { Routes, Route } from "react-router-dom";
import Details from "../pages/details/Details";
import Home from "../pages/home/Home";
import Pokedex from "../pages/pokedex/Pokedex";

export const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/pokedex" element={<Pokedex />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  );
};
