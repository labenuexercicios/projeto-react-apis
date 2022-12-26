export const goToHomePage = (navigate) => {
  navigate("/")
}
export const goToPokedex = (navigate) => {
  navigate("/pokedex")
}
export const goToJogo = (navigate) => {
  navigate("/jogo")
}
export const goToDetalhes = (navigate, pokemon) => {
  navigate(`/detalhes/${pokemon}`)
}