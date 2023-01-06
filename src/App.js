import React, {useState, useEffect} from "react";
import Home from "./components/pages/Home";
import Pokedex from "./components/pages/Pokedex";
import Details from "./components/pages/Details"
import Router from "./components/Router/Router";
import axios from "axios";
import { GlobalContext } from "./components/contexts/GlobalContext"
import Header from "./components/Header/Header";


function App() {
  const [pokemons, setPokemons] = useState([])
  const [pokedex, setPokedex] = useState([])
  const [gotcha, setGotcha] = useState(false)
  const [ohNo, setOhNo] = useState(false)

  useEffect(() => {
    getPokemons()
  }, [])

  useEffect(() => {
    organizePokedex()
    organizePokemons()
  }, [pokemons])

  const getPokemons = async () => {
    try {
      const res = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0")
      setPokemons(res.data.results)
    }
    catch (erro) {
      console.log(erro)
    }
  }
  
  const organizePokemons = () => pokemons.sort((a, b) => {
    if (+a.url.split("/")[6] > +b.url.split("/")[6]) {
      return 1
    } else {
      return -1
    }
  })


  const organizePokedex = () => pokedex.sort((a, b) => {
    if (+a.url.split("/")[6] > +b.url.split("/")[6]) {
      return 1
    } else {
      return -1
    }
  })

  const addToPokedex = (pokemon) => {
    const newPokedex = [...pokedex]
    const newPokemons = [...pokemons]
    const index = pokemons.findIndex((pokemons) => pokemons.name === pokemon.name)
    newPokemons.splice(index, 1)
    newPokedex.push(pokemon)
    setPokemons(newPokemons)
    setPokedex(newPokedex)
    setGotcha(true)
    setTimeout(() => {
      setGotcha(false)
    }, 1000)
  }

  const removePokedex = (pokemon) => {
    let newPokedex = [...pokedex]
    let newPokemons = [...pokemons]
    const index = pokedex.findIndex((pokemons) => pokemons.name === pokemon.name)
    newPokedex.splice(index, 1)
    newPokemons.push(pokemon)
    setPokedex(newPokedex)
    setPokemons(newPokemons)
    setOhNo(true)
    setTimeout(() => {
      setOhNo(false)
    }, 1000)
  }

  const context ={
    pokemons,
    pokedex,
    gotcha,
    ohNo,
    setPokedex,
    setPokemons,
    addToPokedex,
    removePokedex,
    setGotcha,
    setOhNo,
    getPokemons
  }

  return (
    <GlobalContext.Provider value={context}>
    <Router>
    <Header/>
    <Home/>
    <Pokedex/>
    <Details/>
    </Router>
    </GlobalContext.Provider>
  );
}

export default App;
