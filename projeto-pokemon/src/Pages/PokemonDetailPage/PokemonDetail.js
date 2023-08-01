import React, { useContext, useEffect, useState } from "react"
import { ListTitle } from "../PokemonListPage/PokemonListStyle"
import { BaseStatsCard, DetailCard, DetailMainContainer, PokeTypeContainer, PokeType, SpriteBackCard, SpriteFrontCard, StatusCard, ImageCardFront, ImageCardBack, PokeType2, PokeMainDetail, PokeBallImage, PokeImage, MovesPokemon, MovesTitle, StatsTitle, Stats, StatsContainer, ContainerStats, ContainerStatsNum, ContainerValor, ContainerLowStats, ContainerHighStats, StatsTotal } from "./PokemonDetailStyle"
import { SpriteContainer, ImageContainer, BaseStatsContainer,MovesContainer, MoveCard, PokeNumber, PokeName } from "./PokemonDetailStyle"
import { GlobalContext } from "../../contexts/GlobalContext"
import axios from "axios"
import { getColors } from "../../types/BackgroundTypeColor"
import { typeColors } from "../../types/TypesColors"
import { getTypes } from "../../types/Types"
import { PokeTypeImage } from "../../Components/PokemonCard/PokemonCardStyle"
import Pokeball2 from "../../assets/Pokeball.png"




