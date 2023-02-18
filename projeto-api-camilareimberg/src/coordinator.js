export const goToPokedex = (navigate) => {
    navigate('/pokedex')
}
export const goToHomePage = (navigate) => {
    navigate('/')
}
export const goToDetails = (navigate, id) => {
    navigate(`/'pokemon/${id}`)
}