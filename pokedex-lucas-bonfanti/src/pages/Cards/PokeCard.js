import React, { useState } from 'react'
import { Capturar, CardContainer, CardImage, ColumnContainer, Details, DetailsContainer, DetailsName, DetailsNumber, DetailsStats, DetailsTitle, InfoContainer, MainImage,  Moves, MovesBackground, MovesContainer, MovesSlice, PokeName, NameContainer, Pokeball, PokeballImage, StatsContainer, StatsName, StatsNumber,  TypeDetails,  TypeImageDetails, CardContainer1, Type, TypeImg, DetailContainer, ContainerBg, ImgDetail } from '../Cards/CardStyled'


const PokeCard = (props) => {

    const [modal, setModal] = useState('none')
    const closeModal = () => {
        setModal('none')
    }

    const goToPokemonDetails = () => {
        setModal('block')
    }

    const moves = props.pokemon.moves.map((move) => {
        return (
            <MovesBackground key={move.move.name}>
            <MovesSlice>{move.move.name}</MovesSlice>
            </MovesBackground>
        )
    })

    return (
    <CardContainer className={props.pokemon.types[0].type.name}>
     <CardContainer1>
      <PokeName className={props.pokemon.types[0].type.name}>{props.pokemon.name}</PokeName>
       <Type>
        {props.pokemon.types.map(index => {
            return (<TypeImg key={index.id} src={require(`../../assets/types/${index.type.name}.png`)} />)})}
        </Type>
            <Details
            className={props.pokemon.types[0].type.name}
            onClick={goToPokemonDetails}
            >
                Detalhes
            </Details>
            </CardContainer1>
            <>
            <Pokeball 
            src={require('../../assets/pokeballBackground.png')}
            />
            <CardImage
            src={`${props.pokemon.sprites.other["official-artwork"].front_default}`} 
            />
            <Capturar 
            onClick={() => props.capturePokemon(props.pokemon.id)}
            >
                Capturar!
            </Capturar>
            </>

            <DetailContainer 
            modal={modal}
            >
            <ContainerBg>
            <DetailsTitle>Detalhes</DetailsTitle>
                <DetailsContainer
                className={props.pokemon.types[0].type.name}
                >
                <ImgDetail>
                <ImgDetail
                src={`${props.pokemon.sprites.front_default}`} />
                <ImgDetail 
                src={`${props.pokemon.sprites.back_default}`} />
                </ImgDetail>
                <InfoContainer>
                    <ColumnContainer>
                    <DetailsStats>Base stats</DetailsStats>
                                {props.pokemon.stats.map((stat) => {
                                    return (
                                        <StatsName key={stat.stat.name}>
                                            <StatsName>{stat.stat.name}: </StatsName>
                                            <StatsNumber>{stat.base_stat}</StatsNumber>
                                        </StatsName>
                                    )
                                })}
                            </ColumnContainer>
                        </InfoContainer>
                        <NameContainer>
                            <StatsContainer>
                            <DetailsNumber>#{props.pokemon.id}</DetailsNumber>
                            <DetailsName>{props.pokemon.name}</DetailsName>
                            <TypeDetails>
                                {props.pokemon.types.map(index => {
                                    return (
                                        <TypeImageDetails key={index.id} src={require(`../../assets/types/${index.type.name}.png`)} />
                                    )
                                })}
                            </TypeDetails>
                            <MovesContainer>
                                <Moves>Moves:</Moves>
                                {moves.slice(0,5)}
                            </MovesContainer>
                            </StatsContainer>
                            <MainImage 
                            src={`${props.pokemon.sprites.other["official-artwork"].front_default}`}
                            />
                            <PokeballImage 
                            src={require('../../assets/pokeballBackground.png')}
                            />
                        </NameContainer>
                    </DetailsContainer>
                </ContainerBg>
            </DetailContainer>
        </CardContainer>
    )
}

export default PokeCard