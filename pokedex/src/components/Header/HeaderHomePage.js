import { LogoHomepage, PokeButton, HeaderContainerHomePage } from "./headerStyle"
import logo from '../../assets/logo.png'

export const HeaderHomePage = () => {
    return (
        <HeaderContainerHomePage>
            <LogoHomepage src={logo} />
            <PokeButton>Pokédex</PokeButton>
        </HeaderContainerHomePage>
    )
}