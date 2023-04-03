import React from "react";
import { CardStyle, PokemonCard } from "./styledCard";
import { CardColors } from "./Colors";


export const PokeCard = (props) => {



    return (
        <CardStyle>
            {props.pokemons.map((pokemon) => {
                let colorCard = "";
                let colorType1 = "";
                let colorType2 = "";
                let typeIcon;

                for (let i = 0; i < CardColors.length; i++) {
                    if (pokemon.types[0].type.name === CardColors[i].type) {
                        colorCard = CardColors[i].color1
                        colorType1 = CardColors[i].color2
                        typeIcon = CardColors[i].icon
                    } if (pokemon.types.length > 1 && pokemon.types[1].type.name === CardColors[i].type) {
                        colorType2 = CardColors[i].color2
                        typeIcon = CardColors[i].icon
                    }
                }

                return (
                    <PokemonCard colorCard={colorCard}
                        colorType1={colorType1}
                        colorType2={colorType2}>
                        <div className="pokemoncard" key={pokemon.id}>
                            <div className="main-container">

                                <p id="pokeID">#{pokemon.id < 99 ? "0" : ""}{pokemon.id}</p>
                                <p id="name">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</p>

                                <img src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                                    id="poke-img" alt={pokemon.name} />

                                <div className="types">
                                    {pokemon.types.length === 1 ? (
                                        <>
                                            <button id="type1"><img src={typeIcon} id="type1icon" alt={pokemon.types[0].type.name} />
                                                {pokemon.types[0].type.name.charAt(0).toUpperCase() +
                                                    pokemon.types[0].type.name.slice(1)}</button>
                                        </>
                                    ) : (
                                        <>
                                            <button id="type1"><img src={typeIcon} id="type1icon" alt={pokemon.types[0].type.name} />
                                                {pokemon.types[0].type.name.charAt(0).toUpperCase() +
                                                    pokemon.types[0].type.name.slice(1)}
                                            </button>
                                            <button id="type2"><img src={typeIcon} id="type2icon" alt={pokemon.types[1].type.name} />
                                                {pokemon.types[1].type.name.charAt(0).toUpperCase() +
                                                    pokemon.types[1].type.name.slice(1)}</button>
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
