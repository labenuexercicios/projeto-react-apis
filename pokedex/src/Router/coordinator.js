export const goToHomePage = (navigate) => {
    navigate("/")    
}

export const goToPokedex = (navigate) => {
    navigate("/pokedex")    
}

export const goToDetails = (navigate, pokemonId) => {
    navigate(`/${pokemonId}`)
}