import styled from "styled-components";

export const PokemonDetailPageMain = styled.main`
display: grid;
justify-content: center;
background-color: #5E5E5E;

`;

export const Container = styled.header`
gap: 16px;
height: 140px;
background: #5E5E5E;
display: flex;
align-items: center;
justify-content: flex-start;
color: #FFFFFF ;
font-family: Poppins;
font-size: 48px;
font-style: bold;
padding: 15px;
/* border: 1px solid #FB8B24; */
`;


export const PokemonCardDetailStyle = styled.div`
width: 1320px;
height: 663px;
display: flex;
position: relative;
margin: 50px;
background-color: ${(props) => props.color};
border-radius: 37.89px;
color: #ffffff;
`;
export const PokemonTypeDetail = styled.img`
  max-width: 100px;
  height: 32px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px dashed #ffffff;
  margin-right: 8px;
  position: absolute;
  top: 470px;
left: 890px;
`;
export const PokemonTypeDetail2 = styled.img`
  max-width: 100px;
  height: 32px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px dashed #ffffff;
  margin-right: 8px;
  position: absolute;
  top: 470px;
left: 766px;
`;

export const PokemonDetailNameStyle = styled.h1`

position: absolute;
top: 400px;
left: 771px;
color: #FFFFFF;
font-family: Inter;
font-style: Bold;
font-size: 48px;


`;
export const PokemonId = styled.p`

position: absolute;
top: 370px;
left: 771px;
color: #FFFFFF;
font-family: normal;
font-size: 30px;
font-weight: 600;
text-align: left;
`;

export const PokemonImagem = styled.img`
width: 270px;
  height: 270px;
  position: absolute;
  top: 216px;
  right: 36px;
  z-index: 2;

`
export const Moves = styled.aside`
border-radius: 8px;
width: 292px;
  height: 453px;
  position: absolute;
  top: 533px;
  right: 290px;
  background: #FFFFFF;
  z-index: 2;

  .TituloMoves{
    
    position: absolute;
    font-family: Inter;
    font-style: Extra Bold;
    font-size: 24px;
    line-height: 29px;
    vertical-align: top;
    width: 87px;
    height: 29px;
    top: 25px;
    left: 15px;
    /* background: #729F92; */

  }

`
export const Move = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 4px 10px;
width: 146px;
height: 50px;
background: #ECECEC;
border-radius: 18px;
border: dashed 2px #00000024;
position: absolute;
bottom: 10px;
right: 422px;
z-index: 2;
color: #000;
font-family: Montserrat;
font-style: Regular;
font-size: 14px;
top: 600px;

`
export const Move1 = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 146px;
height: 50px;
background: #ECECEC;
border-radius: 18px;
border: dashed 2px #00000024;
position: absolute;
top: 668px;
right: 422px;
z-index: 2;
color: #000;

`

export const Move2 = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 4px 10px;
width: 146px;
height: 50px;
background: #ECECEC;
border-radius: 18px;
border: dashed 2px #00000024;
position: absolute;
top: 740px;
right: 422px;
z-index: 2;
color: #000;
`
export const Move3 = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 4px 10px;
width: 146px;
height: 50px;
background: #ECECEC;
border-radius: 18px;
border: dashed 2px #00000024;
position: absolute;
top:815px;
right: 422px;
z-index: 2;
color: #000;

`

export const Base = styled.article`
border-radius: 12px;
width: 343px;
  height: 613px;
  position: absolute;
  top: 374px;
  left: 360px;
  right: 200px;
  background: #FFFFFF;
  z-index: 2;
  
.TituloBase{
   
  position: absolute;
    font-family: Inter;
    font-style: Extra Bold;
    font-size: 24px;
    line-height: 29px;
    vertical-align: top;
    width: 120px;
    height: 29px;
    top: 25px;
    left: 15px;
    /* background: #729F92; */

}
`
export const Stats = styled.div`

position: absolute;
    top: 450px;
    left: 400px;
    z-index: 2;  
`
export const Stats1 = styled.div`
position: absolute;
    top: 500px;
    left: 400px;
    z-index: 2;
`
export const Stats2 = styled.div`
position: absolute;
    top: 550px;
    left: 400px;
    z-index: 2;
`
export const Stats3 = styled.div`
position: absolute;
    top: 600px;
    left: 400px;
    z-index: 2;
`
export const Stats4 = styled.div`
position: absolute;
    top: 650px;
    left: 400px;
    z-index: 2;
`
export const Stats5 = styled.div`
position: absolute;
    top: 700px;
    left: 400px;
    z-index: 2;
`

export const PokemonImagemFrente = styled.img`
border-radius: 8px;
width: 282px;
  height: 282px;
  position: absolute;
  top: 373px;
  left: 44px;
  right: 36px;
  z-index: 2;
  background: #FFFFFF;

`
export const PokemonImagemCostas = styled.img`
border-radius: 8px;
width: 282px;
  height: 282px;
  position: absolute;
  top: 705px;
  left: 44px;
  right: 36px;
  z-index: 2;
  background: #FFFFFF;

`

export const TypesContainer = styled.div`
  margin-bottom: 52px;
`;


