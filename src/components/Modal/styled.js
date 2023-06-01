import styled from "styled-components";

export const BackGround  = styled.div `
position: fixed;
top:0; 
bottom: 0;
left: 0;
right: 0;
background-color: 'rgb(0,0,0, 0.7 )';
z-index: 1000;
`;


export const ModalContainer = styled.div `
position: fixed;
top: 35%;
left: 34%;
width: 451px;
height: 222px;
background-color: white;
border-radius: 12px;


h1{
    position: absolute;
width: 219.16px;
height: 72px;
left: 123px;
top: 61px;

font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 72px;
/* identical to box height */


color: #000000;
}


p{
    
position: absolute;
width: 337px;
height: 24px;
left: 64px;
top: 133px;

font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px;
/* identical to box height */


color: #000000;
}
`;