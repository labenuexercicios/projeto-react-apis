import { React, useEffect } from 'react'
import { getTypes } from '../APIs/getPokemons'
import { ButtonCaptured, ButtonDetails, ContainerButtons, ContainerDiv, ContainerName, ContainerTypes, Image, TxtId, TxtName } from './styled'


const Pokemos = ({ pk, setPokemon }) => {
    let cor = ""

    switch (pk.tipo[0]) {
        case 'grass':
            cor = ' #729F92'
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
                {pk.tipo.map((tip, index) => (
                    <li key={index}>{tip}</li>
                ))}
            </ContainerTypes>
            <ContainerButtons>
                <ButtonDetails>
                    detalhes
                </ButtonDetails>
                <ButtonCaptured>
                    capturar
                </ButtonCaptured>
            </ContainerButtons>
        </ContainerDiv>
    )
}

export default Pokemos
