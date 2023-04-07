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

   
const removeMon = (pokedex, setState) => {
    const oldDex = pokedex.filter((pokemon) => pokemon !== pokedex);
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
                    () => removeMon(pokedex, setState)
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