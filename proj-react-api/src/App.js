import './App.css';
import React, { useEffect, useState } from 'react';
import Router from './router/Router';
import { ChakraProvider } from '@chakra-ui/react';
import { GlobalContext } from "../src/context/GlobalContext"
import { baseUrl } from './components/utils/baseUrl';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { GlobalStyles } from './GlobalSytle';

function App() {

  const pokedexFromLocalStorage = JSON.parse(localStorage.getItem("pokedexId") || "[]")
  const [pokedex, setPokedex] = useState(pokedexFromLocalStorage)
  const [pokemons, setPokemons] = useState([])
  const [deletePokemonPokedex, setDeletePokemonPokedex]=useState(false)
  const [isOpen, setIsOpen]= useState(false)
  const [isOpenDel,setIsOpenDel]=useState(false)
  const [pokemonDetails,setPokemonDetails]=useState([])
  const pokemonFromPageDetails = []
  const params =useParams()
  const [nextPage,setNextPage]=useState(21)
  
  const [callPlace,setCallPlace]=useState(true)//Constante que determinará de onde foi a chamada para detalhes true é Home, e false é Pokedex, para configurar botão do header
  // useEffect(()=>{setCallPlace(true)},[])
  useEffect(() => {
     getPokemons()
      console.log(nextPage)
    }, [nextPage])
  // useEffect(()=>{
  //   localStorage.setItem("pokeId",JSON.stringify(pokemons))
  // },[pokemons])

  useEffect(()=>{
    localStorage.setItem("pokedexId",JSON.stringify(pokedex))
  },[pokedex])
  // useEffect(() => { getTypePokemons() }, [])
  const checkPokemons =()=>{
    if(pokemons.length === 0){
      getPokemons()
    }
  }
    const nextPageFunction = ()=>{
      setNextPage(nextPage+21)
    }
    const previousPageFunction = ()=>{
      setNextPage(nextPage-21)
    }
    const firstPageFunction = ()=>{
      setNextPage(21)
    }

  const callBackPokemonHome =(params)=>{ //devolve da pokedex para a
    const copyPokedex=[]
    let pokemonOutPokedex = pokedex.filter((pokemonFilter)=>{
      if(pokemonFilter.data.name !== params.pokemonName){
        copyPokedex.push(pokemonFilter)//ele checa cada pokemon da pokedex, se não for igual ao parametro é feito o push na copypokedex
      }else{// quando está no pokedex e o pokemon é encontrado, então o mesmo é feito push no array de pokemons e removido da pokedex
        const copyPokemons=[...pokemons]//pois quando o mesmo é encontrado ele não é feito push na pokedex, assim ela fica atualizada
        copyPokemons.push(pokemonFilter)
        setPokemons(copyPokemons)
        // openModal()
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
  const getPokemons = async ()=>{
    var endpoints = []
    for (let i=nextPage-20; i<=nextPage; i++){
      endpoints.push(`${baseUrl}/pokemon/${i}/`);
    }
    let response= await axios.all(endpoints.map((endpoint)=>axios.get(endpoint)))
    .then((res)=>{setPokemons(res)
    })
    .catch((error)=>{console.log(error)})
  }
  
  // const location=useLocation()
  const capturePokemon = (pokemonCaptured) => {
    const copyPokedex = [...pokedex]
    copyPokedex.push(pokemonCaptured)
    setPokedex(copyPokedex)
    removePokemonHome(pokemonCaptured)
    // setModalIncludeDelete(true)
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
    // setDeletePokemonPokedex(false)
    // setModalIncludeDelete(false)
    // openModal()
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
    // openModal,
    // closeModal,
    isOpen,
    setIsOpen,
    // modalIncludeDelete,
    setCallPlace,
    callPlace,
    pokemonDetails,
    setPokemonDetails,
    deletePokedex,
    isOpenDel,
    setIsOpenDel,
    nextPageFunction,
    nextPage,
    previousPageFunction,
    firstPageFunction

  }
  
  return (
    <>
          <GlobalStyles></GlobalStyles>
      <GlobalContext.Provider value={context}>
          <ChakraProvider>
             <Router />
          </ChakraProvider>
      </GlobalContext.Provider>
    </>
  );
}

export default App;
