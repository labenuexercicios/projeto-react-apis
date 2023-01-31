import React from 'react'
import {
  BoxMoves, Container, ContainerBaseStats, ContainerImagens, ContainerImgAndMoves, ContainerProgressBar, ContainerTr, DivImagem, ImgPoke, ListaStats, ListaTipos, ListMoves, NameContainer, NameTh, NameTxt, ProgressBar,
LiMoves} from './styled'
import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import Rectangle2 from "../../img/Rectangle2.png"
import { LiType } from '../cardPokemon/styled'


const CardDetalhes = () => {
  const context = useContext(GlobalContext)
  const { pokemonDetalhes } = context
  let corType = ""

  return (
    <Container bgImg = {Rectangle2}>
      <ContainerImagens>
        <DivImagem>
          <img src={pokemonDetalhes.sprites.front_default} alt="" />
      </DivImagem>
        <DivImagem>
          <img src={pokemonDetalhes.sprites.back_default} alt="" />
      </DivImagem>
      </ContainerImagens>
      <ContainerBaseStats>
        <h1>Bases Stats</h1>
        <ListaStats>
          {pokemonDetalhes.stats.map((p, i) => (
            <LiMoves key={i}>
              <ContainerTr>
                <NameTh>{p.stat.name}</NameTh>
                <td>{p.base_stat}</td>
                <ContainerProgressBar>
                  <ProgressBar
                    width = {p.base_stat}
                  >
                  </ProgressBar>
                </ContainerProgressBar>
              </ContainerTr>
            </LiMoves>
          ))}
        </ListaStats>
      </ContainerBaseStats>
      <ContainerImgAndMoves>
        <NameContainer>
          <NameTxt>#{pokemonDetalhes.id}</NameTxt>
          <NameTxt>{pokemonDetalhes.name}</NameTxt>
          <ListaTipos>
            {pokemonDetalhes.types.map((tipo, index) => {
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
              
             return <LiType key={index} bgColor={corType}>{tipo.type.name}</LiType>
            })}
          </ListaTipos>
        </NameContainer>
        <BoxMoves>
          <h1>Moves</h1>
          {pokemonDetalhes.moves.map((p, i) => {
            if (i <= 3) {
               return <ListMoves key={i}>{p.move.name}</ListMoves>
            }
          })}
          </BoxMoves>
      </ContainerImgAndMoves>
        <ImgPoke src={pokemonDetalhes.sprites.other['official-artwork'].front_default} alt="" />
    </Container>
  )
}

export default CardDetalhes