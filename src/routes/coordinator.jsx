
export const goToPokemonList = (navigate) =>{
    navigate("/")
}

export const goToPokedex = (navigate) =>{
    navigate("/pokedex")
}

export const goToDetails = (navigate, pokemonName) =>{
    navigate(`/pokedex/details/${pokemonName}`)
}

export const goBack = (navigate) =>{
    navigate("/")
}