export function PokemonDetail (){

    const context = useContext(GlobalContext)   
    const {pokeInfo, setPokeInfo}= context
    const [isLoading, setIsLoading] = useState(true)      
    
    

    async function getPokeInfo(){
        
        try{
            setIsLoading(true)
            const response = await axios.get(pokeInfo.url)
            setPokeInfo(response.data)
            setIsLoading(false)
       
        }
        catch (error){
            console.log(error.response)
            setIsLoading(false)
        }
    }
    useEffect(()=>{
        getPokeInfo()
        },[])


    const id =()=>{
        if(pokeInfo.id<10){
            return "0" + pokeInfo.id}
        
        return pokeInfo.id
    }

    return(
        <div>
        
            <PokeMainDetail><ListTitle>Detalhes</ListTitle>
            {isLoading? <p>Carregando</p>:
            <DetailMainContainer>
          
            <DetailCard colorbcg={getColors(pokeInfo.types[0].type.name)}>

            <SpriteContainer>
                <SpriteFrontCard><ImageCardFront src={pokeInfo.sprites.front_default}/> </SpriteFrontCard>
                <SpriteBackCard><ImageCardBack src={pokeInfo.sprites.back_default}/></SpriteBackCard>
           </SpriteContainer>

            <BaseStatsContainer>
                <BaseStatsCard>
                <StatsTitle>Base Stats</StatsTitle>

                <Stats><ContainerStatsNum>HP</ContainerStatsNum><ContainerValor>{pokeInfo.stats[0].base_stat}</ContainerValor> <ContainerStats>{pokeInfo.stats[0].base_stat>49?<ContainerHighStats colorStatsHigh={pokeInfo.stats[0].base_stat}/>: <ContainerLowStats colorStatsLow={pokeInfo.stats[0].base_stat}/>}</ContainerStats></Stats>
                <Stats><ContainerStatsNum>Attack </ContainerStatsNum> <ContainerValor>{pokeInfo.stats[1].base_stat}</ContainerValor><ContainerStats> {pokeInfo.stats[1].base_stat>49?<ContainerHighStats colorStatsHigh={pokeInfo.stats[1].base_stat}/>: <ContainerLowStats colorStatsLow={pokeInfo.stats[1].base_stat}/>}</ContainerStats></Stats>
                <Stats><ContainerStatsNum>Defense</ContainerStatsNum> <ContainerValor> {pokeInfo.stats[2].base_stat}</ContainerValor><ContainerStats> {pokeInfo.stats[2].base_stat>49?<ContainerHighStats colorStatsHigh={pokeInfo.stats[2].base_stat}/>: <ContainerLowStats colorStatsLow={pokeInfo.stats[2].base_stat}/>}</ContainerStats></Stats>
                <Stats><ContainerStatsNum>Sp. Atk</ContainerStatsNum> <ContainerValor> {pokeInfo.stats[3].base_stat}</ContainerValor><ContainerStats> {pokeInfo.stats[3].base_stat>49?<ContainerHighStats colorStatsHigh={pokeInfo.stats[3].base_stat}/>: <ContainerLowStats colorStatsLow={pokeInfo.stats[3].base_stat}/>}</ContainerStats></Stats>
                <Stats><ContainerStatsNum>Sp. Def</ContainerStatsNum> <ContainerValor>{pokeInfo.stats[4].base_stat}</ContainerValor><ContainerStats> {pokeInfo.stats[4].base_stat>49?<ContainerHighStats colorStatsHigh={pokeInfo.stats[4].base_stat}/>: <ContainerLowStats colorStatsLow={pokeInfo.stats[4].base_stat}/>}</ContainerStats></Stats>
                <Stats><ContainerStatsNum>Speed</ContainerStatsNum> <ContainerValor>{pokeInfo.stats[5].base_stat}</ContainerValor><ContainerStats> {pokeInfo.stats[5].base_stat>49?<ContainerHighStats colorStatsHigh={pokeInfo.stats[5].base_stat}/>: <ContainerLowStats colorStatsLow={pokeInfo.stats[5].base_stat}/>}</ContainerStats></Stats>
                <Stats><ContainerStatsNum>Total </ContainerStatsNum> <StatsTotal>{pokeInfo.stats[0].base_stat+pokeInfo.stats[1].base_stat+pokeInfo.stats[2].base_stat+pokeInfo.stats[3].base_stat+pokeInfo.stats[4].base_stat+pokeInfo.stats[5].base_stat}</StatsTotal></Stats>
                <Stats/>

                </BaseStatsCard>
            </BaseStatsContainer>

            <MovesContainer>
                <StatusCard>

                    <PokeNumber>#{id()}</PokeNumber>
                    <PokeName>{pokeInfo.name[0].toUpperCase()+ pokeInfo.name.substr(1)}</PokeName>
                    <PokeTypeContainer>
                        <PokeType colorbgtype={typeColors(pokeInfo.types[0].type.name)}> <PokeTypeImage src={getTypes(pokeInfo.types[0].type.name)}/>{pokeInfo.types[0].type.name}</PokeType>
                        {pokeInfo.types[1]? <PokeType2 colorbgtype2= {typeColors(pokeInfo.types[1].type.name)}> <PokeTypeImage src={getTypes(pokeInfo.types[1].type.name)}/> {pokeInfo.types[1]?.type.name}</PokeType2>:<></>} 
                       
                    </PokeTypeContainer>
                     
                </StatusCard>
                
                <MoveCard>
                <MovesTitle>Moves:</MovesTitle>
                <MovesPokemon>{pokeInfo.moves[0].move.name[0].toUpperCase()+ pokeInfo.moves[0].move.name.substr(1)}</MovesPokemon>
                <MovesPokemon>{pokeInfo.moves[1].move.name[0].toUpperCase()+ pokeInfo.moves[1].move.name.substr(1)}</MovesPokemon> 
                <MovesPokemon>  {pokeInfo.moves[2].move.name[0].toUpperCase()+ pokeInfo.moves[2].move.name.substr(1)}</MovesPokemon> 
                <MovesPokemon>  {pokeInfo.moves[3].move.name[0].toUpperCase()+ pokeInfo.moves[3].move.name.substr(1)}</MovesPokemon> 
                </MoveCard>
            </MovesContainer>
            <ImageContainer></ImageContainer>
         
            </DetailCard>
            <PokeBallImage src={Pokeball2}/>
            <PokeImage src={pokeInfo.sprites.other["official-artwork"].front_default} alt=""/>
            </DetailMainContainer>
            
            }
            </PokeMainDetail>
           

          
        </div>

    )



}

