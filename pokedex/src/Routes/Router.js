import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokedexPage from "../Pages/PokedexPage/PokedexPage";
import PokemonDetailPage from "../Pages/PokemonDetailPage/PokemonDetailPage";
import PokemonsListPage from "../Pages/PokemonsListPage/PokemonsListPage";
import { BASE_URL } from "../Constants/url";
import { useEffect, useState } from "react";
import axios from 'axios';
import styled from "styled-components";


export const Router = () =>{
    const [showAlertOn, setShowAlertOn] = useState(false)
    const [showAlertOff, setShowAlertOff] = useState(false)
    //Renderização do alert estilizado ao adicionar/remover pokemons
    
const AlertOn = styled.div`
    background-color: #FFFFFF;
    color: #000000;
    font-family: 'Poppins', sans-serif;
    width: 451px;
    height: 222px;
    border-radius: 12px;
    position: fixed;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    top:35%;
    left:35%;
    transform:translate (-50%, -50%);
    opacity:0;
    opacity: ${showAlertOn ? 1 : 0};
    transition: opacity 1s;
  
`;
const AlertOff = styled.div`
    background-color: #FFFFFF;
    color: #000000;
    font-family: 'Poppins', sans-serif;
    width: 451px;
    height: 222px;
    border-radius: 12px;
    position: fixed;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    top:35%;
    left:35%;
    transform:translate (-50%, -50%);
    opacity:0;
    opacity: ${showAlertOff ? 1 : 0};
    transition: opacity 1s;
`;

useEffect(() => {
    if (showAlertOn) {
      const timeout = setTimeout(() => {
        setShowAlertOn(false);
      }, 1000);
  
      return () => clearTimeout(timeout);
    }
  }, [showAlertOn]);
    
  useEffect(() => {
    if (showAlertOff) {
      const timeout = setTimeout(() => {
        setShowAlertOff(false);
      }, 1000);
  
      return () => clearTimeout(timeout);
    }
  }, [showAlertOff]);
//Renderização da lista de Pokemons através da API
const [pokelist, setPokelist] = useState([])
const pokemonFullList = async () => {
        try {
            const response = await axios.get(BASE_URL)
            setPokelist(response.data.results)
            
            
        } catch (error) {
            console.log('Algo errado aconteceu na lista de pokemons!')
            console.log(error.response)
        }
    }
    useEffect(() =>{
        pokemonFullList()
    },[])

    
    //Criação da Pokedex, adição e remoção de Pokemons
    const [pokedex, setPokedex] = useState([])
    const addPokedex = (pokeAdd) =>{
        const isOnPokedex = pokedex.find((pokeInPokedex) => 
        pokeInPokedex.name === pokeAdd.name)
            if (!isOnPokedex){
                const newPokedex = [...pokedex, pokeAdd]
                setPokedex(newPokedex)
                setShowAlertOn(true)
                setTimeout(()=>{
                    setShowAlertOn(false);
                },2000)
            }
        
    }
    const offPokedex = (pokeOff) =>{
        const newPokedex = pokedex.filter((pokeInPokedex) =>
        pokeInPokedex.name !== pokeOff.name)
        setPokedex(newPokedex)
        setShowAlertOff(true)
        setTimeout(()=>{
            setShowAlertOff(false);
        }, 2000)
    }

    return(
    <BrowserRouter>
        
        <Routes>
            <Route index element={<PokedexPage 
                                    pokelist = {pokelist} 
                                    pokedex={pokedex} 
                                    addPokedex={addPokedex}/>}>
            </Route>
            <Route path="/details/:pokemonId" element={<PokemonDetailPage/>}/>
            <Route path="/list" element={<PokemonsListPage 
                                    pokedex={pokedex}
                                    offPokedex={offPokedex}/>}>

            </Route>
        </Routes>
        {showAlertOn && (
            <AlertOn>
                <h1>Gotcha!</h1>
                <p>O Pokémon foi adicionado a sua Pokédex!</p>
            </AlertOn>
        )}
        {showAlertOff && (
            <AlertOff>
                <h1>Oh, no!</h1>
                <p>O Pokémon foi removido da sua Pokédex.</p>
            </AlertOff>
        )}
    </BrowserRouter>
    )
}