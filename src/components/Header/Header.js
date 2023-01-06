import { useLocation, useNavigate } from "react-router-dom";
import { goToHomePage, goToPokedexPage } from "../../routes/coordinator";
import { Container } from "./styled";
import { PokemonLogo,Button,P } from "./styled";
function Header() {
  
  // hook para saber nosso path atual
  const location = useLocation();

  // hook para redirecionar
  const navigate = useNavigate();

  const url ="https://th.bing.com/th/id/R.a4ff2ee093a2294ae0eff4e9ba027d34?rik=P5sQGDB9f8iT6Q&pid=ImgRaw&r=0"
  const renderHeader = () => {
    switch (location.pathname) {
      case "/":
        return (
         <>
            <Button onClick={() => goToPokedexPage(navigate)}>
              Pokédex
            </Button>
            <PokemonLogo src={`${url}`} alt="" />
           
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
          
            <PokemonLogo src={`${url}`} alt="" />
          
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
