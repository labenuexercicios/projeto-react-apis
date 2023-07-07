import { Routes, Route } from "react-router-dom";
import Details from "../pages/details/Details";
import Home from "../pages/home/Home";
import Pokedex from "../pages/pokedex/Pokedex";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:page" element={<Home />} />
      <Route path="/pokedex/:page" element={<Pokedex />} />
      <Route path="/details/:pokemon" element={<Details />} />
    </Routes>
  );
};
