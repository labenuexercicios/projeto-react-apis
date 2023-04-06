export function goToHome(navigate){
    navigate("/")
}

export function goToNextHomePage(navigate,page){
    navigate(`/${page}`)
}

export function goToAbout(navigate){
    navigate("/sobre")
}

export function goToPokedex(navigate){
    navigate("/pokedex")
}

export function goToDetails(navigate, pokemonName){
    navigate(`/pokemon/${pokemonName}`)
}