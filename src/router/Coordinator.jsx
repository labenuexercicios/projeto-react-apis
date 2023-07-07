export const goToHome = (navigate, page) => {
  navigate(`/${page}`);
};
export const goToPokedex = (navigate, page) => {
  navigate(`/pokedex/${page}`);
};
export const goToDetails = (navigate, pokemon) => {
  navigate(`/details/${pokemon}`);
};
