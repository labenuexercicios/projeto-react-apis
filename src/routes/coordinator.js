export function goToHome(navigate){
navigate("/")
}

export function goToPokedex(navigate){
navigate("/pokedex")
}

export function goToDetails(navigate, pokemonName){
navigate(`/${pokemonName}`)
}