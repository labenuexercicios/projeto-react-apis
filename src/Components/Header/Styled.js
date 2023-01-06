import styled from "styled-components";


export const Container = styled.div`
display: flex;
box-sizing: border-box;
align-items: center;
justify-content: center;
background-color: white;


button{
  border: none;
  border-radius: 8px;
  width: 200px;
  height: 60px;
  color: white;
  background-color: #33a4f5;
  font-size: 20px;
  margin: 20px;
  :hover {
    cursor: pointer;
  }
}

p{
  text-decoration-line: underline;
}


  `

export const BotaovoltarHomebutton = styled.div`
position: absolute;
width: 210px;
height: 36px;
left: 100px;
top: 62px;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 36px;
text-decoration-line: underline;
color: #1A1A1A;
:hover {
    cursor: pointer;
  }

img{
  width:20px ;
}



`;



export const Botaoexcluir = styled.div`
display: flex;
box-sizing: border-box;
align-items: center;
justify-content: center;
border: none;
border-radius: 8px;
width: 200px;
height: 60px;
color: white;
background-color: #FF6262;
font-size: 20px;
margin: 20px;
  :hover {
    cursor: pointer;
  }

`;