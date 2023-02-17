import React, { useEffect, useState } from "react";
import axios from"axios"
import { CardPokemon } from "../../componentes/cardPokemons/Index";
import{containerPokeHome} from "../home/style"



export const Home= ()=>{
    const [pokeapi, setPokeapi]=useState([])

    const requisicaoApi=axios.create({

        baseURL:"https://pokeapi.co/api/v2/pokemon"
        
    })

    const pokemonReq= async() =>{
        const resposta=await requisicaoApi.get()
        const dados= await resposta.data.results
        setPokeapi(dados)
    }

    useEffect(()=>{
        pokemonReq()


    },[])

    


    return(

        <containerPokeHome>
            {pokeapi.map((pokemon)=>{
                return <CardPokemon pokemon={pokemon}/>

            })}

    </containerPokeHome>


    )
    }
