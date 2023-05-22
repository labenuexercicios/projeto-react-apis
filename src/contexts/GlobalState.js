import { useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import axios from "axios";
import { BASE_URL } from './../components/constants/BASE_URL';


export default function GlobalState(props) {


  const [pokelist, setPokelist] = useState([]);
  const [pokedex, setPokedex] = useState([]);
  const [pokemonDetails, setPokemonDetails] = useState([]);
  const [pokemon, setPokemon] = useState([])
  const [isAddPokemon, setIsAddPokemon] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);


  const fetchPokelist = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/?limit=25`);
      setPokelist(response.data.results)
    } catch (error) {
      console.log("Erro ao busca lista de pokemons")
      console.log(error.response)
    }
  }

  useEffect(() => {
    fetchPokelist()
  }, [])


  const filteredPokelist = () =>
    pokelist.filter(
      (pokemonInList) =>
        !pokedex.find(
          (pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name
        )
    );


  const addToPokedex = (pokemon) => {
    setIsAddPokemon(true)
    const isAlreadyOnPokedex = pokedex.find(
      (pokemonInPokedex) => pokemonInPokedex.name === pokemon.name
    )
    if (!isAlreadyOnPokedex) {
      const newPokedex = [...pokedex, pokemon]
      setPokedex(newPokedex)
      const pokedexStringfy = JSON.stringify(newPokedex)
      window.localStorage.setItem('pokedex', pokedexStringfy)
      console.log("Pokemon adicionado")
    }
    showModal()
  }

  const loadPokedexFromLocal = () => {
    if (window.localStorage.getItem('pokedex')) {
      const pokedexParse = JSON.parse(window.localStorage.getItem('pokedex'))
      setPokedex(pokedexParse)
    }
  }

  useEffect(() => {
    loadPokedexFromLocal()
  }, [])


  const removeFromPokedex = (pokemonToRemove) => {
    setIsAddPokemon(false)

    const newPokedex = pokedex.filter(
      (pokemonInPokedex) => pokemonInPokedex.name !== pokemonToRemove.name
    )

    setPokedex(newPokedex)
    const newPokedexStringfy = JSON.stringify(newPokedex)
    window.localStorage.setItem('pokedex', newPokedexStringfy)
    console.log("Pokemon removido!")
    showModal()
  }



  const showModal = () => {
    setIsModalOpen(true)
  };

  const closeModal = () => {
    setIsModalOpen()
  };





  const data = {
    pokelist,
    setPokelist,
    pokedex,
    setPokedex,
    pokemonDetails,
    setPokemonDetails,
    pokemon,
    setPokemon,
    filteredPokelist,
    addToPokedex,
    isAddPokemon,
    setIsAddPokemon,
    removeFromPokedex,
    isModalOpen,
    setIsModalOpen,
    closeModal
  }


  return (

    <GlobalContext.Provider value={data}>
      {props.children}
    </GlobalContext.Provider>
  )


}