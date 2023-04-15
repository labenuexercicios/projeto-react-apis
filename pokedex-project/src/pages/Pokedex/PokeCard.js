import React from "react";
import { PokemonCardStyle } from "./styledCard";
import { CardColors } from "../../assets/Colors"
import { goToDetails } from "../../routes/coordinator";
import { CardButton } from "../../assets/Functions";
import { PokeTypes } from "../../assets/Functions";
import { useNavigate } from "react-router-dom";
import { firstLetterUppercase } from "../../assets/Functions";

export const GenerateCard = (param, pokedex, setState, setDetails) => {

    let colorCard = "";
    let colorType1 = "";
    let colorType2 = "";
    let typeIcon1 = "";
    let typeIcon2 = ""

    const navigate = useNavigate()

    const sendDetailsData = (pokemon) => {
        setDetails(pokemon)
        const pokeString = JSON.stringify(pokemon)
        localStorage.setItem("Detail", pokeString)
        goToDetails(navigate)
    }


    return param.map((pokemon) => {

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
                <PokemonCardStyle
                    colorCard={colorCard}
                    colorType1={colorType1}
                    colorType2={colorType2}
                >

                    <div className="pokemoncard">
                    <img key={pokemon.id} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} id="poke-img" alt={pokemon.name} />
                        <div className="main-container">
                            <p id="pokeID">#{pokemon.id < 99 ? "0" : ""}{pokemon.id}</p>
                            <p id="name">{firstLetterUppercase(pokemon.name)}</p>

                            {PokeTypes(pokemon, typeIcon1, typeIcon2)}

                        </div>

                        <div className="sub-container">
                            <span id="details" onClick={() => sendDetailsData(pokemon)}>Detalhes</span>
                            {CardButton(pokedex, pokemon, setState)}
                        </div>
                    </div>
                </PokemonCardStyle>
            )
    }
        )
    }
