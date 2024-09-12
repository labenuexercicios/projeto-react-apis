export const goToPokedexPage = (navigate) => {
    navigate('/pokedex')
}
export const goToHomePage = (navigate) => {
    navigate('/')
}
export const goToPokemonDetailPage = (navigate, pokemonName)=>{
    navigate(`/pokemon/${pokemonName}`)
}