import React from "react";
import { Header } from "../../Components/Header/Header"
import { PokemonCard } from "../../Components/PokemonCard/PokemonCard"
import { Pai } from './pokemonsListStyle'
import { GlobalContext } from "../../contexts/GlobalContext";
import { useContext } from "react";
// import axios from 'axios';
// import { useEffect, useState } from "react";



export function PokemonsListPage() {
    
    const context = useContext(GlobalContext);

    console.log(context);

    const { pokemons } = context;
   

    // useEffect(() => {
        
    //     getPokemons();
    // },[]);

    // const getPokemons = () => {
    //     const endpoints = [];
    //     for (let i = 1; i < 31; i++ ) {
    //         endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    //     }
    //     console.log(endpoints);
    //     const response = axios.all(endpoints.map((endpoints) => axios.get(endpoints)))
    //     .then((response) => setPokemons(response))
    //     .catch((erro)=>{
    //         console.log(erro.response)
    //     })
    // }
    

        
    

    const cardScreen = pokemons.map((pokemon)=>{
        return(
            <PokemonCard 
            key={pokemon.url}
            name={pokemon.data.name} 
            image={pokemon.data.sprites.front_shiny} 
            number={pokemon.data.order}/>
        )
    });

    
    return (
    <>
        <Header />
        <Pai>
            {cardScreen}    
        </Pai>
    </>
    )
};
   

        


    

    

    // const getPokemons = async () => {

    //     const urlPokemons = pokemons.length;
    //     const endPoints = [];

    // for (let i = 0; i < urlPokemons; i++) {
    //     const url = (pokemons[i].url);
    //     endPoints.push('https://pokeapi.co/api/v2/pokemon/${i}')
    //     console.log(endPoints)
    //     // const newArray = [...arrayUrl, url]
    //     // console.log(newArray);
    // }

    //     try {
    //         const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=30')
    //         setPokemons(response.data.results)
    //     } catch (error) {
    //         console.log(error.response);
            
    //     };
    // }

    


    // console.log(pokemons)

    
        
        
       

    

  
        
        
        
        
        
        
        

    

    
    // const newArray = pokemons.map((pokemon)=>{
    //     const url = (pokemon.url);
    //     const newArray = [...arrayUrl, url]
    //     console.log(newArray);
    //    });
        

        
        
    

        

    
    
    
        
    
    
    

        
       

    
    
        
        



    

        
            

        

    















































