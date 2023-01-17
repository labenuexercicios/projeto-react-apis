import React from 'react'
import { DivButtons, DivButtonVoltar, DivLogo, ImagemTitle, StyledButton, StyledHeader } from './styled'
import Logo from "../../img/image1.png"
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()

    const desktop2 = () => {
        navigate("/Desktop2")
    }
    return (
        <StyledHeader>
            <DivButtonVoltar>
            </DivButtonVoltar>
            <DivLogo>
                <ImagemTitle src={Logo} alt="" />
            </DivLogo>
            <DivButtons>
                <StyledButton onClick={() => { desktop2() }}>
                    pokedex
                </StyledButton>
            </DivButtons>
        </StyledHeader>
    )
}

export default Header
