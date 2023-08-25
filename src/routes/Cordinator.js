export const goToHomePage = (navigate)=>{
    navigate("/")
}

export const goToPokedexPage = (navigate)=>{
    navigate("/pokedex")
}

export const goToDetailPage = (navigate,id)=>{
    navigate(`/detalhesPokemon/${id}`)
}