import { useLocation, useNavigate } from "react-router-dom";
import { goToHomePage, goToPokedexPage } from "../../routes/coordinator";
import { Container } from "./styled";
import { PokemonLogo,Button,P } from "./styled";
import logo from "../../assets/image 1PokemonLogo.svg"
function Header() {
  
  // hook para saber nosso path atual
  const location = useLocation();

  // hook para redirecionar
  const navigate = useNavigate();

  const renderHeader = () => {
    switch (location.pathname) {
      case "/":
        return (
         <>
            <Button onClick={() => goToPokedexPage(navigate)}>
              Pokédex
            </Button>
            <PokemonLogo src={logo} alt="" />
            </>
            
        );
      case "/pokedex":
        return (
          <>
         <P>
          <p typeof="submit" onClick={() => goToHomePage(navigate)}>
           Todos Pokémons
        </p>
        </P>
            <PokemonLogo src={logo} alt="" />
          </>
        );
      default:
        return (
          <>
            <button onClick={() => goToHomePage(navigate)}>
              Voltar para página inicial
            </button>
            <span>Página inexistente</span>
          </>
        );
    }
  };

  return <Container>{renderHeader()}</Container>;
}

export default Header;
