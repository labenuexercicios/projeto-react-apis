import styled from "styled-components";

export const P = styled.div`
display: grid;
flex-direction: row;
justify-content: center;
right: 40vw;
top: 50px;
position: relative;

p{


font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 36px;
/* identical to box height */

text-decoration-line: underline;

color: #1A1A1A;

}
`;

export const Container = styled.header`
position: absolute;
width: 1440px;
height: 160px;
left: 0px;
top: 0px;

background: #FFFFFF;
`;
export const PokemonLogo = styled.img`
position: absolute;
width: 307px;
height: 113px;
left: 566px;
top: 21px;
`;

export const Button = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 4px 10px;

position: absolute;
width: 287px;
height: 74px;
left: 1112px;
top: 41px;

background-color: #33A4F5;
border-radius: 8px;
border-color: #33A4F5;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 36px;
color: #FFFFFF;
`;