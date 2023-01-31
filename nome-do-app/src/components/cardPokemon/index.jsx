import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import { BoxImagem, BoxNameAndId, ButtonCapturar, ButtonDetalhes, Container, ContainerButtons, ContainerImgName, Id, ImgFundoPk, ImgPoke, ListType, LiType, Name } from './styled'
import { goDetails } from "../navegacao/navegacao"
import { useNavigate } from 'react-router-dom'
import ImgFundo from "../../img/Rectangle2.png"
import Poison from "../../img/Vector-Poison.png"
import Grass from "../../img/Grass.png"
import Fire from "../../img/Fire.png"
import Flying from "../../img/Flying.png"
import Water from "../../img/Water.png"
import Bug from "../../img/Bug.png"
import Normal from "../../img/normal.png"



const CardPokemon = (props) => {
    const { pokemon } = props
    const context = useContext(GlobalContext)
    const { addPokedex, exibir, removePokedex, exibirBtn, detailsPokemon,exibirBtnRemoverHeaderFunction } = context
    const navigate = useNavigate()
    let cor = ""


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
                    <Id>#{pokemon.id}</Id>
                    <Name>{pokemon.name}</Name>
                </BoxNameAndId>
                <BoxImagem>
                    <ImgFundoPk src={ImgFundo} alt="" />
                    <ImgPoke src={pokemon.sprites.other['official-artwork'].front_default} alt="" />
                </BoxImagem>
            </ContainerImgName>
            <ListType>
                {pokemon.types.map((tipo, index) => {
                    let corType = ''
                    let imgType = ''
                    switch (tipo.type.name) {
                        case 'flying':
                            corType = '#6892B0'
                            imgType = Flying 
                            break
                            case 'grass':
                                corType = '#70B873'
                                imgType = Grass 
                            break;
                            case 'poison':
                                corType = '#AD61AE'
                                imgType = Poison 
                            break;
                        case 'fire':
                            corType = '#F44900'
                            imgType = Fire 
                            break
                            case 'water':
                            corType = '#33A4F5'
                            imgType = Water 
                            break
                            case 'bug':
                            corType = '#316520'
                            imgType = Bug
                            break
                        case 'normal':
                            corType = '#8A8A8A'
                            imgType = Normal
                            break
                        default:
                            break;
                    }
                    return <LiType key={index} bgColor={corType}> <img src={imgType} alt="" /> {tipo.type.name}</LiType>
                })}
            </ListType>
            <ContainerButtons>
                <ButtonDetalhes onClick={(() => {
                    goDetails(navigate)
                    exibirBtn()
                    detailsPokemon(pokemon)
                    exibirBtnRemoverHeaderFunction()
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