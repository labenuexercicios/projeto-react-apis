import axios from "axios";
import { useEffect } from "react";
import {URL_BASE} from "../Constants/apiConstants"
import { useState } from "react";
import { addValueRequestPokemon, addValueToKeyRequestList } from "../util/ReturnManageRequestPokemon";

export default function usePokemons(){
    
    const [ListPokemons, setListPokemons] = useState({
        count: "",
        next: "",
        previous: "",
        results: [],
    });

    const [pokemons, setPokemons] = useState([]);
    
    const url= `${URL_BASE }?limit=${21}&offset=${0}`

    useEffect(()=>{
         requestPokemons(url)

    },[])




   const requestPokemons =async(url)=>{
    try {
        const res= await axios.get(url)
        setListPokemons(addValueToKeyRequestList(res))
        getPokemons(res.data.results)
    } catch (error) {
        
    }
   }

    const getPokemons =(results)=>{

        const promisesArray = results.map((item)=>{
            return axios.get(item.url)
        })
        Promise.all(promisesArray).then((res)=>{
            setPokemons(
                res.map((item)=>{
                    return addValueRequestPokemon(item)
                })

            )
        })
    }
return {pokemons}
}