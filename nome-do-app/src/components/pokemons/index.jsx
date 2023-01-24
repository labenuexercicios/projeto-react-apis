import React, { useContext } from 'react'
import { ButtonCaptured, ButtonDetails, ContainerButtons, ContainerDiv, ContainerName, ContainerTypes, Image, LiTipo, StyledLi, TxtId, TxtName } from './styled'
import { addPokemonInPokedex, removePokemon } from "../funcoes/index"
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Vector from "../../img/Vector.png"
import Vector1 from "../../img/grass.png"
import Vector2 from "../../img/fire.png"
import Vector3 from "../../img/flying.png"
import Vector4 from "../../img/water.png"
import Vector5 from "../../img/bug.png"
import Vector6 from "../../img/normal.png"
import { details, goDetails } from '../navegacao'
import { PokedexContext } from '../Context/Pokedex'


const Pokemos = ({ pk }) => {
    const estadoPokedex = useContext(PokedexContext)
    const { pokedex, setPokedex } = estadoPokedex


    const navigate = useNavigate()
    const params = useParams()


    let imagem = ''
    let cor = ""
    let corType = ''



    switch (pk.tipo[0].type.name) {
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
                {pk.tipo.map((tipo, index) => {
                    switch (tipo.type.name) {
                        case 'flying':
                            corType = '#6892B0'
                            imagem = Vector3
                            break
                        case 'grass':
                            corType = '#70B873'
                            imagem = Vector1
                            break;
                        case 'poison':
                            corType = '#AD61AE'
                            imagem = Vector
                            break;
                        case 'fire':
                            corType = '#F44900'
                            imagem = Vector2
                            break
                        case 'water':
                            corType = '#33A4F5'
                            imagem = Vector4
                            break
                        case 'bug':
                            corType = '#316520'
                            imagem = Vector5
                            break
                        case 'normal':
                            corType = '#8A8A8A'
                            imagem = Vector6
                            break
                        default:
                            break;
                    }
                    return <LiTipo key={index} bgColor={corType}> <img src={imagem} alt="" /> {tipo.type.name}</LiTipo>
                })}
            </ContainerTypes>
            <ContainerButtons>
                <ButtonDetails
                    onClick={() => {
                        goDetails(navigate, true)
                        details()
                    }}
                >
                    detalhes
                </ButtonDetails>


                {!params.showButton ?
                    <ButtonCaptured bgColorButton='#FFFFFF' colorLetter='#0F0F0F'
                        onClick={() => { addPokemonInPokedex(pk, pokedex, setPokedex) }}
                    >
                        capturar
                    </ButtonCaptured>
                    :
                    <ButtonCaptured bgColorButton='#FF6262' colorLetter='#FFFFFF'
                        onClick={() => { removePokemon(pk, pokedex, setPokedex) }}
                    >
                        capturar
                    </ButtonCaptured>
                }
            </ContainerButtons>
        </ContainerDiv>
    )
}

export default Pokemos
