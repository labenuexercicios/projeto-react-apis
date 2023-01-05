export const CONSTS = {
    POKEMON_LIST_PAGE: '/'
};


export function getPokedexFromStorage(){
    return JSON.parse(localStorage.getItem('pokedex')) || []
}

export function updatePokedex(pokemonList){
    localStorage.setItem('pokedex',JSON.stringify(pokemonList));
}