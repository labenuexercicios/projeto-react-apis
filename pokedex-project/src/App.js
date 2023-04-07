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

  const pokeIds = 
    [7, 8, 9, 54, 55, 60, 61, 62, 72, 73, 79, 80, 86, 87, 90, 91,
    98, 99, 116, 117, 118, 119, 120, 121, 129, 130, 131, 134,
    138, 139, 140, 141, 158, 159, 160, 170, 171, 183, 184, 186, 
    194, 195, 199, 211, 222, 223, 224, 226, 230, 245, 258, 259,
    260, 270, 271, 272, 278, 279, 283, 318, 319, 320, 321, 339,
    340, 341, 342, 349, 350, 363, 364, 365, 366, 367, 368, 369, 370,
    382]


    console.log(pokemons)
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
     <Router
      pokedex={pokedex}
      setPokedex={setPokedex}
      pokemons={pokemons}
      />
    </div>
  );
}

export default App;
