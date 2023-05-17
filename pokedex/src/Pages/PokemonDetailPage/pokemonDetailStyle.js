import styled from "styled-components";



export const PokemonDetailStyle = styled.main`
background: #5E5E5E;
display: flex;
height: 100vh;
flex-direction: column;
align-items: flex-start;
justify-content: center;
`

export const BigPokeball = styled.img`
top: -5em;
position:absolute;
left:10em;
`
export const FirstColumn = styled.section`
display:flex;
flex-direction: column;
`

export const CardDetail = styled.section`
background-color: #729F92;
height: 663px;
width: 90vw;
align-self:center;
justify-self: center;
border-radius: 2em;
display: grid;
grid-template-columns: repeat(4, 1fr);
column-gap: 0.5em;
box-sizing: border-box;
z-index: 1;

`

export const SmallDetail = styled.img`
background-color: #FFFFFF;
height: 282px;
width: 282px;
margin:1.5em 2em;
border-radius: 1em;

`
export const SmallPokeball = styled.img`

`

export const BigDetail = styled.section`
background-color: #FFFFFF;
height: 613px;
width: 343px;
margin:1.5em 2em;
border-radius: 1em;

padding: 1em;

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
export const PokeImg = styled.img`
position: absolute;
top: 250px;
right: 100px;
z-index: 2;
width: 270px;
height: 270px;
`
export const PokeType = styled.img`
display:flex;

`
export const PokeMoves = styled.section`
background-color: #FFFFFF;
height: 453px;
width: 292px;
padding: 1em;
border-radius: 1em;
display: flex;
flex-direction: column;
gap:1em;
align-items: flex-start;

`
export const PokeGolpes = styled.button`
background: #ECECEC;
border: 1px dashed rgba(0, 0, 0, 0.14);
border-radius: 12px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
padding: 10px;

`