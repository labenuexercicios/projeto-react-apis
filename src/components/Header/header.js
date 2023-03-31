import { useNavigate } from "react-router-dom"
import logoPokemon from "../../icons/logoPokemon.svg"
import { goToPokedexPage } from "../../routes/coordinator"
import { Botao, HeaderContainer } from "./HeaderStyled"

export const Header = () =>{
    
    const navigate = useNavigate()

    return(
        <HeaderContainer>
        <img src={logoPokemon} alt="logo pokemon" />
        <Botao onClick={() => goToPokedexPage(navigate) }>Pokédex</Botao>
        </HeaderContainer>
    )
}