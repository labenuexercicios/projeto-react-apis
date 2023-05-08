import { LogoHomepage, PokeButton, HeaderContainerHomePage } from "./headerStyle"
import logo from '../../assets/logo.png'
import {useNavigate} from 'react-router-dom'
import { goToPokedexPage } from "../../router/coordinator"

export const HeaderHomePage = () => {

    const navigate = useNavigate()

    return (
        <HeaderContainerHomePage>
            <LogoHomepage src={logo} />
            <PokeButton onClick={() => goToPokedexPage(navigate)}>Pokédex</PokeButton>
        </HeaderContainerHomePage>
    )
}