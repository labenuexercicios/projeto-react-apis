import styled from "styled-components";

export const P = styled.div`
display: grid;
flex-direction: row;
justify-content: center;
right: 40vw;
top: 50px;
position: relative;
@media only screen and (max-width: 800px) {
top: 80%;
left: 1%;
}
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
width: 100%;
height: 5vh;



background: #FFFFFF;
@media only screen and (max-width: 800px) {
    height: 20vh;
    
}
`;
export const PokemonLogo = styled.img`
position: absolute;
width: 300px;
height: 95px;
right: 40%;
top: 21px;
@media only screen and (max-width: 800px) {
    top: 0;
    right: 15%;
}
`;

export const Button = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 
4px, 10px, 4px, 10px;

position: absolute;
width: 275px;
height: 65px;
top: 41px;
right: 2%;

background: #33A4F5;
border-radius: 8px ;
border-color: transparent;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 36px;
color: white;
@media only screen and (max-width: 800px) {
top: 19%;
left: 15%;
}
`;

export const ButtonExt = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 
4px, 10px, 4px, 10px;


position: absolute;
width: 226px;
height: 57px;
top: 41px;
right: 2%;

background: #FF6262;
border-radius: 8px ;
border-color: transparent;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: white;
@media only screen and (max-width: 800px) {
top: 19%;
left: 15%;
}
`;

export const ButtonAdd = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 
4px, 10px, 4px, 10px;


position: absolute;
width: 226px;
height: 57px;
top: 41px;
right: 2%;

background: green;
border-radius: 8px ;
border-color: transparent;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: white;
@media only screen and (max-width: 800px) {
top: 19%;
left: 15%;
}
`;