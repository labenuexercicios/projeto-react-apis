import styled from "styled-components";



export const PokeCard = styled.div`
width: 31vw;
height: 30vh;
border-radius: 1vw;
margin-top: 3vh;
margin-bottom: 5vh;
display: flex;
background-color: ${(props)=>props.colorbcg};

`

export const MainCard = styled.div`
display: flex;
flex-direction: column;

`
export const CardButton = styled.button`
width: 10vw;
height: 5vh;
cursor: pointer;
border: 1px solid white;
border-radius: 0.5vh;
position: absolute;
bottom: 2vh;
margin-left: 1vw;
font-size:3vh;
margin-top: 2vh;
font-family: "Poppins";
:hover{
    width: 10vw;
height: 5vh;
cursor: pointer;
border: 1px solid black;
border-radius: 0.5vh;
position: absolute;
bottom: 2vh;
margin-left: 1vw;
font-size:3vh;
margin-top: 2vh;
font-family: "Poppins";

}

`
export const CardButtonRemove = styled.button`
width: 10vw;
height: 5vh;
cursor: pointer;
border: 1px solid #ff6062;
border-radius: 0.5vh;
position: absolute;
bottom: 2vh;
margin-left: 1vw;
font-size:3vh;
margin-top: 2vh;
font-family: "Poppins";
background-color: #ff6062;
color: white;

:hover{
    width: 10vw;
height: 5vh;
cursor: pointer;
border: 1px solid white;
border-radius: 0.5vh;
position: absolute;
bottom: 2vh;
margin-left: 1vw;
font-size:3vh;
margin-top: 2vh;
font-family: "Poppins";
background-color: #ff6062;
color: white;

}

`

export const PokeNumber = styled.p`
font-size: 3vh;
margin-left: 1.5vw;

color: white;
margin-top: 1vw;
margin-bottom: -1vw;
font-family: 'Inter';

`

export const PokeName = styled.p`

color: white;
font-size: 4.5vh;
margin-left: 1.5vw;
font-family: 'Inter';
padding-top: 1.6vh;


`
export const PokeType = styled.p`

color: white;
display: flex;
font-size: 2vh;
margin-left: 1.5vw;
margin-top: 1vh;
font-family: "Poppins";
background-color: ${(props)=>props.colorbackground};
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
margin-left: 1.5vw;
margin-top: 1vh;
font-family: "Poppins";
background-color: ${(props)=>props.colorbackground2};
border-radius: 1vh;
width: 6.1vw;
height: 4.1vh;
align-items: center;
border: 0.145vw dotted white;

`

export const PokeTypeImage = styled.img`

width: 2vh;
margin-left: 1vh;
margin-right: 0.6vw;



`

export const ContainerDetail = styled.div`

width: 18vh;
`

export const PokeDetails = styled.p`
color: white;
margin-left: 2vw;
font-size: 3vh;
margin-top: 8vh;
text-decoration: underline;
cursor:pointer;



`

export const TypeDiv = styled.div`
display: flex;




`

export const PokeImage = styled.img`

position: absolute;
right: 0px;
margin-top: -8vh;
width: 13vw;
height: 26vh;

`


export const PokeContainer = styled.div`


width: 17vw;
`

export const PokeContainer2 = styled.div`
position: relative;
width: 13vw;

`

export const PokeBallImage =styled.img`

height: 30vh;
width: 18vw;
position: absolute;
right: -1vw;


`



export const PokemonColor = styled.div`
background-color: red;
`