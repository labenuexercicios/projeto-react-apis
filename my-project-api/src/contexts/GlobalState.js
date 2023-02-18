import { GlobalContext } from "./GlobalContext";
import axios from 'axios';
import { useEffect, useState } from "react";


export const GlobalState = (props) => {
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
    };

    

    const data = {
        pokemons,
        // pokelist,
        // addToPokedex,
        // pokedex

    }

    
    return(
        <GlobalContext.Provider value={data}>
            {props.children}
        </GlobalContext.Provider>
    );
};

// export default GlobalState;