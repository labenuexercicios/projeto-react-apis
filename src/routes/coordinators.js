export const goToHomePage = (navigate) =>{
    navigate("/")
}

export const goToPokedexPage = (navigate) =>{
    navigate("/pokedex")
}

export const gotoDetalhesPage = (navigate,namePokemon )=>{
    navigate(`/detalhes/${namePokemon}`)
}
