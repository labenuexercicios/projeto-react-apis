import React from 'react'
import FundoDetalhes from "../../assets/fundoDetalhes.png"
import {BoxPrincipal, LeftSide, DoubleCards, FrontCard, ImgDouble, BackCards, ProgressMain, TitleBase, Border, 
   StatsTypes, StatsTypesTotal, NumberBase1, NumberBase2, NumberBase3, NumberBase4, NumberBase5, NumberBase6, NumberBase7,
   SideRight, CardLeftSide, CardSideRight, Id, Name, Moves, Move, Types, TitleMove, BackgroundImg, ImgFront } from './CardDetails.styled'
import { getColors } from '../../utils/getColors'
import { typesPokemon } from '../../utils/typesPokemon'
import { Stack, Progress } from '@chakra-ui/react'
import {ChakraProvider} from '@chakra-ui/react'


const CardDetails = (props) => {
  const {details, typeDetails, typeDetails2} = props
  return (
    <ChakraProvider>
    <BoxPrincipal color={getColors(details['types']['0']['type']['name'])}>
        <LeftSide>
           <DoubleCards>
              <FrontCard>
                <ImgDouble src={details.sprites.front_default}/>
              </FrontCard>
              <BackCards>
                <ImgDouble src={details.sprites.back_default}/>
              </BackCards>
           </DoubleCards>

         <ProgressMain>
            <TitleBase>Base Stats</TitleBase>
           {props.base.length > 1 && 
           <Stack paddingLeft={'100px'} spacing={'none'}>
            <Border>
              <StatsTypes>HP <NumberBase1>{props.base["0"]['base_stat']}</NumberBase1></StatsTypes>
              <Progress maxWidth={'190px'} borderRadius='4px' backgroundColor='white' colorScheme='orange' size='md' value={props.base["0"]['base_stat']} />
            </Border>
            <Border>
              <StatsTypes>Attack <NumberBase2>{props.base["1"]['base_stat']}</NumberBase2></StatsTypes>
              <Progress maxWidth={'190px'} borderRadius='4px' backgroundColor='white' colorScheme='orange' size='md' value={props.base["1"]['base_stat']} />
            </Border>
            <Border>
              <StatsTypes>Defense <NumberBase3>{props.base["2"]['base_stat']}</NumberBase3></StatsTypes>
              <Progress maxWidth={'190px'} borderRadius='4px' backgroundColor='white' colorScheme='orange' size='md' value={props.base["2"]['base_stat']} />
            </Border>
            <Border>
              <StatsTypes>Sp. Atk <NumberBase4>{props.base["3"]['base_stat']}</NumberBase4></StatsTypes>
              <Progress maxWidth={'190px'} borderRadius='4px' backgroundColor='white' colorScheme='yellow' size='md' value={props.base["3"]['base_stat']} />
            </Border>
            <Border>
              <StatsTypes>Sp. Def <NumberBase5>{props.base["4"]['base_stat']}</NumberBase5></StatsTypes>
              <Progress maxWidth={'190px'} borderRadius='4px' backgroundColor='white' colorScheme='yellow' size='md' value={props.base["4"]['base_stat']} />
            </Border>
            <Border>
              <StatsTypes>Speed <NumberBase6>{props.base["5"]['base_stat']}</NumberBase6></StatsTypes>
              <Progress maxWidth={'190px'} borderRadius='4px' backgroundColor='white' colorScheme='orange' size='md' value={props.base["5"]['base_stat']} />
            </Border>
            <StatsTypesTotal>Total
            <NumberBase7>
             {props.base["0"]['base_stat']+
              props.base["1"]['base_stat']+
              props.base["2"]['base_stat']+
              props.base["3"]['base_stat']+
              props.base["4"]['base_stat']+
              props.base["5"]['base_stat']
              }</NumberBase7></StatsTypesTotal>
           </Stack>
           }
        </ProgressMain>
        </LeftSide>
        <SideRight>
            <BackgroundImg src={FundoDetalhes}/>
            <CardLeftSide>
              {details.id < 10 ? (<Id>{"#0"+details.id}</Id>):(<Id>{"#"+details.id}</Id>)}
              <Name>{details.name.charAt(0).toUpperCase() + details.name.slice(1)}</Name>
              <Types>
                {typeDetails2.length > 1 && <img src={typesPokemon(typeDetails2)} alt="Type"/>}
                {typeDetails.length > 1 && <img src={typesPokemon(typeDetails)} alt="Type"/>}
              </Types>
              <Moves>
                <TitleMove>Moves:</TitleMove>
                {details && <Move>{details['moves']['0']['move'].name}</Move>}<br/>
                {details && <Move>{details['moves']['1']['move'].name}</Move>}<br/>
                {details && <Move>{details['moves']['2']['move'].name}</Move>}<br/>
                {details && <Move>{details['moves']['3']['move'].name}</Move>}
              </Moves>
            </CardLeftSide>
            <CardSideRight>
                <ImgFront src={details.sprites?.other['official-artwork'].front_default}/>
            </CardSideRight>
        </SideRight>
    </BoxPrincipal>
    </ChakraProvider>
  )
}

export default CardDetails
