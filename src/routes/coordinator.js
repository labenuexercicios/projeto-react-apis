export const goToHome = navigate => {
  navigate('/')
}
export const goToDetalhes = (navigate, name) => {
  navigate(`/pokemon/${name}`)
}
export const goToPokedex = navigate => {
  navigate(`/pokedex`)
}
export const goToError = navigate => {
  navigate('*')
}
export const goToEasterEgg = navigate => {
  navigate(`/easterEgg`)
}
