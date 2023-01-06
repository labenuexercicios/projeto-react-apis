import { useLocation, useNavigate } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalContext";
import { goToHome, goToPokedex } from "../../router/Coordinator";
import { Container, AllPokemons, GridAHome, GridLogo, ImgLogo, GridButtonHome, 
  ButtonHomePage, ButtonRemove, ButtonAdd } from "./Header.styled";
import Logo from "../../assets/logo.png";
import ImgPokedex from "../../assets/ImgPokedex.png";
import { useContext } from "react";


function Header(props) {
  
  const location = useLocation();

  const navigate = useNavigate();

  const context = useContext(GlobalContext)
  const { pokedex, setPokedex, flow, setFlow, addToPokedex, openModalCapture } = context

  const { details } = props

  function modalEaddToPokedex () {
    openModalCapture()
    addToPokedex(details)
    setFlow(2)
  }

  const renderHeader = () => {
    switch (location.pathname) {
      case "/":
        return (
          <>
            {setFlow(2)}
            <GridLogo>
              <ImgLogo src={Logo} alt="logo"/>
            </GridLogo>
            <GridButtonHome>
              <ButtonHomePage src={ImgPokedex} alt="ImgPokedex" onClick= {() => goToPokedex(navigate)}>Pokedex</ButtonHomePage>
            </GridButtonHome>
          </>
        );
      case "/pokedex":
        return (
          <>
            {setFlow(1)}
            <GridAHome>
              <AllPokemons onClick={() => goToHome(navigate)}>{`<`} Todos Pokémons</AllPokemons>
            </GridAHome>
            <GridLogo><ImgLogo src={Logo} alt="logo"/></GridLogo>
          </>
        );
      default:
        return (
          <>
            <GridAHome>
             <AllPokemons onClick= {() => goToHome(navigate)}>{`<`}Todos Pokémons</AllPokemons>
            </GridAHome>
            <GridLogo><ImgLogo src={Logo} alt="logo"/></GridLogo>

            {flow === 1 && <ButtonRemove onClick={() => {
              const arrayPoke = pokedex.filter((card) =>
               card.name !== details.name
              )
              setPokedex(arrayPoke)
              openModalCapture()

              const pokedexString = JSON.stringify(arrayPoke)
              window.localStorage.setItem("pokemon", pokedexString)
              goToPokedex(navigate)

              }}>Excluir da Pokédex</ButtonRemove>
            }

            {flow === 2 && <ButtonAdd onClick={() => {
            
              modalEaddToPokedex()
              goToHome(navigate) 

              }}>Adicionar a Pokédex</ButtonAdd>
            }
          </>
        );
    }
  };

  return <Container>{renderHeader()}</Container>;
}

export default Header;