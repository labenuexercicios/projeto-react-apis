import styled from "styled-components";

export const DetailCard = styled.div`
width: 95vw;
background-color: ${(props)=>props.colorbcg};
height: 80vh;
border-radius: 1vw;
margin-top: 5vh;
margin-bottom: 5vh;
display: flex;
`
//CONTAINERS 

export const DetailMainContainer = styled.div`
 display: flex;
 justify-content: center;
 padding-bottom: 10vh;

`

export const SpriteContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;

`
export const PokeTypeContainer = styled.div`

display:flex;
`



export const BaseStatsContainer = styled.div`

`
export const MovesContainer = styled.div`
display: flex;
flex-direction: column;


`
export const ImageContainer = styled.div`
grid-column: 4/5;
grid-row: 1/3;

`

//CARDS

export const SpriteFrontCard = styled.div`
background-color: white;
width: 18vw;
height: 35vh;
border-radius: 1.4vh;
margin: 3vh, 3vh;
margin-left: 4vh;
margin-right: 4vh;
margin-bottom: 4vh;
display: flex;
align-items: center;


`
export const ImageCardFront = styled.img`

width: 15vw;
margin-left: 1vw;
`



export const SpriteBackCard = styled.div`
background-color: white;
width: 18vw;
height: 35vh;
border-radius: 1.4vh;
margin: 3vh, 3vh;
margin-left: 4vh;
margin-right: 4vh;
display: flex;
align-items: center;

`

export const ImageCardBack = styled.img`

width: 15vw;
margin-left: 1vw;
`

export const BaseStatsCard = styled.div`
background-color: white;
width: 25vw;
height: 74vh;
border-radius: 1.4vh;
margin-top: 3vh;
margin-right: 3vh;
color: black;

`

export const StatusCard = styled.div`

width: 24vw;
margin-left: 6vh;

`

export const MoveCard =  styled.div`
position: absolute;
display: flex;
flex-direction: column;
color: black;
background-color: white;
width: 20vw;
height: 51vh;
margin-top: 26vh;
margin-left: 6vh;
border-radius: 1.4vh;


`


//MoveCard itens

export const PokeNumber = styled.p`


font-size: 3vh;
color: white;
margin-top: 2vw;
font-family: 'Inter';

`
export const PokeName = styled.p`
color: white;
font-size: 7vh;
font-family: 'Inter';
width: 100%;
`
export const PokeType = styled.p`

color: white;
display: flex;
font-size: 2vh;
margin-top: 1vh;
margin-right: 2vw;
font-family: "Poppins";
background-color: ${(props)=>props.colorbgtype};
border-radius: 1vh;
width: 6.1vw;
height: 4.1vh;
align-items: center;
border: 0.145vw dotted white;


`
export const PokeType2 = styled.p`

color: white;
display: flex;
font-size: 2vh;
margin-top: 1vh;
font-family: "Poppins";
background-color: ${(props)=>props.colorbgtype2};
border-radius: 1vh;
width: 6.1vw;
height: 4.1vh;
align-items: center;
border: 0.145vw dotted white;


`

export const PokeMainDetail = styled.div`
width: 100%;
background-color: #5E5E5E;
font-weight: bold;
font-family: "Poppins";
color: white;
font-size: 2.4vw;
height: 118vh;

`

export const PokeBallImage =styled.img`

height: 90vh;
width: 52vw;
position: absolute;
margin-left: 43.5vw;
margin-top: 5vh;


`
export const PokeImage = styled.img`

position: absolute;
margin-left: 77vw;
margin-top: -12vh;
width: 18vw;
height: 35vh;

`

export const MovesPokemon = styled.p`

color: black;
display: flex;
font-size: 2.7vh;
margin-top: 1vh;
margin-left: 1.5vw;
font-family: "Montserrat";
font-style: normal;
background-color: #ececec;
border-radius: 3vh;
width: 9vw;
height: 6vh;
justify-content: center;
align-items: center;
border: 0.2vw dotted white;
justify-content: start;
padding-left: 0.5vw;


`

export const MovesTitle = styled.p`
margin-top: 1.5vh;
margin-left: 1.5vw;
font-size: 4vh;

`
export const StatsTitle = styled.p`
padding-top: 2vh;
margin-left: 1.5vw;
font-size: 4vh;
padding-bottom: 2vh;

`

export const Stats = styled.p`
display: flex;
font-size: 2vh;
color: #959595;
font-family: Arial, Helvetica, sans-serif;
border-top: 0.1vw #959595 dotted;
margin-left: 4vh;
margin-right: 4vh;
padding-top: 1vh;
padding-bottom: 1vh;
align-items: start;

`

export const ContainerStats  = styled.p`


width: 100%;
height: 1vh;

border-radius: 5vw;
height: 2vh;
display: flex;
justify-content: start;


`

export const ContainerLowStats  = styled.p`

background-color: #f87b33;
width: ${(props)=>props.colorStatsLow}%;
border-radius: 5vw;



`

export const ContainerHighStats  = styled.p`

background-color: #fddf6d;
width: ${(props)=>props.colorStatsHigh}%;
border-radius: 5vw;


`
export const ContainerStatsNum = styled.p`
width: 7vw;
display: flex;
justify-items: end;
`
export const ContainerValor = styled.p`
width: 3vw;


`

export const StatsTotal = styled.p`
margin-left: -2.3vw;
color: gray;

`
