import React from 'react'
import { ButtonBack, DivButtons, DivButtonVoltar, DivLogo, ImagemTitle, StyledButton, StyledHeader } from './styled'
import Logo from "../../img/image1.png"
import { notShowButton, showButton } from '../funcoes'
import { goHome, goPokedex } from '../navegacao'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'


const Header = (props) => {
    const navigate = useNavigate()
    const params = useParams()


    return (
        <StyledHeader>
            <DivButtonVoltar>
                {params.showButton && (
                    <div>
                        <ButtonBack onClick={() => {
                            goHome(navigate, false)
                        }}>TODOS OS POKEMONS</ButtonBack>
                    </div>
                )}
            </DivButtonVoltar>

            <DivLogo>
                <ImagemTitle src={Logo} alt="" />
            </DivLogo>
            <DivButtons>
                <StyledButton onClick={() => {
                    goPokedex(navigate, true)
                }}>
                    pokedex
                </StyledButton>
            </DivButtons>
        </StyledHeader>
    )
}

export default Header
