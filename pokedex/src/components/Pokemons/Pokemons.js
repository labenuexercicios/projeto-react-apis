import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PokeContainer } from './pokemosStyled';


function Pokemons(props) {
    const [pokemons, setpokemons] = useState([])

    const getPokemons = () => {
        let endpoints = []
        for(let i = 1; i <= 50; i++){
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }
        
        const response = axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
        .then((res) => setpokemons(res))
        .catch((err) => console.log(err))
        
        
    
        
    }
    

    useEffect(() => {
        getPokemons()
    }, [])


    return (
        <PokeContainer>
            {pokemons.map((pokemon, key) => <props.PokemonCard key={key} name={pokemon.data.name} image={pokemon.data.sprites.front_default}/>)}
        </PokeContainer>
    )
}

export default Pokemons;
