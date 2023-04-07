import React from "react";
import { PokemonCardStyle } from "./styledCard";
import { CardColors } from "../../assets/Colors";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const PokemonCard = (props) => {


    const capturePokemon = () => {
        toast.success('Pokémon capturado com sucesso!', {
            position: "top-left",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }

    return (
        <>
        {props.pokemons.map((pokemon) => {

            let colorCard = "";
            let colorType1 = "";
            let colorType2 = "";
            let typeIcon1 = "";
            let typeIcon2 = ""

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

    <ToastContainer />
    <div className="pokemoncard" key={pokemon.id}>
        
        <div className="main-container">
            <p id="pokeID">#{pokemon.id < 99 ? "0" : ""}{pokemon.id}</p>
            <p id="name">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</p>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} id="poke-img" alt={pokemon.name} />

    <div className="types">
        {pokemon.types.length === 1 ? (

        <>
        <button id="type1">
            <img src={typeIcon1} id="typeicon" alt={pokemon.types[0].type.name} />
            {pokemon.types[0].type.name.charAt(0).toUpperCase() + pokemon.types[0].type.name.slice(1)}</button>
        </> ) : (

        <>
        <button id="type1">
            <img src={typeIcon1} id="typeicon" alt={pokemon.types[0].type.name} />
            {pokemon.types[0].type.name.charAt(0).toUpperCase() + pokemon.types[0].type.name.slice(1)}
        </button>
        
        <button id="type2">
            <img src={typeIcon2} id="typeicon" alt={pokemon.types[1].type.name} />
            {pokemon.types[1].type.name.charAt(0).toUpperCase() + pokemon.types[1].type.name.slice(1)}</button>
        </> 
            )
        }
            </div> 
        </div>
        
        <div className="sub-container">
            <span id="details" onClick={() => props.setPage(2)}>Detalhes</span>
            <button id="capture" onClick={() => capturePokemon()}>Capturar!</button>
            </div>
        </div>
        </PokemonCardStyle>
                    )
                }
            )
        }
        </>
    )
}