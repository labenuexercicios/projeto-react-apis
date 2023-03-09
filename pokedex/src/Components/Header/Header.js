import { Button, Heading, Text } from "@chakra-ui/react"
import { StyledButton, StyledHeader, styledHeader, StyledImg, StyledP } from "./StyledHeader"
import Logo from "../../Assets/PokemonLogo.png"

export const Header = () => {
    return(
        <StyledHeader>
            <StyledImg src={Logo}/>
            <StyledButton><StyledP>Pokedéx</StyledP></StyledButton>
        </StyledHeader>
    )
}