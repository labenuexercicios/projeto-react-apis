import React from "react";
import { DetailStyle } from "./styledDetails";
import { CardColors } from "../../assets/Colors"
import { PokeTypes } from './../../assets/Functions';
import { firstLetterUppercase } from "./../../assets/Functions";
import pokebg from '../../assets/pokebg.png'


export const DetailCard = (poke) => {

    let colorCard = "";
    let colorType1 = "";
    let colorType2 = "";
    let typeIcon1 = "";
    let typeIcon2 = ""

    return poke.map((pokemon) => {
    
        for (let i = 0; i < CardColors.length; i++) {
            if (pokemon.types[0].type.name === CardColors[i].type) {
                colorCard = CardColors[i].color1
                colorType1 = CardColors[i].color2
                typeIcon1 = CardColors[i].icon

            } if (pokemon.types.length > 1 && pokemon.types[1].type.name === CardColors[i].type) {
                colorType2 = CardColors[i].color2
                typeIcon2 = CardColors[i].icon
            }
        }

        return (
            <DetailStyle
                colorCard={colorCard}
                colorType1={colorType1}
                colorType2={colorType2}
            >

                <div className="detailcard">
                    <div className="sprites-container">

                        <div id="sprite-card">
                            <img src={pokemon.sprites.front_default} id="sprite-1" alt="sprite-front" />
                        </div>

                        <div id="sprite-card">
                            <img src={pokemon.sprites.back_default} id="sprite-2" alt="sprite-back" />
                        </div>
                    </div>

                    <div className="base-stats">
                        <h2>Base stats</h2>
                        <div className="stats-container">
                            <div className="stats-list">
                                <ul>
                                    <li>HP</li>
                                    <li>Attack</li>
                                    <li>Defense</li>
                                    <li>Sp.Atk</li>
                                    <li>Sp.Def</li>
                                    <li>Speed</li>
                                    <li>Total</li>
                                </ul>
                            </div>

                            <div className="stats-bars">
                                <div id="stat1">
                                    {pokemon.stats[0].base_stat}
                                </div>
                                <div id="stat2">
                                {pokemon.stats[1].base_stat}
                                </div>
                                <div id="stat3">
                                {pokemon.stats[2].base_stat}
                                </div>
                                <div id="stat4">
                                {pokemon.stats[3].base_stat}
                                </div>
                                <div id="stat5">
                                {pokemon.stats[4].base_stat}
                                </div>
                                <div id="stat6">
                                {pokemon.stats[5].base_stat}
                                </div>
                                {
                                pokemon.stats[0].base_stat +
                                pokemon.stats[1].base_stat + 
                                pokemon.stats[2].base_stat +
                                pokemon.stats[3].base_stat +
                                pokemon.stats[4].base_stat +
                                pokemon.stats[5].base_stat
                                }
                            </div>
                        </div>
                    </div>

                    <div className="main-info">
                        <img key={pokemon.id} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} id="poke-img" alt={pokemon.name} />
                        <p id="pokeID">#{pokemon.id < 99 ? "0" : ""}{pokemon.id}</p>
                        <p id="name">{firstLetterUppercase(pokemon.name)}</p>
                        {PokeTypes(pokemon, typeIcon1, typeIcon2)}

                        <div className="moves">
                            <ul>
                                <h2>Moves:</h2>
                                <li>{firstLetterUppercase(pokemon.moves[0].move.name)}</li>
                                <li>{firstLetterUppercase(pokemon.moves[1].move.name)}</li>
                                <li>{firstLetterUppercase(pokemon.moves[2].move.name)}</li>
                                <li>{firstLetterUppercase(pokemon.moves[3].move.name)}</li>
                                <li>{firstLetterUppercase(pokemon.moves[4].move.name)}</li>
                                <li>{firstLetterUppercase(pokemon.moves[5].move.name)}</li>
                                <li>{firstLetterUppercase(pokemon.moves[6].move.name)}</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </DetailStyle>
        )
    }
    )
}
