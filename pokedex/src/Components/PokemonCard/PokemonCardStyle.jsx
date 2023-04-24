import styled from "styled-components";

// const gridAreas = {

//     'p': 'p p',
//     'button1': 'button1',
//     'button2': 'button2',
//   }
  

export const StyledPokemonCard = styled.section`


justify-content:center;
flex-direction: column;
width:25vw;
height:20vh;
border: 2px solid black;

p{
   width:100%;
   height: 80%;
}

`
export const StyledButtons = styled.div`

display:flex;
justify-content:space-around;
align-items:center;
/* display: grid;
grid-template-columns: repeat(2, 5vw); */
width: 100%;
height:20%;
border: 2px solid yellow;

`

export const ButtonDetails  = styled.a`

/* grid-area: button1; */
text-decoration:underline;
cursor:pointer;
/* border: 2px solid black; */
width: 4vw;



`
export const ButtonCapturar  = styled.button`

/* grid-area: button2; */
border: 2px solid black;
width: 5vw;


`


