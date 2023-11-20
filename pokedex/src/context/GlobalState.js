import React, { useState, useEffect } from "react"
import { PokContext } from "./Context"
import axios from "axios"
import Router from "../routes/Router"



const GlobalContext = () => {
  const [pokemons20, setPokemons20] = useState([]);
  const [photosPokemons, setPhotosPokemons] = useState([]);

  function getPokemons() {
    axios.get("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => {
        setPokemons20(res.data.results)
      }).catch((error) => {
        console.log(error)
      })
  };

  let pokemonsList = []
  function getPhotos() {
    pokemons20 && pokemons20.forEach((poke) => {
      axios.get(poke.url)
        .then((res) => {
          pokemonsList.push(res.data)
          if(pokemonsList.length === 20) {
            setPhotosPokemons(pokemonsList)
          }
        })
        .catch(() => console.log("Houve um problema!"))
    })
  };
 

  useEffect(() => {
    getPokemons()
  }, [])

  if(photosPokemons.length < 20) {
    getPhotos()
  }

  return (
    <PokContext.Provider value={{ pokemons20, photosPokemons }}>
      <Router />
    </PokContext.Provider>
  )
}

export default GlobalContext;