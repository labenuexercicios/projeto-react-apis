import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext';
import { goHome, goPokedes } from '../navegacao/navegacao';
import { BotaoPokedex, BotaoVoltar, BtnPokedex, Container, ContainerButaoVoltar, Logo } from './styled'
import { useNavigate } from 'react-router-dom';
import logo from "../../img/logoPokemon.png"

const Header = () => {
    const context = useContext(GlobalContext);
    const navigate = useNavigate();
    const { exibir, exibirBtn, ocultarBtn, notExibirBtnRemoverHeaderFunction,exibirBtnRemoverHeader,removePokedex,pokemonDetalhes } = context

    return (
        <Container>

            <ContainerButaoVoltar>
                {exibir
                    &&
                    <BotaoVoltar
                        onClick={() => {
                            ocultarBtn()
                            goHome(navigate)
                            notExibirBtnRemoverHeaderFunction()
                        }}
                    >todos pokemons
                    </BotaoVoltar>}
            </ContainerButaoVoltar>

            <div>
                <Logo src={logo} alt="POKEMONS" />
            </div>

            <BotaoPokedex >
                {exibirBtnRemoverHeader ?
                <BtnPokedex bgColor='#FF6262' txtColor='#FFFFFF'
                        onClick={() => {
                        removePokedex(pokemonDetalhes)
                    }}
                >
                    Remover
                    </BtnPokedex>
                    :
                <BtnPokedex bgColor='#33A4F5' txtColor='#FFFFFF'
                    onClick={() => {
                        exibirBtn()
                        goPokedes(navigate)
                    }}
                >
                    Pokedex
                </BtnPokedex>}
            </BotaoPokedex>
        </Container>
    )
}

export default Header
