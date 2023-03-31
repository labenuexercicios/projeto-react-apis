import React, {useState, useEffect} from 'react'
import { Header } from './assets/Header/Header';
import { Home } from './assets/Home/Home';
import { createGlobalStyle } from 'styled-components';
import axios from 'axios';
import { PokemonList } from './assets/PokemonList';

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  width: 100%;
}

.App{
  min-height: 100vh;
  height: 100vh;
}

`

function App() {

  const [page, setPage] = useState(0)
  const [pokemons, setPokemons] = useState([])

  const getPokemons = (pokemon) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((response) => {
      setPokemons(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  
 useEffect(() => {
  getPokemons("bulbasaur")
  }, [])


  return (
    <div className="App">
          <GlobalStyles/>
     <Header 
      page={page}
      setPage={setPage}/>
     <Home
     pokemons={pokemons}/>
    </div>
  );
}

export default App;
