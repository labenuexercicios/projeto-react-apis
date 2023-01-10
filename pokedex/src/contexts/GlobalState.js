import React, { useEffect, useState } from "react";
import axios from "axios";
import GlobalContext from "../contexts/GlobalContext";

const GlobalState = (props) => {
    const [pokemonList, setPokemonList] = useState([]);
  
    const [pokedex, setPokedex] = useState([]);
  
    //pega a lista de  pokemons da pokeAPI
    const getPokemonList = () => {
      axios
        .get('https://pokeapi.co/api/v2/pokemon')
        .then((response) => {
          setPokemonList(response.data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    };
  
    useEffect(() => {
      getPokemonList();
    }, []);
  
    const states = { pokemonList, pokedex };
    const setters = { setPokemonList, setPokedex };
    const requests = { getPokemonList };
  
    //dados  pra passar para os componerole="p"ntes
    const data = { states, setters, requests };
    
    return (
      <GlobalContext.Provider value={data}>
        {props.children}
      </GlobalContext.Provider>
    );
  };
  
  export default GlobalState;