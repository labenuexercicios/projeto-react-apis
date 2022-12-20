import './App.css'
import  Router from './routes/Router'
import { GlobalContext } from './contexts/GlobalContext'
import { useState, useEffect } from 'react'

function App() {
  const url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=27"
  const [cardTop, setCardTop] = useState([])
  const [pokedex, setPokedex] = useState([20]);

   const fetchPokemon = async (url) => {
    const APIResponse = await fetch(url)
    const data = await APIResponse.json();
    setCardTop(data.results)
    setPokedex(cardTop)
}
useEffect(()=>{
   fetchPokemon(url)
},[])

const addToPokedex = (pokemonToAdd) => {
  const isAlreadyOnPokedex = pokedex.find(
    (pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name
  );

  if (!isAlreadyOnPokedex) {
    const newPokedex = [...pokedex, pokemonToAdd];
    setPokedex(newPokedex);
  }
};
const removeFromPokedex = (pokemonToRemove) => {
  const newPokedex = pokedex.filter(
    (pokemonInPokedex) => pokemonInPokedex.name !== pokemonToRemove.name
  );

  setPokedex(newPokedex);
};
const context = {
  pokedex,
  cardTop,
  setCardTop,
  setPokedex,
  addToPokedex,
  removeFromPokedex
}
  return (
    <div className="App">
      <GlobalContext.Provider value={context} >
       <Router/>
      </GlobalContext.Provider>
    </div>
  )
  
}


export default App
