import { Card } from '@chakra-ui/react'
import styled from "@emotion/styled";
import { theme } from '../../theme';

const { fonts } = theme;

export const StyledCard = styled(Card)`
    border-radius: 0.7rem;
    margin-top: 56px;
    width: 96.4vw;
    height: auto;
    display: flex;
    align-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: green;
    background-color: ${props => props.color};
    position: relative;
    font-family: ${fonts.body};
    font-style: normal; 
    color: white;
`

export const StyledMain = styled.main`
display: flex;
flex-direction: column;
align-items: center;
background-color: #5f5f5e;
height: auto;
`

export const StyledH1 = styled.h1`
font-family: ${fonts.body};
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 72px;
margin-top: 60px;
align-self: flex-start;
margin-left: 2.7vw;
width: 220px;
height: 72px;
color: white;
`
export const StyledPokebola = styled.img`
position: absolute;
    right: 0rem;
    bottom: 0px;
    z-index: 1;
    height: 100%;
`

export const StyledSprite = styled(Card)`
    color: white;
    width: 10vw;
    width: 20vw;
height: 20vw;
`

export const StyledSpriteDiv = styled.div`
display: flex;
flex-direction: column;
row-gap: 35px;
margin: 26px 34px 26px 44px ;
`

export const StyledStats = styled(Card)`
width: 23.8vw;
height: 42.9vw;
background-color: white;
margin-top: 26px;
margin-bottom: 26px;
`

export const StyledP = styled.p`
font-weight: 700;
font-size: xx-large;
color: black;
margin-left: 18px;
margin-top: 10px;
margin-bottom: 10px;
`

export const StyledInfoAndMoves = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 4.7vw;
    margin-top: 24px;
    margin-bottom: 26px;
`

export const StyledMovesCard = styled(Card)`
background-color: white;
border-radius: 10px;
margin-top: 2.2vw;
width: 20vw;
height: 33vw;
`

export const StyledName = styled.h1`
    width: auto;
    height: 39px;
    left: 23px;
    top: 40px;
    font-family: ${fonts.body};
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
`

export const StyledMoves = styled.div`
/* font-family:fonts.fonts.moves}; */
background-color: white;
padding: 10px;
border-radius: 10px;
margin-left: 28px;
font-size: 14px;

`

export const StyledPMoves = styled.p`
font-weight: 700;
font-size: 24px;
color: black;
margin-left: 18px;
margin-top: 18px;
margin-bottom: 10px;
`

export const StyledImg = styled.img`
    width: 18vw;
    height: 18vw;
    position: absolute;
    right: 25px;
    top: -7.5rem;
    z-index: 2;
`
