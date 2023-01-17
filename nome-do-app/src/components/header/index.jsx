import React from 'react'
import { DivButtons, DivButtonVoltar, DivLogo, ImagemTitle, StyledButton, StyledHeader } from './styled'
import Logo from "../../img/image1.png"

const Header = () => {
    return (
        <StyledHeader>
            <DivButtonVoltar>
            </DivButtonVoltar>
            <DivLogo>
                <ImagemTitle src={Logo} alt="" />
            </DivLogo>
            <DivButtons>
                <StyledButton>
                    pokedex
                </StyledButton>
            </DivButtons>
        </StyledHeader>
    )
}

export default Header
