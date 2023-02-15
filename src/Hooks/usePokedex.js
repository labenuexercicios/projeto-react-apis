import { useEffect, useState } from "react";


export default function usePokedex(){
      const [pokedex, setPokedex] = useState([]);

      useEffect(()=>{
        console.log(pokedex)
      },[pokedex])

      const addToPokedex = (pokemon) => {
       
        if (!inPokedex(pokemon)) {
            const newPokedex = [...pokedex, pokemon];
            setPokedex(newPokedex);
        }
    };

    const removeFromPokedex = (pokemon) => {
        const newPokedex = pokedex.filter(
            (pokemonInPokedex) => pokemonInPokedex.id !== pokemon.id
        );

        setPokedex(newPokedex);
    };

  const inPokedex =(pokemon)=>{
    const isAlreadyOnPokedex = pokedex.find(
        (pokemonInPokedex) => pokemonInPokedex.id === pokemon.id
    );

    return isAlreadyOnPokedex

    
  }
     
    return { pokedex, addToPokedex, removeFromPokedex , inPokedex}
}