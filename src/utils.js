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

export function nameFormatter(name){
    let namesSeparado = name.split('-');
    let namesMaiusculo = namesSeparado.map((name)=> capitalize(name));
    let namesString = namesMaiusculo.join(' ');
    return namesString;
}