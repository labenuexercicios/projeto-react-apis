import React from "react";

export const catchMon = (pokedex, pokemon, setState) => {

    setState([...pokedex, pokemon])
    const pokedexString = JSON.stringify(pokedex)
    localStorage.setItem("pokedex", pokedexString);

    for (let i = 0; i < pokedex.length; i++) {
        if (pokedex[i].name === pokemon.name) {
            setState([...pokedex])
        }
    }
}

   
const removeMon = (pokedex, param, setState) => {
    const oldDex = pokedex.filter((pokemon) => pokemon !== param);
    setState(oldDex);
    const oldDexString = JSON.stringify(oldDex);
    localStorage.setItem("pokedex", oldDexString)
}



export const CardButton = (pokedex, pokemon, setState) => {
        for (let i = 0; i < pokedex.length; i++) {
        if(pokedex[i].name === pokemon.name) {
            return (
            <>
                <button id="remove" onClick={
                    () => removeMon(pokedex, pokemon, setState)
                }>Excluir</button>
            </>
            )
        } 
    } return (
        <>
        <button id="capture" onClick={
            () => catchMon(pokedex, pokemon, setState)
        }>Capturar</button>
    </>
    )
}

export const firstLetterUppercase = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1)
}


export const PokeTypes = (pokemon, type1, type2) => {
    
    return (
    <div className="types">
    {pokemon.types.length === 1 ? (

        <>
            <button id="type1">
                <img src={type1} id="typeicon" alt={pokemon.types[0].type.name} />
                {firstLetterUppercase(pokemon.types[0].type.name)}</button>
        </>) : (

        <>
            <button id="type1">
                <img src={type2} id="typeicon" alt={pokemon.types[0].type.name} />
                {firstLetterUppercase(pokemon.types[0].type.name)}
            </button>

            <button id="type2">
                <img src={type2} id="typeicon" alt={pokemon.types[1].type.name} />
                {firstLetterUppercase(pokemon.types[1].type.name)}
            </button>
        </>
    )
    }
    </div>
    )
}
