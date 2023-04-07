import styled from "styled-components";



export const PokemonDetailStyle = styled.main`
background: #5E5E5E;
display: flex;
height: 120vh;
flex-direction: column;
align-items: flex-start;
justify-content: center;
`

export const BigPokeball = styled.img`
top: -5em;
position:absolute;
left:10em;
`

export const CardDetail = styled.section`
background-color: #729F92;
height: 75vh;
width: 90vw;
align-self:center;
justify-self: center;
border-radius: 2em;
display: grid;
position: absolute;
grid-template-columns: 1fr 1fr 1fr 1fr;
`

export const SmallDetail = styled.section`
background-color: #FFFFFF;
height: 80%;
width: 90%;
margin:1.5em 2em;
border-radius: 1em;
grid-column-start: 1;
grid-column-end: 2;
grid-auto-rows:auto;
`
export const SmallPokeball = styled.img`

`

export const BigDetail = styled.section`
background-color: #FFFFFF;
height: 90%;
width: 90%;
margin:1.5em 2em;
border-radius: 1em;
grid-column-start: 2;
grid-column-end: 3;
grid-row-start: 1;
grid-row-end: 3;
`
export const PokeInfo = styled.section`
display: flex;
flex-direction: column;
grid-column-start: 3;
grid-column-end: 4;
margin:1.5em 2em;

`

export const PokeId = styled.p`
color: #FFFFFF;
font-size: 16px;
font-family: 'Inter', sans-serif;
font-weight: 700;

`
export const PokeName = styled.h1`
color: #FFFFFF;
font-size: 48px;
font-family: 'Inter', sans-serif;
font-weight: 700;

`
export const PokeType = styled.img`
display:flex;

`
export const PokeMoves = styled.section`
background-color: #FFFFFF;
height: 60%;
width: 100%;

border-radius: 1em;

`