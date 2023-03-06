export const goToHome = (navigate, pageIndex) => {
  navigate(`/${pageIndex}`);
};
export const goToPokedex = (navigate, pageIndex) => {
  navigate(`/pokedex/${pageIndex}`);
};
export const goToDetails = (navigate, pokemon) => {
  navigate(`/details/${pokemon}`);
};
