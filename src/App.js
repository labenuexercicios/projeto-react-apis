import { GlobalContext } from "./contexts/GlobalContext";
import { createGlobalStyle } from "styled-components";
import Router from "./router/Router";
import { useState, useEffect } from "react";

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }`;

export default function App() {

  const [pokelist, setPokelist] = useState([]);
  const [pokedex, setPokedex] = useState([]);
  const [flow, setFlow] = useState(2)
  const [modalOpen, setModalOpen] = useState(false)
  const [nextPage, setNextPage] = useState(0)
  const [counter, setCounter] = useState(1)
  const amountPoke = 21

  const fetchPokelist = async (url) => {
    const APIResponse = await fetch(url)
    const data = await APIResponse.json();
    setPokelist(data.results)
    setPokedex(pokelist)
  }
  
  useEffect(() => {
    if(counter >= 1){
    fetchPokelist(`https://pokeapi.co/api/v2/pokemon/?offset=${nextPage}&limit=${amountPoke}`)
    }
  }, [counter])

  const addToPokedex = (pokemonToAdd) => {
    const isAlreadyOnPokedex = pokedex.find(
      (pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name
    );

    if (!isAlreadyOnPokedex) {
      const newPokedex = [...pokedex, pokemonToAdd];
      setPokedex(newPokedex);
      setFlow(1);
      const pokedexString = JSON.stringify(newPokedex)
      window.localStorage.setItem("pokemon", pokedexString)
    }
  };

  useEffect(()=>{
    if(localStorage.getItem("pokemon")){
      const newListaPokedex = localStorage.getItem("pokemon")
      const pokedex2 = JSON.parse(newListaPokedex)
      setPokedex(pokedex2)}
  },[pokedex])

  const removeFromPokedex = (pokemonToRemove) => {
    const newPokedex = pokedex.filter(
      (pokemonInPokedex) => pokemonInPokedex.name !== pokemonToRemove.name
    );

    setPokedex(newPokedex);
    const pokedexString = JSON.stringify(newPokedex)
    window.localStorage.setItem("pokemon", pokedexString)
  };

  function nextPageHome () {
    if(counter <= 40){
    setNextPage(nextPage + 21)
    setCounter(counter + 1)
    }
  }

  function backPageHome () {
    if(counter >= 1){
    setNextPage(nextPage - 21)
    setCounter(counter - 1)
    }
  }

  function openModalCapture(){
    setModalOpen(true)
  }

  function closeModalCapture(){
    setModalOpen(false)
  }

  const customStyle = {
    content : {
      top: '50%',
      left: '50%',
      bottom: 'auto',
      right: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '12px',
    }
  }

  const context = {
    pokelist,
    setPokelist,
    pokedex,
    setPokedex,
    fetchPokelist,
    addToPokedex,
    removeFromPokedex,
    flow,
    setFlow,
    modalOpen,
    closeModalCapture,
    openModalCapture,
    customStyle,
    nextPageHome,
    backPageHome,
    counter,
    nextPage,
  }

  return (
    <>
    <GlobalStyle />
    <GlobalContext.Provider value={context}>
      <Router />
    </GlobalContext.Provider>
    </>
  );
}
