import React, { useState, useEffect } from 'react'
import { Header } from './assets/Header/Header';
import { Home } from './assets/Home/Home';
import { createGlobalStyle } from 'styled-components';
import axios from 'axios';

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

  const [page, setPage] = useState(0)
  const [pokedex, setPokedex] = useState([])
  const [pokemons, setPokemons] = useState([]);

  const pokeIds = 
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
    33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43,
    44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 
    55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 
    66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76,
    77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87,
    88, 89, 100, 101, 102, 103, 104, 105, 106,
    107, 108, 109, 110, 111, 112, 113, 114, 115,
    116, 117, 118, 119, 120, 121, 122, 123, 124, 
    125, 126, 127, 128, 129, 130, 131, 132, 133, 
    134, 135, 136, 137, 138, 139, 140, 141, 142,
    143, 144, 145, 146, 147, 148, 149, 150, 151]

  useEffect(() => {
    const pokemonData = async () => {
      const urls = pokeIds.map(id => `https://pokeapi.co/api/v2/pokemon/${id}/`);
      const responses = await Promise.all(urls.map(url => fetch(url)));
      const data = await Promise.all(responses.map(response => response.json()));
      setPokemons(data);
    };
    pokemonData();
  }, []);

  return (
    <div className="App">
      <GlobalStyles />
      <Header
        page={page}
        setPage={setPage} />
      <Home
        pokemons={pokemons} />
    </div>
  );
}

export default App;
