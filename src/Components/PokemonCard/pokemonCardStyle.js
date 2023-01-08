import styled from "styled-components"

export const PokemonCardStyle = styled.div`
width: 440px;
height: 210px;
padding: 16px;
display: flex;
position: relative;
margin: 50px;
background-color: ${(props) => props.color};
border-radius: 12px;
color: #ffffff;

.Detalhes{
 color: #ffffff;
 position: absolute;
 width: 74px;
 height: 24px;
 font-family: Poppins;
font-style: Bold;
font-size: 20px;
line-height: 24px;
bottom: 10px;
right: 350px;


}
`;

export const PokemonNumber = styled.p`
font-family: normal;
font-size: 16px;
font-weight: 600;
text-align: left;

`;
export const PokemonName = styled.h1`
font-size: 32px;
font-weight: 700;
letter-spacing: 0em;
text-align: left;
margin-bottom: 10px;

`;

export const Pokeball = styled.img`
/* position: absolute;
width: 210.73px;
height: 210.73px;
top: -62px;
left: 294.37px; */
/* opacity: 17%; */
 position: absolute;
  top: 0;
  right: 0;


`;

export const Button = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 4px 10px;
width: 146px;
height: 38px;
background: #ffffff;
border-radius: 8px;
border:none;
cursor: pointer;
position: absolute;
bottom: 10px;
right: 22px;
z-index: 2;
color: #000;

`;

export const ButtonExcluir = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 4px 10px;
width: 146px;
height: 38px;
background: #FF6262;
border-radius: 8px;
border:none;
cursor: pointer;
position: absolute;
bottom: 10px;
right: 22px;
z-index: 2;
color: #FFFFFF;

`

export const PokemonImagem = styled.img`
width: 193px;
  height: 193px;
  position: absolute;
  top: -60px;
  right: 0;
  z-index: 2;

`

export const TypesContainer = styled.div`
  margin-bottom: 52px;
`;

export const PokemonType = styled.img`
  max-width: 100px;
  height: 32px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px dashed #ffffff;
  margin-right: 8px;

`;

