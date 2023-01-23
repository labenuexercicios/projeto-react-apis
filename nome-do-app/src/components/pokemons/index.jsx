import React from 'react'
import { ButtonCaptured, ButtonDetails, ContainerButtons, ContainerDiv, ContainerName, ContainerTypes, Image, LiTipo, StyledLi, TxtId, TxtName } from './styled'
import { addPokemonInPokedex, removePokemon } from "../funcoes/index"
import { useNavigate } from 'react-router-dom'


const Pokemos = ({ pk, pokedex, setPokedex, showCart, setShowCart }) => {
    const navigate = useNavigate()



    const goDestaque = () => {
        navigate('/Desktop3')
        setShowCart(true)
    }

    let cor = ""
    let corType = ' #729F92'



    switch (pk.tipo[0].type.name) {
        case 'grass':
            cor = ' #729F92'
            corType = '#70B873'
            break;
        case "fire":
            cor = '#EAAB7D'
            break;
        case 'water':
            cor = '#71C3FF'
            break
        case 'bug':
            cor = '#76A866'
            break;
        case 'normal':
            cor = '#BF9762'
            break
        default:
            cor = ""
            break;
    }




    return (
        <ContainerDiv background={cor}>
            <ContainerName>
                <TxtId>
                    #{pk.id}
                </TxtId>
                <TxtName >
                    {pk.name}
                    <Image src={pk.image} alt="" />
                </TxtName>
            </ContainerName>
            <ContainerTypes>
                {pk.tipo.map((tipo, index) => (
                    <LiTipo key={index} bgColor={corType}>{tipo.type.name}</LiTipo>
                )
                )}
            </ContainerTypes>
            <ContainerButtons>
                <ButtonDetails
                    onClick={() => { goDestaque() }}
                >
                    detalhes
                </ButtonDetails>
                {!showCart ? (
                    <ButtonCaptured bgColorButton='#FFFFFF' colorLetter='#0F0F0F'
                        onClick={() => { addPokemonInPokedex(pk, pokedex, setPokedex) }}
                    >
                        capturar
                    </ButtonCaptured>
                ) : (
                    <ButtonCaptured bgColorButton='#FF6262' colorLetter='#FFFFFF'
                        onClick={() => { removePokemon(pk, pokedex, setPokedex) }}
                    >
                        remover
                    </ButtonCaptured>
                )}

            </ContainerButtons>
        </ContainerDiv>
    )
}

export default Pokemos
