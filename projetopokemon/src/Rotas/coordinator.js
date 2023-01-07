export const irParaPaginaPrincipal = (navigate) => {
    navigate("/");
  };
  
  export const irParaPaginaPokedex = (navigate) => {
    navigate("/pokedex");
  };
  
  export const irParaDetalhesPokemon = (navigate, nomePokemon) => {
    navigate(`/details/${nomePokemon}`);
  };
