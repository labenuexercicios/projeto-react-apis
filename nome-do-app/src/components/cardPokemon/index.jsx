import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import { BoxImagem, BoxNameAndId, ButtonCapturar, ButtonDetalhes, Container, ContainerButtons, ContainerImgName, Id, ImgPoke, ListType, LiType, Name } from './styled'
import { goDetails } from "../navegacao/navegacao"
import { useNavigate } from 'react-router-dom'

const CardPokemon = (props) => {
    const { pokemon } = props
    const context = useContext(GlobalContext)
    const { addPokedex, exibir, removePokedex, exibirBtn, detailsPokemon } = context
    const navigate = useNavigate()
    let cor = ""
    let corType = ''


    console.log(pokemon)
    switch (pokemon.types[0].type.name) {
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
        <Container bgColor={cor}>
            <ContainerImgName>
                <BoxNameAndId>
                    <Id>{pokemon.id}</Id>
                    <Name>{pokemon.name}</Name>
                </BoxNameAndId>
                <BoxImagem>
                    <ImgPoke src={pokemon.sprites.other['official-artwork'].front_default} alt="" />
                </BoxImagem>
            </ContainerImgName>
            <ListType>
                {pokemon.types.map((tipo, index) => {
                    switch (tipo.type.name) {
                        case 'flying':
                            corType = '#6892B0'
                            // imagem = Vector3
                            break
                        case 'grass':
                            corType = '#70B873'
                            // imagem = Vector1
                            break;
                        case 'poison':
                            corType = '#AD61AE'
                            // imagem = Vector
                            break;
                        case 'fire':
                            corType = '#F44900'
                            // imagem = Vector2
                            break
                        case 'water':
                            corType = '#33A4F5'
                            // imagem = Vector4
                            break
                        case 'bug':
                            corType = '#316520'
                            // imagem = Vector5
                            break
                        case 'normal':
                            corType = '#8A8A8A'
                            // imagem = Vector6
                            break
                        default:
                            break;
                    }
                    return <LiType key={index} bgColor={corType}> <img src='' alt="" /> {tipo.type.name}</LiType>
                })}
            </ListType>
            <ContainerButtons>
                <ButtonDetalhes onClick={(() => {
                    goDetails(navigate)
                    exibirBtn()
                    detailsPokemon(pokemon)
                })}>detalhes</ButtonDetalhes>
                {exibir ? (
                    <ButtonCapturar bgColor='#FF6262' onClick={(() => { removePokedex(pokemon) })}>remover</ButtonCapturar>

                ) :
                    <ButtonCapturar bgColor='#FFFFF' onClick={(() => { addPokedex(pokemon) })}>capture</ButtonCapturar>
                }
            </ContainerButtons>

        </Container>
    )
}

export default CardPokemon
