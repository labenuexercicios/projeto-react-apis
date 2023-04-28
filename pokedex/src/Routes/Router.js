import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokedexPage from "../Pages/PokedexPage/PokedexPage";
import PokemonDetailPage from "../Pages/PokemonDetailPage/PokemonDetailPage";
import PokemonsListPage from "../Pages/PokemonsListPage/PokemonsListPage";
import { BASE_URL } from "../Constants/url";
import { useEffect, useState } from "react";
import axios from 'axios';


export const Router = () =>{

    //Renderização da lista de Pokemons através da API
    const [pokelist, setPokelist] = useState([])
    const pokemonFullList = async () => {
        try {
            const response = await axios.get(BASE_URL)
            setPokelist(response.data.results)
            
        } catch (error) {
            alert('Algo errado aconteceu!')
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
            }
        
    }
    const offPokedex = (pokeOff) =>{
        const newPokedex = pokedex.filter((pokeInPokedex) =>
        pokeInPokedex.name !== pokeOff.name)
        setPokedex(newPokedex)
    }
    
    return(
    <BrowserRouter>
        <Routes>
            <Route index element={<PokedexPage pokelist = {pokelist}/>}></Route>
            <Route path="/details" element={<PokemonDetailPage/>}></Route>
            <Route path="/list" element={<PokemonsListPage/>}></Route>
        </Routes>
    </BrowserRouter>
    )
}