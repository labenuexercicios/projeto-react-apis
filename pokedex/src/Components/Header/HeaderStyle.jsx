import styled from "styled-components";

export const HeaderContainer = styled.header`

   display: flex;
   align-items:center;
    justify-content:space-between;
    width:100%;
    height:10vh;
    background:yellow;
    border:1px solid black;
    position:relative;
`

export const LogoWrapper = styled.div`

  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const Logo = styled.img`
   width:10vw; 
   /* border: 1px solid black; */
 
`
export const ButtonPokedex = styled.button`

   width:10vw; 
   background-color:blue;
   position: absolute;
   right: 0;
   margin-right: 1rem;
    
`

export const ButtonBackHome = styled.button`
   width:10vw; 
   background-color:brown;
   position: absolute;
   left: 0;
   margin-left: 1rem;
    

`
export const ButtonTeste = styled.button`
   width:10vw; 
   background-color:blue;
   position: absolute;
   right: 0;
   margin-right: 1rem;
`;
