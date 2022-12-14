import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";
import { DetailPage } from "../pages/DetailPage/DetailPage";
import { PokedexPage } from "../pages/PokedexPage/PokedexPage";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";

export const Router = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokedex, setPokedex ] = useState([]);

  const searchPokemons = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon", {})
      .then((response) => {
        setPokemons(response.data.results)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    searchPokemons();
  }, []);

  const catchPokemon = () => {

  };

  const releasePokemon = () => {

  };

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage pokemons={pokemons}/>} />
        <Route path="/detail/:variable" element={<DetailPage pokemons={pokemons}/>} />
        <Route path="/pokedex/:variable" element={<PokedexPage pokedex={pokedex}/>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
