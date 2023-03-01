import React, {useState} from 'react';
import { GlobalContext } from './GlobalContext';

export default function GlobalState(props) {
    const [myPokemon, setMyPokemon] = useState([]);
    const [myPokemonList, setMyPokemonList] = useState([])
    const values = {
        myPokemon, 
        setMyPokemon,
        myPokemonList,
        setMyPokemonList
    }
    
    const Provider = GlobalContext.Provider

    return(
        <Provider value={values}>
            {props.children}
        </Provider>
    )
}