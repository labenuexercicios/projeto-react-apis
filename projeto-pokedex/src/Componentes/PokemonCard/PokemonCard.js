import axios from "axios"
import React, { useState } from "react"
import { Card } from "./Style"


export const PokemonCard = (props) =>{

    const [guardapokemon, setGuardaPokemon] = useState([])
    const [guardanome, setGuardaNome] = useState([{}])
    let contador = 0

    const objetotemplate ={
        name:"eai",
        types:"", 
        id: 0,
        picture:""
    }
    // setGuardaNome.push(...objetotemplate)

    const recebeitemporid = async (id) =>{
        for(id = 0; id<=20; id++){
            try{
                const resposta = await axios.get(props.pokemons[id].url)
                // console.log(resposta.data)
                setGuardaPokemon(resposta.data)
                // setGuardaNome(resposta.data.name)
                // setGuardaNome.push(...objetotemplate, {name: resposta.data.name, types: "eai", id:0, picture:"picture"})
                setGuardaNome.push(...objetotemplate)
                // console.log(resposta.data.name)
                console.log(guardanome[0])
                // console.log(id)
            }
            catch(error){
                console.log(error.response)
            }
        }
    }

    // setGuardaNome(...objetotemplate, {name: resposta.data.name, types: "eai", id:0, picture:"picture"})
    // console.log(guardanome)
    // console.log(guardapokemon[0])
    
    return(
        <div>
            <button onClick={() =>{recebeitemporid(contador)}}>Receber itens</button>
            {guardapokemon.map((pokemon) =>{
                return(
                    <Card guardapokemon = {guardapokemon} />
                )
            })}
            <Card/>
        </div>
    )
}