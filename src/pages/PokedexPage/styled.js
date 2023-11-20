import styled from "styled-components";

export const P = styled.div`
justify-content: left;
position: relative;
height: 100px;
top: 30px;
h1{
   

font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 72px;
margin-top: 100px;
margin-left: 40px;
/* identical to box height */

color: #FFFFFF;
}

`;

export const Container = styled.div`

background: #5E5E5E;
  
`;
export const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(410px, 1fr));
    justify-items: center;
    background: #5E5E5E;
    padding: 32px;
   
    @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr;
}

@media only screen and (max-width: 1300px) {
    grid-template-columns: 1fr;
}
  `;