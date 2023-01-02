import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import Card from "../templates/cardHome";
import {Flex, Box} from '@chakra-ui/react'
import { vaiParaDetalhes, vaiParaPokedex } from "../coordinator/coordinator";
import { Header } from "../components/header";
import { cores } from "../templates/cores";
import {types} from "../templates/tipos"




export const Home = (props) => {


    const navigate = useNavigate()
    

    const tipo = (pokemon) => {
        if(pokemon.data.types[1]){
            return(
                <>
               <img src={types(pokemon.data.types[0].type.name)}/> 
               <img src={types(pokemon.data.types[1].type.name)}/>
               </>
               )
            
        }else{return <img src={types(pokemon.data.types[0].type.name)}/>
    }
    }
  
    return(
        <>
        <Header/>
        <div>
        
       <Flex gap={"16px"} wrap={"wrap"} position={"absolut"} background={"#5d5d5d"} zIndex={-2} justifyContent={"start"}>
       <Box fontSize={"48px"} color={"white"} paddingTop={"10px"} paddingLeft={"136px"}>Todos Pokémons</Box>
       <Flex  gap={"20px"} wrap={"wrap"} justifyContent={"center"}>
        {props.pokemons.map ((pokemon)=>{
            
            return(
            
        
            <Card
            key={pokemon.data.id}
            pokemon={pokemon.data}
            tipo={tipo(pokemon)}
            pokemons={props.pokemons}
            setPokemons={props.setPokemons}
            addPoke={props.addPoke}
            setAddPoke={props.setAddPoke}
            pokedetalhes={props.pokedetalhes}
            setPokeDetalhes={props.setPokeDetalhes}
            cor={props.cor}
            cores={cores(pokemon.data.types[0].type.name)}
            
            />
               
        )})}
        </Flex>
    </Flex>
    </div>
        </>
        
    )

}