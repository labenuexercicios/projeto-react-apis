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

export function capitalize(text){
    if(text){
        return text.charAt(0).toUpperCase() +""+ text.slice(1);
    }
    return '';
}

export function moveFormatter(move){
    let movesSeparado = move.split('-');
    let movesMaiusculo = movesSeparado.map((move)=> capitalize(move));
    let movesString = movesMaiusculo.join(' ');
    return movesString;
}