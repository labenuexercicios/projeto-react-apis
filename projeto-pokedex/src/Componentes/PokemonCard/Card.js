import React from "react";
import { Blocodocard, Botao, Imagemdopokemon, Styledotype } from "./Style";


export const  Card = (props) =>{
    const {pokemon} = props;

    const capturar = async () =>{
        // try {
        //     const 
        // } catch (error) {
            
        // }
    }

    return(
            <Blocodocard>
                <div>Nome: {pokemon.name}</div>
                <Styledotype>
                    {pokemon.types.map((pokemon, index) =>{
                        return(
                            <Styledotype key={index}>{pokemon.type.name}</Styledotype>
                        )
                    })}
                </Styledotype> 
                <Botao onClick={capturar}>Capturar</Botao>
                <Imagemdopokemon alt={pokemon.name} src={pokemon.sprites.other.dream_world.front_default} className="pokemon-image"/>
            </Blocodocard>

    )
}
