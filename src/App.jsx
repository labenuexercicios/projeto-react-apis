import { ChakraProvider } from "@chakra-ui/react";
import Router from "./routes/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL, GlobalStyled } from "./constants/constants";

function App() {
  const [pokemons, setPokemons] = useState([]);  

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {
    try {
      const res = await axios.get(BASE_URL);
      setPokemons(res.data.results);      
    } catch (error) {
      alert(error.response);
    }
  };

  return (
    <>
      <GlobalStyled />
      <ChakraProvider>
        <Router pokemons={pokemons} />
      </ChakraProvider>
    </>
  );
}

export default App;
