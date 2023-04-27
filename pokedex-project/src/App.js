import React, { useState, useEffect } from 'react'
import Router from './routes/Router';
import { pokeIds } from './assets/Functions';


function App() {

  const [pokedex, setPokedex] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [details, setDetails] = useState([]);

  const states = [pokemons, pokedex, details, setPokedex, setDetails]
  
  useEffect(() => {
    const pokemonData = async () => {
      const urls = pokeIds.map(id => `https://pokeapi.co/api/v2/pokemon/${id}/`);
      const responses = await Promise.all(urls.map(url => fetch(url)));
      const data = await Promise.all(responses.map(response => response.json()));
      setPokemons(data);
    };
    pokemonData();
  }, []);

  useEffect(() => {
    const dexList = localStorage.getItem("pokedex");
    if (dexList) {
      const storedDex = JSON.parse(dexList);
      setPokedex(storedDex)
    }
  }, [])

  useEffect(() => {
    const pokedexString = JSON.stringify(pokedex)
    localStorage.setItem("pokedex", pokedexString);
  }, [pokedex])


  return (
    <div className="App">
        <Router states={states} />
    </div>
  );
}

export default App;
