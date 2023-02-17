import axios from "axios"
import React, { useState } from "react"


export const PokemonCard = (props) =>{

    const [guardapokemon, setGuardaPokemon] = useState([])

    const recebeitemporid = async (id) =>{
        const resposta = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        console.log(resposta)
        setGuardaPokemon(resposta)
    }
    return(
        <div>
            <button onClick={recebeitemporid}>Receber itens</button>
        </div>
    )
}