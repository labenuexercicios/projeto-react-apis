import styled from "styled-components"

export const Background = styled.div`
background-color: #5E5E5E;
height: 250vh;
width:100%;
`

export const Title = styled.h1`
width: 80%;
position: relative;
margin: 4vh;
left: -4vw;
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 72px;
color: #FFFFFF;
text-transform: none;
`

export const MapContainer = styled.div`
width: 100%;
height:100vh;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
`

export const ModalContainer = styled.div`
width: 100%;
height: 100%;
display: ${props=>props.modal};
position: fixed;
top: 0; 
background-color:  rgba(0, 0, 0, 0.3);
`

export const Modal = styled.p`
color: black;
margin: auto;
padding-top: 10% ;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 72px;
text-transform: none;
text-align: center;

`

export const Modal2 = styled.p`
color: black;
margin: auto;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px;
text-transform: none;
text-align: center;

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
export const DarkContainer = styled.div`
width: 451px;
height: 222px;
margin: auto;
margin-top: 20%;
background-color: white;
display:block;
border: 1px solid #888;
border-radius: 12px;

`