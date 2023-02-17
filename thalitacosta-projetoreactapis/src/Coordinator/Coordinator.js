export const goToPokedex = (navigate) => {
    navigate("/pokedex")
}

export const goToPokemonDetail = (navigate, pokemonName) => {
    navigate(`/pokemondetail/${pokemonName}`)
}

export const goToPokemonListPage = (navigate) => {
    navigate("/")
}