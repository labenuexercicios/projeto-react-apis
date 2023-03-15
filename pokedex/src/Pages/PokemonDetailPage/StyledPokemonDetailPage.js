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
margin-top: 60px;
align-self: flex-start;
margin-left: 2.7vw;
width: 220px;
height: 72px;
font-size: large;
color: white;
`
export const StyledPokebola = styled.img`
align-self: center;
position: absolute;
width: 908.99px;
height: 908.99px;
/* left: 553.49px; */
top: -40px;
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
margin-bottom: 10px
`
