import { useLocation, useNavigate } from "react-router-dom";
import {Cabecalho, Logo, PokedexButton, BackButton, DeleteButton} from "./Styled"
import logo from "../../Assets/logopokemon.png"
import { AiOutlineLeft } from "react-icons/ai";
import { goToPokedex, goToPokemonListPage } from "../../Coordinator/Coordinator";
import { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalContext";


function Header() {
    const context = useContext(GlobalContext)
    const {removeFromPokedex} = context;
    const navigate = useNavigate()
    const location = useLocation()

    const renderHeader = () => {
        switch (location.pathname) {
            case "/":
                return (
                    <>
                    <div></div>
                    <Logo src={logo} alt="logo"/>
                    <PokedexButton onClick={() => goToPokedex(navigate)}>Pokédex</PokedexButton>
                    </>
                );
                case "/pokedex":
                    return (
                        <>
                        <BackButton onClick={() => goToPokemonListPage(navigate)}><AiOutlineLeft/>Todos Pokémons</BackButton>
                        <Logo src={logo} alt="logo"/>
                      </>
                    );
                default:
                    return (
                        <>
                        <BackButton onClick={() => goToPokemonListPage(navigate)}><AiOutlineLeft/>Todos Pokémons</BackButton>
                        <Logo src={logo} alt="logo"/>
                        <DeleteButton /* onClick={() => removeFromPokedex(pokemon)} */>Excluir da Pokédex</DeleteButton>
                        </>
                
                    )
        }
    }
    return (
        <Cabecalho>{renderHeader()}</Cabecalho>
    )
}
  
export default Header;