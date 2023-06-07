import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BASE_URL } from "../Constant/url";
import Homepage from "../Pages/Homepage/Homepage";
import PokedexPage from "../Pages/Pokedex/Pokedex";
import Details from "../Pages/Details/Details";

function Router() {
  const [pokelist, setPokelist] = useState([]);
  const [pokedex, setPokedex] = useState([]);
  const [catchList, setCatchList] = useState([]);

  useEffect(() => {
    fetchPokelist();
  }, []);
  
  const fetchPokelist = async () => {
    try {
      const response = await axios.get(BASE_URL);
      setPokelist(response.data.results);
      console.log(response.data.results)
    } catch (error) {
      console.log("Erro ao buscar lista de pokemons");
      console.log(error.response);
    }
  };

  const addToPokedex = (pokemonToAdd) => {
    const isAlreadyOnPokedex = pokedex.find(
      (pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name
    );

    if (!isAlreadyOnPokedex) {
      const newPokedex = [...pokedex, pokemonToAdd];
      setPokedex(newPokedex);
      localStorage.setItem('pokedex', JSON.stringify(newPokedex));
    }
  };

  const addToCatchList = (pokemonToAdd) => {
    const isAlreadyOnCatchList = catchList.find(
      (pokemonInCatchList) => pokemonInCatchList.name === pokemonToAdd.name
      );

      if (!isAlreadyOnCatchList) {
        const newCatchList = [...catchList, pokemonToAdd.name];
        setCatchList(newCatchList);
        localStorage.setItem('catchList', JSON.stringify(newCatchList));
      }
  };

  const removeFromCatchList = (pokemonToRemove) => {
    const newCatchList = catchList.filter(
      (pokemonInCatchList) => pokemonInCatchList !== pokemonToRemove.name
    );

    setCatchList(newCatchList);
    localStorage.setItem('catchList', JSON.stringify(newCatchList));
  };

  useEffect(() => {
    const savedPokedex = localStorage.getItem('pokedex');
    const savedCatchList = localStorage.getItem('catchList')
    if (savedPokedex) {
      setPokedex(JSON.parse(savedPokedex));
    } if (savedCatchList) {
      setCatchList(JSON.parse(savedCatchList));
    }
  }, []);

 
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Homepage
              pokelist={pokelist}
              addToPokedex={addToPokedex}
              pokedex={pokedex}
              catchList={catchList}
              addToCatchList={addToCatchList}
            />
          }
        />
        <Route
          path="/pokedex"
          element={
            <PokedexPage
              pokedex={pokedex}
              catchList={catchList}
              removeFromCatchList={removeFromCatchList}
              addToCatchList={addToCatchList}
              /* removeFromPokedex={removeFromPokedex} */
            />
          }
        />
        <Route
          path="/:pokemonName"
          element={
            <Details
              pokedex={pokedex}
              /* removeFromPokedex={removeFromPokedex} */
              addToPokedex={addToPokedex}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
