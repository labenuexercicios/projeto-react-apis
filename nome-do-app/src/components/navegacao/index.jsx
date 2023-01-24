export const goHome = (navigate, booleano) => {
    navigate(-1)

}

export const goDetails = (navigate, booleano) => {
    navigate(`details/${booleano}`)
}


export const goPokedex = (navigate, booleano) => {
    navigate(`pokedex/${booleano}`)
}


export const details = (listaPoke, pokeId, setPokemon) => {
    const pokemon = listaPoke.filter((poke) => {
        return poke.id === pokeId.id
    })
    setPokemon(pokemon)
}
