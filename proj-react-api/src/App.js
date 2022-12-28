import './App.css';
import React, { useEffect, useState } from 'react';
import Router from './router/Router';
import { ChakraProvider } from '@chakra-ui/react';
import { GlobalContext } from "../src/context/GlobalContext"
import { json, useLocation } from 'react-router-dom';
import { baseUrl } from './components/utils/baseUrl';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Modal from "react-modal";
import { useNavigate } from 'react-router-dom';


Modal.setAppElement("#root")


function App() {

  const pokemonFromLocalStorage = JSON.parse(localStorage.getItem("pokeId")|| "[]")
  const pokedexFromLocalStorage = JSON.parse(localStorage.getItem("pokedexId") || "[]")
  const [pokedex, setPokedex] = useState(pokedexFromLocalStorage)
  const [pokemons, setPokemons] = useState(pokemonFromLocalStorage)
  const [deletePokemonPokedex, setDeletePokemonPokedex]=useState(false)
  const [modalIsOpen, setIsOpen]= useState(false)
  const [modalIncludeDelete, setModalIncludeDelete]=useState(true)
  const [pokemonShow, setPokemonShow] = useState([])
  const pokemonFromPageDetails = []
  const params =useParams()
  
  const [callPlace,setCallPlace]=useState(true)//Constante que determinará de onde foi a chamada para detalhes true é Home, e false é Pokedex, para configurar botão do header
  // useEffect(()=>{setCallPlace(true)},[])
  useEffect(() => { checkPokemons()
    setPokemonShow([]) }, [])
  useEffect(()=>{
    localStorage.setItem("pokeId",JSON.stringify(pokemons))
  },[pokemons])

  useEffect(()=>{
    localStorage.setItem("pokedexId",JSON.stringify(pokedex))
  },[pokedex])
  // useEffect(() => { getTypePokemons() }, [])
  const checkPokemons =()=>{
    if(pokemons.length === 0){
      getPokemons()
    }
  }
    function openModal(){
      setIsOpen(true)
    }
    function closeModal(){
      setIsOpen(false)
    }
  const callBackPokemonHome =(params)=>{
    const copyPokedex=[]
    let pokemonOutPokedex = pokedex.filter((pokemonFilter)=>{
      if(pokemonFilter.data.name !== params.pokemonName){
        copyPokedex.push(pokemonFilter)//ele checa cada pokemon da pokedex, se não for igual ao parametro é feito o push na copypokedex
      }else{// quando está no pokedex e o pokemon é encontrado, então o mesmo é feito push no array de pokemons e removido da pokedex
        const copyPokemons=[...pokemons]//pois quando o mesmo é encontrado ele não é feito push na pokedex, assim ela fica atualizada
        copyPokemons.push(pokemonFilter)
        setPokemons(copyPokemons)
        openModal()
      }
    }
    )
    setPokedex(copyPokedex)
    // const copyPokemons=[...pokemons]
    // copyPokemons.push(pokemonARemover)
    // setPokemons(copyPokemons)
    // console.log(pokemons)
    setDeletePokemonPokedex(false)
  }
  const getPokemons = ()=>{
    var endpoints = []
    for (let i=1; i<=30; i++){
      endpoints.push(`${baseUrl}/pokemon/${i}/`);
    }
    let response= axios.all(endpoints.map((endpoint)=>axios.get(endpoint)))
    .then((res)=>{setPokemons(res)
    })
    .catch((error)=>{console.log(error)})
  }
  
  // const location=useLocation()
  const capturePokemon = (pokemonCaptured) => {
    const copyPokedex = [...pokedex]
    copyPokedex.push(pokemonCaptured)
    setPokedex(copyPokedex)
    console.log(pokedex)
    removePokemonHome(pokemonCaptured)
    setModalIncludeDelete(true)
    openModal()
  }
  const removePokemonHome = (pokemonARemover)=>{
    const copyPokemons = []
    let pokemonOutHome = pokemons.filter((pokemonFilter)=>{
      if(pokemonFilter.data.name !== pokemonARemover.data.name){
        copyPokemons.push(pokemonFilter)
      }
    })
    setPokemons(copyPokemons)
  }
  const deletePokedex = ()=>{
    const copyPokemons=[...pokemons]
    pokedex.map((pokemon)=>{
      copyPokemons.push(pokemon)
    })
    setPokemons(copyPokemons)
    setPokedex([])
  }
  const backPokemonHome =(pokemonARemover)=>{
    const copyPokedex=[]
    let pokemonOutPokedex = pokedex.filter((pokemonFilter)=>{
      if(pokemonFilter.data.name !== pokemonARemover.data.name){
        copyPokedex.push(pokemonFilter)
      }
    })
    setPokedex(copyPokedex)
    console.log(pokemons)
    const copyPokemons=[...pokemons]
    copyPokemons.push(pokemonARemover)
    setPokemons(copyPokemons)
    console.log(pokemons)
    setDeletePokemonPokedex(false)
    setModalIncludeDelete(false)
    openModal()
  }
  const context = {
    pokedex,
    setPokedex,
    capturePokemon,
    pokemons,
    setPokemons,
    backPokemonHome,
    deletePokemonPokedex,
    setDeletePokemonPokedex,
    callBackPokemonHome,
    pokemonFromPageDetails,
    openModal,
    closeModal,
    modalIsOpen,
    setIsOpen,
    modalIncludeDelete,
    setCallPlace,
    callPlace,
    pokemonShow,
    setPokemonShow,
    deletePokedex
  }
  
  return (
    <>
      <GlobalContext.Provider value={context}>
          <ChakraProvider>
             <Router />
          </ChakraProvider>
      </GlobalContext.Provider>
    </>
  );
}

export default App;
