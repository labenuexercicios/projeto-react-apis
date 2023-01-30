import { GlobalContext } from "./GlobalContext";
import axios from "axios";
import { useState, useEffect } from "react";

function GlobalState({ children }) {
  const [pokeList, setPokeList] = useState([]);

  const url = "https://pokeapi.co/api/v2/pokemon/";

  const getItens = async () => {
    const arrayPokemons = [];

    try {
      const response = await axios.get(url);
      const poke = response.data.results;

      try {
        for (let i in poke) {
          let pokeinfo = await axios.get(poke[i].url);
          arrayPokemons.push(pokeinfo.data);
        }
      } catch (error) {
        console.log(error.response);
      }
      setPokeList(arrayPokemons);
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    getItens();
  }, []);
  console.log(pokeList);

  const data = {
    pokeList,
  };

  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
}

export default GlobalState;
