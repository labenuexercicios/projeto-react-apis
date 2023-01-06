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

export const isDuplicated = (id)=>{
    let pokedex = getPokedexFromStorage();
    return pokedex.filter((value)=> value.id === Number(id)).length > 0
  }

export function remove(id){
    let pokedex = getPokedexFromStorage().filter((p) => p.id !== Number(id));
    updatePokedex(pokedex);
  }