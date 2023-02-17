import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { detailPage } from "../../routes/coordinator";
import { Header } from "../Header/Header";
import { ContainerHome, Main, CardPokedex, EmptyList } from "./styled"

const Pokedex=()=>{

  const navigate=useNavigate();
  const [pokemonsPokedex , setPokemonsPokedex] = useState([]); 
  const [pokemonHome, setPokemonHome] = useState([])
  const [refreshScreen, setRefreshScreen] = useState(0)
  const listPokedex = JSON.parse(localStorage.getItem("listPokedex")); 
  const listPokemonHome = JSON.parse(localStorage.getItem("pokemonHome"));

  useEffect( ()=>{
    if(listPokedex !== null) {
      setPokemonsPokedex(listPokedex);
    }
    if(listPokemonHome !== null){
      return setPokemonHome(listPokemonHome)
    }
  },[refreshScreen]);

  let addToListPkmHome;
  const removePokemon = (pokemon,indexPokemon) => {
    setRefreshScreen(refreshScreen+1);
    let newListAffterRemove = [...pokemonsPokedex];
    pokemonsPokedex.filter( (poke) => {
      if(poke.name === pokemon.name) {  
        addToListPkmHome = [...pokemonHome,pokemon]    
        newListAffterRemove.splice(indexPokemon,1);     
        localStorage.setItem("listPokedex",JSON.stringify(newListAffterRemove));
        setPokemonsPokedex(newListAffterRemove);
      }
    });
    setPokemonHome(addToListPkmHome);
    localStorage.setItem("pokemonHome",JSON.stringify(addToListPkmHome));
  };
    
  return(
    <>
      <Header/>
      <ContainerHome>
        <Main>
          {listPokedex !== null && listPokedex.length > 0   ? pokemonsPokedex.map((poke,index)=>{
            const imgDescription = `The not-so-mighty ${poke.name}!!!`
            return (
            <CardPokedex 
                key={poke.name}
                style={poke.types[0].type.name === "grass" ? {backgroundImage: 'linear-gradient(to bottom  , #84ed6829 20%, #49b675 60%, #005221)'} :
                poke.types[0].type.name === "fire" ? {backgroundImage: 'linear-gradient(to bottom , #ff7f0099 20%, yellow 60%, #ff7f00)'} :
                poke.types[0].type.name === "water" ? {backgroundImage: 'linear-gradient(to bottom , #85e8ff29 10%, #0d67d2 70%, #4354e9)'} :
                poke.types[0].type.name === "normal" ? {backgroundImage: 'linear-gradient(to bottom , #fcf5d629 10%, #b5840d 70%, #000)'}: 
                poke.types[0].type.name === "bug" ? {backgroundImage: 'linear-gradient(to bottom , #78866b29 10%, #fcf5d6 70%, #78866b )'}:{}
            }>
            <div>
              <h2>{poke.name}</h2>
              <button  onClick={ () => removePokemon(poke,index)}>Remove</button>
              <button  onClick={ () => detailPage(navigate, poke.name) }>Details</button>
            </div>
            <img src={poke.sprites.other.home.front_default} alt={imgDescription}/>
            </CardPokedex> 
          )}) 
          :   
          <EmptyList><h1>Your Pokédex is empty! Go catch'em!!!</h1></EmptyList>
          } 
        </Main>
      </ContainerHome> 
    </>
  )
};

export default Pokedex;