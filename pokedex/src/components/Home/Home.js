import React, {useContext,useState, useEffect} from "react";
import { PokContext } from "../../context/Context";
import * as style from "../Home/styled";
import GlobalContext from "../../context/GlobalState";
import { Card } from "../Card/Card";
import { Header } from "../Header/Header";




const Home=()=>{
  const {photosPokemons} = useContext(PokContext, GlobalContext); 
  const [newListPokemons , setNewListPokemons] = useState([]); 
  const [pokedex, setPokedex] = useState([]); 
  const listPokemon = JSON.parse(localStorage.getItem("pokemonHome"));  
  const listPokedex = JSON.parse(localStorage.getItem("listPokedex"));
  useEffect( () => {
    if(listPokemon !== null) { 
        return setNewListPokemons(listPokemon)
    } 
    setNewListPokemons(photosPokemons)  
  }, [photosPokemons]);
  
  useEffect( () => {
    if(listPokedex !== null){
      return setPokedex(listPokedex)
    }
  },[]);
    
  let addToListPokedex;
  const addPokedex = (pokemon,indexPokemon) => {
    let removePkm = [...newListPokemons]; 
    newListPokemons.filter( (poke) => {
      if(poke.name === pokemon.name) { 
        addToListPokedex = [...pokedex,pokemon];
        removePkm.splice(indexPokemon,1);   
        localStorage.setItem("pokemonHome",JSON.stringify(removePkm));
        setNewListPokemons(removePkm);
      };
    })
    setPokedex(addToListPokedex)
    localStorage.setItem("listPokedex",JSON.stringify(addToListPokedex))
    console.log(pokedex)
  };
  
  return(
  <style.ContainerHome>
    <Header />
    <style.Main>
      <Card 
        addPokedex={addPokedex}
        newListPokemons={newListPokemons}
      />
    </style.Main>
  </style.ContainerHome>
  )
}
export default Home;
