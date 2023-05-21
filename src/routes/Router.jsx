import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../components/header/Header";
import { HomePage } from "../pages/HomePage/HomePage";
import { PokedexPage } from "../pages/PokedexPage/PokedexPage";
import { useState } from "react";
import { DetailPokemon } from "../components/DetailPokemon/detailPokemon";

export default function Router({ pokemons }) {
  const [pokedex, setPokedex] = useState([]);
  const [type1, setType1] = useState("");
  const [type2, setType2] = useState("");
  const [detail, setDetail] = useState({});

  const capturePokemon = (pokemonName) => {
    const newPokedex = [...pokedex, pokemonName];
    setPokedex(newPokedex);
  };

  const deletPokemon = (pokemonName) => {
    const newPokedex = pokedex.filter(
      pokedex => pokedex.name !== pokemonName.name
    );
    setPokedex(newPokedex);
  };

  return (
    <BrowserRouter>
      <Header
        pokedex={pokedex}
        setPokedex={setPokedex}
        detail={detail}
        pokemons={pokemons}
        capturePokemon={capturePokemon}
        deletPokemon={deletPokemon}
      />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              pokemons={pokemons}
              pokedex={pokedex}
              setPokedex={setPokedex}
              type1={type1}
              type2={type2}
              setType1={setType1}
              setType2={setType2}
              setDetail={setDetail}
              capturePokemon={capturePokemon}
            />
          }
        />
        ;
        <Route
          path="/pokedex"
          element={
            <PokedexPage
              pokemons={pokemons}
              pokedex={pokedex}
              setPokedex={setPokedex}
              deletPokemon={deletPokemon}
              setDetail={setDetail}
            />
          }
        />
        ;
        <Route
          path="/detalhesPokemon/:pokemonId"
          element={
            <DetailPokemon
              pokemons={pokemons}
              pokedex={pokedex}
              setPokedex={setPokedex}
              type1={type1}
              type2={type2}
              setType1={setType1}
              setType2={setType2}
              detail={detail}
            />
          }
        />
        ;
      </Routes>
    </BrowserRouter>
  );
}
