import styled from "styled-components";


export const ContainerFundo = styled.div`
background: #5d5d5d;
height: 100vh;


.CardTitulo{
color: white;
font-size: 48px;
padding-left: 132px;
padding-top: 60px;
}
`


export const CardGeral = styled.div`
display: flex;
gap: 20px;
flex-wrap: wrap;
justify-content: center;
padding-top: 100px;
`

export const CardType = styled.div`

.CardTipo{
display: flex;
gap: 10px;
margin-top: -50px;
padding-left: 20px;
}
`


export const CardPokedex = styled.div`
display: flex;
width:440px;
height:210px;
left:0px;
border-radius:20px;
background-color: ${(props) => props.color};
margin-bottom: 80px;


.CardId{
color: white;
font-size: 16px;
margin-top: -200px;
padding-left: 20px;
}

.CardName{
color: white;
font-size: 32px;
padding-left: 20px;
margin-top: -16px;
}




.CardFundo{


}


.ImagemFundo{
z-index: 0;
width:248px;
height:210px;
left:192px;
margin-left: 192px;
}


.CardImage {
margin-left: 245px;
margin-top: -140px;
width: 193px;
height:193px;
left:240px;
z-index:1;
}

.CardButton {
display: flex;
justify-content:space-between;
margin-right:20px; 
margin-left:20px; 
margin-top: 60px;
color: white;
z-index:1;
}

.BotaoDetalhes{
text-decoration: underline;
}


.BotaoExcluir{
width: 140px;
height: 36px;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
flex: none;
order: 0;
flex-grow: 0;
color: white;
background: #ff6262;
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
background-color: none;
h1{
    font-size: 48px;
}
`


