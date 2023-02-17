import React, { useEffect, useState } from "react";
import axios from "axios";
import{containerPokeCard} from "../cardPokemons/style"


export const CardPokemon = ({ pokemon }) => {
  const [pokeApi2, setPokeApi2] = useState([])
  const reqPokemon = axios.create({
    baseURL: `$ (pokemon)`
  });

  const poke = async () => {
    const respostaPoke = await reqPokemon.get()
    const dados2 = await respostaPoke.data;
    setPokeApi2(dados2)
  }

  useEffect(() => {
    poke();
  }, [])

  console.log(pokeApi2)

  return(

    <containerPokeCard>

      CardPokemon
    </containerPokeCard>
   



  )



};
