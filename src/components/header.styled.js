import styled from "styled-components"

export const Container = styled.div`
display: flex;
justify-content: space-between;


.containerButtonHome{
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 4px 10px;
left: 1112px;
top: 41px;
background: #33A4F5;
border-radius: 8px;
width: 287px;
height: 74px;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 36px;
color: #FFFFFF;
margin-left: 28.5vw;
margin-top: 20px;
}

.containerButtonHome:hover{
background-color: #83c8f2;
}

.containerImgHome {
width: 307px;
height: 113px;
left: 566px;
top: 21px;
grid-column:2/3;
margin-left:42vw;

}



div{
display:flex;
justify-content: space-between;
}

.CardDetalhes{
display:grid;
grid-template-columns: 1fr 1fr 1fr;
width: 100vw;
 
}

.BotaoExcluirDetalhes{
color: white;
width: 287px;
height: 74px;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 24px;
background:#ff6262;
margin-top: 18px;
margin-left: 530px;
grid-column: 3/4;
}

.containerImgDetalhes {
width: 307px;
height: 113px;
left: 566px;
top: 21px;
grid-column:2/3;
margin-left: 200px;

}

.BotaoHomeDetalhes{
grid-column: 1/2;
font-size: 24px;
justify-content: start;
padding-right: 500px;
}



.BotaoHomePokedex{
font-size: 24px;
padding-left: 7vw;
}

.containerImgPokedex{
margin-left: 28vw;    
}

`

export const CardModal = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 451px;
height: 100%;
font-size: 16px;
border-radius: 8px;
h1{
    font-size: 48px;
}`