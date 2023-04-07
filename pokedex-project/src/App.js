import React, { useState, useEffect } from 'react'
import { createGlobalStyle } from 'styled-components';
import Router from './routes/Router';

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  width: 100%;
  overflow-x: hidden;
}

.App{
  min-height: 100vh;
}

`

function App() {

  const [pokedex, setPokedex] = useState([])
  const [pokemons, setPokemons] = useState([]);
  const [details, setDetails] = useState([])

  const pokeIds = 
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]



  useEffect(() => {
    const pokemonData = async () => {
      const urls = pokeIds.map(id => `https://pokeapi.co/api/v2/pokemon/${id}/`);
      const responses = await Promise.all(urls.map(url => fetch(url)));
      const data = await Promise.all(responses.map(response => response.json()));
      setPokemons(data);
    };
    pokemonData();
  }, []);

  
  const getDex = () => {
    const dexList = localStorage.getItem("pokedex");
    if (dexList) {
        const storedDex = JSON.parse(dexList);
        setPokedex(storedDex)
    }
};

useEffect(() => {
    getDex()
}, [])

  const states = [pokemons, setPokemons, pokedex, setPokedex, details, setDetails]

  return (
    <div className="App">
      <GlobalStyles/>
     <Router
      states={states}/>
    </div>
  );
}

export default App;
