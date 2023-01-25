import { useState, useEffect } from "react"
import Header from "../../Components/Header/Header"
import axios from "axios"
import PokemonCard from "../../Components/PokemonCard/PokemonCard"
import { StyleH1, StyleList, StyleTitle } from "./PokemonListStyle"



export const PokemonListPage = () => {

    const [pokeList, setPokeList] = useState([])

    const url = 'https://pokeapi.co/api/v2/pokemon?limit=50&offset=0'
    
    const getItens = async() => {
        const response = await axios.get(url)
        .then((res)=>{
            console.log(response.data)
        })
        .catch((e)=>{
            console.log(e.message);
        })
    } 

    useEffect(()=>{
        getItens()
    },[])

    return(
        <>
            <Header/>
            <StyleList>
                <StyleH1>Todos Pokemons</StyleH1>
                <PokemonCard/>
            </StyleList>
        </>
    )
}