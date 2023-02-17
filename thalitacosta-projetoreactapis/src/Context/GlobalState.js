import axios from "axios"
import { useEffect, useState } from "react"
import { GlobalContext } from "./GlobalContext"
import {BASE_URL} from "../Constants/Url"

const GlobalState = (props) => {

    const [pokemonList, setPokemonList] = useState([])
    const [pokedex, setPokedex] = useState([]);
    const [detail, setDetail] = useState([])
    
    /* console.log(pokedex) */

    const getPokemons = async() => {

        try {
          const response = await axios.get(BASE_URL);
        
          setPokemonList(response.data.results)
          /* console.log(response.data.results) */
        } catch (error) {
          console.log(error)
        }
      } 

    useEffect(() => {
        getPokemons()
      }, [])
      

    const addToPokedex = (pokemonToAdd) => {
        const isAlreadyOnPokedex = pokedex.find(
          (pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name
        );
    
        if (!isAlreadyOnPokedex) {
          const newPokedex = [...pokedex, pokemonToAdd];
          setPokedex(newPokedex);
        }
      };

    const addToDetail = (pokemonToAddDetail) => {
      const isAlreadyOnDetail = detail.find(
        (pokemonInDetail) => pokemonInDetail.name === pokemonToAddDetail.name
      );
  
      if (!isAlreadyOnDetail) {
        const newDetail = [pokemonToAddDetail];
        setDetail(newDetail);
      }
    };
    
    const removeFromPokedex = (pokemonToRemove) => {
      const newPokedex = pokedex.filter(
        (pokemonInPokedex) => pokemonInPokedex.name !== pokemonToRemove.name
      );
      setPokedex(newPokedex);
    };

    const data = {
        detail,
        addToDetail,
        pokedex,
        pokemonList,
        removeFromPokedex,
        addToPokedex,
        removeFromPokedex
    }

    return (
    <GlobalContext.Provider value={data}>
        {props.children}
    </GlobalContext.Provider>
    )

}

export default GlobalState