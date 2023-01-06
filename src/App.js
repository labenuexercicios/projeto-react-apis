import {useEffect, useState} from 'react'
import axios from "axios";
import Router from "./routes/Router"
import { BASE_URL } from "./constants/BASE_URL";
import { GlobalStyled } from './GlobalStyle';
import { GlobalContext } from './context/GlobalContext';
import Modal from './components/Modal/Modal'

function App() {

const [pokedex, setPokedex] = useState([])
const [pokemons, setPokemons] = useState([])
const [detailPokemon, setDetailPokemon] = useState([])
const [showModal, setShowModal] = useState(false)
const [action, setAction] = useState("")

//use browserRouter
/* function usePageViews() {
  let location = useLocation();
  React.useEffect(() => {
    ga.send(["pageview", location.pathname]);
  }, [location]);
} */

useEffect(()=>{
browserPokemon()
},
[]
)

const browserPokemon = async ()=>{
let i =1

const getPokemon = [...new Set(pokemons)]

if (pokemons.length > 0){
return
}else{
while (i <= 100){
try{ const response = await axios.get(`${BASE_URL}/${i}`)
  getPokemon.push(response.data)
  setPokemons(getPokemon)
  setDetailPokemon(getPokemon)
  console.log(response.data.name) 
}
catch(error){
  console.log(error)
}
i++
}
}
}

function addPokemonPokedex (pokemonAdd){
setShowModal(true)
setAction("add")

const list = pokemons.filter(
(pokemon) => pokemon.id !== pokemonAdd.id)

const newBrowserPokedex = [...pokedex, pokemonAdd]
setPokedex(newBrowserPokedex)
setPokemons(list)
}

function removePokemonPokedex (pokemonAdd){
setShowModal(true)
setAction("remove")

const pokemonOnPokedex = pokedex.filter(
(pokemon) => pokemon.id !== pokemonAdd.id)

const newBrowserPokelist = [...pokemons, pokemonAdd]
setPokedex(pokemonOnPokedex) 
setPokemons(newBrowserPokelist) 
}

const context = {
pokemons,
setPokemons,
detailPokemon,
setDetailPokemon,
pokedex,
setPokedex,
addPokemonPokedex,
removePokemonPokedex,
showModal,
setShowModal,
action,
setAction,
}

return (
<>
  <GlobalStyled/>
  <GlobalContext.Provider value={context}>
  <Router/>
  {showModal? <Modal action={action}/>:''}
</GlobalContext.Provider>
</>
);
}

export default App;
