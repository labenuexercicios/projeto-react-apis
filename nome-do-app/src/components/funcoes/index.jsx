
export const addPokemonInPokedex = (pokemon, pokedex, setPokedex) => {
    const arrayAux = [...pokedex]
    const pokemonInPokedex = arrayAux.find(p => pokemon.id === p.id)
    !pokemonInPokedex ? arrayAux.push(pokemon) : console.log("esta no carrinho")
    setPokedex(arrayAux)
}


export const showButton = (setShowCart) => {
    setShowCart(true)

}

export const notShowButton = (setShowCart) => {
    setShowCart(false)
}


export const removePokemon = (pokemon, pokedex, setPokedex) => {
    const arrayAux = [...pokedex]
    const newPokedex = arrayAux.filter((pk) => { return pk.id !== pokemon.id })
    setPokedex(newPokedex)
}
