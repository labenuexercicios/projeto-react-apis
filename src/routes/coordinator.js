export const goToHomePage = (navigate) => {
    navigate("/")
}

export const goToPokedexPage = (navigate) => {
    navigate("/pokedex")
}

export const goToDetailsPage = (navigate, pokemonId) => {
    navigate(`/details/${pokemonId}`)
}

