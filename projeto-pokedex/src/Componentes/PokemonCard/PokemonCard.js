import axios from "axios"
import React, { useEffect, useState } from "react"
import { Card } from "./Style"


export const PokemonCard = (props) =>{

    const [guardapokemon, setGuardaPokemon] = useState([])
    // const [guardanome, setGuardaNome] = useState([])
    // let id = 0
    


    // const objetoTeste = [{
    //     name:"resposta.data.name",
    //     types:"resposta.types[0]", 
    //     id: "resposta.data.id",
    //     picture:""
    // }]
    // setGuardaPokemon(objetoTeste)
    console.log(guardapokemon)
    

    const recebeitemporid = async () =>{



        for(let id = 0; id<=2; id++){
            try{
                const resposta = await axios.get(props.pokemons[id].url)
                console.log(resposta.data)

                setGuardaPokemon(guardapokemon, [resposta.data])



                console.log(guardapokemon)

                // console.log(resposta)

            }
            catch(error){
                console.log(error.response)
            }
        }
    }

    console.log(guardapokemon)
    
    return(
        <div>
            <button onClick={recebeitemporid}>Receber itens</button>
            {/* {guardapokemon.map((pokemon) =>{
                return(
                    <Card guardapokemon = {guardapokemon} />
                )
            })}
            <Card/> */}
            {/* <p>{guardapokemon}</p> */}
        </div>
    )
}