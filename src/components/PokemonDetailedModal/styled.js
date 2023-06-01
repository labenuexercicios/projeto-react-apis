import styled from "styled-components";



export const Container = styled.div`
  min-height: 660px;
  max-height: 663px;
  min-width: 1200px;
  max-width: 1389px;
  background-color: ${(props) => props.color};
  border-radius: 37px;
 
  color: #ffffff;
  left: 0px;
top: 0px;
`;

export const CatchButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  width: 146px;
  height: 38px;
  background: #ffffff;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  position: relative;
  top: 40px;
  left: 220px;
  z-index: 2;
  color: #000;


  

font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;

@media only screen and (max-width: 600px) {

  left: 150px;
}
  `;

  export const ExtButton = styled.button`

display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  width: 146px;
  height: 38px;
  background: #FF6262;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  position: relative;
  top: 40px;
  right: 0vh;
  left: 220px;
  z-index: 2;
  color: #FFFFFF;

  @media only screen and (max-width: 600px) {

left: 150px;
}


  

font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;

  `;
  
export const PokemonNumber = styled.p`
position: absolute;
width: 30px;
height: 19px;
right: 615px;
top: 150px;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;

color: #FFFFFF;
`;
export const PokemonName = styled.h3`
position: absolute;
left: 701px;
top: 180px;


font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 50px;
line-height: 39px;
/* identical to box height */
 
`;

export const Pokeball = styled.img`

 position: absolute;
  top: 0;
  right: 0;
`;

export const Pokemon = styled.img`
position: absolute;
width: 270px;
height: 270px;
top: 10px;
left: 1000px;
z-index: 1;
@media only screen and (max-width: 800px) {
  width: 125px;
height: 125px;
left: 220px;
}
`;

export const PokemonType = styled.img`
margin-top: 100px;
  margin-right: 3px;
  @media only screen and (max-width: 800px) {
    margin-right: 0px;

}
`;

export const PokemonDetails = styled.p`
  font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px;
text-align: left;
margin-top: 1vh;
/* identical to box height */

text-decoration-line: underline;
`;


export const PokemonGif = styled.img `
position: absolute;
width: 282px;
height: 282px;
left: 70px;
top: 156px;

background: url(image.png), #FFFFFF;
border: 2px solid #FFFFFF;
border-radius: 8px;

`;
export const PokemonGifBack = styled.img `
position: absolute;
width: 282px;
height: 282px;
left: 70px;
top: 480px;

background: url(image.png), #FFFFFF;
border: 2px solid #FFFFFF;
border-radius: 8px;

`;


export const BaseStatsContainer = styled.div `

position: absolute;
width: 300px;
height: 590px;
left: 380px;
top: 180px;

background: #FFFFFF;
border-radius: 12px;


h1{
  font-family: 'Inter';
font-style: normal;
margin-left: 20px;
margin-top: 20px;

  color: black;
}

p{
  color: black;
}
span{
  color: black;
}
`;


export const StatsNames = styled.div  `
display: grid;
grid-template-columns: 1fr;
margin-left: 20px;
margin-top: 20px;

gap: 20px;

`;
export const BaseNumbers = styled.div  `
display: grid;
grid-template-columns: 1fr;
margin-left: 110px;
margin-top: -195px;
font-size: small;

gap: 20px;

`;
export const BaseBars = styled.div  `
display: grid;
grid-template-columns: 1fr;
margin-left: 150px;
margin-top: -192px;

gap: 25px;

`;
export const TotalBar = styled.div  `
display: flex;
gap: 30px;
margin-left: -110px;
margin-top: -1px;

`;




export const StatsName = styled.p `
opacity: 50%;
font-size: small;
`;
export const StatCustom = styled.p `
opacity: 50%;
margin-left: 20px;
font-size: small;

`;
export const StatSpeed = styled.p `
opacity: 50%;
margin-left: 5px;
font-size: small;

`;

export const BarStats = styled.span`
    border-radius: 5px;
    height: 10px;   
    
    div{
        border: 1px solid ${props => props.stats < 49 ? '#FF8C00' :props.stats < 99? 'orange':'yellow'};
        width: ${props => (props.stats/100)*12}vw;
        background-color: ${props => props.stats < 50 ?  '#FF8C00' :props.stats < 99? 'orange':'yellow'};
        border-radius: 10px;
        height: 100%;
    }
`
export const TypesContainer = styled.div`
  margin-left: 680px;
  
  `;

  export const MovesContainer = styled.div  ` 
position: absolute;
display: grid;
grid-template-columns: 1fr;
width: 292px;
height: 453px;
left: 720px;
top: 300px;
background: #FFFFFF;
border-radius: 8px;

h1{
  color: black;

  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-style: normal;
font-size: xx-large;

margin-left: 20px;
margin-top: 20px;

}
button{
  color: black;
  margin-left: 20px;
  width: 102px;
height: 37px;

background: #ECECEC;
border: 1px dashed rgba(0, 0, 0, 0.14);
border-radius: 12px;

font-family: 'Poppins';

font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 17px;
}
  `;