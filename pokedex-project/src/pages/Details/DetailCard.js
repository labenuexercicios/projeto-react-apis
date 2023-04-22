import React from "react";
import { DetailStyle } from "./styledDetails";
import { CardColors } from "../../assets/Colors"
import { PokeTypes } from './../../assets/Functions';
import { firstLetterUppercase } from "./../../assets/Functions";

export const DetailCard = (poke) => {

    let colorCard = "";
    let colorType1 = "";
    let colorType2 = "";
    let typeIcon1 = "";
    let typeIcon2 = "";
    let statColor = "";
    let stat1 = "";
    let stat2 = "";
    let stat3 = "";
    let stat4 = "";
    let stat5 = "";
    let stat6 = "";

    return poke.map((pokemon) => {

        stat1 = `${pokemon.stats[0].base_stat}%`
        stat2 = `${pokemon.stats[1].base_stat}%`
        stat3 = `${pokemon.stats[2].base_stat}%`
        stat4 = `${pokemon.stats[3].base_stat}%`
        stat5 = `${pokemon.stats[4].base_stat}%`
        stat6 = `${pokemon.stats[5].base_stat}%`

        for (let i = 0; i < pokemon.stats.length; i++) {
            if (pokemon.stats[i].base_stat < 50) {
                statColor = "#FF1800"
            } else if (pokemon.stats[i].base_stat > 50 && pokemon.stats[i].base_stat < 90) {
                statColor = "#FF9800"
            } else if (pokemon.stats[i].base_stat > 90 && pokemon.stats[i].base_stat < 100) {
                statColor = "#FFCC00"
            } else if (pokemon.stats[i].base_stat > 100 && pokemon.stats[i].base_stat < 110) {
                statColor = "#DCFF00"
            } else if (pokemon.stats[i].base_stat > 110 && pokemon.stats[i].base_stat < 120) {
                statColor = "#B4FF00"
            } else if (pokemon.stats[i].base_stat > 120 && pokemon.stats[i].base_stat < 140) {
                statColor = "#80FF00"
            } else if (pokemon.stats[i].base_stat > 120) {
                statColor = "#02FF6A"
            }}

        for (let i = 0; i < CardColors.length; i++) {
            if (pokemon.types[0].type.name === CardColors[i].type) {
                colorCard = CardColors[i].color1
                colorType1 = CardColors[i].color2
                typeIcon1 = CardColors[i].icon

            } if (pokemon.types.length > 1 && pokemon.types[1].type.name === CardColors[i].type) {
                colorType2 = CardColors[i].color2
                typeIcon2 = CardColors[i].icon
            }}

        return (
            <DetailStyle
                colorCard={colorCard}
                colorType1={colorType1}
                colorType2={colorType2}
                statColor={statColor}
                stat1={stat1}
                stat2={stat2}
                stat3={stat3}
                stat4={stat4}
                stat5={stat5}
                stat6={stat6}>

                <div className="detailcard">
                    <div className="sprites-container">

                    <div id="sprite-card">
                        <img src={pokemon.sprites.front_default} alt="sprite-front"/>
                        </div>

                    <div id="sprite-card">
                        <img src={pokemon.sprites.back_default} alt="sprite-back"/>
                        </div>
                    </div>

                    <div className="base-stats">
                        <h2>Base stats</h2>
                        <div className="stats-container">
                            <div className="stats-list">
                                <ul>
                                    <li id="hp">HP</li>
                                    <li>Attack</li>
                                    <li>Defense</li>
                                    <li>Sp.Atk</li>
                                    <li>Sp.Def</li>
                                    <li>Speed</li>
                                    <li>Total</li>
                                </ul>
                            </div>

                            <div className="stats-numbers">
                                <ul>
                                    <li id="stat1">{pokemon.stats[0].base_stat}</li>
                                    <li id="stat2">{pokemon.stats[1].base_stat}</li>
                                    <li id="stat3">{pokemon.stats[2].base_stat}</li>
                                    <li id="stat4">{pokemon.stats[3].base_stat}</li>
                                    <li id="stat5">{pokemon.stats[4].base_stat}</li>
                                    <li id="stat6">{pokemon.stats[5].base_stat}</li>
                                    <li id="total">{
                                        pokemon.stats[0].base_stat +
                                        pokemon.stats[1].base_stat +
                                        pokemon.stats[2].base_stat +
                                        pokemon.stats[3].base_stat +
                                        pokemon.stats[4].base_stat +
                                        pokemon.stats[5].base_stat
                                    }
                                    </li>
                                </ul>
                            </div>

                            <div className="stats-bars">
                                <ul>
                                    <li><button id="btn1"></button></li>
                                    <li><button id="btn2"></button></li>
                                    <li><button id="btn3"></button></li>
                                    <li><button id="btn4"></button></li>
                                    <li><button id="btn5"></button></li>
                                    <li><button id="btn6"></button></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="main-info">
                        <img key={pokemon.id} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} id="poke-img" alt={pokemon.name} />
                        <div className="top-info">
                            <span id="pokeID">#{pokemon.id < 99 ? "0" : ""}{pokemon.id}</span>
                            <p id="name">{firstLetterUppercase(pokemon.name)}</p>
                            {PokeTypes(pokemon, typeIcon1, typeIcon2)}
                        </div>
                        <div className="moves">
                            <ul>
                                <h2>Moves:</h2>
                                <li>{firstLetterUppercase(pokemon.moves[0].move.name)}</li>
                                <li>{firstLetterUppercase(pokemon.moves[1].move.name)}</li>
                                <li>{firstLetterUppercase(pokemon.moves[2].move.name)}</li>
                                <li>{firstLetterUppercase(pokemon.moves[3].move.name)}</li>
                                <li>{firstLetterUppercase(pokemon.moves[4].move.name)}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </DetailStyle>
        )})}
