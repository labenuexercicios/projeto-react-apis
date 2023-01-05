export const PAGES = {
    POKEMON_LIST_PAGE: '/',
    POKEDEX: 'pokedex',
    POKEMON_DETAILS: 'pokemonDetalhes/:id',
};


export function getPokedexFromStorage(){
    return JSON.parse(localStorage.getItem('pokedex')) || []
}

export function updatePokedex(pokemonList){
    localStorage.setItem('pokedex',JSON.stringify(pokemonList));
}