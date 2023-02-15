export const goToHome = (navigate) => {
    navigate("/");
  };

export const goToDetailsPage = (navigate, response="") => {
  navigate(`/details`,response);
};

export const goToList = (navigate) => {
    navigate("/pokedex");
  };