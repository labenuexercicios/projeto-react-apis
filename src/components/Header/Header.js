import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalContext";
import { goToHome, goToList } from "../../routes/coordinator";
import { Button, Title, Container, CatchButton } from "./styles";


function Header({pokemon}) {
  const location = useLocation();

  const navigate = useNavigate();

  const context= useContext(GlobalContext)
  const {  addToPokedex, removeFromPokedex , inPokedex}= context.managePokedex
 
const buttonList=()=>{
  if(inPokedex(pokemon)){

    return <CatchButton background={"#ff6262"} color={"#FFFFFF"} onClick={()=>{removeFromPokedex(pokemon)}}>excluir da pokedex</CatchButton>

  }else{
    return <CatchButton background={"#33A4F5"} color={"#FFFFFF"} onClick={()=>{addToPokedex(pokemon)}}>adicionar</CatchButton>
  }
}

  

  const linkHeader=()=>{
    return(
      <>
      {/* <Link onClick={(e)=>{e.preventDefault();goToHome(navigate)}} > Todos os Pokemons</Link> */}
      <p><b><a href="default.asp" target="_blank" onClick={(e)=>{e.preventDefault();goToHome(navigate)}}>Todos os pokemons</a></b></p>
      </>
    )

  }

  const imagemHeader = () => {
    return (
      <div className="imagem">
        <img
          alt="PokéAPI"
          src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
        />
      </div>
    );
  };

  const renderHeader = () => {
    switch (location.pathname) {
      case "/":
        return (
          <>
            {imagemHeader()}
            <Button onClick={() => goToList(navigate)}>pokedex</Button>
          </>
        );
      case "/pokedex":
        return (
          <>
          {linkHeader()}
            {imagemHeader()}
           
          </>
        );
      case "/details":
        return <>
        {linkHeader()}
        {imagemHeader()}
       {buttonList()}
        </>;
      default:
        return (
          <>
            <Title>Detalhes</Title>
            <Button onClick={() => goToHome(navigate)}>
              Voltar para a PokéDex
            </Button>
          </>
        );
    }
  };

  return <Container>{renderHeader()}</Container>;
}

export default Header;
