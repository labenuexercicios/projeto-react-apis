export const goToPokemonList = (navigate)=>{
    navigate("/");
};

export const goToPokedex = (navigate)=>{
    navigate("/pokedex");
};

export const goToPokemonDetails = (navigate,name)=>{
    navigate(`/pokemon/${name}`);
};