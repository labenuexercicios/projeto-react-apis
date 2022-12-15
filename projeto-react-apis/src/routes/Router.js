import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";
import { DetailPage } from "../pages/DetailPage/DetailPage";
import { PokedexPage } from "../pages/PokedexPage/PokedexPage";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";

export const Router = () => {
  const [biblioteca, setBiblioteca] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [pokedex, setPokedex] = useState([]);
  const [gotcha, setGotcha] = useState(false);
  const [ohNo, setOhNo] = useState(false);

  const searchPokemons = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0", {})
      .then((response) => {
        setBiblioteca(response.data.results);
        setPokemons(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    searchPokemons();
  }, []);

  const catchPokemon = (pokemon) => {
    const aux = [...pokedex];
    const aux2 = pokemons.filter((item) => {
      return item.name === pokemon;
    });
    aux.push(aux2[0]);
    setPokedex(aux);
    setPokemons(
      pokemons.filter((item) => {
        return item.name !== pokemon;
      })
    );
    setGotcha(true);
  };

  const releasePokemon = (pokemon) => {
    const aux = [...pokemons];
    const aux2 = pokedex.filter((item) => {
      return item.name === pokemon;
    });
    aux.push(aux2[0]);
    setPokemons(aux);
    setPokedex(
      pokedex.filter((item) => {
        return item.name !== pokemon;
      })
    );
    setOhNo(true);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <HomePage
              pokemons={pokemons}
              catchPokemon={catchPokemon}
              releasePokemon={releasePokemon}
              gotcha={gotcha}
              setGotcha={setGotcha}
            />
          }
        />
        <Route
          path="/detail/:variable"
          element={
            <DetailPage
              pokemons={biblioteca}
              pokedex={pokedex}
              releasePokemon={releasePokemon}
              ohNo={ohNo}
              setOhNo={setOhNo}
            />
          }
        />
        <Route
          path="/pokedex/:variable"
          element={
            <PokedexPage
              pokedex={pokedex}
              catchPokemon={catchPokemon}
              releasePokemon={releasePokemon}
              ohNo={ohNo}
              setOhNo={setOhNo}
            />
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
