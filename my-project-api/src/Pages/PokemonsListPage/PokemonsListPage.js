import { Header } from "../../Components/Header/Header"
import { PokemonCard } from "../../Components/PokemonCard/PokemonCard"
import axios from 'axios';
import { useEffect, useState } from "react";
import { Pai } from './pokemonsListStyle'


export function PokemonsListPage() {
    const [pokemons, setPokemons] = useState([]);
   

    useEffect(() => {
        
        getPokemons();
    },[]);

    const getPokemons = () => {
        const endpoints = [];
        for (let i = 1; i < 31; i++ ) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        }
        console.log(endpoints);
        const response = axios.all(endpoints.map((endpoints) => axios.get(endpoints)))
        .then((response) => setPokemons(response))
        .catch((erro)=>{
            console.log(erro.response)
        })
    }

    const cardScreen = pokemons.map((pokemon)=>{
        return(
            <PokemonCard name={pokemon.data.name} image={pokemon.data.sprites.front_defalt} number={pokemon.data.order} />
        )
    });

    console.log(pokemons)

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
        

        
        
    

        

    
    
    
        
    
    
    

        
       

    
    
        
        



    

        
            

        

    















































