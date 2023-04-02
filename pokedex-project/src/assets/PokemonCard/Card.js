import React from "react";
import { CardStyle } from "./styledCard";

export const PokeCard = (props) => {

    return (
        <CardStyle>
            {props.pokemons.map((pokemon) => {
                return (
                    <div className="pokemoncard">
                        <div className="main-container">
                            <p id="pokeID">#0{pokemon.id}</p>
                            <p id="name">{pokemon.name}</p>
                            <img src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} alt={pokemon.name} />
                            <div className="types">
                                {pokemon.types.length === 1 ? (
                                    <>
                                    <button>{pokemon.types[0].type.name}</button>
                                    </>
                                ):(
                                    <>
                                    <button>{pokemon.types[0].type.name}</button>
                                    <button>{pokemon.types[1].type.name}</button>
                                    </>
                                )}
                            </div>
                        </div>
                        <div className="sub-container">
                            <span id="details">Detalhes</span>
                            <button id="capture">Capturar!</button>
                        </div>
                    </div>
                )
            }
            )
            }
        </CardStyle>
    )
}
