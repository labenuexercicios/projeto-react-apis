import styled from "styled-components";



export const CardPokemonDetalhes = styled.div`
position: absolute;
width: 1300.14px;
height: 663px;
left: center;
top: 400px;
border-radius: 50px;
align-items: center;
font-family: 'Inter';
font-style: normal;

`


export const PokemonNumeroDetalhes = styled.div`
position: absolute;
width: 30px;
height: 19px;
left: 771px;
top: 24px;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
color: #FFFFFF;


`

export const PokemonNomeDetalhes = styled.div`
position: absolute;
width: 238px;
height: 58px;
left: 771px;
top: 19px;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 38px;
line-height: 58px;
color: #FFFFFF;


`


export const ImagensCardContainerDetalhes = styled.div`
 margin-left: 1050px;
  margin-top: -130px;
  width: 193px;
  height: 175px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  .pokeimage {
    max-width: 270px;
    z-index: 1;
  }
  .pokeboladet{
    position: absolute;
    top: 129px;
    margin-left: -470px;
  }
  
`

export const ImagemDetalhes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-left: 5vw;
  margin-bottom: 5vh;
  margin-top: 5vh;
  div {
    border-radius: 8px;
    background-color: white;
    width: 230px;
    height: 250px;
  }
  img{
    width: 100px;
    height: 100px; 
    margin-left:10px;
    padding: 60px;
  }
`;
export const DetalhesBaseStatus = styled.div `
position: absolute;
width: 343px;
height: 553px;
left: 360px;
top: 74px;
background-color: white;
border-radius: 12px;
font-family: 'Inter';
font-style: normal;


h2 {
  color: black;
  margin: 30px 0px 0px 25px;
  font-size: 2rem;
  font-family: 'Inter';
  font-style: normal;
}
`;



export const Barra = styled.div`
width: 150px;
height: fit-content;
position: relative;
background-color: white;
`

export const Status = styled.div`
  width: ${props => props.width}%;
  background-color: #FF7C2D;
  color: #FF7C2D;
  height: 10px;
  border-radius: 30px;

  
`


export const StatusSp = styled.div`
  background-color:#FFDD69;
  color: #FFDD69;
  height: 10px;
  border-radius: 30px;

  
`


export const MovimentoDetalhes = styled.div `
position: absolute;
width: 292px;
height: 445px;
left: 771px;
top: 184px;
background-color: white;
border-radius: 8px;
font-family: 'Inter';
font-style: normal;

h2 {
  color: black;
  margin: 30px 0px 0px 25px;
  font-size: 2rem;
}
`;




export const Tipomovi = styled.li`
padding: 10px;
width: fit-content;
height: 20px;
background: #ECECEC;
border: 1px dashed rgba(0, 0, 0, 0.14);
border-radius: 12px;
margin: 18px;
font-family: 'Poppins', sans-serif;
list-style: none;
font-weight: 400;
font-size: 14px;
color: black;
`


export const TypesContainer = styled.div`
position: absolute;
width: 98px;
height: 31px;
left: 771px;
top: 130px;
padding: 5px 8px;
margin-right: 8px;
margin-top: 5px;
display: flex;
align-items: center; 

`
export const PokemonType = styled.img`

`;

