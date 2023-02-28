export const goHome = (navigate) => {
  navigate("/");
};
export const goToDetails = (navigate, idPokemon) => {
  navigate(`/details/:${idPokemon}`);
};
export const goToPokedex = (navigate) => {
  navigate(`pokedex`);
};
