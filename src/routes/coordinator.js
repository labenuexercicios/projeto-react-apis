export const goToPokedexPage = (navigator) => {
    navigator("/pokedex")
}
export const goToHome = (navigator) => {
    navigator("/")
}
export const goToPokemonDetail = (navigator, pokemon) => {
    navigator(`/details/${pokemon}`)
}