

export const goToPokemonsListPage = (navigate)=>{
navigate("/")
}

export const goToPokedexPage = (navigate)=>{
    navigate("/pokedex")
}

export const goToPokemonDetailPage = (navigate, pokemonName)=>{
    navigate(`/PokemonDetailPage/${pokemonName}`)
}