import styled from "styled-components";

export const P = styled.div`
display: grid;
flex-direction: row;
justify-content: center;
right: 30vw;
bottom: 0;
position: relative;
`;

export const Container = styled.header`
position: relative;
height: 100px;
width: 1200px;
font-size: 24px;
font-weight: 700;

display: flex;
align-items: center;
justify-content: center;
`;
export const PokemonLogo = styled.img`
display: grid;
flex-direction: row;
justify-content: center;
min-height: 15vh;
max-height: 25vh;
min-width: 15vw;
max-width: 25vw;
position: absolute;
left: 45%;
`;

export const Button = styled.button`
font-size: 17px;
display: grid;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 4px 10px;
min-width: 50px;
min-height: 50px;
background: #007FFF;
border-radius: 8px;
border: none;
cursor: pointer;
position: relative;
bottom: 0;
left: 55%;
color: white;
`;