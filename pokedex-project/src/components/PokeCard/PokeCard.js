import React, {useEffect} from "react";
import { PokemonCardStyle } from "./styledCard";
import { CardColors } from "../../assets/Colors"
import { firstLetterUppercase, catchMon, removeMon, PokeTypes, sendDetails } from "../../assets/Functions";
import { useNavigate } from "react-router-dom";

export const PokeCard = (props) => {

    const [pokemons, pokedex, setDex, details, setDetails, path, setPath] = props.states  

    const navigate = useNavigate()

    let colorCard = "";
    let colorType1 = "";
    let colorType2 = "";
    let typeIcon1 = "";
    let typeIcon2 = ""


    const PokeButton = (props) => {

        if(pokedex.includes(props.pokemon)){
            return (
                <>
                <button id="remove" onClick={() => removeMon(pokedex,  props.pokemon, setDex)}>
                    Excluir!</button>
             </>
            )
        }
        else {return (
            <>
            <button id="capture" onClick={() => catchMon(pokedex,  props.pokemon, setDex)}>
                Capturar!</button>
        </>
        )}}


    return (
        <>
        {props.array.map((pokemon) => {
            for (let i = 0; i < CardColors.length; i++) {
                if (pokemon.types[0].type.name === CardColors[i].type) {
                    colorCard = CardColors[i].color1
                    colorType1 = CardColors[i].color2
                    typeIcon1 = CardColors[i].icon
                } 
                    if (pokemon.types.length > 1 && pokemon.types[1].type.name === CardColors[i].type) {
                    colorType2 = CardColors[i].color2
                    typeIcon2 = CardColors[i].icon
                }}

            return (
                <PokemonCardStyle
                    key={pokemon.id}
                    colorCard={colorCard}
                    colorType1={colorType1}
                    colorType2={colorType2}>

                    <div className="pokemoncard">
                    <div className="main-container">
                    <div>
                            <p id="pokeID">#{pokemon.id < 99 ? "0" : ""}{pokemon.id}</p>
                            <p id="name">{firstLetterUppercase(pokemon.name)}</p>
                            {PokeTypes(pokemon, typeIcon1, typeIcon2)}
                            
                            </div>
                            <span id="details" onClick={() => sendDetails(pokemon, setDetails, navigate)}>Detalhes</span>
                           
                        </div>
                        
                        <div className="sub-container">
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} alt={pokemon.name} />
                            <PokeButton
                            pokemon={pokemon}/>
                        </div>
                       
                          
                    </div>
                </PokemonCardStyle>
            )})}
            
        </>
        
        )
    }
