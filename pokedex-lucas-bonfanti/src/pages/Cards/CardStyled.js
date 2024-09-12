import styled from "styled-components"

export const CardContainer = styled.div`
height: 20vh;
width: 30vw;
margin: 1vh 1vw;
padding: 1vh 1vw;
position: relative;
display: flex;
border-radius: 12px;
`

export const CardImage = styled.img`
position: absolute;
top: -4vh;
right: 1vw;
width: 10vw;
height: 21vh;
display: inline;

`

export const Pokeball = styled.img`
position: absolute;
right: 0;
width: 15vw;
height: 23vh;
`

export const Capturar = styled.button`
width: 8vw;
max-width: 140px;
height: 4vh;
max-height: 40px;
right: 1vw;
bottom: 1vh;
border-radius: 8px;
padding: 4px, 10px, 4px, 10px;
font-size: 16px;
font-family: 'Poppins';
font-weight: 400;
line-height: 24px;
color: black;
position: absolute;
border: none;
&:hover{
background-color: #d3d3d3;
cursor: pointer;
}

`
export const Details = styled.button`
border: 4px white;
position: absolute;
bottom: 0.5vh;
left: 1vw;
font-size: 15px;
&:hover{
color: #d3d3d3;
cursor: pointer;
}
`

export const PokeName = styled.p`
margin: 0;
padding: 0;
word-wrap: break-word;
background-color: none;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 39px;
`

export const CardContainer1 = styled.div`
display: flex;
flex-direction: column;
margin: 0px;
width: 100%;
`

export const Type = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: flex-start;
`

export const TypeImg = styled.img`
max-width: 91px;
max-height: 31px;
margin-right: 10px;
`

export const DetailContainer = styled.div`
width: 100%;
height: 100%;
display: ${props=>props.modal};
position: fixed;
top: 0;
left: 0;
background-color:  rgba(0, 0, 0, 0.8);
z-index: 1;
`

export const ContainerBg = styled.div`
width: 50vw;
height: 80vh;
margin: 0vh auto;
border-radius: 12px;
background-color: #787878;
`

export const DetailsTitle = styled.h1`
padding: 1vw;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 32px;

`

export const DetailsContainer = styled.div`
width: 95%;
height: 80%;
margin: auto;
border-radius: 12px;
display: flex;
`

export const ImgDetail = styled.div`
margin: auto;
display: flex;
flex-direction: column;
`

export const DetailImage = styled.img`
width: 12vw;
height: 24vh;
background-color: white;
border-radius: 18px;
margin: 1vh;

`

export const InfoContainer = styled.div`
display: flex;
background-color: white;
flex-direction: column;
border-radius: 12px;
width: 12vw;
height: 48vh;
padding: 1vh;
margin: auto;

`

export const DetailsStats = styled.p`
color: black;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 28px;
margin: 1vh;
`

export const ColumnContainer = styled.div`
display: flex;
flex-direction: column;
border-radius: 12px;
`

export const StatsName = styled.p`
color: black;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 12px;
margin: 1vh 0 0 0;
display: inline;
`

export const StatsNumber = styled.p`
color: black;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 12px;
display: inline;
`

export const NameContainer = styled.div`
margin: 0 auto;
display: flex;
flex-direction: row;
`

export const StatsContainer = styled.div`
display: flex;
flex-direction: column;
margin: 1vh;
`

export const DetailsNumber = styled.p`
margin-top: 6vh;
margin-bottom: 0;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 16px;
display: inline;

`

export const DetailsName = styled.p`
margin: 0;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 32px;
display: inline;
vertical-align: top;
`

export const TypeDetails = styled.div`
display: flex;
gap: 10px;
`

export const TypeImageDetails = styled.img`
max-width: 91px;
max-height: 31px;
margin: 1vh 0 4vh;
`

export const MainImage = styled.img`
position: absolute;
top: 10vh;
width: 10vw;
height: 20vh;
margin: 0;
z-index: 1;
`

export const MovesContainer = styled.div`
background-color: white;
border-radius: 12px;
width: 10vw;
height: 35vh;
margin: auto;
margin-top: 5px;
`

export const Moves = styled.p`
color: black;
font-family: 'Inter';
font-style: normal;
font-weight: 800;
font-size: 24px;
margin: 1vh;
`

export const MovesBackground = styled.div`
background: #ECECEC;
border: 1px dashed rgba(0, 0, 0, 0.14);
border-radius: 12px;
margin: 1vh;
max-width: 150px;

`

export const MovesSlice = styled.p`
color: black;
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 14px;
margin: 1vh;
`
export const PokeballImage = styled.img`
position: absolute;
right: 26vw;
width: 40vw;
height: 70vh;
`

export const CloseButton = styled.button`
margin: auto;
background-color:#fa3a25;
color: white;
border: none;
font-family: 'Inter';
border-radius: 3px;
position: absolute;
right: 25vw;
top: 3vh;
display: block;
cursor: pointer;
&:hover{
background-color: #ffa9a0;
color: white;
}`