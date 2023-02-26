import React from "react";
import { CardStyle, Imagemdopokemon, Styledotype } from "./Style";


export const  Card = (props) =>{
    const {pokemon} = props;

    const capturar = async () =>{
        // try {
        //     const 
        // } catch (error) {
            
        // }
    }

    return(
        <div>
        {/* <Containerdoscard> */}
        <CardStyle>
            <div>Nome: {pokemon.name}</div>
            <Imagemdopokemon alt={pokemon.name} src={pokemon.sprites.other.dream_world.front_default} className="pokemon-image"/>
            <Styledotype>
                {pokemon.types.map((pokemon, index) =>{
                    return(
                        <div key={index}>{pokemon.type.name}</div>
                    )
                })}
            </Styledotype> 
            <button onClick={capturar}>Capturar</button>
        </CardStyle>
        {/* </Containerdoscard> */}
        </div>
    )
}
