import styled from "styled-components";

export const Cards = styled.div`
width: 364px;
height: 174px;
left: 0px;
top: 30px;
border-radius: 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

img{
width: 159px;
height: 193px;
left: 236px;
background: url(image.png);
margin-left: 153px;

}

.cards {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 358px;
height: 210px;
left: 0px;
top: 0px;
background: red;
border-radius: 12px;
margin-right: -30px;
margin-left: 16px;
margin-bottom: 110px;
}
.informacoesclassep{
  width: 32px;
height: 19px;
left: 23px;
top: 25px;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
color: #FFFFFF;

}

.nomeclassep{
  width: 89px;
height: 39px;
left: 23px;
top: 40px;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 39px;
/* identical to box height */
color: #FFFFFF;
display: flex;
justify-content: space-between;

}
.pokedetalhes{
  display: flex;
  margin-left: -126px;
  color: white;
  width: 20px;
  margin-top: -25px;
  text-decoration-line: underline;
  cursor: pointer;
}
.pdetalhes{
  width: 0px;
height: 24px;
margin-top: 168px;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px;
text-decoration-line: underline;
color: #FFFFFF;
flex: none;
order: 0;
flex-grow: 0;
}

.tiposclassep{
  display: flex;
  gap: 8px;
  margin-top: 61px;
  margin-left: -82px;
  width: 20px;
  img{  width: 83px;
    height: 155px;
    margin-right: 17px;
  margin-top:-45px;
margin-left: -7px;
}


}

.typespokemon{
  display: flex;
}

.botaocartao{
    display: flex;
  flex-direction: row;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  padding: 4px 10px;
  margin-top: 165px;
  width: 125px;
  height: 38px;
  margin-right: 100px;
  border-color: white;
  margin-left: 66px;
  background: #FFFFFF;
  border-radius: 8px;
  
  
  
  flex: none;
  order: 1;
  flex-grow: 0;
  }
  
.pokeimg{
height: 190px;
left: 274px;
top: 294px;
background: url(image.png);
margin-top: -50px;
margin-right: -209px;
}




`
export const Imagem = styled.img`
width: 210.73px;
height: 210.73px;
left: 294.37px;
top: -62px;
background: url(..imagem.png);
transform: rotate(30deg);
`

export const ColoracaoDosCards = styled.div`

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 358px;
height: 210px;
left: 0px;
top: 0px;
background: ${(props) => props.color};
border-radius: 12px;
margin-right: -30px;
margin-left: 16px;
margin-bottom: 110px;

`