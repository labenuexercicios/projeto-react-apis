import { styled } from "styled-components";

export const DetailPage = styled.div`
    background-color: #5d5d5d;
    min-height: 115vh;
    display: flex;
    flex-direction: column;
    align-items: center; 
     
    h1{
    font-family: 'Poppins', sans-serif;
    color:#ffff;
}
`
export const H1 = styled.h1`
    font-size:3rem;
    font-weight:bold;
    position:absolute;
    left:5%;
`

export const ContainerCard = styled.div`
  padding: 16px;
  width: 85%;  
  height:fit-content;
  background-color: ${props => props.color};
  border-radius: 15px;  
  position: absolute;
  margin: 10%;
  color: #ffffff;
  display:flex;
  justify-content:center;
  align-items:center;
`;

export const PokemonNumber = styled.p`
  //font-family: "Inter", sans-serif;
  //font-size: 20px;
 // font-weight: 600;
 // text-align: left;
`;

export const PokemonName = styled.h1`
  //font-size: 25px;
  //font-weight: 700%;
  //letter-spacing: 0em;
  //text-align: left;  
`;

export const BoxImageMiniPoke = styled.div`
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div:nth-child(1){        
        background-color: #ffff;
        border-radius: 10px;
        width: 70%;       
        img{
            width: 100%; 
        }
    }
    div:nth-child(2){        
        background-color: #ffff;
        border-radius: 10px;
        width: 70%;
        img{
            width: 100%; 
        }
    }          
`

export const BaseStats = styled.div`
    background-color: #ffff;
    border-radius: 10px;
    width: 30%;
    height: 5%;    
    position: relative;
    right: 1%;
    display: flex;
    flex-direction: column;
    h2{
        text-align: center;
        font-family: 'Roboto', sans-serif;
        color:black;        
    }
   div{
        color: black;
        font-family: 'Roboto', sans-serif;
        font-weight: bold;        
   }
   
    h5{
        font-family: 'Roboto', sans-serif;
        font-weight: bold;        
        position: relative;
        left: 5%;
    }
    p{
        text-align: center;
        font-family: 'Roboto', sans-serif;
        position: relative;
        padding:5%;
    }
`

export const ProgressBarContainer = styled.div`
    background-color: lightgrey;
    width: 90%;
    border-radius: 50px;
    position: relative;
    left: 5%;
`
export const ProgressBar = styled.div`
    background-color: ${(props) => { return props.color }};
    font-size: 0.5em;
    border-radius: 5px;
    width: ${({ progress }) => progress}%;
`

export const PokemonType = styled.img`
  max-width: 100px;
  height: 32px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px dashed #ffffff;
  margin-right: 8px;
`;

export const TypesContainer = styled.div`
margin-bottom: 100%;
display:flex;
`;
export const Pokeball = styled.img`
  position: absolute;
  width:60%;
  top: 0;
  right: 0;
`;

export const Pokemon = styled.img`
width: 20%;
height: 50%;
position: absolute;
top: -90px;
right: 0;
z-index: 2;`


export const MoviesPokemon = styled.div`
    background-color: #Ffff;
    border-radius: 9px;
    position: absolute;
    width: 20%;
    height: 46%;
    top: 48%;
    right:15%;
    display: flex;
    flex-direction: column;
    gap: 1%;
    h2{
        font-family: 'Roboto', sans-serif;
        text-align: center;
        color:black;
    }
`



    // background-color: #Ffff;
    // border-radius: 10px;
    // position: relative;
    // width: 20%;
    // height: 60%;
    // display: flex;
    // right:25%;
    // flex-direction: column;

export const InfoAndMoves = styled.div`
    position: relative;
    width: 30%;
    left: 5%;
    hr{
        width: 80%;
    }  
    
`
export const Id = styled.h4`
    font-family: 'Roboto', sans-serif;
    color: #ffff;
    position: relative;
    top: 150%;  
`

export const TypeMoves = styled.p`
    background-color: #ececec;
    border: dashed #dbdbdb 2px;
    border-radius: 5px;
    font-size: 1rem;
    position: relative;
    left: 30%;
    font-family: 'Roboto', sans-serif;
    width: 39%;
    text-align: center; 
    color:black; 
`


