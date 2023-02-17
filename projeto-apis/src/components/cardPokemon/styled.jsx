import styled from "styled-components";

export const ContainerMain=styled.main`
background-color:#524e4e;

`

export const ContainerCard = styled.section`
width: 440px;
height: 210px;
border-radius: 12px;
background: ${props=>props.cor};
position:relative;

.BotaoDetails{
  width: 74px;
height: 24px;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 24px;
text-decoration-line: underline;
color: #FFFFFF;
background-color: transparent;
border: none;
position:absolute;
top:160px;
left: 10px;
}
.imagenPrincipal{
  width: 193px;
height: 193px;
position:absolute;
left: 235px;
top:-51px;
z-index:99;
}
.imagePoke{
  width: 250px;
height: 210.73px;
position: absolute;
left: 190px;
top: 0px;
}
.capturar{
  padding:4px 10px;
  width: 146px;
height: 38px;
background: #FFFFFF;
border-radius: 8px;
flex: none;
order: 1;
flex-grow: 0;
border:none;
position:absolute;
left: 265px;
top: 150px;


}
`

export const ID = styled.span`
width: 30px;
height: 19px;
left: 23px;
top: 25px;
position: absolute;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 19px;
color: #FFFFFF;
top: 22px;
`

export const Name = styled.h2`
h2{
  width: 159px;
height: 39px;
left: 20px;
top: 20px;
position:absolute;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 39px;
color: #FFFFFF;
}

`

export const Tipo =styled.span`
top: 100px;
left: 10px;
position: absolute;
`

export const Tipo2 =styled.span`

top: 100px;
left: 125px;
position: absolute;
`