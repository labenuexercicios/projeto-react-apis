import React from "react";
import { CardStyle, PokemonCard } from "./styledCard";


export const PokeCard = (props) => {



    return (
        <CardStyle>
            {props.pokemons.map((pokemon) => {
                let color1 = "";
                switch (pokemon.types[0].type.name) {
                    case "grass":
                        color1 = "#729F92";
                        break;
                    case "fire":
                        color1 = "#F08030";
                        break;
                    case "water":
                        color1 = "#71C3FF";
                        break;
                    case "bug":
                        color1 = "#A8B820";
                        break;
                    case "normal":
                        color1 = "#C6C6A7";
                        break;
                    case "electric":
                        color1 = "#F8D030";
                        break;
                    case "fighting":
                        color1 = "#F87070";
                        break;
                    case "ghost":
                        color1 = "#EAAB7D";
                        break;
                    case "ice":
                        color1 = "#98D8D8";
                        break;
                    case "psychic":
                        color1 = "#F85888";
                        break;
                    case "rock":
                        color1 = "#B8A038";
                        break;
                    case "fairy":
                        color1 = "#FF9BCD";
                        break;
                    case "ground":
                        color1 = "#BF9762";
                        break;
                    case "dragon":
                        color1 = "#7038F8";
                        break;
                    case "poison":
                        color1 = "#AD61AE";
                        break;
                    default:
                        color1 = null;
                        break;
                }

                return (
                    <PokemonCard color1={color1}>
                        <div className="pokemoncard" key={pokemon.id}>
                            <div className="main-container">
                                <p id="pokeID">
                                    #{pokemon.id < 99 ? "0" : ""}{pokemon.id}</p>
                                <p id="name">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</p>
                                <img src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} alt={pokemon.name} />
                                <div className="types">
                                    {pokemon.types.length === 1 ? (
                                        <>
                                            <button id="type">{pokemon.types[0].type.name.charAt(0).toUpperCase() + pokemon.types[0].type.name.slice(1)}</button>
                                        </>
                                    ) : (
                                        <>
                                            <button id="type">{pokemon.types[0].type.name.charAt(0).toUpperCase() + pokemon.types[0].type.name.slice(1)}</button>
                                            <button id="type">{pokemon.types[1].type.name.charAt(0).toUpperCase() + pokemon.types[1].type.name.slice(1)}</button>
                                        </>
                                    )}
                                </div>
                            </div>
                            <div className="sub-container">
                                <span id="details">Detalhes</span>
                                <button id="capture">Capturar!</button>
                            </div>
                        </div>
                    </PokemonCard>
                )
            }
            )
            }
        </CardStyle>
    )
}
