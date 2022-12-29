import { useLocation, useNavigate } from "react-router-dom";
import { goToHome, goToPokedex } from "../../router/Coordinator";
import { Container, TodosPokemons, GridAHome, GridLogo, ImgLogo, GridButtonHome, ButtonHomePage } from "./styled";
import Logo from "../../assets/logo.png";
import ImgPokedex from "../../assets/ImgPokedex.png";

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
            <GridLogo>
              <ImgLogo src={Logo} alt="logo"/>
            </GridLogo>
            <GridButtonHome>
              <ButtonHomePage src={ImgPokedex} alt="ImgPokedex" onClick={() => goToPokedex(navigate)}>Pokedex</ButtonHomePage>
            </GridButtonHome>
          </>
        );
      case "/pokedex":
        return (
          <>
            <GridAHome>
              <TodosPokemons onClick={() => goToHome(navigate)}>{`<`} Todos Pokémons</TodosPokemons>
            </GridAHome>
            <GridLogo><ImgLogo src={Logo} alt="logo"/></GridLogo>
          </>
        );
      default:
        return (
          <>
            <button onClick={() => goToHome(navigate)}>
              Todos Pokémons
            </button>
            <GridLogo><ImgLogo src={Logo} alt="logo"/></GridLogo>
          </>
        );
    }
  };

  return <Container>{renderHeader()}</Container>;
}

export default Header;