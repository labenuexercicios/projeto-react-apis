export const goHome = (navigate, booleano) => {
    navigate(-1)

}

export const goDetails = (navigate, booleano) => {
    navigate(`/details/${booleano}`)
}


export const goPokedex = (navigate, booleano) => {
    navigate(`/pokedex/${booleano}`)
}
