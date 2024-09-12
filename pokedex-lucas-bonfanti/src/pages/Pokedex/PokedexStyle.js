import styled from "styled-components"

export const ContainerPokedex = styled.div`
background-color: #5E5E5E;
width:100%;
margin: auto;
height: 100vh;
`

export const Title = styled.h1`
width: 80%;
height: 72px;
position: relative;
left: 20px;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 72px;
color: #FFFFFF;
text-transform: none;
@media only screen and (max-width: 800px){
    font-size: 30px;
    margin: 0;
}
`
export const DarkContainer = styled.div`
width: 451px;
height: 222px;
margin: auto;
margin-top: 20%;
background-color: white;
display:block;
border: none;
border-radius: 12px;
@media only screen and (max-width: 800px){
    width: 80vw;
    height: 25vh;
    margin: auto;
    margin-top: 35vh;
}
`

export const ModalContainerDelete = styled.div`
width: 100%;
height: 100%;
display: ${props=>props.modalDelete};
position: fixed;
top: 0; 
background-color:  rgba(0, 0, 0, 0.3);
border: none;
`

export const ModalDelete = styled.p`
color: black;
margin: auto;
padding-top: 10% ;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 72px;
text-align: center;
@media only screen and (max-width: 800px){
    font-size: 30px;
}
`

export const Modal2Delete = styled.p`
color: black;
margin: auto;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px;
text-align: center;
@media only screen and (max-width: 800px){
    font-size: 16px;
}
`

export const CloseButton = styled.button`
width: 30%;
height: 15%;
display: block;
margin: auto;
margin-top: 5%;
background-color: #FF6262;
border-radius: 8px;
border: none;
color: white;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 36px;
&:hover{
background-color:#ffa9a9;
cursor: pointer;
}
`