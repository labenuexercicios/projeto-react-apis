import { Header } from "../../Components/Header/Header"
import { PokemonCard } from "../../Components/PokemonCard/PokemonCard"
// import axios from 'axios';
// import { useEffect, useState } from "react";
import { Pai } from './pokemonsListStyle'





export function PokemonsListPage (){
    // const [pokemons, setPokemons] = useState([]);
    // const [arrayEndpoints, setArrayEndpoints] = useState([])
    
    
    // useEffect(() => {
    //     getPokemons();
    // });   
    

    // const getPokemons = async () => {
        
    //     try {
    //         const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=30')
    //         setPokemons(response.data)
    //     } catch (error) {
    //         console.log(error.response);
    //         pokemons.forEach((pokemon)=>{
    //             setArrayEndpoints(pokemon.url)
            
            
    //         });
    //     }
    // }

        
            

    



         

        
    // const cardScreen = arrayEndpoints.map((pokemon)=>{
    //     return (
    //         console.log(pokemon.url)
            

    //     )
    // })
        
    return (
        <Pai>
            <Header />
            <PokemonCard />
        </Pai>
        )
    };
           


    
             
    
    
    
    

            




    
    
             
            






