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

  const pokeIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

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
