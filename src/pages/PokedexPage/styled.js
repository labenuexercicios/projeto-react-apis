import styled from "styled-components";


export const P = styled.div`
display: grid;
flex-direction: row;
justify-content: center;
min-height: 50px;
max-height: 30px;
min-width: 15vw;
max-width: 20vw;
left: 2%;
bottom: 0px;
position: relative;
`;

export const H = styled.div`
position: relative;
min-height: 100px;
font-size: 30px;
font-weight: 700;
background: grey;
display: flex;
align-items: center;
justify-content: left;
color: white;
`;
export const Container = styled.div`
  section {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5px;
    background: grey;
  }
`;
