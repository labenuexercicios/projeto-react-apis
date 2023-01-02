import styled from "styled-components";
import imagemFundo from "../assets/img/fundoPokebola.png"

export const CardDetalhes = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr ;
border-radius: 20px;
background-color: ${(props) => props.color};
margin-left: 30px;
margin-right: 30px;
margin-top: 190px;
margin-bottom: 220px;
height: 990px;
z-index: 0;


.TotalStats{
margin-left: 120px;
font-weight: bold;
}

.CardFundo{
position: absolute;
display: flex;
justify-self: end;
height: 990px;
width: 1250px;
grid-column: 3/5;
grid-row: 1/2;
z-index: 0;
}

.CardNome{
grid-column: 3/4;
grid-row: 1/2;
padding-top: 26px;
padding-left: 30px;
z-index: 0;
}

.CardId{
font-size: 20px;
color: white;
margin-top: 10px;
z-index: 0;
}

.CardNome1{
font-size: 48px;
color: white;
z-index: 0;
}



.CardImagem1{
width: 450px;
height: 420px;
left: 1109px;
top: 216px;
grid-column: 1/2;
grid-row: 1/2;
padding-top: 50px;
padding-left: 80px;
margin-top: 40px;
margin-left: 50px;
border: 2px solid white;
border-radius: 8px;
background: white;
z-index: 0;
}

.CardImagem2{
width: 450px;
height: 420px;
left: 1109px;
top: 216px;
grid-column: 1/2;
grid-row: 2/4;
padding-top: 50px;
padding-left: 80px;
margin-top: 30px;
margin-left: 50px;
border: 2px solid white;
border-radius: 8px;
background: white;
z-index: 0;
}

.CardImagem3{
margin-top: -235px;
z-index: 0;
}


.CardBase{
grid-column: 2/3;
grid-row: 1/4;
padding-top: 10px;
padding-left: 20px;
padding-right: 30px;
border: 2px solid white;
border-radius: 8px;
height: 906px;
width: 500px;
margin-top: 40px;
background: white;
z-index: 0;
}


.CardBase1{
display: grid;
grid-template-columns: 3fr 1fr 6fr;
gap: 10px;
border-top: 1px solid #cccccc;
border-bottom: 1px solid #cccccc;
z-index: 1;
}


.BaseName{
font-size: 30px;
margin-bottom: 10px;
z-index: 1;
}



.BaseStat{
padding-left: 20px;
z-index: 1;
}

.BaseProgess{
padding-right: 10px;
z-index: 1;
}


.CardMoves{
grid-column: 3/4;
grid-row: 2/4;
border: 2px solid white;
border-radius: 8px;
background: white;
padding-left: 20px;
margin-left: 30px;
margin-bottom: 42px;
z-index: 0;
}

.CardMovesName{
font-size: 24px;
z-index: 1;
}

.CardMovesName1{
border: 1px solid black;
border-radius: 8px;
border-style: dashed;
background: #ececec;
width: fit-content;
height: 30px;
padding-left: 10px;
padding-right: 10px;
margin-top: 10px;
z-index: 1;
}

`

export const TypesPokemon = styled.div`
display: flex;
gap: 6px;
padding-top: 16px;
`

export const FundoPagina = styled.div`
position: relative;
background-repeat: repeat;
background: #5d5d5d;
height: 1500px;
z-index: -1;

.CardDetalhes{
font-size: 48px;
color: white;
padding-left: 30px;
z-index: 1;
}





`

export const FundoDaPokebola = styled.div`
position: relative;
z-index: -1;

.pokebolaFundo{
position: absolute;
display: flex;
justify-self: end;
height: 1450px;
width: 1800px;
grid-column: 3/5;
grid-row: 1/2;
padding-left: 44px;
margin-left: 230px;
z-index: 0;
}
`
