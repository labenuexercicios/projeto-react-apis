import React from 'react'
import { ButtonBack, DivButtons, DivButtonVoltar, DivLogo, ImagemTitle, StyledButton, StyledHeader } from './styled'
import Logo from "../../img/image1.png"
import { notShowButton, showButton } from '../funcoes'


const Header = (props) => {



    return (
        <StyledHeader>
            <DivButtonVoltar>
                {props.showCart && (
                    <div>
                        <ButtonBack onClick={() => {
                            notShowButton(props.setShowCart)
                        }}>TODOS OS POKEMONS</ButtonBack>
                    </div>
                )}
            </DivButtonVoltar>

            <DivLogo>
                <ImagemTitle src={Logo} alt="" />
            </DivLogo>
            <DivButtons>
                <StyledButton onClick={() => {
                    showButton(props.setShowCart)
                }}>
                    pokedex
                </StyledButton>
            </DivButtons>
        </StyledHeader>
    )
}

export default Header
