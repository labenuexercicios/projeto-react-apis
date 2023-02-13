

import { PokemonCard } from "../../Components/PokemonCard/PokemonCard";
// import { Header } from "../../Components/Header/Header";
import axios from 'axios';
import { useEffect, useState } from "react";
import { Pai } from './pokemonsListStyle'



export function PokemonsListPage (){
    const [pokemons, setPokemons] = useState([]);
    
    useEffect(() => {
        getPokemons()    
    })

const getPokemons = () =>{
    axios
        .get("https://pokeapi.co/api/v2/pokemon?limit=50")
        .then((res) => setPokemons(res.data.results))
        .catch((err) => console.log(err))
    };

    





    const cardScreen = pokemons.map((pokemon)=> {
        return(
            
            <PokemonCard name={pokemon.name} />  
            
        )
    });

    console.log(pokemons)
    
    
    return (
        <Pai>
            
            {cardScreen}
        </Pai>
        )
    };
             
            






